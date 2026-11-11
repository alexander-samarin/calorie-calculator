import {
  createSignal,
  createUniqueId,
  Show,
  type Component,
  type Ref,
} from "solid-js";

type NumberInputProps = {
  label: string;
  value: string;
  onInput: (value: string) => void;
  placeholder: string;
  /** Value is present but not acceptable */
  invalid?: boolean;
  /** Shown below the field while it is invalid */
  errorText?: string;
  /** "numeric" for whole numbers (no decimal key on mobile keyboards) */
  inputMode?: "decimal" | "numeric";
  /**
   * Enter key: "next" calls onNext (move to the following field),
   * "done" closes the keyboard. Also sets the label of the mobile Enter key.
   */
  enterKeyHint?: "next" | "done";
  onNext?: () => void;
  ref?: Ref<HTMLInputElement>;
};

const NumberInput: Component<NumberInputProps> = (props) => {
  const hintId = createUniqueId();
  const [focused, setFocused] = createSignal(false);
  // Don't flag the value while the user is still typing it (e.g. "1" → "180")
  const showError = () => Boolean(props.invalid) && !focused();

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

  // iOS shows "next"/"done" on the Enter key but does nothing on its own
  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key !== "Enter" || e.isComposing) return;
    e.preventDefault();
    if (props.enterKeyHint === "next" && props.onNext) props.onNext();
    else (e.currentTarget as HTMLInputElement).blur();
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
        ref={props.ref}
        inputMode={props.inputMode ?? "decimal"}
        enterkeyhint={props.enterKeyHint}
        autocomplete="off"
        placeholder={props.placeholder}
        class="input input-lg w-full"
        classList={{ "input-error": showError() }}
        value={props.value}
        onBeforeInput={handleBeforeInput}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-invalid={showError()}
        aria-describedby={showError() ? hintId : undefined}
        pattern="[0-9.,]*"
      />
      <Show when={showError() && props.errorText}>
        <span id={hintId} class="label text-error pl-4 mt-1">
          {props.errorText}
        </span>
      </Show>
    </label>
  );
};

export default NumberInput;
