type RangeInputProps = {
  label: string;
  valueLabel: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
};

function RangeInput(props: RangeInputProps) {
  return (
    <label class="px-2 mt-2">
      <span class="label pl-2 mb-1">
        <span class="font-bold">{props.valueLabel}</span> {props.label}
      </span>
      <input
        class="range range-primary w-full"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onInput={(e) => props.onChange(Number(e.currentTarget.value))}
      />
    </label>
  );
}

export default RangeInput;
