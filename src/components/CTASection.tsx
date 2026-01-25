import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-orange relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-primary-foreground rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            BUSIFY{" "}
            <span className="font-script italic font-normal">Is Always Ready</span>
            <br />
            TO{" "}
            <span className="font-script italic font-normal">Assist</span>{" "}
            YOU
          </h2>
          
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Ready to transform your business? Let's start your success journey today 
            with our expert coaching and strategic guidance.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="gap-2 bg-primary-foreground text-orange hover:bg-primary-foreground/90">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-orange">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
