import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import handshake from "@/assets/handshake.jpg";
import workspace from "@/assets/workspace.jpg";

export function SuccessStorySection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              Testimonials
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              YOUR{" "}
              <span className="font-script text-primary italic font-normal">Success</span>{" "}
              STORY
              <br />
              COULD BE{" "}
              <span className="font-script text-primary italic font-normal">Next!</span>
            </h2>
            
            {/* Testimonial Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-4 border border-border">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "Exceptional coaching that transformed our business strategy."
                </p>
                <p className="text-xs font-medium text-foreground">- John D.</p>
              </div>
              
              <div className="bg-primary rounded-2xl p-4 text-primary-foreground">
                <p className="text-4xl font-bold mb-2">98<span className="text-2xl">%</span></p>
                <p className="text-sm opacity-80">Customer Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={ceoPortrait} 
                  alt="CEO portrait" 
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="bg-primary/10 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-foreground">99<span className="text-primary">%</span></p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="bg-orange rounded-2xl p-6 text-primary-foreground">
                  <p className="font-script text-2xl mb-2">Quality</p>
                  <p className="text-sm opacity-80">First-class service</p>
                </div>
                <img 
                  src={handshake} 
                  alt="Business handshake" 
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Quote Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 right-4 bg-foreground text-background rounded-full px-4 py-2 text-3xl"
            >
              99
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
