import { motion } from "framer-motion";

const KEYWORDS = ["RENACE", "ATACAMA", "ECONOMÍA CIRCULAR", "REGENERACIÓN"];

interface KeywordDividerProps {
  items?: string[];
  className?: string;
}

export function KeywordDivider({
  items = KEYWORDS,
  className = "",
}: KeywordDividerProps) {
  return (
    <div
      className={`flex justify-center py-6 md:py-10 min-h-0 ${className}`}
    >
      <div
        className="flex flex-nowrap items-center justify-center gap-x-[clamp(0.35rem,2vw,1.75rem)] max-w-full min-w-0 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1"
      >
        {items.map((word, i) => (
          <span
            key={`${i}-${word}`}
            className="flex flex-nowrap items-center shrink-0 gap-x-[clamp(0.35rem,2vw,1.75rem)]"
          >
            <motion.span
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-bold text-foreground/20 uppercase tracking-wider whitespace-nowrap leading-none text-[clamp(0.5625rem,1.85vw+0.35rem,2.25rem)]"
            >
              {word}
            </motion.span>
            {i < items.length - 1 && (
              <span className="text-primary shrink-0 leading-none text-[clamp(0.45rem,1.1vw+0.2rem,1.5rem)]">
                •
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
