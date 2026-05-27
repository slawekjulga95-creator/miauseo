export type Category = {
  id: string;
  label: string;
  color: string;
  badge: string;
};

export type Question = {
  id: number;
  question: string;
  slug: string;
  categoryId: string;
};

export const categories: Category[] = [
  { id: "ogolne",  label: "Ogólne o wizytówce Google", color: "zinc",   badge: "Ogólne"        },
  { id: "seo",     label: "Pozycjonowanie i widoczność", color: "brand",  badge: "SEO"           },
  { id: "opinie",  label: "Opinie i recenzje",          color: "green",  badge: "Opinie"        },
  { id: "optym",   label: "Optymalizacja profilu",      color: "violet", badge: "Optymalizacja" },
  { id: "tech",    label: "Problemy techniczne",        color: "red",    badge: "Tech"          },
];

export const questions: Question[] = [
  // Ogólne
  { id: 1,  question: "Jak dodać firmę do Google?",                                         slug: "jak-dodac-firme-do-google",                                    categoryId: "ogolne" },
  { id: 2,  question: "Wizytówka Google Moja Firma – jak założyć?",                         slug: "wizytowka-google-moja-firma-jak-zalozyc",                      categoryId: "ogolne" },
  { id: 3,  question: "Jak zgłosić firmę do Google Maps?",                                  slug: "jak-zglosic-firme-do-google-maps",                             categoryId: "ogolne" },
  { id: 4,  question: "Google My Business – co to jest?",                                   slug: "google-my-business-co-to-jest",                                categoryId: "ogolne" },
  { id: 5,  question: "Jak edytować wizytówkę Google?",                                     slug: "jak-edytowac-wizytowke-google",                                categoryId: "ogolne" },
  { id: 6,  question: "Profil firmy w Google – jak skonfigurować?",                         slug: "profil-firmy-w-google-jak-skonfigurowac",                      categoryId: "ogolne" },
  { id: 7,  question: "Google Business Profile – weryfikacja firmy",                        slug: "google-business-profile-weryfikacja-firmy",                    categoryId: "ogolne" },
  { id: 8,  question: "Jak zweryfikować firmę w Google pocztą?",                            slug: "jak-zweryfikowac-firme-w-google-poczta",                       categoryId: "ogolne" },
  { id: 9,  question: "Wizytówka Google – darmowa czy płatna?",                             slug: "wizytowka-google-darmowa-czy-platna",                          categoryId: "ogolne" },
  { id: 10, question: "Jak usunąć wizytówkę Google?",                                       slug: "jak-usunac-wizytowke-google",                                  categoryId: "ogolne" },
  // SEO
  { id: 11, question: "Jak wypozycjonować wizytówkę Google?",                               slug: "jak-wypozycjonowac-wizytowke-google",                           categoryId: "seo" },
  { id: 12, question: "Pozycjonowanie lokalne Google Maps",                                  slug: "pozycjonowanie-lokalne-google-maps",                           categoryId: "seo" },
  { id: 13, question: "Local SEO – jak zacząć?",                                            slug: "local-seo-jak-zaczac",                                         categoryId: "seo" },
  { id: 14, question: "Jak pojawić się w Local Pack Google?",                               slug: "jak-pojawic-sie-w-local-pack-google",                          categoryId: "seo" },
  { id: 15, question: "Jak wypaść wyżej w Google Maps?",                                    slug: "jak-wypasc-wyzej-w-google-maps",                               categoryId: "seo" },
  { id: 16, question: "Czynniki rankingu wizytówki Google",                                  slug: "czynniki-rankingu-wizytowki-google",                           categoryId: "seo" },
  { id: 17, question: "Wizytówka Google a pozycja w wyszukiwarce",                          slug: "wizytowka-google-a-pozycja-w-wyszukiwarce",                    categoryId: "seo" },
  { id: 18, question: "NAP consistency – co to jest?",                                      slug: "nap-consistency-co-to-jest",                                   categoryId: "seo" },
  { id: 19, question: "Cytowania lokalne SEO – jak budować?",                               slug: "cytowania-lokalne-seo-jak-budowac",                            categoryId: "seo" },
  { id: 20, question: "Jak zwiększyć zasięg wizytówki Google?",                             slug: "jak-zwiekszyc-zasieg-wizytowki-google",                        categoryId: "seo" },
  { id: 21, question: "Wizytówka Google a wyniki organiczne – jaka różnica?",               slug: "wizytowka-google-a-wyniki-organiczne-roznica",                 categoryId: "seo" },
  { id: 22, question: "E-E-A-T a wizytówka Google",                                         slug: "e-e-a-t-wizytowka-google",                                     categoryId: "seo" },
  // Opinie
  { id: 23, question: "Jak zdobyć więcej opinii w Google?",                                 slug: "jak-zdobyc-wiecej-opinii-google",                              categoryId: "opinie" },
  { id: 24, question: "Jak odpowiadać na opinie w Google?",                                 slug: "jak-odpowiadac-na-opinie-w-google",                            categoryId: "opinie" },
  { id: 25, question: "Jak usunąć negatywną opinię w Google?",                              slug: "jak-usunac-negatywna-opinie-google",                           categoryId: "opinie" },
  { id: 26, question: "Wpływ opinii Google na pozycjonowanie",                              slug: "opinie-google-wplyw-na-pozycjonowanie",                        categoryId: "opinie" },
  { id: 27, question: "Jak prosić klientów o opinie w Google?",                             slug: "jak-prosic-klientow-o-opinie-google",                          categoryId: "opinie" },
  { id: 28, question: "Jak wygenerować link do wystawienia opinii Google?",                 slug: "link-do-wystawienia-opinii-google-jak-wygenerowac",            categoryId: "opinie" },
  { id: 29, question: "Kupowanie opinii Google – jakie ryzyko?",                            slug: "kupowanie-opinii-google-ryzyko",                               categoryId: "opinie" },
  { id: 30, question: "Minimalna liczba opinii, żeby widać gwiazdki w Google",              slug: "minimalna-liczba-opinii-zeby-widac-gwiazdki-w-google",         categoryId: "opinie" },
  // Optymalizacja
  { id: 31, question: "Jak uzupełnić wizytówkę Google, żeby była skuteczna?",               slug: "jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna",           categoryId: "optym" },
  { id: 32, question: "Jak napisać opis firmy w wizytówce Google?",                         slug: "opis-firmy-w-wizytowce-google-jak-napisac",                    categoryId: "optym" },
  { id: 33, question: "Jak wybrać kategorię firmy w Google?",                               slug: "kategoria-firmy-google-jak-wybrac",                            categoryId: "optym" },
  { id: 34, question: "Zdjęcia w wizytówce Google – jaki wpływ na pozycję?",               slug: "zdjecia-w-wizytowce-google-jaki-wplyw-na-pozycje",             categoryId: "optym" },
  { id: 35, question: "Posty Google My Business – jak działają?",                           slug: "posty-google-my-business-jak-dzialaja",                        categoryId: "optym" },
  { id: 36, question: "Jak dodać produkty i usługi w wizytówce Google?",                   slug: "produkty-i-uslugi-w-wizytowce-google-jak-dodac",               categoryId: "optym" },
  { id: 37, question: "Gdzie umieszczać słowa kluczowe w wizytówce Google?",               slug: "slowa-kluczowe-w-wizytowce-google-gdzie-umieszczac",           categoryId: "optym" },
  { id: 38, question: "Jak ustawić godziny otwarcia w wizytówce Google?",                  slug: "godziny-otwarcia-wizytowka-google-jak-ustawic",                categoryId: "optym" },
  { id: 39, question: "Q&A w wizytówce Google – jak zarządzać?",                           slug: "qa-wizytowka-google-jak-zarzadzac",                            categoryId: "optym" },
  { id: 40, question: "Atrybuty firmy Google – co wybrać?",                                 slug: "atrybut-firmy-google-co-wybrac",                               categoryId: "optym" },
  // Tech
  { id: 41, question: "Wizytówka Google zawieszona – jak odblokować?",                      slug: "wizytowka-google-zawieszona-jak-odblokowac",                   categoryId: "tech" },
  { id: 42, question: "Duplikaty wizytówek Google – jak usunąć?",                           slug: "duplikaty-wizytowek-google-jak-usunac",                        categoryId: "tech" },
  { id: 43, question: "Wizytówka Google zgłoszona jako zamknięta – co robić?",              slug: "wizytowka-google-zgloszona-jako-zamknieta-co-robic",           categoryId: "tech" },
  { id: 44, question: "Jak przenieść własność wizytówki Google?",                           slug: "jak-przeniesc-wlasnosc-wizytowki-google",                      categoryId: "tech" },
  { id: 45, question: "Wizytówka Google nie wyświetla się w Maps – co robić?",              slug: "wizytowka-google-w-mapach-nie-wyswietla-sie",                  categoryId: "tech" },
  { id: 46, question: "Google Maps – błędna lokalizacja pinu, jak poprawić?",              slug: "google-maps-pin-bledna-lokalizacja-jak-poprawic",              categoryId: "tech" },
  { id: 47, question: "Kilka lokalizacji firmy w Google – jak zarządzać?",                 slug: "kilka-lokalizacji-firmy-google-jak-zarzadzac",                 categoryId: "tech" },
  { id: 48, question: "Wizytówka Google a obszar obsługi – jak ustawić?",                  slug: "wizytowka-google-a-obszar-obslugi-jak-ustawic",                categoryId: "tech" },
  { id: 49, question: "Jak sprawdzić statystyki wizytówki Google?",                         slug: "jak-sprawdzic-statystyki-wizytowki-google",                    categoryId: "tech" },
  { id: 50, question: "Czy wizytówka Google pomaga bez strony internetowej?",               slug: "czy-wizytowka-google-pomaga-bez-strony-internetowej",          categoryId: "tech" },
];
