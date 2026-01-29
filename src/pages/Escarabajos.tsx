import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, CTABand } from "@/components/shared";

const CTAS = [
  { title: "Trabajar por área específica", href: ROUTES.contacto },
  { title: "Colaborar en terreno", href: ROUTES.contacto },
  { title: "Ser embajador/a", href: ROUTES.contacto },
];

export default function Escarabajos() {
  return (
    <PageWrapper noTopPadding>
      {/* Hero Section - mismo diseño que Nosotros y Contenido */}
      <section id="escarabajos" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-[#9b734c] text-sm font-medium mb-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9b734c] shrink-0" />
              Escarabajos del Desierto
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Escarabajos del{" "}
              <span className="font-script text-primary italic font-normal">Desierto</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
              El trabajo de limpieza del desierto nos inspiró en el escarabajo estercolero: un organismo clave que recicla nutrientes, dispersa semillas y actúa como bioindicador de la salud del ecosistema.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido - Cómo sumarte */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-14 px-6 lg:px-12 rounded-3xl bg-primary/10 border border-primary/20 mb-16 text-center shadow-sm"
          >
            <p className="text-xl md:text-2xl font-bold text-foreground font-display max-w-2xl mx-auto">
              Será el símbolo del proyecto y una invitación a sumarse.
            </p>
          </motion.div>

          <SectionAccent className="mb-8">Cómo sumarte</SectionAccent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {CTAS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={c.href}
                  className="block p-6 rounded-3xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all h-full"
                >
                  <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
