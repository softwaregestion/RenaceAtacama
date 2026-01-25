import { motion } from "framer-motion";

const logos = ["LOGO", "LOGO", "LOGO", "LOGO", "LOGO", "LOGO"];

export function LogoMarquee() {
  return (
    <section className="py-12 bg-cream-dark overflow-hidden">
      <div className="relative flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 text-foreground/30 hover:text-foreground/50 transition-colors"
            >
              <span className="text-3xl font-bold tracking-wider">{logo}</span>
              <span className="text-primary text-2xl">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
