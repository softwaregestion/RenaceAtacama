import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import businessPerson from "@/assets/business-person-1.jpg";

export function TestimonialCard() {
  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="flex-shrink-0">
                <img 
                  src={businessPerson} 
                  alt="Client testimonial" 
                  className="w-32 h-32 lg:w-48 lg:h-48 rounded-2xl object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="text-center lg:text-left">
                <Quote className="w-10 h-10 text-primary mb-4 mx-auto lg:mx-0" />
                
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                  YOUR{" "}
                  <span className="font-script text-primary italic font-normal">Success</span>{" "}
                  STORY COULD BE{" "}
                  <span className="font-script text-primary italic font-normal">Next!</span>
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  "Working with Busify transformed our entire business approach. 
                  The strategic guidance and personalized coaching helped us 
                  achieve results we never thought possible. Our revenue 
                  increased by 150% in just one year."
                </p>
                
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div>
                    <p className="font-semibold text-foreground">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CEO, TechVentures Inc.</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
