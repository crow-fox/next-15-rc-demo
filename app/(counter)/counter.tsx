"use client";

import { FC, useActionState, useOptimistic } from "react";
import { incrementCount } from "./action";

type Props = {
  count: number;
};

export const IncrementCount: FC<Props> = (props) => {
  const [count, increment, isPending] = useActionState<number>(
    async (currentCount) => {
      addOptimistic(1);
      await incrementCount();
      return currentCount + 1;
    },
    props.count
  );

  const [displayCount, addOptimistic] = useOptimistic<number, number>(
    count,
    (currentCount, optimisticValue) => {
      return currentCount + optimisticValue;
    }
  );

  return (
    <div className="grid gap-4 justify-items-center">
      <p>
        <output className="grid grid-cols-[auto,auto] gap-x-2">
          Optimistically Count
          <span className="text-fuchsia-500 font-bold">{displayCount}</span>
        </output>
      </p>

      <form action={increment}>
        <button
          type="submit"
          className="inline-grid  text-stone-800 bg-[linear-gradient(to_right,theme('colors.fuchsia.200'),theme('colors.fuchsia.500'))] py-1 px-2 rounded-md"
        >
          {isPending ? "..." : "+"} Increment
        </button>
      </form>
    </div>
  );
};
