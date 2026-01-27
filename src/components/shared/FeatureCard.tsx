import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  href?: string;
  to?: string;
  linkLabel?: string;
  className?: string;
  variant?: "default" | "frosted";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  to,
  linkLabel = "Ver más",
  className,
  variant = "default",
}: FeatureCardProps) {
  const linkClass = cn(
    "inline-flex items-center gap-1 mt-4 text-sm font-semibold hover:underline",
    variant === "frosted" ? "text-white" : "text-primary"
  );
  const hasLink = href || to;

  const content = (
    <>
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shrink-0",
          variant === "frosted"
            ? "bg-white/30 text-white"
            : "bg-primary/10 text-primary"
        )}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3
        className={cn(
          "text-lg font-bold mb-2",
          variant === "frosted" ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            "text-sm leading-relaxed",
            variant === "frosted" ? "text-white/90" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
      {hasLink &&
        (to ? (
          <Link to={to} className={linkClass}>
            {linkLabel}
          </Link>
        ) : (
          <a href={href!} className={linkClass}>
            {linkLabel}
          </a>
        ))}
    </>
  );

  const base =
    variant === "frosted"
      ? "rounded-3xl border border-white/30 bg-white/20 backdrop-blur-md p-6 shadow-xl hover:bg-white/25 transition-all"
      : "rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition-all";

  if ((to || href) && variant !== "frosted") {
    const Wrapper = to ? Link : "a";
    const props = to ? { to } : { href: href! };
    return (
      <Wrapper {...props} className={cn(base, "block h-full", className)}>
        {content}
      </Wrapper>
    );
  }

  return <div className={cn(base, "h-full", className)}>{content}</div>;
}
