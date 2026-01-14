type StatCardProps = {
  title: string;
  value: number | string;
  unit?: string;
  isPrimary?: boolean;
};

function StatCard(props: StatCardProps) {
  return (
    <div
      class="stat place-items-center px-1 py-2 md:px-2 md:py-4 flex flex-col"
      classList={{ "bg-primary": props.isPrimary }}
    >
      <div
        class="stat-title text-center whitespace-normal grow"
        classList={{ "text-primary-content": props.isPrimary }}
      >
        {props.title}
      </div>
      <div
        class="stat-value leading-none"
        classList={{
          "text-primary-content": props.isPrimary,
          "opacity-50": props.value === 0,
        }}
      >
        {props.value}
      </div>
      {props.unit && (
        <div
          class="stat-desc"
          classList={{ "text-primary-content": props.isPrimary }}
        >
          {props.unit}
        </div>
      )}
    </div>
  );
}

export default StatCard;
