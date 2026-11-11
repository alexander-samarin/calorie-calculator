export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Calculateur de Calories CalorieCalc.cc",
      url: "https://caloriecalc.cc/fr",
      inLanguage: "fr",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Calculez vos besoins en calories et en macros pour perdre du poids, le maintenir ou prendre de la masse avec la formule de Mifflin-St Jeor. Protéines et lipides par kg de poids, IMC sur une échelle.",
      featureList: [
        "Métabolisme de base avec la formule de Mifflin-St Jeor",
        "Cinq niveaux d'activité",
        "Sept buts : maintien du poids, trois modes de perte de poids et trois de prise de masse",
        "Protéines et lipides par kg de poids, glucides à partir des calories restantes",
        "Indice de masse corporelle sur une échelle avec les catégories de l'OMS",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Que sont les macros et comment les calculer ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les macros sont les protéines, les lipides et les glucides. On calcule d'abord le métabolisme de base avec la formule de Mifflin-St Jeor, puis on le multiplie par un coefficient d'activité et un coefficient de but. Les protéines et les lipides se règlent en grammes par kg de poids, les glucides occupent les calories restantes. Le calculateur fait tout cela automatiquement : il suffit d'indiquer sexe, poids, taille et âge.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de calories par jour pour perdre du poids ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il faut manger moins que sa dépense journalière. Un déficit de 10–20 % convient à la plupart des gens : dans le calculateur, ce sont les pertes de poids légère, modérée et intensive. Par exemple, une femme de 30 ans mesurant 165 cm, pesant 60 kg et s'entraînant 1–3 fois par semaine a besoin d'environ 1540 kcal par jour avec un déficit de 15 %.",
          },
        },
        {
          "@type": "Question",
          name: "À quelle vitesse vais-je perdre du poids ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1 kg de graisse corporelle représente environ 7700 kcal. Un déficit de 300 kcal par jour fait environ 2100 kcal par semaine, soit à peu près 0,3 kg de graisse. Les premiers jours, le poids peut baisser plus vite à cause de la perte d'eau, puis cela ralentit. Si votre poids ne bouge pas pendant 2–3 semaines, mangez un peu moins ou choisissez un déficit plus important.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de protéines pendant une perte de poids ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En déficit calorique, surtout avec une perte de poids intensive, on recommande en général 1,6–2,2 g de protéines par kg de poids : cela aide à préserver les muscles. Vous pouvez régler cette valeur avec le curseur « protéines par 1 kg de poids ».",
          },
        },
        {
          "@type": "Question",
          name: "Quelle prise de masse choisir : lente ou rapide ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plus le surplus est grand, plus on prend de graisse avec le muscle. Pour gagner du muscle sans trop de graisse, choisissez une prise de masse lente ou modérée. La rapide convient à ceux qui ont du mal à prendre du poids.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la précision du calcul ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dans les études, la formule de Mifflin-St Jeor est plus précise que les autres formules courantes, mais cela reste une estimation : chez la plupart des gens, la dépense réelle s'écarte de la valeur calculée de 10 % ou moins. Prenez le résultat comme point de départ et ajustez-le selon l'évolution de votre poids sur 2–3 semaines.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi, en surpoids, les protéines ne sont-elles pas calculées sur mon poids ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si votre IMC dépasse 25, le calculateur calcule les protéines et les lipides sur le poids correspondant à un IMC de 25 pour votre taille. Les besoins en protéines dépendent surtout de la masse musculaire, pas du tissu adipeux, donc un calcul sur le poids total surestimerait l'objectif. Les calories restent calculées sur le poids réel.",
          },
        },
      ],
    },
  ],
};
