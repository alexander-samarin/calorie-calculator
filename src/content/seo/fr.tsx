export default () => {
  return (
    <>
      <h2 class="text-lg font-extrabold mb-[0.8em]">
        Comment calculer vos besoins en calories et en macros
      </h2>

      <p>
        Le calculateur donne trois chiffres : votre métabolisme de base, votre
        dépense énergétique journalière et votre objectif calorique selon le but
        choisi. Il en déduit les protéines, les lipides et les glucides en
        grammes et, à partir du poids et de la taille, l'indice de masse
        corporelle. C'est gratuit, sans inscription, et vos données restent dans
        votre navigateur.
      </p>

      <h3 class="text-lg">
        1. Métabolisme de base : la formule de Mifflin-St Jeor
      </h3>
      <p>
        Le métabolisme de base est l'énergie que le corps dépense au repos :
        pour respirer et faire fonctionner le cœur, le cerveau et les autres
        organes. On le calcule avec la formule de Mifflin-St Jeor :
      </p>
      <ul>
        <li>
          <strong>Femmes :</strong> 10 × poids (kg) + 6,25 × taille (cm) − 5 ×
          âge − 161
        </li>
        <li>
          <strong>Hommes :</strong> 10 × poids (kg) + 6,25 × taille (cm) − 5 ×
          âge + 5
        </li>
      </ul>

      <h3 class="text-lg">
        2. Dépense journalière : le coefficient d'activité
      </h3>
      <p>
        Le métabolisme de base est multiplié par un coefficient qui tient compte
        des entraînements et des déplacements dans la journée :
      </p>
      <ul>
        <li>
          <strong>Mode de vie sédentaire</strong> — 1,2 : travail de bureau, pas
          de sport.
        </li>
        <li>
          <strong>1–3 entraînements par semaine</strong> — 1,375.
        </li>
        <li>
          <strong>3–5 entraînements par semaine</strong> — 1,55.
        </li>
        <li>
          <strong>6–7 entraînements par semaine</strong> — 1,725.
        </li>
        <li>
          <strong>2 entraînements par jour</strong> — 1,9 : sport professionnel
          ou travail physique intense.
        </li>
      </ul>
      <p>
        Si vous hésitez entre deux options, choisissez la plus basse : on
        surestime son activité plus souvent qu'on ne la sous-estime.
      </p>

      <h3 class="text-lg">3. Objectif calorique selon votre but</h3>
      <p>
        La dépense journalière est multipliée par le coefficient du but choisi :
      </p>
      <ul>
        <li>
          <strong>Maintien du poids</strong> — sans changement : les calories
          qui gardent votre poids stable.
        </li>
        <li>
          <strong>Perte de poids légère</strong> — déficit de 10 %. Lente, mais
          facile à tenir.
        </li>
        <li>
          <strong>Perte de poids modérée</strong> — déficit de 15 %. Convient à
          la plupart des gens.
        </li>
        <li>
          <strong>Perte de poids intensive</strong> — déficit de 20 %. Plus
          rapide, mais plus difficile ; avec ce déficit, manger assez de
          protéines est particulièrement important.
        </li>
        <li>
          <strong>Prise de masse lente</strong> — surplus de 10 %. Le moins de
          graisse superflue.
        </li>
        <li>
          <strong>Prise de masse modérée</strong> — surplus de 15 %.
        </li>
        <li>
          <strong>Prise de masse rapide</strong> — surplus de 20 %. Le poids
          monte plus vite, mais on prend nettement plus de graisse avec le
          muscle.
        </li>
      </ul>

      <h3 class="text-lg">4. Protéines, lipides et glucides</h3>
      <p>
        Les protéines et les lipides se règlent en grammes par kilo de poids
        corporel, et les glucides occupent les calories restantes. 1 g de
        protéines ou de glucides apporte 4 kcal, 1 g de lipides 9 kcal.
      </p>
      <ul>
        <li>
          <strong>Protéines :</strong> de 1,2 à 2,5 g par kg, 1,5 par défaut.
          Pendant une perte de poids ou avec la musculation, on prend en général
          1,6–2,2 g pour préserver les muscles.
        </li>
        <li>
          <strong>Lipides :</strong> de 0,8 à 1,2 g par kg, 1,0 par défaut. Les
          lipides sont nécessaires à la production d'hormones, il vaut donc
          mieux ne pas trop les réduire.
        </li>
        <li>
          <strong>Glucides :</strong> tout ce qui reste de l'objectif calorique
          après les protéines et les lipides.
        </li>
      </ul>
      <p>
        <strong>Si votre IMC dépasse 25</strong>, les protéines et les lipides
        ne sont pas calculés sur votre poids réel, mais sur le poids
        correspondant à un IMC de 25 pour votre taille : par exemple 68 kg pour
        165 cm. Le tissu adipeux augmente à peine les besoins en protéines, donc
        un calcul sur le poids total surestimerait l'objectif et ne laisserait
        pas de place aux glucides. Les calories restent calculées sur le poids
        réel.
      </p>

      <h2 class="text-lg">Exemple de calcul</h2>
      <p>
        Une femme de 30 ans, 165 cm, 60 kg, 1–3 entraînements par semaine, but :
        perte de poids modérée, protéines 1,8 g/kg, lipides 1,0 g/kg :
      </p>
      <ol>
        <li>
          Métabolisme de base : 10 × 60 + 6,25 × 165 − 5 × 30 − 161 ≈{" "}
          <strong>1320 kcal</strong>.
        </li>
        <li>
          Dépense journalière : 1320 × 1,375 ≈ <strong>1815 kcal</strong>.
        </li>
        <li>
          Objectif de perte de poids : 1815 × 0,85 ≈ <strong>1543 kcal</strong>.
        </li>
        <li>
          Protéines : 60 × 1,8 = <strong>108 g</strong> (432 kcal). Lipides : 60
          × 1,0 = <strong>60 g</strong> (540 kcal).
        </li>
        <li>
          Glucides : (1543 − 432 − 540) ÷ 4 ≈ <strong>143 g</strong>.
        </li>
      </ol>

      <h2 class="text-lg">Indice de masse corporelle (IMC)</h2>
      <p>
        L'IMC est le poids en kilos divisé par le carré de la taille en mètres.
        Le calculateur l'affiche sur une échelle avec les catégories de l'OMS :
      </p>
      <ul>
        <li>
          <strong>moins de 18,5</strong> — insuffisance pondérale ;
        </li>
        <li>
          <strong>18,5–24,9</strong> — poids normal ;
        </li>
        <li>
          <strong>25–29,9</strong> — surpoids ;
        </li>
        <li>
          <strong>30 et plus</strong> — obésité.
        </li>
      </ul>
      <p>
        L'IMC ne distingue pas le muscle de la graisse : chez les sportifs très
        musclés, il peut donc être surestimé.
      </p>
    </>
  );
};
