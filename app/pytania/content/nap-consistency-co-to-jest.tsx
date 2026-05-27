import Link from "next/link";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function NapConsistencyCoToJest() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        NAP to skrót od Name, Address, Phone — nazwa, adres, telefon. NAP consistency oznacza że te trzy dane są identyczne we wszystkich miejscach w internecie gdzie pojawia się Twoja firma. Brzmi trywialnie, ale jest to jeden z fundamentów local SEO, który wielu właścicieli firm zaniedbuje — i za to płaci niższą pozycją w Google Maps.
      </p>

      <h2>Dlaczego Google tak bardzo dba o spójność tych danych?</h2>
      <p>Wyobraź sobie że Google jest bibliotekarzem, który zbiera informacje o firmach z tysięcy różnych źródeł: katalogów branżowych, portali z recenzjami, serwisów informacyjnych, mediów społecznościowych, stron firmowych. Kiedy wszystkie te źródła mówią to samo — „Fryzjer Jan Kowalski, ul. Kwiatowa 5, Kraków, tel. 500 100 200" — Google jest pewien że ta firma istnieje dokładnie pod tym adresem. Kiedy jedno źródło podaje inny numer, inne zapisuje ulicę jako „Kwiatowa" a jeszcze inne jako „ul. Kwiatowa" — pojawia się szum informacyjny. Google interpretuje rozbieżności jako potencjalną niepewność i może obniżyć pozycję firmy w wynikach lokalnych.</p>
      <p>Ten mechanizm ma sens z perspektywy użytkownika. Google chce kierować ludzi do prawdziwych, aktualnych firm. Jeśli dane o firmie są niespójne, może to oznaczać że firma się przeprowadziła, zmieniła numer albo już nie istnieje. Algorytm woli zachować ostrożność i pokazać wyżej firmę, w której dane jest pewny.</p>

      <h2>Gdzie najczęściej dochodzi do niespójności?</h2>
      <p>Niespójności NAP pojawiają się z kilku powodów. Najczęstszy to zmiana numeru telefonu lub przeprowadzka — firma aktualizuje dane w wizytówce Google, ale zapomina o katalogach Panorama Firm, Targeo, Yelp i dziesiątkach innych miejsc gdzie kiedyś się zarejestrowała. Po roku firma ma aktualne dane w jednym miejscu i nieaktualne w dziesięciu innych.</p>
      <p>Drugi częsty powód to niespójne zapisywanie adresu. „ul. Kwiatowa 5", „Kwiatowa 5", „Kwiatowa 5/1", „Kwiatowa 5 m 1" — wszystko to ten sam adres, ale algorytm Google traktuje je jako różne zapisy i może mieć problem z jednoznacznym połączeniem tych danych. Wybierz jeden format i trzymaj się go wszędzie.</p>
      <p>Trzecim źródłem problemów są stare wpisy z poprzednich form działalności. Jeśli firma zmieniała nazwę, adres lub numer, stare dane mogą wciąż krążyć w katalogach i wyszukiwarkach — jako nieaktualne cytowania, które mieszają sygnał. Jak zbudować sieć spójnych, aktualnych cytowań opisujemy w artykule <Link href="/pytania/cytowania-lokalne-seo-jak-budowac">cytowania lokalne SEO — jak budować</Link>.</p>

      <InfoBox>
        <strong>Jak sprawdzić spójność swoich danych NAP:</strong> wejdź na Moz Local, BrightLocal lub Whitespark (narzędzia do audytu cytowań) i wprowadź dane firmy. Narzędzie przeskanuje dziesiątki katalogów i wskaże gdzie dane są niezgodne. Część z tych narzędzi ma bezpłatne plany podstawowe. Możesz też po prostu wpisać w Google nazwę i numer telefonu firmy i ręcznie przejrzeć wyniki.
      </InfoBox>

      <h2>Jak poprawić niespójności NAP?</h2>
      <p>Zacznij od ustalenia jednej, kanonicznej wersji danych: dokładnej nazwy firmy, pełnego adresu w jednym formacie i jednego numeru telefonu. To Twój wzorzec. Następnie przejdź przez wszystkie miejsca gdzie firma jest wymieniona — katalogi, portale branżowe, media społecznościowe, własna strona — i zaktualizuj dane do wzorca. W starych katalogach możesz poprosić o zmianę przez formularz kontaktowy. Część katalogów pozwala właścicielom samodzielnie aktualizować dane po rejestracji.</p>
      <p>To żmudna praca, ale jednorazowa. Po zaktualizowaniu danych w kluczowych miejscach regularnie sprawdzaj czy nowe wpisy, które pojawiają się automatycznie, są zgodne z wzorcem. Jak wizytówka Google korzysta z tych sygnałów i jak przekładają się na pozycję wyjaśniamy w artykule <Link href="/pytania/czynniki-rankingu-wizytowki-google">czynniki rankingu wizytówki Google</Link>.</p>
    </div>
  );
}
