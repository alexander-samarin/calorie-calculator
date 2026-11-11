export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kalkulator Kalorii CalorieCalc.cc",
      url: "https://caloriecalc.cc/pl",
      inLanguage: "pl",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Oblicz zapotrzebowanie kaloryczne i makroskładniki na odchudzanie, utrzymanie wagi lub budowę masy wzorem Mifflina-St Jeora. Białko i tłuszcze na kg masy ciała, BMI na skali.",
      featureList: [
        "Podstawowa przemiana materii wzorem Mifflina-St Jeora",
        "Pięć poziomów aktywności",
        "Siedem celów: utrzymanie wagi, trzy tryby odchudzania i trzy tryby budowy masy",
        "Białko i tłuszcze na kg masy ciała, węglowodany z pozostałych kalorii",
        "Wskaźnik masy ciała na skali z kategoriami WHO",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Czym są makroskładniki i jak je obliczyć?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Makroskładniki to białko, tłuszcze i węglowodany. Najpierw wzorem Mifflina-St Jeora liczy się podstawową przemianę materii, potem mnoży się ją przez współczynnik aktywności i współczynnik celu. Białko i tłuszcze ustawia się w gramach na kg masy ciała, a węglowodany wypełniają pozostałe kalorie. Kalkulator robi to wszystko automatycznie, wystarczy podać płeć, wagę, wzrost i wiek.",
          },
        },
        {
          "@type": "Question",
          name: "Ile kalorii dziennie potrzebuję, żeby schudnąć?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trzeba jeść mniej, niż wynosi dzienne zapotrzebowanie. Większości osób odpowiada deficyt 10–20%: w kalkulatorze to łagodne, umiarkowane i intensywne odchudzanie. Na przykład kobieta w wieku 30 lat, o wzroście 165 cm i wadze 60 kg, trenująca 1–3 razy w tygodniu, przy deficycie 15% potrzebuje około 1540 kcal dziennie.",
          },
        },
        {
          "@type": "Question",
          name: "Jak szybko będę chudnąć?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1 kg tkanki tłuszczowej to około 7700 kcal. Deficyt 300 kcal dziennie daje mniej więcej 2100 kcal tygodniowo, czyli około 0,3 kg tłuszczu. W pierwszych dniach waga może spadać szybciej z powodu utraty wody, potem tempo maleje. Jeśli waga nie zmienia się przez 2–3 tygodnie, zmniejsz kaloryczność albo wybierz większy deficyt.",
          },
        },
        {
          "@type": "Question",
          name: "Ile białka potrzeba podczas odchudzania?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Przy deficycie kalorii, zwłaszcza przy intensywnym odchudzaniu, zwykle zaleca się 1,6–2,2 g białka na kg masy ciała: pomaga to zachować mięśnie. Wartość ustawisz suwakiem „białka na 1 kg wagi”.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki przyrost masy wybrać: powolny czy szybki?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Im większa nadwyżka, tym więcej tłuszczu przybywa razem z mięśniami. Aby budować mięśnie bez zbędnego tłuszczu, wybierz powolny lub umiarkowany przyrost masy. Szybki jest dla osób, którym trudno przytyć.",
          },
        },
        {
          "@type": "Question",
          name: "Na ile dokładne są obliczenia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "W badaniach wzór Mifflina-St Jeora jest dokładniejszy od innych popularnych wzorów, ale to wciąż szacunek: u większości osób rzeczywiste zapotrzebowanie różni się od obliczonego o 10% lub mniej. Traktuj wynik jako punkt wyjścia i koryguj go na podstawie zmian wagi w ciągu 2–3 tygodni.",
          },
        },
        {
          "@type": "Question",
          name: "Dlaczego przy nadwadze białko nie jest liczone na moją wagę?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jeśli BMI przekracza 25, kalkulator liczy białko i tłuszcze na wagę odpowiadającą BMI 25 przy Twoim wzroście. Zapotrzebowanie na białko zależy głównie od masy mięśniowej, a nie od tkanki tłuszczowej, więc liczenie na pełną wagę zawyżałoby normę. Kalorie liczone są przy tym od faktycznej wagi.",
          },
        },
      ],
    },
  ],
};
