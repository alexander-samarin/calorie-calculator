import { For } from "solid-js";
import StatCard from "./StatCard";

interface StatItem {
  title: string;
  value: number;
  unit: string;
  isPrimary?: boolean;
}

interface StatsRowProps {
  items: StatItem[];
}

function StatsRow(props: StatsRowProps) {
  return (
    <div class="stats grid grid-cols-3 w-full max-w-md md:max-w-xl mb-2 md:mb-4 bg-base-100 shadow-xl">
      <For each={props.items}>
        {(item) => (
          <StatCard
            title={item.title}
            value={item.value}
            unit={item.unit}
            isPrimary={item.isPrimary}
          />
        )}
      </For>
    </div>
  );
}

export default StatsRow;
