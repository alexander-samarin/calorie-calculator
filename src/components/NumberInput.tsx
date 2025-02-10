interface NumberInputProps {
  label: string;
  value: string;
  onInput: (value: string) => void;
  placeholder: string;
}

function NumberInput(props: NumberInputProps) {
  return (
    <label>
      <span class="label pl-4 mb-1">{props.label}</span>
      <input
        type="number"
        placeholder={props.placeholder}
        class="input input-lg w-full"
        value={props.value}
        onInput={(e) => props.onInput(e.currentTarget.value)}
      />
    </label>
  );
}

export default NumberInput;
