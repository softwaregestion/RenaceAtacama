import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Users, Zap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, FeatureCard, StepCard, CTABand } from "@/components/shared";

const EJES = [
  { title: "Ambiental", icon: Leaf },
  { title: "Social", icon: Users },
  { title: "Comunitario", icon: Zap },
  { title: "Económico", icon: Briefcase },
];

const RESULTADOS = [
  { step: "01", title: "Transformar", text: "Residuos en recursos, con foco inicial en textiles.", variant: "light" as const },
  { step: "02", title: "Crear", text: "Empleo local, formación y emprendimiento circular.", variant: "light" as const },
  { step: "03", title: "Restaurar", text: "Recuperación del desierto y protección del ecosistema.", variant: "gradient" as const },
  { step: "04", title: "Conectar", text: "Alianzas entre comunidad, industria e instituciones.", variant: "dark" as const },
];

export default function LaPropuesta() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-24">
        <PageHeader
          title="La propuesta"
          text="Renace Atacama responde a los desafíos del territorio transformando desechos en oportunidades. Un modelo de acción circular basado en sostenibilidad, innovación y comunidad."
          className="mb-20"
        />

        <SectionAccent className="mb-6">Ejes de acción</SectionAccent>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          Cuatro pilares del proyecto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {EJES.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <FeatureCard
                icon={e.icon}
                title={e.title}
                className="text-center [&>div]:mx-auto"
              />
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 px-6 lg:px-12 bg-cream-dark rounded-3xl mb-16"
        >
          <SectionAccent className="mb-6">Qué logramos</SectionAccent>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Resultados esperados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10">
            Un plan claro para transformar el problema en un sistema sustentable, replicable y con
            impacto real.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTADOS.map((r, i) => (
              <motion.div
                key={r.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <StepCard
                  step={r.step}
                  title={r.title}
                  description={r.text}
                  variant={r.variant}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          <Button asChild variant="hero" size="lg" className="gap-2 rounded-full px-10">
            <Link to={ROUTES.contacto}>
              Sumarme al proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <CTABand
        headline="¿Listo para sumarte? Juntos regeneramos el Desierto de Atacama."
        cta={
          <Button asChild size="lg" className="rounded-full bg-white text-navy hover:bg-white/90 px-10 gap-2">
            <Link to={ROUTES.contacto}>
              Quiero unirme
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        }
      />
    </PageWrapper>
  );
}
