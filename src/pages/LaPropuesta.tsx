import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Users, Zap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, FeatureCard, StepCard, CTABand } from "@/components/shared";

const EJES_ICONS = [Leaf, Users, Zap, Briefcase] as const;
const EJES_KEYS = ["ambiental", "social", "comunitario", "economico"] as const;
const RESULTADOS_CONFIG = [
  { step: "01", key: "transformar", variant: "light" as const },
  { step: "02", key: "crear", variant: "light" as const },
  { step: "03", key: "restaurar", variant: "gradient" as const },
  { step: "04", key: "conectar", variant: "dark" as const },
];

export default function LaPropuesta() {
  const { t } = useTranslation();
  const ejes = EJES_KEYS.map((key, i) => ({
    title: t(`laPropuesta.${key}`),
    icon: EJES_ICONS[i],
  }));
  const resultados = RESULTADOS_CONFIG.map((r) => ({
    step: r.step,
    title: t(`laPropuesta.resultados.${r.key}`),
    text: t(`laPropuesta.resultados.${r.key}Text`),
    variant: r.variant,
  }));

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-24">
        <PageHeader
          title={t("laPropuesta.title")}
          text={t("laPropuesta.subtitle")}
          className="mb-20"
        />

        <SectionAccent className="mb-6">{t("laPropuesta.ejes")}</SectionAccent>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          {t("laPropuesta.fourPillars")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ejes.map((e, i) => (
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
          <SectionAccent className="mb-6">{t("laPropuesta.whatWeAchieve")}</SectionAccent>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("laPropuesta.expectedResults")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10">
            {t("laPropuesta.expectedResultsSub")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resultados.map((r, i) => (
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
              {t("laPropuesta.joinProject")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <CTABand
        headline={t("index.cta.headline")}
        cta={
          <Button asChild size="lg" className="rounded-full bg-white text-navy hover:bg-white/90 px-10 gap-2">
            <Link to={ROUTES.contacto}>
              {t("index.cta.button")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        }
      />
    </PageWrapper>
  );
}
