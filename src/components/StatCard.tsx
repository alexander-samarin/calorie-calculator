type StatCardProps = {
  title: string;
  value: number | string;
  unit?: string;
  isPrimary?: boolean;
};

function StatCard(props: StatCardProps) {
  return (
    <div
      class="stat place-items-center p-2 md:p-4"
      classList={{ "bg-primary": props.isPrimary }}
    >
      <div
        class="stat-title mb-2 text-center whitespace-normal"
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
