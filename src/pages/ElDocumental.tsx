import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, FeatureCard, CTABand } from "@/components/shared";

const DOCS = [
  {
    title: "Documental para Streaming",
    text: "Orientado a plataformas de streaming, divulgará la problemática, las causas y las soluciones propuestas con alcance internacional.",
    icon: Globe,
  },
  {
    title: "Documental Comunitario",
    text: "En colaboración con nuestro canal asociado, seguirá la experiencia en terreno, la organización comunitaria y el impacto real de las acciones.",
    icon: Users,
  },
  {
    title: "Impacto y visibilidad",
    text: "Contenido para campañas y movilización, posicionando a Renace Atacama como referente en innovación y sustentabilidad.",
    icon: Film,
  },
];

const FEATURES = [
  { label: "Alcance Global", sub: "Plataformas de streaming internacionales" },
  { label: "Impacto Social", sub: "Conciencia y movilización comunitaria" },
  { label: "Doble Producción", sub: "Dos documentales complementarios" },
];

export default function ElDocumental() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title="El documental"
          text="El proyecto contempla la producción de dos largometrajes documentales que evidenciarán la problemática en la región y el proceso de creación del polo de innovación y limpieza del desierto."
          className="mb-20"
        />

        <SectionAccent className="mb-10">Dos documentales</SectionAccent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {DOCS.map((doc, i) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <FeatureCard
                icon={doc.icon}
                title={doc.title}
                description={doc.text}
                to={ROUTES.contacto}
                linkLabel="Quiero unirme"
              />
            </motion.div>
          ))}
        </div>

        <SectionAccent className="mb-6">Características</SectionAccent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-cream-dark border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <p className="font-bold text-foreground">{f.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{f.sub}</p>
            </motion.div>
          ))}
        </div>
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
