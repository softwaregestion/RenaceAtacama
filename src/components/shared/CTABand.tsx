import { ReactNode } from "react";

interface CTABandProps {
  headline: string;
  cta: ReactNode;
  className?: string;
}

export function CTABand({ headline, cta, className = "" }: CTABandProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-r from-[#9b734c] to-[#5b2500] py-16 lg:py-20 ${className}`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left max-w-2xl">
          {headline}
        </h2>
        <div className="shrink-0">{cta}</div>
      </div>
    </section>
  );
}
