import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'

Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf', fontWeight: 700 },
  ],
})

const s = StyleSheet.create({
  page: { fontFamily: 'Roboto', fontSize: 9, color: '#111', padding: '28pt 40pt', backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  logo: { width: 110, height: 32, objectFit: 'contain' },
  h1: { fontSize: 17, fontWeight: 700, color: '#1a2340', lineHeight: 1.2 },
  h1orange: { fontSize: 17, fontWeight: 700, color: '#FF6A00', lineHeight: 1.2 },
  sub: { fontSize: 8, color: '#999', marginTop: 4 },
  hr: { height: 2, backgroundColor: '#1a2340', marginTop: 6, marginBottom: 0 },
  orangeBar: { height: 2, backgroundColor: '#FF6A00', marginBottom: 10 },
  section: { flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 5 },
  sectionBar: { width: 3, height: 14, backgroundColor: '#FF6A00', marginRight: 6, borderRadius: 2 },
  sectionText: { fontSize: 7.5, fontWeight: 700, color: '#1a2340', textTransform: 'uppercase', letterSpacing: 0.8 },
  parties: { flexDirection: 'row', gap: 8, marginBottom: 6 },
  partyBox: { flex: 1, backgroundColor: '#f8f9fb', borderRadius: 5, padding: 7, border: '1pt solid #e8eaf0' },
  partyLabel: { fontSize: 6.5, fontWeight: 700, color: '#FF6A00', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 },
  partyText: { fontSize: 8, color: '#444', lineHeight: 1.6 },
  point: { flexDirection: 'row', marginBottom: 3 },
  num: { fontSize: 8, fontWeight: 700, color: '#FF6A00', width: 22, flexShrink: 0 },
  text: { fontSize: 8.5, color: '#333', lineHeight: 1.55, flex: 1 },
  footer: { marginTop: 16, borderTop: '1pt solid #e8eaf0', paddingTop: 8 },
  footerText: { fontSize: 7, color: '#bbb', textAlign: 'center' },
})

const Section = ({ title }: { title: string }) => (
  <View style={s.section}>
    <View style={s.sectionBar} />
    <Text style={s.sectionText}>{title}</Text>
  </View>
)

const Point = ({ num, children }: { num: string; children: string }) => (
  <View style={s.point}>
    <Text style={s.num}>{num}</Text>
    <Text style={s.text}>{children}</Text>
  </View>
)

export default function ContractPDF() {
  return (
    <Document title="Wzór umowy — MiauSEO" author="MiauSEO">
      <Page size="A4" style={s.page}>

        <View style={s.header}>
          <View>
            <Text style={s.h1}>UMOWA O POZYCJONOWANIE</Text>
            <Text style={s.h1orange}>WIZYTÓWKI GOOGLE</Text>
            <Text style={s.sub}>zawarta w ………………………, dnia ……………………………… r.</Text>
          </View>
          <Image src="https://miauseo.pl/logo.png" style={s.logo} />
        </View>
        <View style={s.hr} />
        <View style={[s.orangeBar, { marginTop: 2 }]} />

        <Section title="§ 1. Strony umowy" />
        <Text style={[s.text, { marginBottom: 5 }]}>Niniejsza umowa zostaje zawarta pomiędzy:</Text>
        <View style={s.parties}>
          <View style={s.partyBox}>
            <Text style={s.partyLabel}>Usługodawca</Text>
            <Text style={s.partyText}>………………………………………, ………………………………………, NIP: ………………………………, zwany dalej „Usługodawcą".</Text>
          </View>
          <View style={s.partyBox}>
            <Text style={s.partyLabel}>Zleceniodawca</Text>
            <Text style={s.partyText}>………………………………………, ………………………………………, NIP: ………………………………, reprezentowany przez ………………………………………, zwany dalej „Zleceniodawcą".</Text>
          </View>
        </View>

        <Section title="§ 2. Przedmiot umowy" />
        <Point num="2.1">Usługodawca prowadzi, pozycjonuje i obsługuje ogólnodostępną wizytówkę Google (Profil Firmy w Google) Zleceniodawcy zgodnie z warunkami niniejszej umowy.</Point>
        <Point num="2.2">Zleceniodawca wskazuje 3 frazy kluczowe do pozycjonowania i może je bezpłatnie wymieniać w dowolnym momencie obowiązywania umowy.</Point>
        <Point num="2.3">Strony zgodnie ustalają, że niniejsza umowa stanowi umowę starannego działania, a nie umowę rezultatu. Usługodawca zobowiązuje się do dołożenia należytej staranności w wykonywaniu usług, lecz nie gwarantuje osiągnięcia konkretnych pozycji w wynikach wyszukiwania, określonego poziomu ruchu, liczby interakcji ani innych mierzalnych efektów, ponieważ zależą one od czynników niezależnych od Usługodawcy, w szczególności od algorytmów i polityk Google.</Point>

        <Section title="§ 3. Zakres usług (miesięcznie)" />
        <Point num="3.1">Publikacja nie mniej niż 5 nowych wpisów/postów na wizytówce Google.</Point>
        <Point num="3.2">Przygotowanie nie mniej niż 5 nowych materiałów graficznych lub aktualizacji treści profilu.</Point>
        <Point num="3.3">Podejmowanie działań mających na celu zwiększenie zasięgu, widoczności oraz interakcji potencjalnych klientów z wizytówką (połączenia telefoniczne, dojazdy, wejścia na stronę internetową).</Point>
        <Point num="3.4">Bieżące monitorowanie statystyk oraz reagowanie na zmiany algorytmu Google.</Point>
        <Point num="3.5">Optymalizacja opisu, kategorii i atrybutów profilu.</Point>

        <Section title="§ 4. Zawarcie umowy i akceptacja warunków" />
        <Point num="4.1">Przesłanie zlecenia przez Zleceniodawcę oraz udostępniony mu projekt (draft) niniejszej umowy wraz z warunkami stanowią ofertę Usługodawcy w rozumieniu art. 66 Kodeksu cywilnego.</Point>
        <Point num="4.2">Dokonanie płatności na podstawie faktury proforma wystawionej przez Usługodawcę jest równoznaczne z przyjęciem oferty i zawarciem umowy na warunkach niniejszego dokumentu, zgodnie z art. 60 Kodeksu cywilnego. Umowa zostaje zawarta z chwilą zaksięgowania płatności na rachunku Usługodawcy.</Point>
        <Point num="4.3">Cena wskazana na fakturze proforma stanowi integralną część warunków oferty. Dokonując płatności, Zleceniodawca akceptuje zarówno postanowienia niniejszej umowy, jak i wysokość wynagrodzenia wskazaną na fakturze proforma.</Point>
        <Point num="4.4">Po zaksięgowaniu wpłaty Usługodawca wystawia fakturę VAT. Egzemplarz umowy uzupełniony danymi Zleceniodawcy dostarczany jest drogą elektroniczną wyłącznie w celu potwierdzenia zawartej umowy i nie wymaga podpisu ani pieczęci.</Point>

        <Section title="§ 5. Wynagrodzenie i płatności" />
        <Point num="5.1">Wynagrodzenie ustalane jest indywidualnie i wskazane na fakturze proforma. Wynagrodzenie za cały okres obowiązywania umowy płatne jest jednorazowo z góry, na podstawie faktury proforma.</Point>
        <Point num="5.2">Po zaksięgowaniu płatności Zleceniodawca otrzymuje fakturę VAT stanowiącą dokument księgowy.</Point>

        <Section title="§ 6. Czas trwania umowy" />
        <Point num="6.1">Umowa zostaje zawarta na czas określony ………… miesięcy, liczonych od daty dokonania pierwszej płatności.</Point>
        <Point num="6.2">Po upływie okresu obowiązywania umowa wygasa. Kontynuacja współpracy wymaga zawarcia nowego porozumienia.</Point>
        <Point num="6.3">Opłaty uiszczone z tytułu niniejszej umowy nie podlegają zwrotowi, w szczególności w przypadku rezygnacji Zleceniodawcy przed zakończeniem okresu obowiązywania umowy lub braku współdziałania, o którym mowa w § 7.</Point>

        <Section title="§ 7. Prawa, obowiązki i odpowiedzialność" />
        <Point num="7.1">Usługodawca stosuje wyłącznie legalne metody pozycjonowania zgodne z wytycznymi Google.</Point>
        <Point num="7.2">Zleceniodawca udziela Usługodawcy uprawnień menedżerskich do wizytówki Google na czas realizacji niniejszej umowy oraz zobowiązuje się je utrzymać przez cały okres jej obowiązywania.</Point>
        <Point num="7.3">Zleceniodawca zobowiązany jest do współdziałania niezbędnego do wykonania umowy, w szczególności do terminowego udzielenia i utrzymania dostępu do wizytówki oraz przekazywania niezbędnych informacji i materiałów.</Point>
        <Point num="7.4">Zleceniodawca konsultuje z Usługodawcą planowane zmiany w profilu przed ich wprowadzeniem, by nie zakłócać trwających działań optymalizacyjnych.</Point>
        <Point num="7.5">Usługodawca nie odpowiada za przestoje leżące po stronie Google Inc. ani za treści samodzielnie zamieszczone przez Zleceniodawcę.</Point>
        <Point num="7.6">Całkowita odpowiedzialność Usługodawcy z tytułu niniejszej umowy ograniczona jest do wysokości wynagrodzenia faktycznie zapłaconego przez Zleceniodawcę. Usługodawca nie odpowiada za utracone korzyści ani za szkody pośrednie.</Point>
        <Point num="7.7">Z chwilą zapłaty wynagrodzenia Usługodawca przenosi na Zleceniodawcę autorskie prawa majątkowe do materiałów graficznych i treści wytworzonych w ramach realizacji umowy, na polach eksploatacji obejmujących utrwalanie, zwielokrotnianie i publikację w wizytówce Google oraz mediach Zleceniodawcy.</Point>
        <Point num="7.8">Reklamacje składa się pisemnie lub drogą elektroniczną na adres Usługodawcy; termin rozpatrzenia wynosi 30 dni kalendarzowych.</Point>
        <Point num="7.9">Usługodawca uprawniony jest do rozwiązania umowy ze skutkiem natychmiastowym w przypadku rażącego naruszenia jej postanowień przez Zleceniodawcę.</Point>

        <Section title="§ 8. Postanowienia końcowe" />
        <Point num="8.1">Wszelkie zmiany warunków wymagają zachowania formy dokumentowej (np. wiadomości e-mail) pod rygorem nieważności.</Point>
        <Point num="8.2">Dane osobowe przetwarzane są zgodnie z Rozporządzeniem RODO (UE) 2016/679.</Point>
        <Point num="8.3">Spory rozstrzygane będą polubownie, a w razie braku porozumienia — przez sąd właściwy dla siedziby Usługodawcy.</Point>
        <Point num="8.4">W sprawach nieuregulowanych niniejszą umową zastosowanie mają przepisy Kodeksu cywilnego.</Point>

        <View style={s.footer}>
          <Text style={s.footerText}>MiauSEO · slawomir@miauseo.pl · miauseo.pl · +48 455 571 349</Text>
        </View>

      </Page>
    </Document>
  )
}
