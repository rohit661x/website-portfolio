"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useHoverIntent } from "@/lib/useHoverIntent";

export type Role = {
  org: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
  linkedin?: string;
};

export default function ExperienceRow({ role }: { role: Role }) {
  const reduce = useReducedMotion();
  const hasBullets = role.bullets.length > 0;
  const { expanded, interactionProps } = useHoverIntent(hasBullets);

  return (
    <div
      {...interactionProps}
      className="group flex flex-col md:flex-1 md:justify-center p-md border-b border-outline-variant last:border-b-0 border-l-2 border-l-transparent hover:border-l-[color:var(--accent)] hover:bg-surface-container transition-all duration-200 cursor-default"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-xs md:gap-md">
          <span className="text-base font-bold text-primary group-hover:text-[color:var(--accent)] group-hover:translate-x-1 transition-all">
            {role.org}
          </span>
          <span className="text-base text-on-surface-variant">{role.title}</span>
        </div>
        <div className="font-meta-technical text-meta-technical text-outline mt-sm md:mt-0 md:text-right shrink-0">
          {role.location} • {role.period}
        </div>
      </div>

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
            <div className="flex flex-col gap-sm pt-md">
              {role.linkedin && (
                <a
                  href={role.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-fit font-meta-technical text-meta-technical text-[color:var(--accent)] hover:underline cursor-pointer"
                >
                  LinkedIn
                </a>
              )}
              <ul className="flex flex-col gap-xs">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-sm font-meta-technical text-meta-technical text-on-surface-variant"
                  >
                    <span className="text-[color:var(--accent)] mt-[2px] shrink-0">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
