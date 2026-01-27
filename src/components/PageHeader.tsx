import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  text: string;
  className?: string;
}

export function PageHeader({ title, text, className = "" }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{text}</p>
    </motion.header>
  );
}
