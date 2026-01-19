export default () => {
  return (
    <>
      <h1 class="text-lg">
        Accurate Calorie & Macro Calculator with Custom Settings
      </h1>

      <p>
        <strong>CalorieCalc.cc</strong> is an advanced nutrition planning tool.
        Unlike simple calorie counters, our calculator allows you to not only
        find your daily energy needs but also flexibly adjust goals—from mild
        weight loss to aggressive cutting—and set individual{" "}
        <strong>protein and fat targets per kg of body weight</strong>.
      </p>

      <h2 class="text-lg">1. Activity Level</h2>
      <p>
        To accurately calculate your Basal Metabolic Rate (Mifflin-St Jeor
        equation), select the option that best matches your lifestyle:
      </p>
      <ul>
        <li>
          <strong>Sedentary:</strong> Office job, no sports, minimal physical
          movement.
        </li>
        <li>
          <strong>1-3 workouts per week:</strong> Light activity (fitness, long
          walks, occasional exercise).
        </li>
        <li>
          <strong>3-5 workouts per week:</strong> Moderate activity (regular gym
          visits, running).
        </li>
        <li>
          <strong>6-7 workouts per week:</strong> High activity (daily intense
          training).
        </li>
        <li>
          <strong>Workouts 2 times a day:</strong> Extreme activity
          (professional athletes, heavy physical labor).
        </li>
      </ul>

      <h2 class="text-lg">
        2. Goal Selection: Weight Loss, Gain, or Maintenance
      </h2>
      <p>
        Our service adapts the calculation to your specific goal. Choose your
        preferred intensity:
      </p>

      <h3 class="text-lg">📉 For Weight Loss (Calorie Deficit)</h3>
      <ul>
        <li>
          <strong>Mild Weight Loss:</strong> Small deficit (~10%). Ideal for
          muscle preservation and comfortable weight reduction without stress or
          hunger.
        </li>
        <li>
          <strong>Moderate Weight Loss:</strong> Optimal balance (~15% deficit).
          The "gold standard" for most dieters.
        </li>
        <li>
          <strong>Aggressive Weight Loss:</strong> Significant deficit (~20%).
          Suitable for quick "cutting" over a short period. Requires high
          protein intake to protect muscles.
        </li>
      </ul>

      <h3 class="text-lg">📈 For Muscle Gain (Calorie Surplus)</h3>
      <ul>
        <li>
          <strong>Slow Bulk:</strong> Minimal surplus ("Lean Bulk"). Allows for
          muscle growth with minimal fat accumulation.
        </li>
        <li>
          <strong>Moderate Bulk:</strong> Standard mode for hypertrophy (muscle
          growth).
        </li>
        <li>
          <strong>Fast Bulk:</strong> Maximum surplus. Suitable for
          "hardgainers" (ectomorphs) who struggle to gain weight.
        </li>
      </ul>

      <p>
        <strong>Maintenance:</strong> Calculates your TDEE (Total Daily Energy
        Expenditure) to keep your weight stable.
      </p>

      <h2 class="text-lg">3. Professional Macro Settings (Protein & Fat)</h2>
      <p>
        The key advantage of <strong>CalorieCalc.cc</strong> is the ability to
        manually set nutrient intake per kilogram of body weight. This is
        critical for creating a professional nutrition plan:
      </p>
      <ul>
        <li>
          <strong>Protein per kg:</strong> Usually recommended between{" "}
          <i>1.2 to 2.5 g/kg</i>. During weight loss (cutting), protein needs
          increase to protect muscles from breakdown (catabolism).
        </li>
        <li>
          <strong>Fat per kg:</strong> Recommended range is{" "}
          <i>0.8 - 1.2 g/kg</i>. Dietary fats are essential for hormonal health.
          We do not recommend dropping below 0.7 g/kg.
        </li>
        <li>
          <strong>Carbs:</strong> Calculated automatically from the remaining
          calories. Carbohydrates provide energy for high-intensity training and
          brain function.
        </li>
      </ul>

      <h2 class="text-lg">4. Body Mass Index (BMI) Calculator</h2>
      <p>
        In addition to calories and macros, <strong>CalorieCalc.cc</strong>{" "}
        automatically calculates your <strong>BMI (Body Mass Index)</strong> — a
        key indicator for assessing the relationship between weight and height.
        A visual scale with colored zones helps you quickly understand which
        category you fall into:
      </p>
      <ul>
        <li>
          <strong>Underweight</strong> (BMI &lt; 18.5): May indicate nutritional
          deficiency or health issues.
        </li>
        <li>
          <strong>Normal</strong> (BMI 18.5–24.9): Optimal range for most
          adults.
        </li>
        <li>
          <strong>Overweight</strong> (BMI 25–29.9): Consider paying attention
          to nutrition and physical activity.
        </li>
        <li>
          <strong>Obesity</strong> (BMI ≥ 30): Increased health risks,
          consultation with a specialist is recommended.
        </li>
      </ul>

      <h2 class="text-lg">Frequently Asked Questions (FAQ)</h2>
      <h3 class="text-lg">How much protein should I eat for weight loss?</h3>
      <p>
        In a calorie deficit (especially during "Aggressive Weight Loss"), it is
        recommended to increase protein to 1.8–2.2 g per kg of body weight to
        ensure your body burns fat, not muscle tissue.
      </p>

      <h3 class="text-lg">Should I choose Slow or Fast Bulk?</h3>
      <p>
        "Fast Bulk" often leads to excessive fat gain. If you aim for a lean,
        muscular physique, choose "Slow" or "Moderate Bulk" and monitor your
        progress weekly.
      </p>
    </>
  );
};
