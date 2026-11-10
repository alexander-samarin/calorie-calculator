export default () => {
  return (
    <>
      <h2 class="text-lg font-extrabold mb-[0.8em]">
        Präziser Kalorien- und Makronährstoffrechner mit individuellen
        Einstellungen
      </h2>

      <p>
        <strong>CalorieCalc.cc</strong> ist ein fortschrittliches Tool zur
        Ernährungsplanung. Im Gegensatz zu einfachen Rechnern können Sie hier
        nicht nur Ihren Kalorienbedarf ermitteln, sondern Ihre Ziele flexibel
        anpassen – vom sanften Abnehmen bis zur aggressiven Diät – sowie
        individuelle Werte für{" "}
        <strong>Eiweiß und Fette pro kg Körpergewicht</strong> festlegen.
      </p>

      <h2 class="text-lg">1. Berücksichtigung der körperlichen Aktivität</h2>
      <p>
        Um den Grundumsatz (Mifflin-St.Jeor-Formel) genau zu berechnen, wählen
        Sie Ihren Lebensstil:
      </p>
      <ul>
        <li>
          <strong>Sitzende Lebensweise:</strong> Bürojob, kein Sport, minimale
          Bewegung im Alltag.
        </li>
        <li>
          <strong>1-3 Trainingseinheiten pro Woche:</strong> Leichte Aktivität
          (Fitness, lange Spaziergänge).
        </li>
        <li>
          <strong>3-5 Trainingseinheiten pro Woche:</strong> Moderate Aktivität
          (regelmäßiges Fitnessstudio, Joggen).
        </li>
        <li>
          <strong>6-7 Trainingseinheiten pro Woche:</strong> Hohe Aktivität
          (tägliches intensives Training).
        </li>
        <li>
          <strong>Training 2-mal täglich:</strong> Extreme Belastung
          (Leistungssport, schwere körperliche Arbeit).
        </li>
      </ul>

      <h2 class="text-lg">2. Zielwahl: Abnehmen, Aufbau oder Erhaltung</h2>
      <p>
        Unser Service passt die Berechnung an Ihr aktuelles Ziel an. Wählen Sie
        die Intensität der Gewichtsveränderung:
      </p>

      <h3 class="text-lg">📉 Gewichtsabnahme (Kaloriendefizit)</h3>
      <ul>
        <li>
          <strong>Sanftes Abnehmen:</strong> Kleines Defizit (~10%). Ideal zum
          Erhalt der Muskulatur und zur komfortablen Gewichtsreduktion ohne
          Stress und Hunger.
        </li>
        <li>
          <strong>Moderates Abnehmen:</strong> Optimaler Ausgleich (~15%
          Defizit). Der "Goldstandard" für die meisten Diäten.
        </li>
        <li>
          <strong>Aggressives Abnehmen:</strong> Großes Defizit (~20%). Geeignet
          für schnelle Definition ("Cutting") über einen kurzen Zeitraum.
          Erfordert eine hohe Proteinzufuhr.
        </li>
      </ul>

      <h3 class="text-lg">📈 Muskelaufbau (Kalorienüberschuss / Massephase)</h3>
      <ul>
        <li>
          <strong>Langsamer Aufbau:</strong> Minimaler Überschuss ("Lean Bulk").
          Ermöglicht Muskelaufbau mit minimaler Fettzunahme.
        </li>
        <li>
          <strong>Moderater Aufbau:</strong> Standardmodus für
          Muskelhypertrophie.
        </li>
        <li>
          <strong>Schneller Aufbau:</strong> Maximaler Überschuss. Geeignet für
          "Hardgainer" (Ektomorphe), die nur schwer zunehmen.
        </li>
      </ul>

      <p>
        <strong>Gewicht halten:</strong> Berechnung der Erhaltungskalorien, bei
        denen Ihr Gewicht stabil bleibt.
      </p>

      <h2 class="text-lg">
        3. Professionelle Makro-Einstellungen (Proteine & Fette)
      </h2>
      <p>
        Der Hauptvorteil von <strong>CalorieCalc.cc</strong> ist die
        Möglichkeit, die Nährstoffmengen pro Kilogramm Körpergewicht manuell
        festzulegen. Dies ist entscheidend für einen effektiven Ernährungsplan:
      </p>
      <ul>
        <li>
          <strong>Eiweiß pro kg Körpergewicht:</strong> Empfohlen werden meist{" "}
          <i>1,2 bis 2,5 g/kg</i>. Beim Abnehmen und Training steigt der
          Proteinbedarf, um die Muskeln vor dem Abbau (Katabolismus) zu
          schützen.
        </li>
        <li>
          <strong>Fette pro kg Körpergewicht:</strong> Empfohlener Bereich liegt
          bei <i>0,8 - 1,2 g/kg</i>. Fette sind essentiell für den
          Hormonhaushalt. Wir empfehlen nicht, unter 0,7 g/kg zu gehen.
        </li>
        <li>
          <strong>Kohlenhydrate:</strong> Werden automatisch aus den
          verbleibenden Kalorien berechnet. Sie liefern Energie für intensives
          Training.
        </li>
      </ul>

      <p>
        <strong>Berechnung bei Übergewicht.</strong> Liegt Ihr BMI über 25,
        werden Eiweiß und Fett nicht für das volle Körpergewicht berechnet,
        sondern für das Gewicht, das bei Ihrer Größe einem BMI von 25
        entspricht. Fettgewebe erhöht den Eiweißbedarf kaum, daher würde das
        volle Gewicht den Bedarf überschätzen und keinen Platz für Kohlenhydrate
        lassen. Bei 165 cm sind das zum Beispiel 68 kg.
      </p>

      <h2 class="text-lg">4. Body-Mass-Index (BMI) Rechner</h2>
      <p>
        Neben Kalorien und Makronährstoffen berechnet{" "}
        <strong>CalorieCalc.cc</strong> automatisch Ihren{" "}
        <strong>BMI (Body-Mass-Index)</strong> — einen Schlüsselindikator zur
        Bewertung des Verhältnisses von Gewicht und Größe. Eine visuelle Skala
        mit farbigen Zonen hilft Ihnen schnell zu verstehen, in welcher
        Kategorie Sie sich befinden:
      </p>
      <ul>
        <li>
          <strong>Untergewicht</strong> (BMI &lt; 18,5): Kann auf
          Nährstoffmangel oder Gesundheitsprobleme hinweisen.
        </li>
        <li>
          <strong>Normalgewicht</strong> (BMI 18,5–24,9): Optimaler Bereich für
          die meisten Erwachsenen.
        </li>
        <li>
          <strong>Übergewicht</strong> (BMI 25–29,9): Es wird empfohlen, auf
          Ernährung und körperliche Aktivität zu achten.
        </li>
        <li>
          <strong>Adipositas</strong> (BMI ≥ 30): Erhöhtes Gesundheitsrisiko,
          Beratung durch einen Spezialisten wird empfohlen.
        </li>
      </ul>

      <h2 class="text-lg">Häufig gestellte Fragen (FAQ)</h2>
      <h3 class="text-lg">Wie viel Protein sollte ich zum Abnehmen essen?</h3>
      <p>
        Im Kaloriendefizit (besonders beim "Aggressiven Abnehmen") wird
        empfohlen, das Protein auf 1,8–2,2 g pro kg Körpergewicht zu erhöhen,
        damit der Körper Fett statt Muskelmasse verbrennt.
      </p>

      <h3 class="text-lg">
        Sollte ich langsamen oder schnellen Aufbau wählen?
      </h3>
      <p>
        "Schneller Aufbau" führt oft zu übermäßiger Fettzunahme. Wenn Sie eine
        hochwertige Muskulatur anstreben, wählen Sie "Langsamen" oder "Moderaten
        Aufbau" und überwachen Sie Ihren Fortschritt.
      </p>

      <h3 class="text-lg">
        Warum wird Eiweiß bei Übergewicht nicht für mein tatsächliches Gewicht
        berechnet?
      </h3>
      <p>
        Liegt der BMI über 25, berechnet der Rechner Eiweiß und Fett für das
        Gewicht, das bei Ihrer Größe einem BMI von 25 entspricht. Der
        Eiweißbedarf hängt vor allem von der Muskelmasse ab, nicht vom
        Fettgewebe, daher würde das volle Gewicht ihn überschätzen. Die Kalorien
        werden weiterhin aus dem tatsächlichen Gewicht berechnet.
      </p>
    </>
  );
};
