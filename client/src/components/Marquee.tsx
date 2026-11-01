import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  label: string;
  reverse?: boolean;
};

/** A lightweight, accessible horizontal marquee with a seamless repeated track. */
export function Marquee({ children, className = "", label, reverse = false }: MarqueeProps) {
  return (
    <div
      className={`local-marquee ${className}`.trim()}
      data-reverse={reverse ? "true" : "false"}
      data-pause-on-hover="true"
      role="group"
      aria-label={label}
      tabIndex={0}
    >
      <div className="local-marquee-track">
        <div className="local-marquee-group">{children}</div>
        <div className="local-marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
