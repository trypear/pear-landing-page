"use client";

import { useState, useCallback } from "react";

export function useToggle(
  initialState: boolean = false,
): [boolean, () => void] {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, toggle];
}
