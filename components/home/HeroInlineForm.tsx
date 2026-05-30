"use client";

import { useState } from "react";

export default function HeroInlineForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="absolute bottom-10 right-6 left-[22%] hidden lg:block"
        style={{
          background: "white",
          borderRadius: "1.25rem",
          boxShadow: "0 20px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)",
          padding: "1.75rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✅</div>
        <p style={{ fontWeight: 700, color: "#111", fontSize: "1rem", marginBottom: "0.25rem" }}>
          Gotowe! Odezwiemy się wkrótce.
        </p>
        <p style={{ fontSize: "0.75rem", color: "#71717a" }}>
          Zwykle odpowiadamy w ciągu kilku godzin.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bottom-10 right-6 left-[22%] hidden lg:block"
      style={{
        background: "white",
        borderRadius: "1.25rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)",
        padding: "1.75rem",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
        <span
          style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 0 3px rgba(34,197,94,0.18)",
            flexShrink: 0,
          }}
        />
        <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "#22c55e", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Dostępni teraz
        </p>
      </div>

      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111111", lineHeight: 1.3, marginBottom: "0.2rem" }}>
        Umów bezpłatną konsultację
      </h3>
      <p style={{ fontSize: "0.72rem", color: "#71717a", marginBottom: "1.1rem" }}>
        Sprawdzimy Twoją wizytówkę i powiemy co poprawić.
      </p>

      {/* Inputs */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <input
          type="text"
          placeholder="Imię i nazwisko"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.65rem 0.875rem",
            borderRadius: "0.625rem",
            border: "1.5px solid #e5e5e5",
            fontSize: "0.8125rem",
            color: "#111",
            outline: "none",
            transition: "border-color 0.15s",
            background: "#fafafa",
          }}
          onFocus={e => (e.currentTarget.style.borderColor = "#FF6A00")}
          onBlur={e => (e.currentTarget.style.borderColor = "#e5e5e5")}
        />
        <input
          type="tel"
          placeholder="Numer telefonu"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.65rem 0.875rem",
            borderRadius: "0.625rem",
            border: "1.5px solid #e5e5e5",
            fontSize: "0.8125rem",
            color: "#111",
            outline: "none",
            transition: "border-color 0.15s",
            background: "#fafafa",
          }}
          onFocus={e => (e.currentTarget.style.borderColor = "#FF6A00")}
          onBlur={e => (e.currentTarget.style.borderColor = "#e5e5e5")}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "0.625rem",
            background: "#FF6A00",
            color: "white",
            fontWeight: 700,
            fontSize: "0.8125rem",
            border: "none",
            cursor: "pointer",
            transition: "background 0.15s, transform 0.15s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#D45500";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#FF6A00";
            e.currentTarget.style.transform = "";
          }}
        >
          Wyślij zapytanie
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Trust */}
      <p style={{ fontSize: "0.6rem", color: "#a1a1aa", textAlign: "center", marginTop: "0.75rem" }}>
        🔒 Twoje dane są bezpieczne · Zero spamu
      </p>
    </form>
  );
}
