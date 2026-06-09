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

    const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      return new Response(
        JSON.stringify({ success: false, message: "Error de configuración de la clave de API en el servidor." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Forward the request to Web3Forms server-to-server
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "Nueva solicitud de sesión - Resuelve Tu Herencia",
        from_name: "Resuelve Tu Herencia Web",
        name,
        phone,
        email,
        municipio,
        message,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
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
