export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "CalorieCalc.cc Calorie Calculator",
      url: "https://caloriecalc.cc",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Accurate Calorie & Macro Calculator with custom nutrient settings. Calculate calories for weight loss (mild, aggressive) or muscle gain. Unique feature: custom protein and fat settings per kg of body weight.",
      featureList: [
        "Mifflin-St Jeor Formula",
        "Custom protein and fat per kg settings",
        "Modes: Aggressive Weight Loss, Lean Bulk",
        "Full Macro calculation for free",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much protein should I choose for weight loss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In a calorie deficit (especially during 'Aggressive Weight Loss'), it is recommended to increase protein to 1.8–2.2 g per kg of body weight so the body burns fat, not muscle. You can manually adjust this setting in our calculator.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose Slow or Fast Bulk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "'Fast Bulk' often leads to excessive fat gain. If you want quality muscle mass, choose 'Slow' or 'Moderate Bulk'.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is this calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use the Mifflin-St Jeor formula, recognized as the 'gold standard'. We also allow for precise adjustments of activity levels and macronutrients for maximum personalization.",
          },
        },
      ],
    },
  ],
};
