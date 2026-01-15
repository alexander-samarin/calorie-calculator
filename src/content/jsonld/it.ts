export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Calcolatore di Calorie CalorieCalc.cc",
      url: "https://caloriecalc.cc",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Calcolatore preciso di calorie e macronutrienti con impostazioni personalizzate. Calcola le calorie per dimagrire (leggero, aggressivo) o aumentare la massa. Funzione unica: impostazione di proteine e grassi per kg di peso.",
      featureList: [
        "Formula di Mifflin-St Jeor",
        "Impostazione di proteine e grassi per kg di peso",
        "Modalità: Dimagrimento aggressivo (Definizione), Massa pulita (Lean Bulk)",
        "Calcolo completo dei Macronutrienti gratis",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quante proteine assumere per dimagrire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In deficit calorico (specialmente nel 'Dimagrimento aggressivo'), si raccomanda di aumentare le proteine a 1.8–2.2 g per kg di peso affinché il corpo bruci grasso e non tessuto muscolare. Nel nostro calcolatore puoi regolare questo parametro manualmente.",
          },
        },
        {
          "@type": "Question",
          name: "Cosa scegliere: massa lenta o rapida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La 'Massa rapida' porta spesso a un eccessivo accumulo di grasso. Se miri a una muscolatura di qualità, scegli 'Massa lenta' o 'Moderata'.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto è preciso questo calcolatore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Utilizziamo la formula Mifflin-St Jeor, riconosciuta come lo 'standard d'oro'. Permettiamo anche di regolare con precisione l'attività e i macronutrienti per una massima personalizzazione.",
          },
        },
      ],
    },
  ],
};
