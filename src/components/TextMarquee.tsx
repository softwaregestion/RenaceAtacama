import { motion } from "framer-motion";

export function TextMarquee() {
  const items = ["BUSINESS", "GROWTH", "GREAT", "SUCCESS", "STRATEGY"];
  
  return (
    <section className="py-8 bg-cream-dark overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-5xl md:text-7xl font-bold stroke-text-light">
              {item}
            </span>
            <span className="mx-8 text-primary text-4xl">★</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
