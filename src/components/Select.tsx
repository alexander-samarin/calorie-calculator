import { For } from "solid-js";

interface SelectOption {
  label: string;
  value: number | string;
}

interface SelectProps {
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  options: SelectOption[];
}

function Select(props: SelectProps) {
  return (
    <label>
      <span class="label pl-4 mb-1">{props.label}</span>
      <select
        value={props.value}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        class="select select-lg w-full"
      >
        <For each={props.options}>
          {(option) => <option value={option.value}>{option.label}</option>}
        </For>
      </select>
    </label>
  );
}

export default Select;
