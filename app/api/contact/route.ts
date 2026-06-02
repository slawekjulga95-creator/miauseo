import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const SOURCE_LABELS: Record<string, string> = {
  kontakt: "Strona /kontakt",
  hero: "Widget Hero (strona główna)",
  wizytowka: "Checklista wizytówki Google",
  widget: "Sticky widget (strona główna)",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { source, name, company, email, phone, service, message, recaptchaToken } = body;

    if (!name) {
      return NextResponse.json({ error: "Brak wymaganych pól" }, { status: 400 });
    }

    if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
      const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      });
      const result = await verify.json();
      if (!result.success || result.score < 0.5) {
        return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 400 });
      }
    }

    const label = SOURCE_LABELS[source] ?? source ?? "Nieznany formularz";

    const rows = [
      ["Źródło", `<strong>${label}</strong>`],
      ["Imię i nazwisko", name],
      company && ["Firma", company],
      email && ["E-mail", `<a href="mailto:${email}" style="color:#FF6A00">${email}</a>`],
      ["Telefon", `<a href="tel:${phone}" style="color:#FF6A00">${phone}</a>`],
      service && ["Usługa", service],
      message && ["Wiadomość", message.replace(/\n/g, "<br>")],
    ]
      .filter(Boolean)
      .map(
        ([k, v]) =>
          `<tr>
            <td style="padding:8px 16px 8px 0;color:#888;font-size:13px;white-space:nowrap;vertical-align:top">${k}</td>
            <td style="padding:8px 0;font-size:14px;color:#111">${v}</td>
          </tr>`
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
        <div style="background:#FF6A00;padding:20px 28px;border-radius:8px 8px 0 0">
          <p style="margin:0;color:white;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px">MiauSEO — Nowe zgłoszenie</p>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.85);font-size:18px;font-weight:700">${label}</p>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e5;border-top:none;padding:24px 28px;border-radius:0 0 8px 8px">
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%">
            ${rows}
          </table>
        </div>
        <p style="margin:16px 0 0;font-size:11px;color:#aaa;text-align:center">
          Wysłano z formularza MiauSEO · ${new Date().toLocaleString("pl-PL")}
        </p>
      </div>
    `;

    const { error: sendError } = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      replyTo: email || undefined,
      subject: `🐾 [${label}] ${name}${company ? ` – ${company}` : ""}`,
      html,
    });

    if (sendError) {
      console.error("[contact] Resend error:", sendError);
      return NextResponse.json({ error: sendError.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
