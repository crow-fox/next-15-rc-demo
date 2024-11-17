import { brand, fallback, InferOutput, number, object, pipe } from "valibot";

const COUNTER_COLLECTION = "counters";
const COUNTER_DOC = "1";
export const INIT_COUNT = 0;

export function getCounterDocRef(db: FirebaseFirestore.Firestore) {
  return db.collection(COUNTER_COLLECTION).doc(COUNTER_DOC);
}

export const CounterDocSchema = pipe(
  fallback(
    object({
      count: number(),
    }),
    {
      count: INIT_COUNT,
    }
  ),
  brand("CounterDoc")
);

export type CounterDoc = InferOutput<typeof CounterDocSchema>;
