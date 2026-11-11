import { createUniqueId } from "solid-js";
import { useLocale } from "~/i18n";

type RangeInputProps = {
  label: string;
  valueLabel: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
};

/** Slider with −/+ buttons for precise steps on touch screens */
function RangeInput(props: RangeInputProps) {
  const { t } = useLocale();
  const id = createUniqueId();

  const atMin = () => props.value <= props.min;
  const atMax = () => props.value >= props.max;

  const stepBy = (direction: 1 | -1) => {
    // Round to whole steps: 1.5 + 0.1 must give 1.6, not 1.6000000000000001
    const steps = Math.round(props.value / props.step) + direction;
    const next = Number((steps * props.step).toFixed(10));
    props.onChange(Math.min(props.max, Math.max(props.min, next)));
  };

  // aria-disabled instead of disabled: a disabled button would drop focus
  const buttonClass =
    "btn btn-ghost btn-circle [--size:2.75rem] shrink-0 aria-disabled:opacity-30 aria-disabled:cursor-default";

  /** Minus sign; the plus adds the vertical stroke */
  const Icon = (iconProps: { plus?: boolean }) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      class="size-5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d={iconProps.plus ? "M5 12h14M12 5v14" : "M5 12h14"} />
    </svg>
  );

  return (
    <div class="mt-2">
      <label for={id} class="label pl-4 mb-1">
        <span class="font-bold">{props.valueLabel}</span> {props.label}
      </label>
      <div class="flex items-center gap-2">
        <button
          type="button"
          class={buttonClass}
          aria-label={`${t().decrease}: ${props.label}`}
          aria-disabled={atMin()}
          onClick={() => !atMin() && stepBy(-1)}
        >
          <Icon />
        </button>
        <input
          id={id}
          class="range range-primary flex-1 min-w-0"
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          onInput={(e) => props.onChange(Number(e.currentTarget.value))}
        />
        <button
          type="button"
          class={buttonClass}
          aria-label={`${t().increase}: ${props.label}`}
          aria-disabled={atMax()}
          onClick={() => !atMax() && stepBy(1)}
        >
          <Icon plus />
        </button>
      </div>
    </div>
  );
}

export default RangeInput;
