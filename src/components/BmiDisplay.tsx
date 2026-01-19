import { createMemo } from "solid-js";
import { BMI, type BmiCategory } from "~/constants";
import { useLocale } from "~/i18n";

// Статические значения, вычисляемые один раз при загрузке модуля
const BMI_SCALE_RANGE = BMI.SCALE_MAX - BMI.SCALE_MIN;

const BMI_ZONE_WIDTHS = {
  underweight: ((BMI.UNDERWEIGHT - BMI.SCALE_MIN) / BMI_SCALE_RANGE) * 100,
  normal: ((BMI.NORMAL - BMI.UNDERWEIGHT) / BMI_SCALE_RANGE) * 100,
  overweight: ((BMI.OVERWEIGHT - BMI.NORMAL) / BMI_SCALE_RANGE) * 100,
  obese: ((BMI.SCALE_MAX - BMI.OVERWEIGHT) / BMI_SCALE_RANGE) * 100,
};

const BMI_LABEL_POSITIONS = {
  underweight: ((BMI.UNDERWEIGHT - BMI.SCALE_MIN) / BMI_SCALE_RANGE) * 100,
  normal: ((BMI.NORMAL - BMI.SCALE_MIN) / BMI_SCALE_RANGE) * 100,
  overweight: ((BMI.OVERWEIGHT - BMI.SCALE_MIN) / BMI_SCALE_RANGE) * 100,
};

const BMI_CATEGORY_CLASSES: Record<BmiCategory, string> = {
  underweight: "bg-info/20 text-info",
  normal: "bg-success/20 text-success",
  overweight: "bg-warning/20 text-warning",
  obese: "bg-error/20 text-error",
};

/** Пропсы передаются как accessor'ы для сохранения реактивности SolidJS */
interface BmiDisplayProps {
  weight: () => string;
  height: () => string;
}

function BmiDisplay(props: BmiDisplayProps) {
  const { t } = useLocale();

  const bmi = createMemo(() => {
    const w = Number(props.weight());
    const h = Number(props.height());

    if (!w || !h) return 0;

    const heightInMeters = h / 100;
    return w / (heightInMeters * heightInMeters);
  });

  const bmiCategory = createMemo((): BmiCategory | null => {
    const value = bmi();
    if (value === 0) return null;
    if (value < BMI.UNDERWEIGHT) return "underweight";
    if (value < BMI.NORMAL) return "normal";
    if (value < BMI.OVERWEIGHT) return "overweight";
    return "obese";
  });

  const bmiCategoryLabel = createMemo(() => {
    const category = bmiCategory();
    if (!category) return "";
    return {
      underweight: t().bmiUnderweight,
      normal: t().bmiNormal,
      overweight: t().bmiOverweight,
      obese: t().bmiObese,
    }[category];
  });

  const bmiCategoryClass = createMemo(
    () => BMI_CATEGORY_CLASSES[bmiCategory() ?? "normal"]
  );

  const bmiPosition = createMemo(() => {
    const value = bmi();
    if (value === 0) return 0;
    const position = ((value - BMI.SCALE_MIN) / BMI_SCALE_RANGE) * 100;
    return Math.max(0, Math.min(100, position));
  });

  return (
    <div class="relative bg-base-100 rounded-2xl px-4 py-2 md:py-4 shadow-xl w-full max-w-md md:max-w-xl">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-medium text-base-content/70">{t().bmi}</span>
        <div class={`flex items-center gap-2 ${bmi() > 0 ? "" : "invisible"}`}>
          <span class="text-xl font-bold">{bmi().toFixed(1)}</span>
          <span
            class={`text-sm font-medium px-2 py-0.5 rounded ${bmiCategoryClass()}`}
          >
            {bmiCategoryLabel()}
          </span>
        </div>
      </div>

      {/* BMI Scale */}
      <div class="relative">
        {/* Scale bar with colored zones */}
        <div class="h-3 rounded-full flex overflow-hidden">
          <div
            class="bg-info h-full"
            style={{ width: `${BMI_ZONE_WIDTHS.underweight}%` }}
            title={t().bmiUnderweight}
          />
          <div
            class="bg-success h-full"
            style={{ width: `${BMI_ZONE_WIDTHS.normal}%` }}
            title={t().bmiNormal}
          />
          <div
            class="bg-warning h-full"
            style={{ width: `${BMI_ZONE_WIDTHS.overweight}%` }}
            title={t().bmiOverweight}
          />
          <div
            class="bg-error h-full"
            style={{ width: `${BMI_ZONE_WIDTHS.obese}%` }}
            title={t().bmiObese}
          />
        </div>

        {/* Marker */}
        {bmi() > 0 && (
          <div
            class="absolute top-0 w-1 h-3 bg-base-content rounded-full transition-all duration-300"
            style={{ left: `calc(${bmiPosition()}% - 2px)` }}
          />
        )}

        {/* Scale labels */}
        <div class="relative mt-1 text-xs text-base-content/50 h-4">
          <span class="absolute left-0 -translate-x-1/2">{BMI.SCALE_MIN}</span>
          <span
            class="absolute -translate-x-1/2"
            style={{ left: `${BMI_LABEL_POSITIONS.underweight}%` }}
          >
            {BMI.UNDERWEIGHT}
          </span>
          <span
            class="absolute -translate-x-1/2"
            style={{ left: `${BMI_LABEL_POSITIONS.normal}%` }}
          >
            {BMI.NORMAL}
          </span>
          <span
            class="absolute -translate-x-1/2"
            style={{ left: `${BMI_LABEL_POSITIONS.overweight}%` }}
          >
            {BMI.OVERWEIGHT}
          </span>
          <span class="absolute right-0 translate-x-1/2">{BMI.SCALE_MAX}</span>
        </div>
      </div>
    </div>
  );
}

export default BmiDisplay;
