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
        "Calculadora precisa de calorías, macronutrientes e IMC con ajustes personalizados. Calcule calorías para adelgazar (suave, agresivo) o ganar masa muscular. Funciones únicas: ajuste de proteínas y grasas por kg de peso, escala visual de IMC.",
      featureList: [
        "Fórmula Mifflin-St Jeor",
        "Ajuste de proteínas y grasas por kg de peso",
        "Cálculo de IMC con escala visual",
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
        {
          "@type": "Question",
          name: "¿Qué es el IMC y para qué sirve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El IMC (Índice de Masa Corporal) es un indicador que ayuda a evaluar la relación entre tu peso y altura. Nuestra calculadora calcula automáticamente el IMC y muestra el resultado en una escala visual con zonas de colores: bajo peso, normal, sobrepeso, obesidad.",
          },
        },
      ],
    },
  ],
};
