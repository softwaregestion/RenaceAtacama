import { ReactNode } from "react";

interface GradientBandProps {
  children: ReactNode;
  className?: string;
}

export function GradientBand({ children, className = "" }: GradientBandProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-r from-[#9b734c] to-[#5b2500] ${className}`}
    >
      {children}
    </section>
  );
}
