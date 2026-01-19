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
        "Calculateur précis de Calories, Macros et IMC avec réglages personnalisés. Calculez les calories pour maigrir (perte douce, sèche aggressive) ou la prise de masse. Fonctions uniques : réglage des protéines et lipides par kg de poids, échelle visuelle de l'IMC.",
      featureList: [
        "Formule de Mifflin-St Jeor",
        "Réglage des protéines et lipides par kg de poids",
        "Calcul de l'IMC avec échelle visuelle",
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
        {
          "@type": "Question",
          name: "Qu'est-ce que l'IMC et à quoi sert-il ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'IMC (Indice de Masse Corporelle) est un indicateur qui aide à évaluer le rapport entre votre poids et votre taille. Notre calculateur calcule automatiquement l'IMC et affiche le résultat sur une échelle visuelle avec des zones colorées : insuffisance pondérale, normal, surpoids, obésité.",
          },
        },
      ],
    },
  ],
};
