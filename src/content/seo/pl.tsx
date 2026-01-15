export default function SeoEn() {
  return (
    <>
      <h1 class="text-lg">
        Dokładny kalkulator kalorii i makroskładników z indywidualnymi
        ustawieniami
      </h1>

      <p>
        <strong>CalorieCalc.cc</strong> to zaawansowane narzędzie do planowania
        diety. W przeciwieństwie do prostych liczników, nasz kalkulator pozwala
        nie tylko obliczyć zapotrzebowanie kaloryczne, ale także elastycznie
        dopasować cele – od łagodnej redukcji po agresywne odchudzanie – oraz
        ustalić indywidualne normy{" "}
        <strong>białka i tłuszczów na 1 kg masy ciała</strong>.
      </p>

      <h2 class="text-lg">1. Poziom aktywności fizycznej</h2>
      <p>
        Aby dokładnie obliczyć Podstawową Przemianę Materii (wzór Mifflina-St
        Jeora), wybierz swój tryb życia:
      </p>
      <ul>
        <li>
          <strong>Siedzący tryb życia:</strong> Praca biurowa, brak sportu,
          minimalny ruch w ciągu dnia.
        </li>
        <li>
          <strong>1-3 treningi w tygodniu:</strong> Lekka aktywność (fitness,
          długie spacery, rekreacja).
        </li>
        <li>
          <strong>3-5 treningów w tygodniu:</strong> Umiarkowana aktywność
          (regularna siłownia, bieganie).
        </li>
        <li>
          <strong>6-7 treningów w tygodniu:</strong> Wysoka aktywność (codzienne
          intensywne ćwiczenia).
        </li>
        <li>
          <strong>Treningi 2 razy dziennie:</strong> Ekstremalne obciążenie
          (sport zawodowy, ciężka praca fizyczna).
        </li>
      </ul>

      <h2 class="text-lg">2. Wybór celu: Redukcja, Masa lub Utrzymanie</h2>
      <p>
        Nasz serwis adaptuje obliczenia do Twojego aktualnego celu. Wybierz
        tempo zmiany wagi:
      </p>

      <h3 class="text-lg">📉 Dla utraty wagi (Deficyt kaloryczny)</h3>
      <ul>
        <li>
          <strong>Łagodna redukcja:</strong> Mały deficyt (~10-15%). Idealna dla
          zachowania mięśni i komfortowego chudnięcia bez stresu i głodu.
        </li>
        <li>
          <strong>Umiarkowana redukcja:</strong> Optymalny balans (~20%
          deficytu). Złoty środek dla większości osób odchudzających się.
        </li>
        <li>
          <strong>Agresywna redukcja:</strong> Znaczny deficyt (~25%+).
          Odpowiednia dla szybkiej „wycinki” na krótki czas. Wymaga wysokiego
          spożycia białka.
        </li>
      </ul>

      <h3 class="text-lg">
        📈 Dla budowania masy mięśniowej (Nadwyżka kaloryczna)
      </h3>
      <ul>
        <li>
          <strong>Powolne budowanie masy:</strong> Minimalna nadwyżka („czysta
          masa”). Pozwala budować mięśnie z minimalnym przyrostem tkanki
          tłuszczowej.
        </li>
        <li>
          <strong>Umiarkowane budowanie masy:</strong> Standardowy tryb dla
          wzrostu mięśni.
        </li>
        <li>
          <strong>Szybkie budowanie masy:</strong> Maksymalna nadwyżka.
          Odpowiednia dla ektomorfików, którym trudno przybrać na wadze.
        </li>
      </ul>

      <p>
        <strong>Utrzymanie wagi:</strong> Obliczenie zera kalorycznego, przy
        którym Twoja waga pozostanie stabilna.
      </p>

      <h2 class="text-lg">
        3. Profesjonalne ustawienia makroskładników (Białka i Tłuszcze)
      </h2>
      <p>
        Główną zaletą <strong>CalorieCalc.cc</strong> jest możliwość ręcznego
        ustalenia ilości składników odżywczych na kilogram masy ciała. Jest to
        kluczowe dla ułożenia skutecznego planu żywieniowego:
      </p>
      <ul>
        <li>
          <strong>Białko na 1 kg masy ciała:</strong> Zazwyczaj zaleca się od{" "}
          <i>1.2 do 2.5 g/kg</i>. Podczas redukcji i treningów zapotrzebowanie
          na białko wzrasta, aby chronić mięśnie przed rozpadem (katabolizmem).
        </li>
        <li>
          <strong>Tłuszcze na 1 kg masy ciała:</strong> Zalecana norma to{" "}
          <i>0.8 - 1.2 g/kg</i>. Tłuszcze są niezbędne dla układu hormonalnego i
          zdrowia skóry. Nie zalecamy schodzenia poniżej 0.7 g/kg.
        </li>
        <li>
          <strong>Węglowodany:</strong> Obliczane automatycznie z reszty
          kalorii. Dostarczają energii do intensywnych treningów.
        </li>
      </ul>

      <div class="faq-section">
        <h2 class="text-lg">Często zadawane pytania (FAQ)</h2>
        <h3 class="text-lg">Jaki poziom białka wybrać na redukcję?</h3>
        <p>
          Przy deficycie kalorycznym (zwłaszcza przy „Agresywnej redukcji”)
          zaleca się zwiększenie podaży białka do 1.8–2.2 g na kg wagi, aby
          organizm spalał tłuszcz, a nie tkankę mięśniową.
        </p>

        <h3 class="text-lg">Co wybrać: powolne czy szybkie budowanie masy?</h3>
        <p>
          „Szybkie budowanie” często prowadzi do nadmiernego otłuszczenia. Jeśli
          zależy Ci na jakościowej muskulaturze, wybierz „Powolne” lub
          „Umiarkowane budowanie” i monitoruj postępy.
        </p>
      </div>
    </>
  );
}
