import { FC } from "react";
import { IncrementCount } from "./counter";
import { fetchCount } from "./fetcher";

export const Counter: FC = async () => {
  const c = await fetchCount();

  return (
    <div className="grid gap-y-2 justify-items-center">
      <p>
        <output className="grid grid-cols-[auto,auto] gap-x-2">
          Cached Count
          <span className="text-fuchsia-500 font-bold">{c}</span>
        </output>
      </p>
      <IncrementCount count={c} />
    </div>
  );
};
