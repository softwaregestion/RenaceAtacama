import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  /** light | cream | dark | gradient */
  variant?: "light" | "cream" | "dark" | "gradient";
}

export function PageSection({
  children,
  className = "",
  variant = "light",
}: PageSectionProps) {
  const bg =
    variant === "light"
      ? "bg-background"
      : variant === "cream"
        ? "bg-cream-dark"
        : variant === "dark"
          ? "bg-navy text-primary-foreground"
          : "bg-gradient-to-r from-[#9b734c]/5 to-[#5b2500]/5";

  return (
    <section className={cn("py-20 lg:py-28", bg, className)}>
      <div className="container mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}
