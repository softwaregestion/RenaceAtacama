import { motion } from "framer-motion";
import presentation from "@/assets/presentation.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import coaching from "@/assets/coaching.jpg";

const cards = [
  {
    image: presentation,
    items: [
      "Transform your business strategy with proven methods",
      "Unlock your leadership potential and inspire teams"
    ]
  },
  {
    stats: "+25",
    label: "Experience",
    badge: "COACH",
    description: "Strategic guidance from industry experts with decades of combined experience in business transformation and executive coaching."
  },
  {
    title: "BEST ACHIEVEMENT",
    subtitle: "LESSONS FROM TOP BUSINESS COACHES",
    image: teamMeeting
  }
];

export function GuidanceSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-600"></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/20 rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-6">
              <img
                src={cards[0].image}
                alt="Business meeting"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <ul className="space-y-4">
              {cards[0].items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-md bg-white/25 rounded-3xl p-8 border border-white/30 shadow-xl">
              <div className="text-center">
                <p className="text-6xl lg:text-7xl font-bold text-white mb-2 font-script italic">
                  {cards[1].stats}
                </p>
                <p className="text-xl text-white/90 font-medium">
                  {cards[1].label}
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/25 rounded-3xl p-8 border border-white/30 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl text-orange-600">"</div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">{cards[1].badge}</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">→</span>
                  </div>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                {cards[1].description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-md bg-white/95 rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-4">
              <span className="text-orange-600 text-sm font-bold tracking-wider">
                {cards[2].title}
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {cards[2].subtitle}
            </h3>
            <div className="mt-6">
              <img
                src={cards[2].image}
                alt="Business coaching"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
