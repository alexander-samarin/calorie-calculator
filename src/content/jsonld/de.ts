export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kalorienrechner CalorieCalc.cc",
      url: "https://caloriecalc.cc/de",
      inLanguage: "de",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Berechnen Sie Kalorienbedarf und Makros zum Abnehmen, Gewichthalten oder Muskelaufbau mit der Mifflin-St-Jeor-Formel. Eiweiß und Fett pro kg Körpergewicht, BMI auf einer Skala.",
      featureList: [
        "Grundumsatz nach der Mifflin-St-Jeor-Formel",
        "Fünf Aktivitätsstufen",
        "Sieben Ziele: Gewicht halten, drei Stufen zum Abnehmen und drei zum Masseaufbau",
        "Eiweiß und Fett pro kg Körpergewicht, Kohlenhydrate aus den übrigen Kalorien",
        "Body-Mass-Index auf einer Skala mit den WHO-Kategorien",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was sind Makros und wie berechne ich sie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Makros sind Eiweiß, Fett und Kohlenhydrate. Zuerst wird der Grundumsatz mit der Mifflin-St-Jeor-Formel berechnet, dann mit einem Aktivitäts- und einem Zielfaktor multipliziert. Eiweiß und Fett werden in Gramm pro kg Körpergewicht festgelegt, Kohlenhydrate füllen die übrigen Kalorien. Der Rechner erledigt das automatisch, Sie geben nur Geschlecht, Gewicht, Größe und Alter ein.",
          },
        },
        {
          "@type": "Question",
          name: "Wie viele Kalorien am Tag brauche ich zum Abnehmen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sie müssen weniger essen, als Sie täglich verbrauchen. Für die meisten passt ein Defizit von 10–20 %: Im Rechner sind das leichtes, moderates und intensives Abnehmen. Eine 30-jährige Frau mit 165 cm, 60 kg und 1–3 Trainings pro Woche braucht bei 15 % Defizit zum Beispiel etwa 1540 kcal am Tag.",
          },
        },
        {
          "@type": "Question",
          name: "Wie schnell nehme ich ab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1 kg Körperfett entspricht etwa 7700 kcal. Ein Defizit von 300 kcal am Tag ergibt rund 2100 kcal pro Woche, also etwa 0,3 kg Fett. In den ersten Tagen kann das Gewicht durch Wasserverlust schneller sinken, danach verlangsamt es sich. Ändert sich Ihr Gewicht 2–3 Wochen lang nicht, essen Sie etwas weniger oder wählen Sie ein größeres Defizit.",
          },
        },
        {
          "@type": "Question",
          name: "Wie viel Eiweiß brauche ich beim Abnehmen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Im Kaloriendefizit, besonders beim intensiven Abnehmen, werden meist 1,6–2,2 g Eiweiß pro kg Körpergewicht empfohlen: Das hilft, Muskeln zu erhalten. Den Wert stellen Sie mit dem Regler „Eiweiß pro 1 kg Körpergewicht“ ein.",
          },
        },
        {
          "@type": "Question",
          name: "Welchen Masseaufbau soll ich wählen: langsam oder schnell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Je größer der Überschuss, desto mehr Fett nehmen Sie zusammen mit den Muskeln zu. Für Muskelaufbau ohne viel zusätzliches Fett wählen Sie den langsamen oder moderaten Masseaufbau. Der schnelle eignet sich für alle, die nur schwer zunehmen.",
          },
        },
        {
          "@type": "Question",
          name: "Wie genau ist die Berechnung?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Studien ist die Mifflin-St-Jeor-Formel genauer als andere verbreitete Formeln, aber sie bleibt eine Schätzung: Bei den meisten Menschen weicht der tatsächliche Verbrauch um höchstens 10 % vom berechneten ab. Nutzen Sie das Ergebnis als Ausgangspunkt und passen Sie es an, je nachdem, wie sich Ihr Gewicht in 2–3 Wochen verändert.",
          },
        },
        {
          "@type": "Question",
          name: "Warum wird Eiweiß bei Übergewicht nicht für mein Gewicht berechnet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Liegt Ihr BMI über 25, berechnet der Rechner Eiweiß und Fett für das Gewicht bei BMI 25 und Ihrer Größe. Der Eiweißbedarf hängt vor allem von der Muskelmasse ab, nicht vom Fettgewebe, deshalb würde die Berechnung mit dem vollen Gewicht den Bedarf überschätzen. Die Kalorien werden weiterhin aus dem tatsächlichen Gewicht berechnet.",
          },
        },
      ],
    },
  ],
};
