import { ReactNode } from "react";

interface SectionAccentProps {
  children: ReactNode;
  className?: string;
}

export function SectionAccent({ children, className = "" }: SectionAccentProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
      {children}
    </div>
  );
}
