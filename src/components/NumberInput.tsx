import { Component } from "solid-js";

interface NumberInputProps {
  label: string;
  value: string;
  onInput: (value: string) => void;
  placeholder: string;
}

const NumberInput: Component<NumberInputProps> = (props) => {
  const handleBeforeInput = (e: InputEvent): void => {
    const { data } = e;
    if (!data) return;

    const currentValue = (e.currentTarget as HTMLInputElement).value;

    // Block any character that is not a digit, comma, or period.
    if (/[^0-9,.]/.test(data)) {
      e.preventDefault();
      return;
    }

    // Prevent entering an additional comma or period if one already exists.
    if (
      (data.includes(",") || data.includes(".")) &&
      (currentValue.includes(",") || currentValue.includes("."))
    ) {
      e.preventDefault();
    }
  };

  const handleInput = (e: Event): void => {
    const target = e.currentTarget as HTMLInputElement;
    // Normalize input: replace commas with periods.
    const normalizedValue = target.value.replace(/,/g, ".");
    props.onInput(normalizedValue);
  };

  return (
    <label class="block">
      <span class="label pl-4 mb-1">{props.label}</span>
      <input
        type="text"
        inputMode="decimal"
        placeholder={props.placeholder}
        class="input input-lg w-full"
        value={props.value}
        onBeforeInput={handleBeforeInput}
        onInput={handleInput}
        pattern="[0-9.,]*"
      />
    </label>
  );
};

export default NumberInput;
