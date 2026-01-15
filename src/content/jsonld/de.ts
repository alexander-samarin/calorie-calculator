export const jsonLdDe = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kalorienrechner CalorieCalc.cc",
      url: "https://caloriecalc.cc",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Präziser Kalorien- und Makronährstoffrechner mit individuellen Einstellungen. Berechnen Sie Kalorien zum Abnehmen (sanft, aggressiv) oder für den Muskelaufbau. Einzigartige Funktion: Einstellung von Eiweiß und Fetten pro kg Körpergewicht.",
      featureList: [
        "Mifflin-St.Jeor-Formel",
        "Einstellung von Eiweiß und Fetten pro kg Gewicht",
        "Modi: Aggressives Abnehmen, Trockener Muskelaufbau (Lean Bulk)",
        "Kostenlose Berechnung aller Makronährstoffe",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wie viel Protein sollte ich zum Abnehmen wählen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Im Kaloriendefizit (besonders beim 'Aggressiven Abnehmen') wird empfohlen, das Protein auf 1,8–2,2 g pro kg Körpergewicht zu erhöhen, damit der Körper Fett statt Muskelmasse verbrennt. In unserem Rechner können Sie diesen Parameter manuell einstellen.",
          },
        },
        {
          "@type": "Question",
          name: "Sollte ich langsamen oder schnellen Aufbau wählen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "'Schneller Aufbau' führt oft zu übermäßiger Fettzunahme. Wenn Sie eine hochwertige Muskulatur anstreben, wählen Sie 'Langsamen' oder 'Moderaten Aufbau'.",
          },
        },
        {
          "@type": "Question",
          name: "Wie genau ist dieser Rechner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wir verwenden die Mifflin-St.Jeor-Formel, die als 'Goldstandard' gilt. Zudem ermöglichen wir eine genaue Anpassung der Aktivität und Makronährstoffe für maximale Personalisierung.",
          },
        },
      ],
    },
  ],
};
