import { getItem, setItem } from "@/utils/localstorage/localStorage.ts";
import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const [state, setState] = useState<[] | Record<string, unknown>[]>(() => {
    return getItem(key) ?? [];
  });
  useEffect(() => {
    if (state.length > 0) {
      setItem(key, state);
      console.log("save in local ");
    }
  }, [state, key]);
  return [state, setState] as const;
}
