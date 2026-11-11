export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "CalorieCalc.cc Calorie Calculator",
      url: "https://caloriecalc.cc/en",
      inLanguage: "en",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Calculate your calorie and macro targets for weight loss, maintenance or muscle gain with the Mifflin-St Jeor equation. Protein and fat are set per kg of body weight; BMI is shown on a scale.",
      featureList: [
        "Basal metabolic rate with the Mifflin-St Jeor equation",
        "Five activity levels",
        "Seven goals: maintenance, three weight-loss and three muscle-gain modes",
        "Protein and fat per kg of body weight, carbs from the remaining calories",
        "Body mass index on a scale with the WHO categories",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are macros and how do I calculate them?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Macros are protein, fat and carbohydrates. First, basal metabolic rate is calculated with the Mifflin-St Jeor equation, then it is multiplied by an activity factor and a goal factor. Protein and fat are set in grams per kg of body weight, and carbs fill the remaining calories. The calculator does all of this for you: just enter your sex, weight, height and age.",
          },
        },
        {
          "@type": "Question",
          name: "How many calories a day do I need to lose weight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need to eat less than your daily expenditure. A 10–20% deficit suits most people: in the calculator these are mild, moderate and aggressive weight loss. For example, a 30-year-old woman who is 165 cm tall, weighs 60 kg and works out 1–3 times a week needs about 1540 kcal a day at a 15% deficit.",
          },
        },
        {
          "@type": "Question",
          name: "How fast will I lose weight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1 kg of body fat holds about 7700 kcal. A deficit of 300 kcal a day is roughly 2100 kcal a week, or about 0.3 kg of fat. In the first days weight may drop faster because of water loss, then it slows down. If your weight has not changed for 2–3 weeks, eat a little less or choose a larger deficit.",
          },
        },
        {
          "@type": "Question",
          name: "How much protein do I need when losing weight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In a calorie deficit, especially with aggressive weight loss, 1.6–2.2 g of protein per kg of body weight is commonly recommended: it helps preserve muscle. You can set it with the “protein per 1 kg of weight” slider.",
          },
        },
        {
          "@type": "Question",
          name: "Which bulk should I choose: slow or fast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The bigger the surplus, the more fat you gain along with muscle. To build muscle without much extra fat, choose a slow or moderate bulk. A fast bulk suits people who find it hard to gain weight.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is the calculation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In studies the Mifflin-St Jeor equation is more accurate than other popular formulas, but it is still an estimate: for most people actual expenditure differs from the calculated value by 10% or less. Use the result as a starting point and adjust it based on how your weight changes over 2–3 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Why is protein not calculated for my actual weight when I am overweight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your BMI is above 25, the calculator uses the weight at BMI 25 for your height to calculate protein and fat. Protein needs depend mostly on muscle mass, not fat tissue, so using your full weight would overstate the target. Calories are still based on your actual weight.",
          },
        },
      ],
    },
  ],
};
