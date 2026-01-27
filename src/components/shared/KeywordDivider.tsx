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
      className={`flex flex-wrap items-center justify-center gap-4 md:gap-8 py-8 md:py-12 ${className}`}
    >
      {items.map((word, i) => (
        <span key={word} className="flex items-center gap-4 md:gap-8">
          <motion.span
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-foreground/20 uppercase tracking-wider"
          >
            {word}
          </motion.span>
          {i < items.length - 1 && (
            <span className="text-primary text-xl md:text-2xl">•</span>
          )}
        </span>
      ))}
    </div>
  );
}
