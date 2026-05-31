'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CONSENT_KEY = 'miau-consent-v2';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
}

function applyConsent(state: ConsentState) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: state.analytics ? 'granted' : 'denied',
    ad_storage: state.marketing ? 'granted' : 'denied',
    ad_user_data: state.marketing ? 'granted' : 'denied',
    ad_personalization: state.marketing ? 'granted' : 'denied',
  });
}

function saveConsent(state: ConsentState) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  } catch { /* */ }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) { setVisible(true); return; }
      const parsed: ConsentState = JSON.parse(stored);
      applyConsent(parsed);
    } catch {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    const state = { analytics: true, marketing: true };
    saveConsent(state);
    applyConsent(state);
    setVisible(false);
  }

  function rejectAll() {
    const state = { analytics: false, marketing: false };
    saveConsent(state);
    applyConsent(state);
    setVisible(false);
  }

  function saveSelected() {
    const state = { analytics, marketing };
    saveConsent(state);
    applyConsent(state);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.55)' }}>
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Ustawienia prywatności"
      >
        {/* Logo */}
        <div className="flex items-center justify-center pt-7 pb-4 px-6">
          <Image src="/logo.png" alt="MiauSEO" width={160} height={46} className="h-10 w-auto" />
        </div>

        {/* Content */}
        <div className="px-6 pb-2">
          <h2 className="text-base font-bold text-zinc-900 text-center mb-2">Ustawienia prywatności</h2>
          <p className="text-sm text-zinc-500 text-center leading-relaxed">
            Używamy plików cookie, żeby analizować ruch i wyświetlać trafne reklamy.
            Możesz zaakceptować wszystkie lub wybrać, które kategorie włączasz.
          </p>

          {/* Dostosuj link */}
          <button
            onClick={() => setShowDetails((v) => !v)}
            className="flex items-center gap-1 mx-auto mt-3 text-xs font-semibold transition-colors"
            style={{ color: '#FF6A00' }}
          >
            {showDetails ? 'Ukryj szczegóły' : 'Dostosuj ustawienia'}
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Granular options */}
          {showDetails && (
            <div className="mt-4 space-y-3 border rounded-xl p-4" style={{ borderColor: '#E5E5E5' }}>

              {/* Niezbędne — zawsze włączone */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-800">Niezbędne</p>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                    Sesja, bezpieczeństwo i działanie formularzy. Nie można wyłączyć.
                  </p>
                </div>
                <div
                  className="shrink-0 mt-0.5 w-10 h-6 rounded-full flex items-center px-1 cursor-not-allowed"
                  style={{ background: '#FF6A00' }}
                  title="Zawsze włączone"
                >
                  <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm" />
                </div>
              </div>

              <div className="border-t" style={{ borderColor: '#E5E5E5' }} />

              {/* Analityka */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-800">Analityka</p>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                    Google Analytics — liczba odwiedzin, źródła ruchu, popularne strony.
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={analytics}
                  onClick={() => setAnalytics((v) => !v)}
                  className="shrink-0 mt-0.5 w-10 h-6 rounded-full flex items-center px-1 transition-colors duration-200"
                  style={{ background: analytics ? '#FF6A00' : '#D1D5DB' }}
                >
                  <div
                    className="w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200"
                    style={{ transform: analytics ? 'translateX(16px)' : 'translateX(0)' }}
                  />
                </button>
              </div>

              <div className="border-t" style={{ borderColor: '#E5E5E5' }} />

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-800">Marketing</p>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                    Google Ads, remarketing i personalizacja reklam.
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={marketing}
                  onClick={() => setMarketing((v) => !v)}
                  className="shrink-0 mt-0.5 w-10 h-6 rounded-full flex items-center px-1 transition-colors duration-200"
                  style={{ background: marketing ? '#FF6A00' : '#D1D5DB' }}
                >
                  <div
                    className="w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200"
                    style={{ transform: marketing ? 'translateX(16px)' : 'translateX(0)' }}
                  />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="p-6 pt-4 flex flex-col gap-2.5">
          <button
            onClick={acceptAll}
            className="w-full py-3 text-sm font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
            style={{ background: '#FF6A00' }}
          >
            Akceptuj wszystkie
          </button>

          {showDetails ? (
            <button
              onClick={saveSelected}
              className="w-full py-3 text-sm font-semibold rounded-xl transition-colors hover:bg-zinc-100"
              style={{ color: '#52525b', border: '1px solid #E5E5E5' }}
            >
              Zapisz mój wybór
            </button>
          ) : (
            <button
              onClick={rejectAll}
              className="w-full py-3 text-sm font-semibold rounded-xl transition-colors hover:bg-zinc-100"
              style={{ color: '#52525b', border: '1px solid #E5E5E5' }}
            >
              Tylko niezbędne
            </button>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-400 pb-5 px-6">
          <a href="/polityka-prywatnosci" className="underline underline-offset-2 hover:text-zinc-600 transition-colors">
            Polityka prywatności
          </a>
          {' · '}
          <a href="/regulamin" className="underline underline-offset-2 hover:text-zinc-600 transition-colors">
            Regulamin
          </a>
        </p>
      </div>
    </div>
  );
}
