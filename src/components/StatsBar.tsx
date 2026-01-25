import { motion } from "framer-motion";
import businessPerson from "@/assets/business-person-1.jpg";
import presentation from "@/assets/presentation.jpg";

const stats = [
  { number: "125", suffix: "+", label: "Business Coach" },
  { number: "240", suffix: "+", label: "Happy Clients" },
  { number: "99", suffix: "%", label: "Success Rate" },
];

export function StatsBar() {
  return (
    <section className="py-6 lg:py-8 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy rounded-3xl p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Image Section */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <img 
                  src={businessPerson} 
                  alt="Team member" 
                  className="w-14 h-14 rounded-full border-2 border-navy object-cover"
                />
                <img 
                  src={presentation} 
                  alt="Team member" 
                  className="w-14 h-14 rounded-full border-2 border-navy object-cover"
                />
              </div>
              <div className="text-primary-foreground">
                <p className="text-sm text-primary-foreground/70">Trusted By</p>
                <p className="font-semibold">1000+ Businesses</p>
              </div>
            </div>

            {/* Stats */}
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 lg:justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">📊</span>
                </div>
                <div className="text-primary-foreground">
                  <p className="text-2xl lg:text-3xl font-bold">
                    {stat.number}
                    <span className="text-primary">{stat.suffix}</span>
                  </p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
