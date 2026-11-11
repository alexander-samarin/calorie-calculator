export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Calculadora de Calorías CalorieCalc.cc",
      url: "https://caloriecalc.cc/es",
      inLanguage: "es",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Calcula tus calorías y macros para perder peso, mantenerlo o ganar masa muscular con la fórmula de Mifflin-St Jeor. Proteínas y grasas por kg de peso; IMC en una escala.",
      featureList: [
        "Metabolismo basal con la fórmula de Mifflin-St Jeor",
        "Cinco niveles de actividad",
        "Siete metas: mantenimiento, tres modos de pérdida de peso y tres de aumento de masa",
        "Proteínas y grasas por kg de peso, carbohidratos de las calorías restantes",
        "Índice de masa corporal en una escala con las categorías de la OMS",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué son los macros y cómo se calculan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los macros son las proteínas, las grasas y los carbohidratos. Primero se calcula el metabolismo basal con la fórmula de Mifflin-St Jeor y luego se multiplica por un factor de actividad y otro de meta. Las proteínas y las grasas se fijan en gramos por kg de peso, y los carbohidratos ocupan las calorías restantes. La calculadora lo hace todo automáticamente: solo tienes que introducir sexo, peso, estatura y edad.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántas calorías al día necesito para adelgazar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tienes que comer menos de lo que gastas al día. A la mayoría le va bien un déficit del 10–20%: en la calculadora son la pérdida de peso suave, moderada y agresiva. Por ejemplo, una mujer de 30 años, 165 cm y 60 kg que entrena 1–3 veces por semana necesita unas 1540 kcal al día con un déficit del 15%.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tan rápido voy a perder peso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1 kg de grasa corporal equivale a unas 7700 kcal. Un déficit de 300 kcal al día son unas 2100 kcal a la semana, es decir, unos 0,3 kg de grasa. Los primeros días el peso puede bajar más rápido por la pérdida de agua y después se ralentiza. Si tu peso no cambia en 2–3 semanas, come un poco menos o elige un déficit mayor.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánta proteína necesito para perder peso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Con déficit calórico, sobre todo en la pérdida de peso agresiva, se suelen recomendar 1,6–2,2 g de proteína por kg de peso: ayuda a conservar el músculo. Puedes ajustarlo con el control «proteína por 1 kg de peso».",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué volumen elijo: lento o rápido?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cuanto mayor es el superávit, más grasa se gana junto con el músculo. Para ganar músculo sin mucha grasa extra, elige el volumen lento o moderado. El rápido es para quienes tienen dificultad para subir de peso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tan preciso es el cálculo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En los estudios, la fórmula de Mifflin-St Jeor es más precisa que otras fórmulas populares, pero sigue siendo una estimación: en la mayoría de las personas el gasto real difiere del calculado en un 10% o menos. Usa el resultado como punto de partida y ajústalo según cómo cambie tu peso en 2–3 semanas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Por qué con sobrepeso la proteína no se calcula con mi peso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si tu IMC es superior a 25, la calculadora calcula las proteínas y las grasas con el peso correspondiente a un IMC de 25 para tu estatura. La necesidad de proteína depende sobre todo de la masa muscular, no del tejido graso, así que calcular con el peso completo inflaría el objetivo. Las calorías siguen calculándose con tu peso real.",
          },
        },
      ],
    },
  ],
};
