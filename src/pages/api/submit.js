export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const municipio = formData.get("municipio");
    const message = formData.get("message");
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

    // Server-side basic validation for XSS injection characters
    const inputs = [name, phone, email, municipio, message];
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

    const contactEmail = import.meta.env.CONTACT_EMAIL || "agnresuelvetuherencia@gmail.com";
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
        _subject: "Nueva solicitud de sesión - Resuelve Tu Herencia",
        name,
        phone,
        email,
        municipio,
        message,
      }),
    });

    const responseText = await response.text();
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error("FormSubmit response is not JSON. Status:", response.status);
      console.error("Response body:", responseText);
      throw e;
    }

    if (response.ok && (result.success === "true" || result.success === true)) {
      return new Response(
        JSON.stringify({ success: true, message: "Solicitud enviada con éxito." }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else if (responseText.includes("needs Activation") || responseText.includes("Activate Form")) {
      console.warn(`[WARNING] FormSubmit.co needs activation for ${contactEmail}. Check your inbox and click the 'Activate Form' link.`);
      return new Response(
        JSON.stringify({ success: true, message: "Solicitud enviada con éxito (pendiente de activación por el administrador)." }),
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
