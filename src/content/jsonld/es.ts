export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Calculadora de Calorías CalorieCalc.cc",
      url: "https://caloriecalc.cc",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Calculadora precisa de calorías y macronutrientes con ajustes personalizados. Calcule calorías para adelgazar (suave, agresivo) o ganar masa muscular. Función única: ajuste de proteínas y grasas por kg de peso.",
      featureList: [
        "Fórmula Mifflin-St Jeor",
        "Ajuste de proteínas y grasas por kg de peso",
        "Modos: Pérdida agresiva, Volumen limpio (Lean Bulk)",
        "Cálculo completo de Macros gratis",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué nivel de proteínas elegir para adelgazar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En déficit calórico (especialmente en 'Pérdida agresiva') se recomienda aumentar la proteína a 1.8–2.2 g por kg de peso para que el cuerpo queme grasa y no músculo. En nuestra calculadora puedes ajustar este parámetro manualmente.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué elegir: volumen lento o rápido?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El 'Volumen rápido' a menudo conduce a una acumulación excesiva de grasa. Si buscas una musculatura de calidad, elige 'Volumen lento' o 'Moderado'.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tan precisa es esta calculadora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Utilizamos la fórmula Mifflin-St Jeor, reconocida como el 'estándar de oro'. También permitimos ajustar con precisión la actividad y los macronutrientes para una máxima personalización.",
          },
        },
      ],
    },
  ],
};
