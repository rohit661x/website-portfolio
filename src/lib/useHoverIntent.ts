"use client";

import { useEffect, useRef, useState } from "react";

// Hover-intent timing: dwell before opening so a deliberate hover (not an
// accidental pass-over) reveals content; a short grace before closing avoids
// flicker on a quick graze-out-and-back. Touch devices toggle instantly.
const OPEN_DELAY_MS = 300;
const CLOSE_DELAY_MS = 150;

export function useHoverIntent(enabled: boolean) {
  const [expanded, setExpanded] = useState(false);
  // Assume hover-capable for SSR/first paint (desktop default); correct on mount.
  const [hoverCapable, setHoverCapable] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHoverCapable(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setHoverCapable(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Clear any pending open/close timer on unmount.
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const schedule = (open: boolean, delay: number) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setExpanded(open), delay);
  };

  // Desktop: hover opens after a dwell, closes after a short grace.
  // Touch: tap toggles instantly (intent is already explicit).
  const interactionProps =
    enabled && hoverCapable
      ? {
          onMouseEnter: () => schedule(true, OPEN_DELAY_MS),
          onMouseLeave: () => schedule(false, CLOSE_DELAY_MS),
        }
      : enabled
        ? {
            onClick: () => {
              if (timer.current) clearTimeout(timer.current);
              setExpanded((v) => !v);
            },
          }
        : {};

  return { expanded, interactionProps };
}
