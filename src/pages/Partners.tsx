import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";

const LOGOS_PARTNERS = ["LOGO", "LOGO", "LOGO", "LOGO", "LOGO", "LOGO"];
const LOGOS_PATROCINADORES = ["LOGO", "LOGO", "LOGO", "LOGO"];

export default function Partners() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <section className="mb-20">
          <PageHeader
            title="Partners y Asociados"
            text="Renace Atacama es impulsado por organizaciones e instituciones comprometidas con la sostenibilidad."
            className="mb-12"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {LOGOS_PARTNERS.map((logo, i) => (
              <div
                key={i}
                className="aspect-square rounded-3xl bg-card border border-border flex items-center justify-center text-muted-foreground/50 font-bold text-lg hover:border-primary hover:shadow-xl transition-all"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </section>

        <section>
          <SectionAccent className="mb-6">Patrocinadores</SectionAccent>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Entidades que nos apoyan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Entidades públicas que apoyan y patrocinan Renace Atacama.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {LOGOS_PATROCINADORES.map((logo, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-3xl bg-card border border-border flex items-center justify-center text-muted-foreground/50 font-bold hover:border-primary hover:shadow-xl transition-all"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </PageWrapper>
  );
}
