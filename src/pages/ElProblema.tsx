import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Users, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, FeatureCard, StatsBlock, CTABand } from "@/components/shared";

const STATS = [
  { value: "Más de 300", label: "hectáreas afectadas" },
  { value: "39.000", label: "toneladas de residuos al año" },
  { value: "Un impacto", label: "que crece sin control" },
];

const IMPACTOS = [
  {
    title: "Impacto Ambiental",
    text: "Contaminación del suelo, aire y agua. Daño a la flora y fauna del Desierto de Atacama.",
    icon: Droplets,
  },
  {
    title: "Impacto Social",
    text: "Afectación directa a comunidades cercanas, riesgos sanitarios y deterioro de calidad de vida.",
    icon: Users,
  },
  {
    title: "Impacto Económico",
    text: "Costos de limpieza, pérdida de valor territorial y presión sobre recursos públicos.",
    icon: TrendingDown,
  },
];

export default function ElProblema() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-24">
        <PageHeader
          title="El basural textil del desierto"
          text="Los vertederos ilegales en Alto Hospicio se han convertido en uno de los mayores focos de contaminación del norte de Chile, afectando biodiversidad, salud pública y economía regional."
          className="mb-16"
        />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-card border border-border text-center hover:border-primary hover:shadow-xl transition-all"
            >
              <StatsBlock value={s.value} label={s.label} className="!text-center" />
            </div>
          ))}
        </motion.section>

        <SectionAccent className="mb-6">Impactos</SectionAccent>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          Tres dimensiones de la crisis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {IMPACTOS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.text}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 px-6 lg:px-12 bg-cream-dark rounded-3xl text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-display max-w-2xl mx-auto">
            Una crisis que demanda acción inmediata.
          </p>
          <Button asChild variant="hero" size="lg" className="gap-2 rounded-full px-10">
            <Link to={ROUTES.laPropuesta}>
              Conocer nuestra solución
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
