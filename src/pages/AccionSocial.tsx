import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";

export default function AccionSocial() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title="Acción social y comunitaria"
          text="En Renace Atacama creemos que sanar el desierto es también sanar a su gente."
          className="mb-12"
        />
        <SectionAccent className="mb-10">Nuestro compromiso</SectionAccent>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-cream-dark border border-border shadow-sm hover:shadow-xl transition-all mb-16"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Trabajamos junto a comunidades, mujeres, recicladores y jóvenes para fortalecer la
            economía solidaria, la participación y la dignidad en el territorio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-14 px-6 rounded-3xl bg-primary/10 border border-primary/20"
        >
          <p className="text-2xl md:text-3xl font-bold text-foreground font-display max-w-3xl mx-auto">
            Renace Atacama es reconstruir vida y esperanza desde la comunidad.
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
