import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Life Coaching",
    description: "Personal development and mindset transformation for lasting success.",
  },
  {
    icon: Target,
    title: "Marketing",
    description: "Strategic marketing solutions to grow your brand visibility.",
  },
  {
    icon: TrendingUp,
    title: "Analytics",
    description: "Data-driven insights to optimize your business performance.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Build and engage with your community for sustainable growth.",
  },
];

export function ExpertiseSection() {
  return (
    <section className="py-20 lg:py-28 bg-background" id="about">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              EXPERTISE YOU CAN
              <br />
              TRUST,{" "}
              <span className="font-script text-primary italic font-normal">Results</span>{" "}
              YOU CAN SEE
            </h2>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-foreground">
                  +987
                </p>
                <p className="text-muted-foreground mt-2">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-foreground">
                  100<span className="text-primary">%</span>
                </p>
                <p className="text-muted-foreground mt-2">Success Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
