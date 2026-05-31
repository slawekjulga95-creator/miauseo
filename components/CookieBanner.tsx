'use client';

import { useState, useEffect } from 'react';

const CONSENT_KEY = 'miau-consent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsent(value: 'granted' | 'denied') {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    });
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    try { localStorage.setItem(CONSENT_KEY, 'granted'); } catch { /* */ }
    pushConsent('granted');
    setVisible(false);
  }

  function rejectAll() {
    try { localStorage.setItem(CONSENT_KEY, 'denied'); } catch { /* */ }
    pushConsent('denied');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5">
      <div
        className="max-w-4xl mx-auto rounded-2xl shadow-xl border p-5 flex flex-col md:flex-row md:items-center gap-4"
        style={{ background: '#fff', borderColor: '#E5E5E5' }}
      >
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#52525b' }}>
          Używamy plików cookie do analizy ruchu (Google Analytics) i wyświetlania trafnych reklam (Google Ads).
          Brak zgody nie wpłynie na działanie strony.{' '}
          <a
            href="/polityka-prywatnosci"
            className="underline underline-offset-2 hover:no-underline"
            style={{ color: '#FF6A00' }}
          >
            Polityka prywatności
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={rejectAll}
            className="px-4 py-2 text-sm font-medium rounded-xl transition-colors hover:bg-zinc-100"
            style={{ color: '#52525b', border: '1px solid #E5E5E5' }}
          >
            Tylko niezbędne
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm font-semibold rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ background: '#FF6A00' }}
          >
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  );
}
