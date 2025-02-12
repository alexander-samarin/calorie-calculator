interface NumberInputProps {
  label: string;
  value: string;
  onInput: (value: string) => void;
  placeholder: string;
}

function NumberInput(props: NumberInputProps) {
  const handleInput = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    const filteredValue = target.value.replace(/[^0-9.,]/g, "");
    const normalizedValue = filteredValue.replace(/,/g, ".");
    props.onInput(normalizedValue);
  };

  return (
    <label>
      <span class="label pl-4 mb-1">{props.label}</span>
      <input
        type="text"
        inputMode="decimal"
        placeholder={props.placeholder}
        class="input input-lg w-full"
        value={props.value}
        onInput={handleInput}
        pattern="[0-9.,]*"
      />
    </label>
  );
}

export default NumberInput;
