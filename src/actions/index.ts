import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { TURNSTILE_SECRET_KEY, RESEND_API_KEY } from "astro:env/server";
import { z } from "astro/zod";

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, "El nombre es requerido"),
      email: z.string().email("Correo electrónico inválido"),
      subject: z.string().min(1, "El asunto es requerido"),
      message: z.string().min(1, "El mensaje es requerido"),
      "cf-turnstile-response": z.string().optional().default(""),
    }),
    handler: async (input) => {
      const resendApiKey = RESEND_API_KEY;
      const turnstileSecret = TURNSTILE_SECRET_KEY;

      if (!resendApiKey || !turnstileSecret) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error de configuración en el servidor (Faltan credenciales).",
        });
      }

      // 2. Inicializar Resend DENTRO del handler
      const resend = new Resend(resendApiKey);

      if (!input["cf-turnstile-response"]) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Por favor, completa el desafío de seguridad (Captcha).",
        });
      }

      // 3. Verificación de Turnstile usando URLSearchParams (Más seguro en Vercel)
      const turnstileData = new URLSearchParams();
      turnstileData.append("secret", turnstileSecret);
      turnstileData.append("response", input["cf-turnstile-response"]);

      const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
      const result = await fetch(url, { body: turnstileData, method: "POST" });
      const outcome = await result.json();

      if (!outcome.success) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Fallo en la verificación de seguridad (Turnstile).",
        });
      }

      // 4. Envío del correo
      // Recuerda: Si usas tu dominio personalizado, DEBE estar verificado en el panel de Resend.
      // Si no, regresa a "onboarding@resend.dev" temporalmente.
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["gammerpro06@gmail.com"],
        subject: input.subject,
        html: `<p>Nombre: ${input.name}</p><p>Email: ${input.email}</p><p>Mensaje: ${input.message}</p>`,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data ? { id: data.id } : { success: true };
    },
  }),
};
