"use server";

import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Necesitamos tu nombre"),
  company: z.string().min(2, "Necesitamos el nombre de tu empresa"),
  email: z.string().email("Correo no válido"),
  automate: z.string().min(1, "Selecciona una opción"),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactFormState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormValues, string>>;
};

const AUTOMATE_LABELS: Record<string, string> = {
  atencion: "Charlo Atención",
  cobranza: "Charlo Cobranza",
  agenda: "Charlo Agenda",
  varios: "Varios / No estoy seguro",
};

export async function sendContactEmail(
  prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    automate: formData.get("automate")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: ContactFormState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormValues;
      if (!errors[key]) {
        errors[key] = issue.message;
      }
    }
    return {
      ok: false,
      message: "Revisa los campos marcados.",
      errors,
    };
  }

  const data = parsed.data;
  const automateLabel = AUTOMATE_LABELS[data.automate] ?? data.automate;

  const subject = `[Charlo Web] Nuevo contacto de ${data.name} · ${data.company}`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0030F0, #103050); padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo contacto desde charlo.mx</h1>
      </div>
      <div style="background: #fafafa; padding: 24px; border: 1px solid #eee; border-top: 0; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 140px;">Nombre</td>
            <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Empresa</td>
            <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.company)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Correo</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #0030F0;">${escapeHtml(data.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Quiere automatizar</td>
            <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(automateLabel)}</td>
          </tr>
        </table>
        ${
          data.message
            ? `
          <div style="margin-top: 20px; padding: 16px; background: white; border: 1px solid #eee; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Mensaje</p>
            <p style="margin: 0; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
          </div>
        `
            : ""
        }
        <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
          Recibido desde el formulario de contacto en charlo.mx
        </p>
      </div>
    </div>
  `;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[contacto] RESEND_API_KEY no configurado. Email no enviado, pero form procesado:",
      { name: data.name, email: data.email, company: data.company },
    );
    return {
      ok: true,
      message: "Recibimos tu mensaje. Te contactaremos pronto por WhatsApp o email.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Charlo Web <noreply@charlo.mx>",
      to: [siteConfig.email],
      replyTo: data.email,
      subject,
      html,
    });

    if (error) {
      console.error("[contacto] Error de Resend:", error);
      return {
        ok: false,
        message:
          "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o escríbenos por WhatsApp.",
      };
    }

    return {
      ok: true,
      message: "Recibimos tu mensaje. Te contactaremos en menos de 24 horas.",
    };
  } catch (err) {
    console.error("[contacto] Excepción:", err);
    return {
      ok: false,
      message: "Hubo un error inesperado. Por favor intenta de nuevo o escríbenos por WhatsApp.",
    };
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
