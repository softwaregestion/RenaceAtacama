import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your current situation and identify opportunities for growth.",
    color: "bg-primary",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Custom strategy development tailored to your business goals.",
    color: "bg-orange",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Execute the plan with our expert guidance and support.",
    color: "bg-navy",
  },
  {
    number: "04",
    title: "Growth",
    description: "Monitor results and optimize for continuous improvement.",
    color: "bg-primary",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            GUIDING YOU{" "}
            <span className="font-script text-primary italic font-normal">Every</span>{" "}
            STEP OF THE{" "}
            <span className="font-script text-primary italic font-normal">Way.</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all h-full">
                <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-primary-foreground font-bold mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {step.description}
                </p>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-border"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
