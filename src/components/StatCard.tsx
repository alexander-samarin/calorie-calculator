type StatCardProps = {
  title: string;
  value: number | string;
  isPrimary?: boolean;
};

function StatCard(props: StatCardProps) {
  return (
    <div
      class="stat place-items-center p-2 pb-0 md:p-4"
      classList={{ "bg-primary": props.isPrimary }}
    >
      <div
        class="stat-title text-center whitespace-normal"
        classList={{ "text-primary-content": props.isPrimary }}
      >
        {props.title}
      </div>
      <div
        class="stat-value"
        classList={{
          "text-primary-content": props.isPrimary,
          "opacity-50": props.value === 0,
        }}
      >
        {props.value}
      </div>
    </div>
  );
}

export default StatCard;
