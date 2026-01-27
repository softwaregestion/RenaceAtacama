import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FrostedCardProps {
  children: ReactNode;
  className?: string;
}

export function FrostedCard({ children, className }: FrostedCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/30 bg-white/20 backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-white/25 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
