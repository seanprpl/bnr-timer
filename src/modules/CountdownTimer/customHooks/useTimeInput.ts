import { useState, useEffect } from "react";
import { getSeconds } from "../getSeconds";

export default function useTimeInput(timeInput: string) {
  const [rawSeconds, setRawSeconds] = useState(0);

  useEffect(() => {
    const derivedSeconds = getSeconds(timeInput);
    setRawSeconds(derivedSeconds);
  }, [timeInput]);

  return [rawSeconds, setRawSeconds] as const; // overrides TS useState return type inference
}