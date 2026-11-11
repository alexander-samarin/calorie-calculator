export default {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Calcolatore di Calorie CalorieCalc.cc",
      url: "https://caloriecalc.cc/it",
      inLanguage: "it",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Calcola calorie e macronutrienti per dimagrire, mantenere il peso o aumentare la massa con la formula di Mifflin-St Jeor. Proteine e grassi per kg di peso, IMC su una scala.",
      featureList: [
        "Metabolismo basale con la formula di Mifflin-St Jeor",
        "Cinque livelli di attività",
        "Sette obiettivi: mantenimento, tre modalità di dimagrimento e tre di aumento di massa",
        "Proteine e grassi per kg di peso, carboidrati dalle calorie restanti",
        "Indice di massa corporea su una scala con le categorie dell'OMS",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Cosa sono i macronutrienti e come si calcolano?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I macronutrienti sono proteine, grassi e carboidrati. Prima si calcola il metabolismo basale con la formula di Mifflin-St Jeor, poi lo si moltiplica per un fattore di attività e uno di obiettivo. Proteine e grassi si impostano in grammi per kg di peso, i carboidrati occupano le calorie restanti. Il calcolatore fa tutto in automatico: basta inserire sesso, peso, altezza ed età.",
          },
        },
        {
          "@type": "Question",
          name: "Quante calorie al giorno servono per dimagrire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bisogna mangiare meno del dispendio giornaliero. Per la maggior parte delle persone va bene un deficit del 10–20%: nel calcolatore sono il dimagrimento leggero, moderato e intenso. Ad esempio, una donna di 30 anni, alta 165 cm, di 60 kg, che si allena 1–3 volte a settimana, con un deficit del 15% ha bisogno di circa 1540 kcal al giorno.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto velocemente perderò peso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1 kg di grasso corporeo corrisponde a circa 7700 kcal. Un deficit di 300 kcal al giorno fa circa 2100 kcal a settimana, cioè circa 0,3 kg di grasso. Nei primi giorni il peso può scendere più in fretta per la perdita di acqua, poi rallenta. Se il peso non cambia per 2–3 settimane, mangia un po' meno o scegli un deficit maggiore.",
          },
        },
        {
          "@type": "Question",
          name: "Quante proteine servono per dimagrire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In deficit calorico, soprattutto con il dimagrimento intenso, si consigliano di solito 1,6–2,2 g di proteine per kg di peso: aiutano a preservare i muscoli. Puoi impostare il valore con il cursore «proteine per 1 kg di peso».",
          },
        },
        {
          "@type": "Question",
          name: "Quale aumento di massa scegliere: lento o rapido?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Più è grande il surplus, più grasso si accumula insieme ai muscoli. Per costruire muscoli senza troppo grasso in più, scegli la massa lenta o moderata. Quella rapida è adatta a chi fa fatica a prendere peso.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto è preciso il calcolo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Negli studi la formula di Mifflin-St Jeor è più precisa di altre formule diffuse, ma resta una stima: per la maggior parte delle persone il dispendio reale differisce da quello calcolato del 10% o meno. Usa il risultato come punto di partenza e correggilo in base a come cambia il tuo peso in 2–3 settimane.",
          },
        },
        {
          "@type": "Question",
          name: "Perché in sovrappeso le proteine non sono calcolate sul mio peso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se il tuo IMC supera 25, il calcolatore calcola proteine e grassi sul peso corrispondente a un IMC di 25 per la tua altezza. Il fabbisogno di proteine dipende soprattutto dalla massa muscolare, non dal tessuto adiposo, quindi il calcolo sul peso intero sovrastimerebbe l'obiettivo. Le calorie restano calcolate sul peso reale.",
          },
        },
      ],
    },
  ],
};
