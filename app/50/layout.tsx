import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wzór umowy — MiauSEO',
  description: 'Wzór umowy o pozycjonowanie wizytówki Google',
  robots: 'noindex,nofollow',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        .umowa-page { background: #f5f5f5; min-height: 100vh; padding: 32px 16px; }
        .umowa-doc { background: #fff; max-width: 794px; margin: 0 auto; padding: 52px; box-shadow: 0 4px 24px rgba(0,0,0,0.10); border-radius: 4px; font-family: Arial, Helvetica, sans-serif; font-size: 10px; color: #111; line-height: 1.45; }
        .umowa-section { display: flex; align-items: center; background: #eeeff1; border-left: 4px solid #FF6A00; padding: 5px 8px; margin: 14px 0 6px; font-weight: bold; font-size: 10.5px; color: #111; }
        .umowa-point { display: flex; gap: 6px; margin-bottom: 4px; font-size: 9.5px; line-height: 1.5; }
        .umowa-num { font-weight: bold; color: #FF6A00; min-width: 20px; flex-shrink: 0; }
        .umowa-parties { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
        .umowa-parties td { background: #f4f5f6; padding: 8px 10px; font-size: 9.5px; vertical-align: top; line-height: 1.8; width: 50%; }
        .umowa-parties td:first-child { border-right: 3px solid #fff; }
        @media print {
          .umowa-page { background: #fff; padding: 0; }
          .umowa-doc { box-shadow: none; border-radius: 0; padding: 46px 52px; max-width: none; }
          .umowa-print-btn { display: none !important; }
          nav, footer { display: none !important; }
        }
      `}</style>
      {children}
    </>
  )
}
