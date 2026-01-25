import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMeeting from "@/assets/hero-meeting.jpg";
import businessPerson from "@/assets/business-person-1.jpg";

export function HeroSection() {
  return (
    <section className="pt-32 pb-8 lg:pt-40 lg:pb-16 bg-[#F5F5F0] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-[#FF6B35] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
              WELCOME TO BUSIFY
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              SUCCESS STARTS{" "}
              <span className="font-serif text-[#FF6B35] italic font-normal">With</span>
              <br />
              THE <span className="font-serif text-[#FF6B35] italic font-normal">Right</span> COACH
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="gap-2 bg-black hover:bg-gray-900 text-white rounded-full px-8"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Customer avatars and text */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img src={businessPerson} alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-400"></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-500"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">WE HAVE 18K+ CUSTOMER WORD-WIDE</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image with unique shape */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Tags at top right */}
              <div className="absolute top-8 right-8 z-20 flex items-center gap-2 text-sm font-medium text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
                BUSINESS
                <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
                GROWTH
              </div>

              {/* Main Image with organic rounded shape */}
              <div className="relative z-10 overflow-hidden shadow-2xl" style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
              }}>
                <img
                  src={heroMeeting}
                  alt="Business coaching session"
                  className="w-full h-[400px] lg:h-[550px] object-cover"
                />
              </div>

              {/* Video play button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 right-8 z-20 w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              >
                <Play className="w-6 h-6 ml-1 text-white" fill="white" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
