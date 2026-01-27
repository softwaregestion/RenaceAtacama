import { cn } from "@/lib/utils";

interface StatsBlockProps {
  value: string;
  label: string;
  className?: string;
}

export function StatsBlock({ value, label, className }: StatsBlockProps) {
  return (
    <div className={cn("text-center md:text-left", className)}>
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{value}</p>
      <p className="text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
