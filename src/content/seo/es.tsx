export default () => {
  return (
    <>
      <h2 class="text-lg font-extrabold mb-[0.8em]">
        Calculadora precisa de calorías y macronutrientes con ajustes
        personalizados
      </h2>

      <p>
        <strong>CalorieCalc.cc</strong> es una herramienta avanzada para la
        planificación nutricional. A diferencia de los contadores simples,
        nuestra calculadora te permite no solo conocer tu requerimiento
        calórico, sino también ajustar tus objetivos con flexibilidad — desde
        una pérdida de peso ligera hasta una definición agresiva — y establecer
        normas individuales de{" "}
        <strong>proteínas y grasas por kg de peso</strong>.
      </p>

      <h2 class="text-lg">1. Nivel de actividad física</h2>
      <p>
        Para calcular con precisión tu tasa metabólica basal (fórmula Mifflin-St
        Jeor), selecciona tu estilo de vida:
      </p>
      <ul>
        <li>
          <strong>Vida sedentaria:</strong> Trabajo de oficina, sin deporte,
          movimiento mínimo.
        </li>
        <li>
          <strong>1-3 entrenamientos por semana:</strong> Actividad ligera
          (fitness, caminatas largas).
        </li>
        <li>
          <strong>3-5 entrenamientos por semana:</strong> Actividad moderada
          (gimnasio regular, correr).
        </li>
        <li>
          <strong>6-7 entrenamientos por semana:</strong> Actividad alta
          (entrenamientos intensos diarios).
        </li>
        <li>
          <strong>Entrenamientos 2 veces al día:</strong> Carga extrema (deporte
          profesional, trabajo físico pesado).
        </li>
      </ul>

      <h2 class="text-lg">
        2. Selección del objetivo: Adelgazar, Ganar o Mantener
      </h2>
      <p>
        Nuestro servicio adapta el cálculo a tu meta actual. Elige la intensidad
        del cambio de peso:
      </p>

      <h3 class="text-lg">📉 Para perder peso (Déficit calórico)</h3>
      <ul>
        <li>
          <strong>Pérdida ligera:</strong> Pequeño déficit (~10%). Ideal para
          preservar la masa muscular y reducir peso cómodamente sin estrés ni
          hambre.
        </li>
        <li>
          <strong>Pérdida moderada:</strong> Equilibrio óptimo (~15% de
          déficit). El "estándar de oro" para la mayoría de las dietas.
        </li>
        <li>
          <strong>Pérdida agresiva:</strong> Déficit significativo (~20%+).
          Adecuado para una "definición" rápida a corto plazo. Requiere un alto
          consumo de proteínas.
        </li>
      </ul>

      <h3 class="text-lg">
        📈 Para ganar masa muscular (Superávit calórico / Volumen)
      </h3>
      <ul>
        <li>
          <strong>Volumen lento:</strong> Superávit mínimo ("Volumen limpio").
          Permite ganar músculo con la mínima acumulación de grasa.
        </li>
        <li>
          <strong>Volumen moderado:</strong> Modo estándar para la hipertrofia
          muscular.
        </li>
        <li>
          <strong>Volumen rápido:</strong> Superávit máximo. Adecuado para
          ectomorfos a los que les cuesta ganar peso.
        </li>
      </ul>

      <p>
        <strong>Mantenimiento:</strong> Cálculo de calorías de mantenimiento,
        con las que tu peso se mantendrá estable.
      </p>

      <h2 class="text-lg">
        3. Ajuste profesional de Macros (Proteínas y Grasas)
      </h2>
      <p>
        La principal ventaja de <strong>CalorieCalc.cc</strong> es la
        posibilidad de configurar manualmente la cantidad de nutrientes por
        kilogramo de peso corporal. Esto es crítico para crear un plan de
        alimentación efectivo:
      </p>
      <ul>
        <li>
          <strong>Proteínas por kg de peso:</strong> Generalmente se recomienda
          entre <i>1.2 y 2.5 g/kg</i>. Al adelgazar y entrenar, la necesidad de
          proteínas aumenta para proteger los músculos del catabolismo.
        </li>
        <li>
          <strong>Grasas por kg de peso:</strong> El rango recomendado es de{" "}
          <i>0.8 - 1.2 g/kg</i>. Las grasas son esenciales para la salud
          hormonal. No recomendamos bajar de 0.7 g/kg.
        </li>
        <li>
          <strong>Carbohidratos:</strong> Se calculan automáticamente a partir
          de las calorías restantes. Proporcionan energía para entrenamientos
          intensos.
        </li>
      </ul>

      <p>
        <strong>Cálculo con exceso de peso.</strong> Si tu IMC supera 25, las
        proteínas y las grasas no se calculan sobre tu peso total, sino sobre el
        peso que corresponde a un IMC de 25 para tu estatura. El tejido graso
        apenas aumenta la necesidad de proteínas, así que usar el peso total
        sobrestimaría la norma y no dejaría espacio para los carbohidratos. Por
        ejemplo, con 165 cm son 68 kg.
      </p>

      <h2 class="text-lg">4. Calculadora del Índice de Masa Corporal (IMC)</h2>
      <p>
        Además de las calorías y los macronutrientes,{" "}
        <strong>CalorieCalc.cc</strong> calcula automáticamente tu{" "}
        <strong>IMC (Índice de Masa Corporal)</strong> — un indicador clave para
        evaluar la relación entre el peso y la altura. Una escala visual con
        zonas de colores te ayuda a entender rápidamente en qué categoría te
        encuentras:
      </p>
      <ul>
        <li>
          <strong>Bajo peso</strong> (IMC &lt; 18,5): Puede indicar deficiencia
          nutricional o problemas de salud.
        </li>
        <li>
          <strong>Normal</strong> (IMC 18,5–24,9): Rango óptimo para la mayoría
          de los adultos.
        </li>
        <li>
          <strong>Sobrepeso</strong> (IMC 25–29,9): Se recomienda prestar
          atención a la nutrición y la actividad física.
        </li>
        <li>
          <strong>Obesidad</strong> (IMC ≥ 30): Mayor riesgo para la salud, se
          recomienda consultar a un especialista.
        </li>
      </ul>

      <h2 class="text-lg">Preguntas frecuentes (FAQ)</h2>
      <h3 class="text-lg">¿Cuánta proteína elegir para adelgazar?</h3>
      <p>
        En déficit calórico (especialmente en "Pérdida agresiva"), se recomienda
        aumentar la proteína a 1.8–2.2 g por kg de peso para que el cuerpo queme
        grasa y no tejido muscular.
      </p>

      <h3 class="text-lg">¿Qué elegir: volumen lento o rápido?</h3>
      <p>
        El "Volumen rápido" a menudo conduce a una ganancia excesiva de grasa.
        Si buscas una musculatura de calidad, elige "Volumen lento" o "Moderado"
        y monitorea tu progreso.
      </p>

      <h3 class="text-lg">
        ¿Por qué con sobrepeso las proteínas no se calculan sobre mi peso real?
      </h3>
      <p>
        Si el IMC supera 25, la calculadora usa para proteínas y grasas el peso
        que corresponde a un IMC de 25 para tu estatura. La necesidad de
        proteínas depende sobre todo de la masa muscular, no del tejido graso,
        por lo que el peso total la sobrestimaría. Las calorías se siguen
        calculando con tu peso real.
      </p>
    </>
  );
};
