import { Suspense } from "react";
import { Counter } from "./(counter)/count";

export const experimental_ppr = true;

export default async function Home() {
  return (
    <div className="grid gap-y-4 justify-items-center">
      <h1 className="text-2xl/tight font-bold">Counter Demo</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Counter />
      </Suspense>
    </div>
  );
}
