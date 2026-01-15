export default () => {
  return (
    <>
      <h1 class="text-lg">
        Calcolatore preciso di calorie e macronutrienti con impostazioni
        personalizzate
      </h1>

      <p>
        <strong>CalorieCalc.cc</strong> è uno strumento avanzato per la
        pianificazione nutrizionale. A differenza dei semplici contatori, il
        nostro calcolatore ti permette non solo di conoscere il tuo fabbisogno
        energetico, ma anche di adattare i tuoi obiettivi con flessibilità — dal
        dimagrimento leggero alla definizione aggressiva — e di impostare norme
        individuali di <strong>proteine e grassi per kg di peso</strong>.
      </p>

      <h2 class="text-lg">1. Livello di attività fisica</h2>
      <p>
        Per calcolare con precisione il tuo metabolismo basale (formula
        Mifflin-St Jeor), seleziona il tuo stile di vita:
      </p>
      <ul>
        <li>
          <strong>Sedentario:</strong> Lavoro d'ufficio, niente sport, movimento
          minimo.
        </li>
        <li>
          <strong>1-3 allenamenti a settimana:</strong> Attività leggera
          (fitness, lunghe passeggiate).
        </li>
        <li>
          <strong>3-5 allenamenti a settimana:</strong> Attività moderata
          (palestra regolare, corsa).
        </li>
        <li>
          <strong>6-7 allenamenti a settimana:</strong> Attività alta
          (allenamenti intensi quotidiani).
        </li>
        <li>
          <strong>Allenamenti 2 volte al giorno:</strong> Carico estremo (sport
          professionistico, lavoro fisico pesante).
        </li>
      </ul>

      <h2 class="text-lg">
        2. Scelta dell'obiettivo: Dimagrimento, Massa o Mantenimento
      </h2>
      <p>
        Il nostro servizio adatta il calcolo al tuo obiettivo attuale. Scegli
        l'intensità della variazione di peso:
      </p>

      <h3 class="text-lg">📉 Per perdere peso (Deficit calorico)</h3>
      <ul>
        <li>
          <strong>Dimagrimento leggero:</strong> Piccolo deficit (~10%). Ideale
          per preservare i muscoli e ridurre il peso comodamente senza stress né
          fame.
        </li>
        <li>
          <strong>Dimagrimento moderato:</strong> Equilibrio ottimale (~15% di
          deficit). Lo "standard d'oro" per la maggior parte delle diete.
        </li>
        <li>
          <strong>Dimagrimento aggressivo (Definizione):</strong> Deficit
          significativo (~20%). Adatto per una "definizione" rapida a breve
          termine. Richiede un elevato apporto proteico.
        </li>
      </ul>

      <h3 class="text-lg">
        📈 Per aumentare la massa muscolare (Surplus calorico / Massa)
      </h3>
      <ul>
        <li>
          <strong>Massa lenta (Lean Bulk):</strong> Surplus minimo ("Massa
          pulita"). Permette di costruire muscoli con un accumulo minimo di
          grasso.
        </li>
        <li>
          <strong>Massa moderata:</strong> Modalità standard per l'ipertrofia
          muscolare.
        </li>
        <li>
          <strong>Massa rapida (Dirty Bulk):</strong> Surplus massimo. Adatto
          agli ectomorfi che faticano a prendere peso.
        </li>
      </ul>

      <p>
        <strong>Mantenimento:</strong> Calcolo delle calorie di mantenimento,
        con le quali il tuo peso rimarrà stabile.
      </p>

      <h2 class="text-lg">
        3. Impostazione professionale dei Macro (Proteine e Grassi)
      </h2>
      <p>
        Il vantaggio principale di <strong>CalorieCalc.cc</strong> è la
        possibilità di impostare manualmente la quantità di nutrienti per
        chilogrammo di peso corporeo. Questo è fondamentale per creare un piano
        alimentare efficace:
      </p>
      <ul>
        <li>
          <strong>Proteine per kg di peso:</strong> Generalmente raccomandato
          tra
          <i>1.2 e 2.5 g/kg</i>. Durante il dimagrimento e l'allenamento, il
          fabbisogno proteico aumenta per proteggere i muscoli dal catabolismo.
        </li>
        <li>
          <strong>Grassi per kg di peso:</strong> L'intervallo raccomandato è
          <i>0.8 - 1.2 g/kg</i>. I grassi sono essenziali per la salute
          ormonale. Non consigliamo di scendere sotto 0.7 g/kg.
        </li>
        <li>
          <strong>Carboidrati:</strong> Calcolati automaticamente dalle calorie
          rimanenti. Forniscono energia per allenamenti intensi.
        </li>
      </ul>

      <div class="faq-section">
        <h2 class="text-lg">Domande frequenti (FAQ)</h2>
        <h3 class="text-lg">Quante proteine assumere per dimagrire?</h3>
        <p>
          In deficit calorico (specialmente nel "Dimagrimento aggressivo"), si
          raccomanda di aumentare le proteine a 1.8–2.2 g per kg di peso
          affinché il corpo bruci grasso e non tessuto muscolare.
        </p>

        <h3 class="text-lg">Cosa scegliere: massa lenta o rapida?</h3>
        <p>
          La "Massa rapida" porta spesso a un eccessivo accumulo di grasso. Se
          miri a una muscolatura di qualità, scegli "Massa lenta" o "Moderata" e
          monitora i tuoi progressi.
        </p>
      </div>
    </>
  );
};
