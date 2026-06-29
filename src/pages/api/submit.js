export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const source = formData.get("source");
    const isAssistant = source === "assistant";

    const nombre = formData.get("nombre") || formData.get("name");
    const apellidos = formData.get("apellidos");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");
    const privacyPolicy = formData.get("privacy-policy");
    const botcheck = formData.get("botcheck");

    // Honeypot anti-spam check
    if (botcheck) {
      return new Response(
        JSON.stringify({ success: false, message: "Spam detectado." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Check privacy policy acceptance (only for standard form submissions)
    if (!isAssistant && !privacyPolicy) {
      return new Response(
        JSON.stringify({ success: false, message: "Debe aceptar la política de privacidad para enviar el formulario." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate mandatory fields
    const hasMandatoryFields = isAssistant 
      ? (nombre && email && message)
      : (nombre && phone && email && message);

    if (!hasMandatoryFields) {
      return new Response(
        JSON.stringify({ success: false, message: "Por favor, rellene todos los campos obligatorios." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate phone: numbers, spaces, and optional '+' prefix (between 9 and 22 characters, only for standard forms)
    if (!isAssistant && !/^[+]?[0-9 ]{9,22}$/.test(String(phone))) {
      return new Response(
        JSON.stringify({ success: false, message: "El teléfono debe contener entre 9 y 22 caracteres (solo números, espacios y opcionalmente '+')." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email pattern (xx@xx.xx)
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$/.test(String(email))) {
      return new Response(
        JSON.stringify({ success: false, message: "El formato de correo electrónico no es válido." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Server-side basic validation for XSS injection characters
    const inputs = [nombre, apellidos, phone, email, message];
    for (const val of inputs) {
      if (val && /[<>&=]/.test(String(val))) {
        return new Response(
          JSON.stringify({ success: false, message: "Caracteres especiales no permitidos detectados." }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    const contactEmail = import.meta.env.CONTACT_EMAIL || process.env.CONTACT_EMAIL || "agnresuelvetuherencia@gmail.com";
    const origin = request.headers.get("origin") || "https://resuelvetuherencia.es";
    const referer = request.headers.get("referer") || "https://resuelvetuherencia.es/";

    // Forward the request to FormSubmit.co server-to-server
    const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": origin,
        "Referer": referer
      },
      body: JSON.stringify({
        _subject: isAssistant 
          ? "Nueva solicitud de hoja de ruta - Resuelve Tu Herencia"
          : "Nueva solicitud de sesión - Resuelve Tu Herencia",
        nombre,
        apellidos: apellidos || "(no indicado)",
        phone: isAssistant ? "(desde Asistente Digital)" : phone,
        email,
        message,
        privacy_policy_accepted: isAssistant ? "No requerido (Asistente Digital)" : (privacyPolicy ? "Sí, aceptada" : "No"),
      }),
    });

    const responseText = await response.text();

    // Check if the response contains activation notices before trying to parse JSON
    if (
      responseText.includes("needs Activation") || 
      responseText.includes("Activate Form") || 
      responseText.includes("Confirm your email")
    ) {
      console.warn(`[WARNING] FormSubmit.co needs activation for ${contactEmail}. Check your inbox and click the 'Activate Form' link.`);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Solicitud enviada con éxito (pendiente de activación por el administrador)." 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error("FormSubmit response is not JSON. Status:", response.status);
      console.error("Response body:", responseText);

      // If the response is successful (e.g. 200 OK) but not JSON, treat it as a success
      if (response.ok) {
        return new Response(
          JSON.stringify({ success: true, message: "Solicitud enviada con éxito." }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // If it is an error status with HTML response, report it without crashing the server function
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: "El servidor de correo respondió con un formato inesperado." 
        }),
        {
          status: response.status || 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (response.ok && (result.success === "true" || result.success === true)) {
      return new Response(
        JSON.stringify({ success: true, message: "Solicitud enviada con éxito." }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: result.message || "Error al enviar la solicitud." }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error interno del servidor al procesar la solicitud." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
