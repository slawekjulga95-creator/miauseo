'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Klucz w localStorage — po zamknięciu popup nie pojawi się już nigdy
// (także na innych podstronach i po odświeżeniu / w innych kartach).
const SEEN_KEY = 'miau-popup-casestudy-protetyk-v1';
const DELAY_MS = 10000; // 10 sekund od wejścia

export default function CaseStudyPopup() {
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false); // sterowanie animacją wejścia

  useEffect(() => {
    try {
      if (localStorage.getItem(SEEN_KEY)) return; // już widziany — nie pokazuj
    } catch {
      return;
    }
    const t = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setShown(true));
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* brak dostępu do localStorage — trudno */
    }
    setShown(false);
    setTimeout(() => setVisible(false), 250);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed z-40 bottom-4 right-4 left-4 sm:left-auto sm:w-[22rem] transition-all duration-300 ease-out ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      role="dialog"
      aria-label="Case study: branża protetyczna"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-2xl">
        {/* Zamknij */}
        <button
          onClick={dismiss}
          aria-label="Zamknij"
          className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Pasek akcentu */}
        <div className="h-1.5 w-full" style={{ background: '#FF6A00' }} />

        <div className="px-5 pb-5 pt-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
            style={{ background: '#FF6A00' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
            </svg>
            Case study
          </span>

          <h3 className="mt-3 text-lg font-bold leading-snug text-ink">
            180 połączeń w 4 miesiące
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500">
            Branża protetyczna — zobacz, jak wypozycjonowaliśmy wizytówkę Google i skąd wzięły się te wyniki.
          </p>

          <Link
            href="/miauseo-opinie-protetyk"
            onClick={dismiss}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: '#FF6A00' }}
          >
            Sprawdź case study
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <button
            onClick={dismiss}
            className="mt-1.5 w-full py-2 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-600"
          >
            Może później
          </button>
        </div>
      </div>
    </div>
  );
}
