import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";

export default function QuienesSomos() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title="Quiénes somos"
          text="Renace Atacama es una iniciativa impulsada desde Begins, enfocada en innovación, sostenibilidad y economía circular para convertir residuos en oportunidades y regenerar el territorio junto a sus comunidades."
          className="mb-16"
        />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-cream-dark border border-border shadow-sm hover:shadow-xl transition-shadow"
        >
          <SectionAccent className="mb-6">Nuestra visión</SectionAccent>
          <p className="text-xl md:text-2xl font-bold text-foreground max-w-3xl leading-relaxed">
            Restaurar el Desierto de Atacama y activar economías circulares con impacto social,
            ambiental y productivo.
          </p>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
