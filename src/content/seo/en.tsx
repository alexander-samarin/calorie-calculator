export default () => {
  return (
    <>
      <h2 class="text-lg font-extrabold mb-[0.8em]">
        How to calculate your calorie and macro needs
      </h2>

      <p>
        The calculator gives you three numbers: your basal metabolic rate, your
        daily energy expenditure and your calorie target for the chosen goal.
        From the target it works out protein, fat and carbs in grams, and from
        your weight and height, your body mass index. It is free, needs no
        sign-up, and everything you enter stays in your browser.
      </p>

      <h3 class="text-lg">
        1. Basal metabolic rate: the Mifflin-St Jeor equation
      </h3>
      <p>
        Basal metabolic rate (BMR) is the energy your body uses at rest: for
        breathing and for keeping the heart, brain and other organs working. It
        is calculated with the Mifflin-St Jeor equation:
      </p>
      <ul>
        <li>
          <strong>Women:</strong> 10 × weight (kg) + 6.25 × height (cm) − 5 ×
          age − 161
        </li>
        <li>
          <strong>Men:</strong> 10 × weight (kg) + 6.25 × height (cm) − 5 × age
          + 5
        </li>
      </ul>

      <h3 class="text-lg">2. Daily expenditure: the activity factor</h3>
      <p>
        BMR is multiplied by a factor that accounts for workouts and movement
        during the day:
      </p>
      <ul>
        <li>
          <strong>Sedentary lifestyle</strong> — 1.2: office work, no sport.
        </li>
        <li>
          <strong>1–3 workouts per week</strong> — 1.375.
        </li>
        <li>
          <strong>3–5 workouts per week</strong> — 1.55.
        </li>
        <li>
          <strong>6–7 workouts per week</strong> — 1.725.
        </li>
        <li>
          <strong>2 workouts per day</strong> — 1.9: professional sport or heavy
          physical labour.
        </li>
      </ul>
      <p>
        If you are torn between two options, pick the lower one: people
        overestimate their activity more often than they underestimate it.
      </p>

      <h3 class="text-lg">3. Calorie target for your goal</h3>
      <p>Daily expenditure is multiplied by the factor of the chosen goal:</p>
      <ul>
        <li>
          <strong>Maintenance</strong> — no change: the calories that keep your
          weight where it is.
        </li>
        <li>
          <strong>Mild weight loss</strong> — 10% deficit. Slow but easy to
          stick to.
        </li>
        <li>
          <strong>Moderate weight loss</strong> — 15% deficit. Suits most
          people.
        </li>
        <li>
          <strong>Aggressive weight loss</strong> — 20% deficit. Faster but
          harder; at this deficit getting enough protein matters most.
        </li>
        <li>
          <strong>Slow bulk</strong> — 10% surplus. The least extra fat.
        </li>
        <li>
          <strong>Moderate bulk</strong> — 15% surplus.
        </li>
        <li>
          <strong>Fast bulk</strong> — 20% surplus. Weight goes up faster, but
          you gain noticeably more fat along with muscle.
        </li>
      </ul>

      <h3 class="text-lg">4. Protein, fat and carbs</h3>
      <p>
        Protein and fat are set in grams per kilogram of body weight, and carbs
        fill the remaining calories. 1 g of protein or carbs has 4 kcal, 1 g of
        fat has 9 kcal.
      </p>
      <ul>
        <li>
          <strong>Protein:</strong> 1.2 to 2.5 g per kg, 1.5 by default. When
          losing weight or doing strength training, 1.6–2.2 g is commonly used
          to preserve muscle.
        </li>
        <li>
          <strong>Fat:</strong> 0.8 to 1.2 g per kg, 1.0 by default. Fat is
          needed to produce hormones, so cutting it hard is not a good idea.
        </li>
        <li>
          <strong>Carbs:</strong> whatever is left of the calorie target after
          protein and fat.
        </li>
      </ul>
      <p>
        <strong>If your BMI is above 25</strong>, protein and fat are calculated
        not for your actual weight but for the weight at BMI 25 for your height:
        for example, 68 kg at 165 cm. Fat tissue barely raises protein needs, so
        using the full weight would overstate the target and leave no room for
        carbs. Calories are still based on your actual weight.
      </p>

      <h2 class="text-lg">Example calculation</h2>
      <p>
        A woman, 30 years old, 165 cm, 60 kg, 1–3 workouts per week, goal:
        moderate weight loss, protein 1.8 g/kg, fat 1.0 g/kg:
      </p>
      <ol>
        <li>
          BMR: 10 × 60 + 6.25 × 165 − 5 × 30 − 161 ≈ <strong>1320 kcal</strong>.
        </li>
        <li>
          Daily expenditure: 1320 × 1.375 ≈ <strong>1815 kcal</strong>.
        </li>
        <li>
          Weight-loss target: 1815 × 0.85 ≈ <strong>1543 kcal</strong>.
        </li>
        <li>
          Protein: 60 × 1.8 = <strong>108 g</strong> (432 kcal). Fat: 60 × 1.0 ={" "}
          <strong>60 g</strong> (540 kcal).
        </li>
        <li>
          Carbs: (1543 − 432 − 540) ÷ 4 ≈ <strong>143 g</strong>.
        </li>
      </ol>

      <h2 class="text-lg">Body mass index (BMI)</h2>
      <p>
        BMI is your weight in kilograms divided by your height in metres
        squared. The calculator shows it on a scale with the WHO categories:
      </p>
      <ul>
        <li>
          <strong>below 18.5</strong> — underweight;
        </li>
        <li>
          <strong>18.5–24.9</strong> — normal weight;
        </li>
        <li>
          <strong>25–29.9</strong> — overweight;
        </li>
        <li>
          <strong>30 and above</strong> — obesity.
        </li>
      </ul>
      <p>
        BMI does not tell muscle from fat, so for athletes with a lot of muscle
        it can read too high.
      </p>
    </>
  );
};
