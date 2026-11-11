export default () => {
  return (
    <>
      <h2 class="text-lg font-extrabold mb-[0.8em]">
        Jak obliczyć zapotrzebowanie kaloryczne i makroskładniki
      </h2>

      <p>
        Kalkulator liczy trzy wartości: podstawową przemianę materii, dzienne
        zapotrzebowanie energetyczne i normę kalorii dla wybranego celu. Na jej
        podstawie wylicza białko, tłuszcze i węglowodany w gramach, a z wagi i
        wzrostu — wskaźnik masy ciała. Obliczenia są bezpłatne i nie wymagają
        rejestracji, a wpisane dane zostają w Twojej przeglądarce.
      </p>

      <h3 class="text-lg">
        1. Podstawowa przemiana materii: wzór Mifflina-St Jeora
      </h3>
      <p>
        Podstawowa przemiana materii (PPM) to energia, którą organizm zużywa w
        spoczynku: na oddychanie oraz pracę serca, mózgu i innych narządów.
        Oblicza się ją wzorem Mifflina-St Jeora:
      </p>
      <ul>
        <li>
          <strong>Kobiety:</strong> 10 × waga (kg) + 6,25 × wzrost (cm) − 5 ×
          wiek − 161
        </li>
        <li>
          <strong>Mężczyźni:</strong> 10 × waga (kg) + 6,25 × wzrost (cm) − 5 ×
          wiek + 5
        </li>
      </ul>

      <h3 class="text-lg">
        2. Dzienne zapotrzebowanie: współczynnik aktywności
      </h3>
      <p>
        PPM mnoży się przez współczynnik, który uwzględnia treningi i ruch w
        ciągu dnia:
      </p>
      <ul>
        <li>
          <strong>Siedzący tryb życia</strong> — 1,2: praca biurowa, brak
          sportu.
        </li>
        <li>
          <strong>1–3 treningi tygodniowo</strong> — 1,375.
        </li>
        <li>
          <strong>3–5 treningów tygodniowo</strong> — 1,55.
        </li>
        <li>
          <strong>6–7 treningów tygodniowo</strong> — 1,725.
        </li>
        <li>
          <strong>2 treningi dziennie</strong> — 1,9: sport zawodowy lub ciężka
          praca fizyczna.
        </li>
      </ul>
      <p>
        Jeśli wahasz się między dwiema opcjami, wybierz niższą: aktywność
        częściej się przecenia, niż nie docenia.
      </p>

      <h3 class="text-lg">3. Norma kalorii dla celu</h3>
      <p>
        Dzienne zapotrzebowanie mnoży się przez współczynnik wybranego celu:
      </p>
      <ul>
        <li>
          <strong>Utrzymanie wagi</strong> — bez zmian: tyle kalorii, by waga
          pozostała taka sama.
        </li>
        <li>
          <strong>Łagodne odchudzanie</strong> — deficyt 10%. Powoli, ale łatwo
          go utrzymać.
        </li>
        <li>
          <strong>Umiarkowane odchudzanie</strong> — deficyt 15%. Odpowiedni dla
          większości osób.
        </li>
        <li>
          <strong>Intensywne odchudzanie</strong> — deficyt 20%. Szybciej, ale
          trudniej; przy takim deficycie szczególnie ważne jest odpowiednio dużo
          białka.
        </li>
        <li>
          <strong>Powolny przyrost masy</strong> — nadwyżka 10%. Najmniej
          zbędnego tłuszczu.
        </li>
        <li>
          <strong>Umiarkowany przyrost masy</strong> — nadwyżka 15%.
        </li>
        <li>
          <strong>Szybki przyrost masy</strong> — nadwyżka 20%. Waga rośnie
          szybciej, ale razem z mięśniami wyraźnie przybywa też tłuszczu.
        </li>
      </ul>

      <h3 class="text-lg">4. Białko, tłuszcze i węglowodany</h3>
      <p>
        Białko i tłuszcze ustawia się w gramach na kilogram masy ciała, a
        węglowodany wypełniają pozostałe kalorie. 1 g białka lub węglowodanów to
        4 kcal, 1 g tłuszczu — 9 kcal.
      </p>
      <ul>
        <li>
          <strong>Białko:</strong> od 1,2 do 2,5 g na kg, domyślnie 1,5. Przy
          odchudzaniu i treningu siłowym zwykle przyjmuje się 1,6–2,2 g, aby
          zachować mięśnie.
        </li>
        <li>
          <strong>Tłuszcze:</strong> od 0,8 do 1,2 g na kg, domyślnie 1,0.
          Tłuszcze są potrzebne do produkcji hormonów, więc nie warto mocno ich
          ograniczać.
        </li>
        <li>
          <strong>Węglowodany:</strong> wszystko, co zostaje z normy kalorii po
          białku i tłuszczach.
        </li>
      </ul>
      <p>
        <strong>Jeśli BMI przekracza 25</strong>, białko i tłuszcze liczone są
        nie na faktyczną wagę, lecz na wagę odpowiadającą BMI 25 przy Twoim
        wzroście: na przykład przy 165 cm to 68 kg. Tkanka tłuszczowa prawie nie
        zwiększa zapotrzebowania na białko, więc liczenie na pełną wagę
        zawyżałoby normę i nie zostawiało miejsca na węglowodany. Kalorie
        liczone są od faktycznej wagi.
      </p>

      <h2 class="text-lg">Przykład obliczenia</h2>
      <p>
        Kobieta, 30 lat, wzrost 165 cm, waga 60 kg, 1–3 treningi tygodniowo, cel
        — umiarkowane odchudzanie, białko 1,8 g/kg, tłuszcze 1,0 g/kg:
      </p>
      <ol>
        <li>
          PPM: 10 × 60 + 6,25 × 165 − 5 × 30 − 161 ≈ <strong>1320 kcal</strong>.
        </li>
        <li>
          Dzienne zapotrzebowanie: 1320 × 1,375 ≈ <strong>1815 kcal</strong>.
        </li>
        <li>
          Norma na odchudzanie: 1815 × 0,85 ≈ <strong>1543 kcal</strong>.
        </li>
        <li>
          Białko: 60 × 1,8 = <strong>108 g</strong> (432 kcal). Tłuszcze: 60 ×
          1,0 = <strong>60 g</strong> (540 kcal).
        </li>
        <li>
          Węglowodany: (1543 − 432 − 540) ÷ 4 ≈ <strong>143 g</strong>.
        </li>
      </ol>

      <h2 class="text-lg">Wskaźnik masy ciała (BMI)</h2>
      <p>
        BMI to waga w kilogramach podzielona przez kwadrat wzrostu w metrach.
        Kalkulator pokazuje go na skali z kategoriami WHO:
      </p>
      <ul>
        <li>
          <strong>poniżej 18,5</strong> — niedowaga;
        </li>
        <li>
          <strong>18,5–24,9</strong> — prawidłowa waga;
        </li>
        <li>
          <strong>25–29,9</strong> — nadwaga;
        </li>
        <li>
          <strong>30 i więcej</strong> — otyłość.
        </li>
      </ul>
      <p>
        BMI nie odróżnia mięśni od tłuszczu, więc u sportowców z dużą masą
        mięśniową może być zawyżone.
      </p>
    </>
  );
};
