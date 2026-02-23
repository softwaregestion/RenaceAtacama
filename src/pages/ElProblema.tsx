import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Users, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, FeatureCard, StatsBlock, CTABand } from "@/components/shared";

const STAT_KEYS = [
  { valueKey: "elProblema.stats.more300", labelKey: "elProblema.stats.hectares" },
  { valueKey: "elProblema.stats.39000", labelKey: "elProblema.stats.tonsYear" },
  { valueKey: "elProblema.stats.growing", labelKey: "elProblema.stats.growingLabel" },
] as const;

const IMPACTO_ICONS = [Droplets, Users, TrendingDown] as const;
const IMPACTO_KEYS = ["ambiental", "social", "economico"] as const;

export default function ElProblema() {
  const { t } = useTranslation();
  const stats = STAT_KEYS.map((s) => ({ value: t(s.valueKey), label: t(s.labelKey) }));
  const impactos = IMPACTO_KEYS.map((key, i) => ({
    title: t(`elProblema.${key}.title`),
    text: t(`elProblema.${key}.text`),
    icon: IMPACTO_ICONS[i],
  }));

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-24">
        <PageHeader
          title={t("elProblema.title")}
          text={t("elProblema.subtitle")}
          className="mb-16"
        />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-card border border-border text-center hover:border-primary hover:shadow-xl transition-all"
            >
              <StatsBlock value={s.value} label={s.label} className="!text-center" />
            </div>
          ))}
        </motion.section>

        <SectionAccent className="mb-6">{t("elProblema.impacts")}</SectionAccent>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          {t("elProblema.threeDimensions")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {impactos.map((item, i) => (
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
