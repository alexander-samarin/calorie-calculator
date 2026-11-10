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
        "Accurate Calorie, Macro & BMI Calculator with custom nutrient settings. Calculate calories for weight loss (mild, aggressive) or muscle gain. Unique features: custom protein and fat settings per kg of body weight, visual BMI scale.",
      featureList: [
        "Mifflin-St Jeor Formula",
        "Custom protein and fat per kg settings",
        "BMI calculation with visual scale",
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
        {
          "@type": "Question",
          name: "What is BMI and why is it useful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BMI (Body Mass Index) is an indicator that helps assess the relationship between your weight and height. Our calculator automatically calculates BMI and displays the result on a visual scale with colored zones: underweight, normal, overweight, obesity.",
          },
        },
        {
          "@type": "Question",
          name: "Why isn't protein calculated for my actual weight when I'm overweight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your BMI is above 25, the calculator uses the weight corresponding to BMI 25 at your height for protein and fat. Protein needs depend mainly on muscle mass, not fat tissue, so full body weight would overestimate them. Calories are still calculated from your actual weight.",
          },
        },
      ],
    },
  ],
};
