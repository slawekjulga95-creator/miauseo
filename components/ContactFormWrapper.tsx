"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactForm from "./ContactForm";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export default function ContactFormWrapper() {
  if (!SITE_KEY) {
    console.error("[reCAPTCHA] Brak klucza NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY}
      scriptProps={{ async: true, defer: true }}
    >
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}
