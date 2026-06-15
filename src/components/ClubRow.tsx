"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useHoverIntent } from "@/lib/useHoverIntent";

export type Club = {
  org: string;
  title: string;
  period: string;
  bullets: string[];
};

export default function ClubRow({
  club,
}: {
  club: Club;
}) {
  const reduce = useReducedMotion();
  const hasBullets = club.bullets.length > 0;
  const { expanded, interactionProps } = useHoverIntent(hasBullets);

  return (
    <div
      {...interactionProps}
      className="group flex flex-col gap-xs p-md rounded-sm hover:bg-surface-container/50 transition-all duration-300 cursor-default"
    >
      <span className="font-body-md text-base font-bold text-primary group-hover:translate-x-1 transition-transform">
        {club.org}
      </span>
      <span className="font-meta-technical text-sm text-on-surface-variant">
        {club.title} • {club.period}
      </span>

      <AnimatePresence initial={false}>
        {hasBullets && expanded && (
          <motion.div
            key="bullets"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-xs pt-sm">
              {club.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-sm font-meta-technical text-meta-technical text-on-surface-variant"
                >
                  <span className="text-[color:var(--accent)] mt-[2px] shrink-0">—</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
