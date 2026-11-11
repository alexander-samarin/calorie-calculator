export default () => {
  return (
    <>
      <h2 class="text-lg font-extrabold mb-[0.8em]">
        So berechnen Sie Ihren Kalorienbedarf und Ihre Makros
      </h2>

      <p>
        Der Rechner ermittelt drei Werte: den Grundumsatz, den täglichen
        Energieverbrauch und den Kalorienbedarf für Ihr Ziel. Daraus berechnet
        er Eiweiß, Fett und Kohlenhydrate in Gramm und aus Gewicht und Größe den
        Body-Mass-Index. Die Berechnung ist kostenlos und ohne Anmeldung, Ihre
        Eingaben bleiben in Ihrem Browser.
      </p>

      <h3 class="text-lg">1. Grundumsatz: die Mifflin-St-Jeor-Formel</h3>
      <p>
        Der Grundumsatz ist die Energie, die der Körper in Ruhe verbraucht: für
        die Atmung und die Arbeit von Herz, Gehirn und anderen Organen. Er wird
        mit der Mifflin-St-Jeor-Formel berechnet:
      </p>
      <ul>
        <li>
          <strong>Frauen:</strong> 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 ×
          Alter − 161
        </li>
        <li>
          <strong>Männer:</strong> 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 ×
          Alter + 5
        </li>
      </ul>

      <h3 class="text-lg">2. Tagesverbrauch: der Aktivitätsfaktor</h3>
      <p>
        Der Grundumsatz wird mit einem Faktor multipliziert, der Training und
        Bewegung im Alltag berücksichtigt:
      </p>
      <ul>
        <li>
          <strong>Sitzende Tätigkeit</strong> — 1,2: Büroarbeit, kein Sport.
        </li>
        <li>
          <strong>1–3 Trainings pro Woche</strong> — 1,375.
        </li>
        <li>
          <strong>3–5 Trainings pro Woche</strong> — 1,55.
        </li>
        <li>
          <strong>6–7 Trainings pro Woche</strong> — 1,725.
        </li>
        <li>
          <strong>2 Trainings pro Tag</strong> — 1,9: Profisport oder schwere
          körperliche Arbeit.
        </li>
      </ul>
      <p>
        Wenn Sie zwischen zwei Stufen schwanken, wählen Sie die niedrigere: Die
        eigene Aktivität wird häufiger über- als unterschätzt.
      </p>

      <h3 class="text-lg">3. Kalorienbedarf für Ihr Ziel</h3>
      <p>
        Der Tagesverbrauch wird mit dem Faktor des gewählten Ziels
        multipliziert:
      </p>
      <ul>
        <li>
          <strong>Gewicht halten</strong> — unverändert: So viele Kalorien
          brauchen Sie, damit Ihr Gewicht gleich bleibt.
        </li>
        <li>
          <strong>Leichtes Abnehmen</strong> — 10 % Defizit. Langsam, aber gut
          durchzuhalten.
        </li>
        <li>
          <strong>Moderates Abnehmen</strong> — 15 % Defizit. Passt für die
          meisten.
        </li>
        <li>
          <strong>Intensives Abnehmen</strong> — 20 % Defizit. Schneller, aber
          anstrengender; bei diesem Defizit ist genug Eiweiß besonders wichtig.
        </li>
        <li>
          <strong>Langsamer Masseaufbau</strong> — 10 % Überschuss. Am wenigsten
          zusätzliches Fett.
        </li>
        <li>
          <strong>Moderater Masseaufbau</strong> — 15 % Überschuss.
        </li>
        <li>
          <strong>Schneller Masseaufbau</strong> — 20 % Überschuss. Das Gewicht
          steigt schneller, aber mit den Muskeln kommt auch deutlich mehr Fett.
        </li>
      </ul>

      <h3 class="text-lg">4. Eiweiß, Fett und Kohlenhydrate</h3>
      <p>
        Eiweiß und Fett werden in Gramm pro Kilogramm Körpergewicht festgelegt,
        Kohlenhydrate füllen die übrigen Kalorien. 1 g Eiweiß oder Kohlenhydrate
        hat 4 kcal, 1 g Fett hat 9 kcal.
      </p>
      <ul>
        <li>
          <strong>Eiweiß:</strong> 1,2 bis 2,5 g pro kg, standardmäßig 1,5. Beim
          Abnehmen und bei Krafttraining nimmt man meist 1,6–2,2 g, um die
          Muskeln zu erhalten.
        </li>
        <li>
          <strong>Fett:</strong> 0,8 bis 1,2 g pro kg, standardmäßig 1,0. Fett
          wird für die Hormonbildung gebraucht, deshalb sollte man es nicht
          stark kürzen.
        </li>
        <li>
          <strong>Kohlenhydrate:</strong> alles, was nach Eiweiß und Fett vom
          Kalorienbedarf übrig bleibt.
        </li>
      </ul>
      <p>
        <strong>Liegt Ihr BMI über 25</strong>, werden Eiweiß und Fett nicht für
        Ihr tatsächliches Gewicht berechnet, sondern für das Gewicht bei BMI 25
        und Ihrer Größe: bei 165 cm zum Beispiel 68 kg. Fettgewebe erhöht den
        Eiweißbedarf kaum, deshalb würde die Berechnung mit dem vollen Gewicht
        den Bedarf überschätzen und keinen Platz für Kohlenhydrate lassen. Die
        Kalorien werden weiterhin aus dem tatsächlichen Gewicht berechnet.
      </p>

      <h2 class="text-lg">Rechenbeispiel</h2>
      <p>
        Eine Frau, 30 Jahre, 165 cm, 60 kg, 1–3 Trainings pro Woche, Ziel:
        moderates Abnehmen, Eiweiß 1,8 g/kg, Fett 1,0 g/kg:
      </p>
      <ol>
        <li>
          Grundumsatz: 10 × 60 + 6,25 × 165 − 5 × 30 − 161 ≈{" "}
          <strong>1320 kcal</strong>.
        </li>
        <li>
          Tagesverbrauch: 1320 × 1,375 ≈ <strong>1815 kcal</strong>.
        </li>
        <li>
          Bedarf zum Abnehmen: 1815 × 0,85 ≈ <strong>1543 kcal</strong>.
        </li>
        <li>
          Eiweiß: 60 × 1,8 = <strong>108 g</strong> (432 kcal). Fett: 60 × 1,0 ={" "}
          <strong>60 g</strong> (540 kcal).
        </li>
        <li>
          Kohlenhydrate: (1543 − 432 − 540) ÷ 4 ≈ <strong>143 g</strong>.
        </li>
      </ol>

      <h2 class="text-lg">Body-Mass-Index (BMI)</h2>
      <p>
        Der BMI ist das Gewicht in Kilogramm geteilt durch die Körpergröße in
        Metern zum Quadrat. Der Rechner zeigt ihn auf einer Skala mit den
        WHO-Kategorien:
      </p>
      <ul>
        <li>
          <strong>unter 18,5</strong> — Untergewicht;
        </li>
        <li>
          <strong>18,5–24,9</strong> — Normalgewicht;
        </li>
        <li>
          <strong>25–29,9</strong> — Übergewicht;
        </li>
        <li>
          <strong>ab 30</strong> — Adipositas.
        </li>
      </ul>
      <p>
        Der BMI unterscheidet nicht zwischen Muskeln und Fett, daher kann er bei
        Sportlern mit viel Muskelmasse zu hoch ausfallen.
      </p>
    </>
  );
};
