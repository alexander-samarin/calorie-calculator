export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kalkulator Kalorii CalorieCalc.cc",
      url: "https://caloriecalc.cc",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Dokładny kalkulator kalorii i makroskładników z indywidualnymi ustawieniami. Oblicz kalorie na redukcję (łagodną, agresywną) lub budowanie masy. Unikalna funkcja: ustawienie białka i tłuszczów na 1 kg masy ciała.",
      featureList: [
        "Wzór Mifflina-St Jeora",
        "Ustawienie białka i tłuszczów na kg masy ciała",
        "Tryby: Agresywna redukcja, Czysta masa (Lean Bulk)",
        "Pełne obliczenie makroskładników za darmo",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Jaki poziom białka wybrać na redukcję?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Przy deficycie kalorycznym (zwłaszcza przy „Agresywnej redukcji”) zaleca się zwiększenie podaży białka do 1.8–2.2 g na kg wagi, aby organizm spalał tłuszcz, a nie tkankę mięśniową. W naszym kalkulatorze możesz ustawić ten parametr ręcznie.",
          },
        },
        {
          "@type": "Question",
          name: "Co wybrać: powolne czy szybkie budowanie masy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "„Szybkie budowanie” często prowadzi do nadmiernego otłuszczenia. Jeśli zależy Ci na jakościowej muskulaturze, wybierz „Powolne” lub „Umiarkowane budowanie”.",
          },
        },
        {
          "@type": "Question",
          name: "Jak dokładny jest ten kalkulator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Używamy wzoru Mifflina-St Jeora, uznawanego za „złoty standard”. Umożliwiamy również dokładne dostosowanie aktywności i makroskładników dla maksymalnej personalizacji.",
          },
        },
      ],
    },
  ],
};
