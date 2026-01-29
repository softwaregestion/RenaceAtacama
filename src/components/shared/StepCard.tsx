import { cn } from "@/lib/utils";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  variant?: "light" | "gradient" | "dark";
  className?: string;
}

export function StepCard({
  step,
  title,
  description,
  variant = "light",
  className,
}: StepCardProps) {
  const isDark = variant === "dark" || variant === "gradient";

  return (
    <div
      className={cn(
        "rounded-3xl p-6 transition-all duration-300 hover:shadow-xl",
        variant === "light" && "bg-card border border-border hover:border-primary",
        variant === "gradient" &&
          "bg-gradient-to-br from-[#9b734c] to-[#5b2500] border border-white/30 text-white",
        variant === "dark" && "bg-navy text-primary-foreground border border-navy",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center font-bold mb-4",
          variant === "light" && "bg-primary text-primary-foreground",
          variant === "gradient" && "bg-white/30 text-white",
          variant === "dark" && "bg-primary text-primary-foreground"
        )}
      >
        {step}
      </div>
      <h3
        className={cn(
          "text-xl font-bold mb-2",
          isDark && "text-white"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-sm leading-relaxed",
          isDark ? "text-white/90" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    </div>
  );
}
