export default () => {
  return (
    <>
      <h2 class="text-lg font-extrabold mb-[0.8em]">
        Come calcolare il fabbisogno calorico e i macronutrienti
      </h2>

      <p>
        Il calcolatore ricava tre valori: il metabolismo basale, il dispendio
        energetico giornaliero e le calorie per l'obiettivo scelto. Da queste
        calcola proteine, grassi e carboidrati in grammi e, da peso e altezza,
        l'indice di massa corporea. È gratuito, senza registrazione, e i dati
        inseriti restano nel tuo browser.
      </p>

      <h3 class="text-lg">
        1. Metabolismo basale: la formula di Mifflin-St Jeor
      </h3>
      <p>
        Il metabolismo basale è l'energia che il corpo consuma a riposo: per
        respirare e far funzionare cuore, cervello e altri organi. Si calcola
        con la formula di Mifflin-St Jeor:
      </p>
      <ul>
        <li>
          <strong>Donne:</strong> 10 × peso (kg) + 6,25 × altezza (cm) − 5 × età
          − 161
        </li>
        <li>
          <strong>Uomini:</strong> 10 × peso (kg) + 6,25 × altezza (cm) − 5 ×
          età + 5
        </li>
      </ul>

      <h3 class="text-lg">2. Dispendio giornaliero: il fattore di attività</h3>
      <p>
        Il metabolismo basale viene moltiplicato per un fattore che tiene conto
        degli allenamenti e del movimento durante la giornata:
      </p>
      <ul>
        <li>
          <strong>Stile di vita sedentario</strong> — 1,2: lavoro d'ufficio,
          niente sport.
        </li>
        <li>
          <strong>1–3 allenamenti a settimana</strong> — 1,375.
        </li>
        <li>
          <strong>3–5 allenamenti a settimana</strong> — 1,55.
        </li>
        <li>
          <strong>6–7 allenamenti a settimana</strong> — 1,725.
        </li>
        <li>
          <strong>2 allenamenti al giorno</strong> — 1,9: sport professionistico
          o lavoro fisico pesante.
        </li>
      </ul>
      <p>
        Se sei indeciso tra due opzioni, scegli quella più bassa: l'attività
        viene sopravvalutata più spesso di quanto venga sottovalutata.
      </p>

      <h3 class="text-lg">3. Calorie per il tuo obiettivo</h3>
      <p>
        Il dispendio giornaliero viene moltiplicato per il fattore
        dell'obiettivo scelto:
      </p>
      <ul>
        <li>
          <strong>Mantenimento</strong> — nessuna variazione: le calorie che
          mantengono stabile il peso.
        </li>
        <li>
          <strong>Dimagrimento leggero</strong> — deficit del 10%. Lento, ma
          facile da sostenere.
        </li>
        <li>
          <strong>Dimagrimento moderato</strong> — deficit del 15%. Adatto alla
          maggior parte delle persone.
        </li>
        <li>
          <strong>Dimagrimento intenso</strong> — deficit del 20%. Più veloce ma
          più faticoso; con questo deficit è particolarmente importante assumere
          abbastanza proteine.
        </li>
        <li>
          <strong>Massa lenta</strong> — surplus del 10%. Il minimo grasso in
          più.
        </li>
        <li>
          <strong>Massa moderata</strong> — surplus del 15%.
        </li>
        <li>
          <strong>Massa rapida</strong> — surplus del 20%. Il peso sale più in
          fretta, ma insieme ai muscoli aumenta sensibilmente anche il grasso.
        </li>
      </ul>

      <h3 class="text-lg">4. Proteine, grassi e carboidrati</h3>
      <p>
        Proteine e grassi si impostano in grammi per chilo di peso corporeo, i
        carboidrati occupano le calorie restanti. 1 g di proteine o carboidrati
        fornisce 4 kcal, 1 g di grassi 9 kcal.
      </p>
      <ul>
        <li>
          <strong>Proteine:</strong> da 1,2 a 2,5 g per kg, 1,5 di default.
          Quando si dimagrisce o ci si allena con i pesi si usano di solito
          1,6–2,2 g per preservare i muscoli.
        </li>
        <li>
          <strong>Grassi:</strong> da 0,8 a 1,2 g per kg, 1,0 di default. I
          grassi servono a produrre gli ormoni, quindi non conviene ridurli
          troppo.
        </li>
        <li>
          <strong>Carboidrati:</strong> tutto ciò che resta delle calorie dopo
          proteine e grassi.
        </li>
      </ul>
      <p>
        <strong>Se il tuo IMC supera 25</strong>, proteine e grassi non vengono
        calcolati sul peso reale, ma sul peso corrispondente a un IMC di 25 per
        la tua altezza: ad esempio 68 kg con 165 cm. Il tessuto adiposo aumenta
        appena il fabbisogno di proteine, quindi il calcolo sul peso intero
        sovrastimerebbe l'obiettivo e non lascerebbe spazio ai carboidrati. Le
        calorie restano calcolate sul peso reale.
      </p>

      <h2 class="text-lg">Esempio di calcolo</h2>
      <p>
        Donna, 30 anni, 165 cm, 60 kg, 1–3 allenamenti a settimana, obiettivo:
        dimagrimento moderato, proteine 1,8 g/kg, grassi 1,0 g/kg:
      </p>
      <ol>
        <li>
          Metabolismo basale: 10 × 60 + 6,25 × 165 − 5 × 30 − 161 ≈{" "}
          <strong>1320 kcal</strong>.
        </li>
        <li>
          Dispendio giornaliero: 1320 × 1,375 ≈ <strong>1815 kcal</strong>.
        </li>
        <li>
          Calorie per dimagrire: 1815 × 0,85 ≈ <strong>1543 kcal</strong>.
        </li>
        <li>
          Proteine: 60 × 1,8 = <strong>108 g</strong> (432 kcal). Grassi: 60 ×
          1,0 = <strong>60 g</strong> (540 kcal).
        </li>
        <li>
          Carboidrati: (1543 − 432 − 540) ÷ 4 ≈ <strong>143 g</strong>.
        </li>
      </ol>

      <h2 class="text-lg">Indice di massa corporea (IMC)</h2>
      <p>
        L'IMC è il peso in chili diviso per il quadrato dell'altezza in metri.
        Il calcolatore lo mostra su una scala con le categorie dell'OMS:
      </p>
      <ul>
        <li>
          <strong>meno di 18,5</strong> — sottopeso;
        </li>
        <li>
          <strong>18,5–24,9</strong> — normopeso;
        </li>
        <li>
          <strong>25–29,9</strong> — sovrappeso;
        </li>
        <li>
          <strong>30 e oltre</strong> — obesità.
        </li>
      </ul>
      <p>
        L'IMC non distingue i muscoli dal grasso, quindi negli sportivi con
        molta massa muscolare può risultare troppo alto.
      </p>
    </>
  );
};
