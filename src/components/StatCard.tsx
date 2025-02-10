interface StatCardProps {
  title: string;
  value: number;
  isPrimary?: boolean;
}

function StatCard(props: StatCardProps) {
  return (
    <div
      class={`stat place-items-center p-2 pb-0 md:p-4 ${
        props.isPrimary ? "bg-primary" : ""
      }`}
    >
      <div
        class={`stat-title text-center ${
          props.isPrimary ? "text-primary-content" : ""
        }`}
      >
        {props.title}
      </div>
      <div
        class={`stat-value ${props.isPrimary ? "text-primary-content" : ""}`}
      >
        {props.value}
      </div>
    </div>
  );
}

export default StatCard;
