import "server-only";

import { parse } from "valibot";
import {
  CounterDoc,
  CounterDocSchema,
  getCounterDocRef,
  INIT_COUNT,
} from "./schema";
import { getDB } from "../firebase";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

export async function fetchCount(): Promise<CounterDoc["count"]> {
  "use cache";
  cacheTag("count");

  const db = getDB();
  const counterDocRef = getCounterDocRef(db);
  try {
    return await getDB().runTransaction(async (transaction) => {
      const doc = await transaction.get(counterDocRef);

      if (!doc.exists) {
        transaction.set(counterDocRef, { count: INIT_COUNT });
        return INIT_COUNT;
      }

      const counterDoc = parse(CounterDocSchema, doc.data());
      return counterDoc.count;
    });
  } catch (e) {
    // Todo: error handling
    console.error(e);
    return INIT_COUNT;
  }
}
