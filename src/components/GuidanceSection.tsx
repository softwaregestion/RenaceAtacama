import { motion } from "framer-motion";
import presentation from "@/assets/presentation.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import coaching from "@/assets/coaching.jpg";

export function GuidanceSection() {
  return (
    <section className="py-20 lg:py-28 bg-beige" id="services">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            SUCCESS{" "}
            <span className="font-script text-primary italic font-normal">Starts</span>{" "}
            WITH THE RIGHT{" "}
            <span className="font-script text-primary italic font-normal">Guidance</span>
          </h2>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group overflow-hidden rounded-3xl"
          >
            <img 
              src={presentation} 
              alt="Business presentation" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold">
              01
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group overflow-hidden rounded-3xl"
          >
            <img 
              src={teamMeeting} 
              alt="Team collaboration" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold">
              02
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group overflow-hidden rounded-3xl"
          >
            <img 
              src={coaching} 
              alt="One on one coaching" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold">
              03
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
