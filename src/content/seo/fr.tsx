export default () => {
  return (
    <>
      <h1 class="text-lg">
        Calculateur de Calories et Macros Précis avec Réglages Personnalisés
      </h1>

      <p>
        <strong>CalorieCalc.cc</strong> est un outil avancé de planification
        nutritionnelle. Contrairement aux compteurs simples, notre calculateur
        vous permet non seulement de connaître vos besoins énergétiques, mais
        aussi d'ajuster vos objectifs avec flexibilité — de la perte de poids
        douce à la sèche aggressive — et de définir des normes individuelles de{" "}
        <strong>protéines et lipides par kg de poids</strong>.
      </p>

      <h2 class="text-lg">1. Niveau d'activité physique</h2>
      <p>
        Pour calculer précisément votre métabolisme de base (formule de
        Mifflin-St Jeor), choisissez votre mode de vie :
      </p>
      <ul>
        <li>
          <strong>Sédentaire :</strong> Travail de bureau, pas de sport,
          mouvement minimal.
        </li>
        <li>
          <strong>1-3 entraînements par semaine :</strong> Activité légère
          (fitness, longues marches).
        </li>
        <li>
          <strong>3-5 entraînements par semaine :</strong> Activité modérée
          (salle de sport régulière, jogging).
        </li>
        <li>
          <strong>6-7 entraînements par semaine :</strong> Activité intense
          (entraînements quotidiens).
        </li>
        <li>
          <strong>Entraînements 2 fois par jour :</strong> Charge extrême (sport
          professionnel, travail physique pénible).
        </li>
      </ul>

      <h2 class="text-lg">
        2. Choix de l'objectif : Perte, Prise de masse ou Maintien
      </h2>
      <p>
        Notre service adapte le calcul à votre objectif actuel. Choisissez
        l'intensité du changement de poids :
      </p>

      <h3 class="text-lg">📉 Pour perdre du poids (Déficit calorique)</h3>
      <ul>
        <li>
          <strong>Perte de poids douce :</strong> Petit déficit (~10%). Idéal
          pour préserver les muscles et réduire le poids confortablement sans
          stress ni faim.
        </li>
        <li>
          <strong>Perte de poids modérée :</strong> Équilibre optimal (~15% de
          déficit). Le « standard de référence » pour la plupart des régimes.
        </li>
        <li>
          <strong>Perte de poids rapide (Sèche) :</strong> Déficit significatif
          (~20%+). Convient pour une « sèche » rapide sur une courte période.
          Nécessite un apport élevé en protéines.
        </li>
      </ul>

      <h3 class="text-lg">
        📈 Pour gagner du muscle (Surplus calorique / Prise de masse)
      </h3>
      <ul>
        <li>
          <strong>Prise de masse lente :</strong> Surplus minimal (« Lean Bulk
          »). Permet de gagner du muscle avec une accumulation minimale de
          graisse.
        </li>
        <li>
          <strong>Prise de masse modérée :</strong> Mode standard pour
          l'hypertrophie musculaire.
        </li>
        <li>
          <strong>Prise de masse rapide :</strong> Surplus maximal. Convient aux
          ectomorphes qui ont du mal à prendre du poids.
        </li>
      </ul>

      <p>
        <strong>Maintien du poids :</strong> Calcul des calories de maintenance,
        avec lesquelles votre poids restera stable.
      </p>

      <h2 class="text-lg">
        3. Réglage professionnel des Macros (Protéines et Lipides)
      </h2>
      <p>
        L'avantage principal de <strong>CalorieCalc.cc</strong> est la
        possibilité de définir manuellement la quantité de nutriments par
        kilogramme de poids corporel. C'est essentiel pour créer un plan
        alimentaire efficace :
      </p>
      <ul>
        <li>
          <strong>Protéines par kg de poids :</strong> Généralement recommandé
          entre <i>1.2 et 2.5 g/kg</i>. Lors d'une perte de poids et
          d'entraînements, les besoins en protéines augmentent pour protéger les
          muscles du catabolisme.
        </li>
        <li>
          <strong>Lipides par kg de poids :</strong> La fourchette recommandée
          est de <i>0.8 - 1.2 g/kg</i>. Les lipides (graisses) sont essentiels
          pour la santé hormonale. Nous déconseillons de descendre en dessous de
          0.7 g/kg.
        </li>
        <li>
          <strong>Glucides :</strong> Calculés automatiquement à partir des
          calories restantes. Ils fournissent l'énergie pour des entraînements
          intenses.
        </li>
      </ul>

      <div class="faq-section">
        <h2 class="text-lg">Foire aux questions (FAQ)</h2>
        <h3 class="text-lg">Combien de protéines pour maigrir ?</h3>
        <p>
          En déficit calorique (surtout en « Perte rapide »), il est recommandé
          d'augmenter les protéines à 1.8–2.2 g par kg de poids pour que le
          corps brûle les graisses et non le tissu musculaire.
        </p>

        <h3 class="text-lg">Que choisir : prise de masse lente ou rapide ?</h3>
        <p>
          La « Prise de masse rapide » conduit souvent à une prise de gras
          excessive. Si vous visez une musculature de qualité, choisissez «
          Lente » ou « Modérée » et surveillez vos progrès.
        </p>
      </div>
    </>
  );
};
