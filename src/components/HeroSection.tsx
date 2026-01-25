import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMeeting from "@/assets/hero-meeting.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";

export function HeroSection() {
  return (
    <section className="pt-32 pb-8 lg:pt-40 lg:pb-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Business Coaching
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              SUCCESS STARTS{" "}
              <span className="font-script text-primary italic font-normal">With</span>
              <br />
              THE <span className="text-primary">Right</span> COACH
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md">
              We work collaboratively with organizations to develop strategies that 
              resonate with their target audience and drive measurable results.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Discover More
                <ArrowRight className="w-4 h-4" />
              </Button>
              <button className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Play className="w-4 h-4 ml-1" fill="currentColor" />
                </div>
                <span className="font-medium">Watch Video</span>
              </button>
            </div>
          </motion.div>

          {/* Right Content - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroMeeting} 
                  alt="Business coaching session" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-orange/20 rounded-full blur-3xl"></div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 lg:-left-12 bg-card rounded-2xl shadow-xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={teamMeeting} 
                    alt="Team" 
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">250+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
