"use server";
import { FieldValue } from "firebase-admin/firestore";
import { expireTag } from "next/cache";
import { getDB } from "../firebase";
import { getCounterDocRef } from "./schema";

export async function incrementCount(): Promise<void> {
  const db = getDB();
  const counterDocRef = getCounterDocRef(db);

  try {
    await counterDocRef.update({
      count: FieldValue.increment(1),
    });
    expireTag("count");
  } catch (e) {
    console.error(e);
  }
}
