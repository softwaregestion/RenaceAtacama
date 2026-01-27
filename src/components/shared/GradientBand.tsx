import { ReactNode } from "react";

interface GradientBandProps {
  children: ReactNode;
  className?: string;
}

export function GradientBand({ children, className = "" }: GradientBandProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-r from-primary via-orange-400 to-amber-500 ${className}`}
    >
      {children}
    </section>
  );
}
