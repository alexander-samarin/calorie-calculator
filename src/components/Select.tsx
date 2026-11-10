import { For, Show } from "solid-js";

export type SelectOption = {
  label: string;
  value: number | string;
};

export type SelectOptionGroup = {
  /** Rendered as <optgroup>; null renders the options ungrouped */
  label: string | null;
  options: SelectOption[];
};

type SelectProps = {
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  /** Flat options or groups of options */
  options: SelectOption[] | SelectOptionGroup[];
};

const isGroup = (item: SelectOption | SelectOptionGroup): item is SelectOptionGroup =>
  "options" in item;

function Select(props: SelectProps) {
  const renderOption = (option: SelectOption) => (
    <option value={option.value} selected={option.value === props.value}>
      {option.label}
    </option>
  );

  return (
    <label>
      <span class="label pl-4 mb-1">{props.label}</span>
      <select
        onChange={(e) => props.onChange(e.currentTarget.value)}
        class="select select-lg w-full"
      >
        <For each={props.options as (SelectOption | SelectOptionGroup)[]}>
          {(item) =>
            isGroup(item) ? (
              <Show
                when={item.label}
                fallback={<For each={item.options}>{renderOption}</For>}
              >
                {(label) => (
                  <optgroup label={label()}>
                    <For each={item.options}>{renderOption}</For>
                  </optgroup>
                )}
              </Show>
            ) : (
              renderOption(item)
            )
          }
        </For>
      </select>
    </label>
  );
}

export default Select;
