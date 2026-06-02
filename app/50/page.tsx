'use client'

export default function WzorUmowyPage() {
  return (
    <div className="umowa-page">
      <div className="umowa-doc">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a2340', lineHeight: '1.15' }}>UMOWA O POZYCJONOWANIE</div>
            <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#FF6A00', lineHeight: '1.15' }}>WIZYTÓWKI GOOGLE</div>
            <div style={{ fontSize: '9.5px', color: '#888', marginTop: '6px' }}>zawarta w ………………………, dnia ……………………………… r.</div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="MiauSEO" style={{ height: '62px', objectFit: 'contain' }} />
        </div>
        <hr style={{ border: 'none', borderTop: '2px solid #1a2340', margin: '8px 0 0' }} />

        <div className="umowa-section">§ 1. STRONY UMOWY</div>
        <p style={{ fontSize: '9.5px', marginBottom: '6px' }}>Niniejsza umowa zostaje zawarta pomiędzy:</p>
        <table className="umowa-parties"><tbody><tr>
          <td><strong>USŁUGODAWCĄ:</strong> ………………………………………, ………………………………………, NIP: ………………………………, zwanym dalej „Usługodawcą".</td>
          <td><strong>ZLECENIODAWCĄ:</strong> ………………………………………, ………………………………………, NIP: ………………………………, reprezentowanym przez ………………………………………, zwanym dalej „Zleceniodawcą".</td>
        </tr></tbody></table>

        <div className="umowa-section">§ 2. PRZEDMIOT UMOWY</div>
        <div className="umowa-point"><span className="umowa-num">2.1</span><span>Usługodawca prowadzi, pozycjonuje i obsługuje ogólnodostępną wizytówkę Google (Profil Firmy w Google) Zleceniodawcy zgodnie z warunkami niniejszej umowy.</span></div>
        <div className="umowa-point"><span className="umowa-num">2.2</span><span>Zleceniodawca wskazuje 3 frazy kluczowe do pozycjonowania i może je bezpłatnie wymieniać w dowolnym momencie obowiązywania umowy.</span></div>
        <div className="umowa-point"><span className="umowa-num">2.3</span><span>Strony zgodnie ustalają, że niniejsza umowa stanowi umowę starannego działania, a nie umowę rezultatu. Usługodawca zobowiązuje się do dołożenia należytej staranności w wykonywaniu usług, lecz nie gwarantuje osiągnięcia konkretnych pozycji w wynikach wyszukiwania, określonego poziomu ruchu, liczby interakcji ani innych mierzalnych efektów, ponieważ zależą one od czynników niezależnych od Usługodawcy, w szczególności od algorytmów i polityk Google.</span></div>

        <div className="umowa-section">§ 3. ZAKRES USŁUG (miesięcznie)</div>
        <div className="umowa-point"><span className="umowa-num">3.1</span><span>Publikacja nie mniej niż 5 nowych wpisów/postów na wizytówce Google.</span></div>
        <div className="umowa-point"><span className="umowa-num">3.2</span><span>Przygotowanie nie mniej niż 5 nowych materiałów graficznych lub aktualizacji treści profilu.</span></div>
        <div className="umowa-point"><span className="umowa-num">3.3</span><span>Podejmowanie działań mających na celu zwiększenie zasięgu, widoczności oraz interakcji potencjalnych klientów z wizytówką (połączenia telefoniczne, dojazdy, wejścia na stronę internetową).</span></div>
        <div className="umowa-point"><span className="umowa-num">3.4</span><span>Bieżące monitorowanie statystyk oraz reagowanie na zmiany algorytmu Google.</span></div>
        <div className="umowa-point"><span className="umowa-num">3.5</span><span>Optymalizacja opisu, kategorii i atrybutów profilu.</span></div>

        <div className="umowa-section">§ 4. ZAWARCIE UMOWY I AKCEPTACJA WARUNKÓW</div>
        <div className="umowa-point"><span className="umowa-num">4.1</span><span>Przesłanie zlecenia przez Zleceniodawcę oraz udostępniony mu projekt (draft) niniejszej umowy wraz z warunkami stanowią ofertę Usługodawcy w rozumieniu art. 66 Kodeksu cywilnego.</span></div>
        <div className="umowa-point"><span className="umowa-num">4.2</span><span>Dokonanie płatności na podstawie faktury proforma wystawionej przez Usługodawcę jest równoznaczne z przyjęciem oferty i zawarciem umowy na warunkach niniejszego dokumentu, zgodnie z art. 60 Kodeksu cywilnego. Umowa zostaje zawarta z chwilą zaksięgowania płatności na rachunku Usługodawcy. Zleceniodawca potwierdza tym samym zapoznanie się z treścią oferty i akceptację wszystkich jej postanowień — bez konieczności odrębnego podpisywania i odsyłania dokumentu.</span></div>
        <div className="umowa-point"><span className="umowa-num">4.3</span><span>Cena wskazana na fakturze proforma stanowi integralną część warunków oferty. Dokonując płatności, Zleceniodawca akceptuje zarówno postanowienia niniejszej umowy, jak i wysokość wynagrodzenia wskazaną na fakturze proforma.</span></div>
        <div className="umowa-point"><span className="umowa-num">4.4</span><span>Po zaksięgowaniu wpłaty Usługodawca wystawia fakturę VAT. Egzemplarz umowy uzupełniony danymi Zleceniodawcy dostarczany jest drogą elektroniczną wyłącznie w celu potwierdzenia (utrwalenia) zawartej umowy i nie wymaga dla swej ważności podpisu którejkolwiek ze stron ani pieczęci.</span></div>

        <div className="umowa-section">§ 5. WYNAGRODZENIE I PŁATNOŚCI</div>
        <div className="umowa-point"><span className="umowa-num">5.1</span><span>Wynagrodzenie ustalane jest indywidualnie i wskazane na fakturze proforma. Wynagrodzenie za cały okres obowiązywania umowy płatne jest jednorazowo z góry, na podstawie faktury proforma.</span></div>
        <div className="umowa-point"><span className="umowa-num">5.2</span><span>Po zaksięgowaniu płatności Zleceniodawca otrzymuje fakturę VAT stanowiącą dokument księgowy.</span></div>

        <div className="umowa-section">§ 6. CZAS TRWANIA UMOWY</div>
        <div className="umowa-point"><span className="umowa-num">6.1</span><span>Umowa zostaje zawarta na czas określony <strong>…………</strong> miesięcy, liczonych od daty dokonania pierwszej płatności.</span></div>
        <div className="umowa-point"><span className="umowa-num">6.2</span><span>Po upływie okresu obowiązywania umowa wygasa. Kontynuacja współpracy wymaga zawarcia nowego porozumienia.</span></div>
        <div className="umowa-point"><span className="umowa-num">6.3</span><span>Opłaty uiszczone z tytułu niniejszej umowy nie podlegają zwrotowi, w szczególności w przypadku rezygnacji Zleceniodawcy przed zakończeniem okresu obowiązywania umowy lub braku współdziałania, o którym mowa w § 7.</span></div>

        <div className="umowa-section">§ 7. PRAWA, OBOWIĄZKI I ODPOWIEDZIALNOŚĆ</div>
        <div className="umowa-point"><span className="umowa-num">7.1</span><span>Usługodawca stosuje wyłącznie legalne metody pozycjonowania zgodne z wytycznymi Google.</span></div>
        <div className="umowa-point"><span className="umowa-num">7.2</span><span>Zleceniodawca udziela Usługodawcy uprawnień menedżerskich do wizytówki Google na czas realizacji niniejszej umowy oraz zobowiązuje się je utrzymać przez cały okres jej obowiązywania.</span></div>
        <div className="umowa-point"><span className="umowa-num">7.3</span><span>Zleceniodawca zobowiązany jest do współdziałania niezbędnego do wykonania umowy, w szczególności do terminowego udzielenia i utrzymania dostępu do wizytówki oraz przekazywania niezbędnych informacji i materiałów. W przypadku braku współdziałania terminy realizacji ulegają zawieszeniu, a Usługodawca nie ponosi odpowiedzialności za brak efektów ani niewykonanie usług wynikające z takiego braku współdziałania.</span></div>
        <div className="umowa-point"><span className="umowa-num">7.4</span><span>Zleceniodawca konsultuje z Usługodawcą planowane zmiany w profilu przed ich wprowadzeniem, by nie zakłócać trwających działań optymalizacyjnych.</span></div>
        <div className="umowa-point"><span className="umowa-num">7.5</span><span>Usługodawca nie odpowiada za przestoje leżące po stronie Google Inc. ani za treści samodzielnie zamieszczone przez Zleceniodawcę.</span></div>
        <div className="umowa-point"><span className="umowa-num">7.6</span><span>Całkowita odpowiedzialność Usługodawcy z tytułu niniejszej umowy ograniczona jest do wysokości wynagrodzenia faktycznie zapłaconego przez Zleceniodawcę. Usługodawca nie odpowiada za utracone korzyści (lucrum cessans) ani za szkody pośrednie. Ograniczenia te nie dotyczą szkody wyrządzonej umyślnie.</span></div>
        <div className="umowa-point"><span className="umowa-num">7.7</span><span>Z chwilą zapłaty wynagrodzenia Usługodawca przenosi na Zleceniodawcę autorskie prawa majątkowe do materiałów graficznych i treści wytworzonych w ramach realizacji umowy, na polach eksploatacji obejmujących utrwalanie, zwielokrotnianie, publikację w wizytówce Google oraz w mediach Zleceniodawcy. Przeniesienie praw następuje pod warunkiem zapłaty całości wynagrodzenia.</span></div>
        <div className="umowa-point"><span className="umowa-num">7.8</span><span>Reklamacje składa się pisemnie lub drogą elektroniczną na adres Usługodawcy; termin rozpatrzenia wynosi 30 dni kalendarzowych.</span></div>
        <div className="umowa-point"><span className="umowa-num">7.9</span><span>Usługodawca uprawniony jest do rozwiązania umowy ze skutkiem natychmiastowym w przypadku rażącego naruszenia jej postanowień przez Zleceniodawcę, w szczególności braku współdziałania, zamieszczania treści bezprawnych lub obraźliwych albo zachowań uniemożliwiających realizację usług. Uprawnienie z § 6.3 (brak zwrotu opłat) pozostaje w mocy.</span></div>

        <div className="umowa-section">§ 8. POSTANOWIENIA KOŃCOWE</div>
        <div className="umowa-point"><span className="umowa-num">8.1</span><span>Wszelkie zmiany warunków wymagają zachowania formy dokumentowej (np. wiadomości e-mail) pod rygorem nieważności.</span></div>
        <div className="umowa-point"><span className="umowa-num">8.2</span><span>Dane osobowe przetwarzane są zgodnie z Rozporządzeniem RODO (UE) 2016/679.</span></div>
        <div className="umowa-point"><span className="umowa-num">8.3</span><span>Spory rozstrzygane będą polubownie, a w razie braku porozumienia — przez sąd właściwy dla siedziby Usługodawcy.</span></div>
        <div className="umowa-point"><span className="umowa-num">8.4</span><span>W sprawach nieuregulowanych niniejszą umową zastosowanie mają przepisy Kodeksu cywilnego.</span></div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button
            onClick={() => window.print()}
            className="umowa-print-btn"
            style={{ background: '#FF6A00', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 32px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}
          >
            Drukuj / Pobierz PDF
          </button>
        </div>
      </div>
    </div>
  )
}
