export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Calculateur de Calories CalorieCalc.cc",
      url: "https://caloriecalc.cc",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Calculateur précis de Calories et Macros avec réglages personnalisés. Calculez les calories pour maigrir (perte douce, sèche aggressive) ou la prise de masse. Fonction unique : réglage des protéines et lipides par kg de poids.",
      featureList: [
        "Formule de Mifflin-St Jeor",
        "Réglage des protéines et lipides par kg de poids",
        "Modes : Sèche aggressive, Prise de masse sèche (Lean Bulk)",
        "Calcul complet des Macros gratuit",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien de protéines choisir pour maigrir ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En déficit calorique (surtout en « Sèche aggressive »), il est recommandé d'augmenter les protéines à 1.8–2.2 g par kg de poids pour que le corps brûle les graisses et non le tissu musculaire. Vous pouvez ajuster ce paramètre manuellement dans notre calculateur.",
          },
        },
        {
          "@type": "Question",
          name: "Que choisir : prise de masse lente ou rapide ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La « Prise de masse rapide » conduit souvent à une prise de gras excessive. Si vous visez une musculature de qualité, choisissez « Prise de masse lente » ou « Modérée ».",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la précision de ce calculateur ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous utilisons la formule de Mifflin-St Jeor, reconnue comme le « standard de référence ». Nous permettons également d'ajuster précisément l'activité et les macronutriments pour une personnalisation maximale.",
          },
        },
      ],
    },
  ],
};
