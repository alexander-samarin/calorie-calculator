export default () => {
  return (
    <>
      <h2 class="text-lg font-extrabold mb-[0.8em]">
        Cómo calcular tus calorías y macros diarios
      </h2>

      <p>
        La calculadora obtiene tres cifras: tu metabolismo basal, tu gasto
        energético diario y tus calorías objetivo según la meta elegida. A
        partir de ellas calcula proteínas, grasas y carbohidratos en gramos, y
        con tu peso y estatura, el índice de masa corporal. Es gratis, sin
        registro, y los datos que introduces se quedan en tu navegador.
      </p>

      <h3 class="text-lg">
        1. Metabolismo basal: la fórmula de Mifflin-St Jeor
      </h3>
      <p>
        El metabolismo basal es la energía que el cuerpo gasta en reposo: para
        respirar y mantener en funcionamiento el corazón, el cerebro y otros
        órganos. Se calcula con la fórmula de Mifflin-St Jeor:
      </p>
      <ul>
        <li>
          <strong>Mujeres:</strong> 10 × peso (kg) + 6,25 × estatura (cm) − 5 ×
          edad − 161
        </li>
        <li>
          <strong>Hombres:</strong> 10 × peso (kg) + 6,25 × estatura (cm) − 5 ×
          edad + 5
        </li>
      </ul>

      <h3 class="text-lg">2. Gasto diario: el factor de actividad</h3>
      <p>
        El metabolismo basal se multiplica por un factor que tiene en cuenta los
        entrenamientos y el movimiento durante el día:
      </p>
      <ul>
        <li>
          <strong>Estilo de vida sedentario</strong> — 1,2: trabajo de oficina,
          sin deporte.
        </li>
        <li>
          <strong>1–3 entrenamientos por semana</strong> — 1,375.
        </li>
        <li>
          <strong>3–5 entrenamientos por semana</strong> — 1,55.
        </li>
        <li>
          <strong>6–7 entrenamientos por semana</strong> — 1,725.
        </li>
        <li>
          <strong>2 entrenamientos por día</strong> — 1,9: deporte profesional o
          trabajo físico intenso.
        </li>
      </ul>
      <p>
        Si dudas entre dos opciones, elige la menor: la actividad se sobrestima
        con más frecuencia de la que se subestima.
      </p>

      <h3 class="text-lg">3. Calorías objetivo según tu meta</h3>
      <p>El gasto diario se multiplica por el factor de la meta elegida:</p>
      <ul>
        <li>
          <strong>Mantenimiento</strong> — sin cambios: las calorías que
          mantienen tu peso estable.
        </li>
        <li>
          <strong>Pérdida de peso suave</strong> — déficit del 10%. Lenta, pero
          fácil de sostener.
        </li>
        <li>
          <strong>Pérdida de peso moderada</strong> — déficit del 15%. Adecuada
          para la mayoría.
        </li>
        <li>
          <strong>Pérdida de peso agresiva</strong> — déficit del 20%. Más
          rápida, pero más dura; con este déficit es especialmente importante
          comer suficiente proteína.
        </li>
        <li>
          <strong>Volumen lento</strong> — superávit del 10%. La menor ganancia
          de grasa.
        </li>
        <li>
          <strong>Volumen moderado</strong> — superávit del 15%.
        </li>
        <li>
          <strong>Volumen rápido</strong> — superávit del 20%. El peso sube más
          rápido, pero junto con el músculo se gana bastante más grasa.
        </li>
      </ul>

      <h3 class="text-lg">4. Proteínas, grasas y carbohidratos</h3>
      <p>
        Las proteínas y las grasas se fijan en gramos por kilo de peso corporal,
        y los carbohidratos ocupan las calorías restantes. 1 g de proteína o de
        carbohidratos aporta 4 kcal; 1 g de grasa, 9 kcal.
      </p>
      <ul>
        <li>
          <strong>Proteínas:</strong> de 1,2 a 2,5 g por kg, 1,5 por defecto. Al
          perder peso o con entrenamiento de fuerza se suelen usar 1,6–2,2 g
          para conservar el músculo.
        </li>
        <li>
          <strong>Grasas:</strong> de 0,8 a 1,2 g por kg, 1,0 por defecto. Las
          grasas son necesarias para producir hormonas, así que no conviene
          recortarlas mucho.
        </li>
        <li>
          <strong>Carbohidratos:</strong> todo lo que queda de las calorías
          objetivo después de las proteínas y las grasas.
        </li>
      </ul>
      <p>
        <strong>Si tu IMC es superior a 25</strong>, las proteínas y las grasas
        no se calculan con tu peso real, sino con el peso correspondiente a un
        IMC de 25 para tu estatura: por ejemplo, 68 kg con 165 cm. El tejido
        graso apenas aumenta la necesidad de proteína, así que calcular con el
        peso completo inflaría el objetivo y no dejaría espacio para los
        carbohidratos. Las calorías siguen calculándose con tu peso real.
      </p>

      <h2 class="text-lg">Ejemplo de cálculo</h2>
      <p>
        Mujer, 30 años, 165 cm, 60 kg, 1–3 entrenamientos por semana, meta:
        pérdida de peso moderada, proteínas 1,8 g/kg, grasas 1,0 g/kg:
      </p>
      <ol>
        <li>
          Metabolismo basal: 10 × 60 + 6,25 × 165 − 5 × 30 − 161 ≈{" "}
          <strong>1320 kcal</strong>.
        </li>
        <li>
          Gasto diario: 1320 × 1,375 ≈ <strong>1815 kcal</strong>.
        </li>
        <li>
          Objetivo para perder peso: 1815 × 0,85 ≈ <strong>1543 kcal</strong>.
        </li>
        <li>
          Proteínas: 60 × 1,8 = <strong>108 g</strong> (432 kcal). Grasas: 60 ×
          1,0 = <strong>60 g</strong> (540 kcal).
        </li>
        <li>
          Carbohidratos: (1543 − 432 − 540) ÷ 4 ≈ <strong>143 g</strong>.
        </li>
      </ol>

      <h2 class="text-lg">Índice de masa corporal (IMC)</h2>
      <p>
        El IMC es el peso en kilos dividido entre la estatura en metros al
        cuadrado. La calculadora lo muestra en una escala con las categorías de
        la OMS:
      </p>
      <ul>
        <li>
          <strong>menos de 18,5</strong> — bajo peso;
        </li>
        <li>
          <strong>18,5–24,9</strong> — peso normal;
        </li>
        <li>
          <strong>25–29,9</strong> — sobrepeso;
        </li>
        <li>
          <strong>30 o más</strong> — obesidad.
        </li>
      </ul>
      <p>
        El IMC no distingue entre músculo y grasa, por lo que en deportistas con
        mucha masa muscular puede salir demasiado alto.
      </p>
    </>
  );
};
