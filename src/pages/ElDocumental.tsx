import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, FeatureCard, CTABand } from "@/components/shared";

const DOC_ICONS = [Globe, Users, Film] as const;
const DOC_KEYS = ["doc1", "doc2", "doc3"] as const;
const FEATURE_KEYS = ["feature1", "feature2", "feature3"] as const;

export default function ElDocumental() {
  const { t } = useTranslation();
  const docs = DOC_KEYS.map((key, i) => ({
    title: t(`elDocumental.${key}Title`),
    text: t(`elDocumental.${key}Text`),
    icon: DOC_ICONS[i],
  }));
  const features = FEATURE_KEYS.map((key) => ({
    label: t(`elDocumental.${key}`),
    sub: t(`elDocumental.${key}Sub`),
  }));

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title={t("elDocumental.title")}
          text={t("elDocumental.subtitle")}
          className="mb-20"
        />

        <SectionAccent className="mb-10">{t("elDocumental.twoDocs")}</SectionAccent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {docs.map((doc, i) => (
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
                linkLabel={t("elDocumental.joinCta")}
              />
            </motion.div>
          ))}
        </div>

        <SectionAccent className="mb-6">{t("elDocumental.features")}</SectionAccent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {features.map((f, i) => (
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
        headline={t("index.cta.headline")}
        cta={
          <Button asChild size="lg" className="rounded-full bg-white text-navy hover:bg-white/90 px-10 gap-2">
            <Link to={ROUTES.contacto}>
              {t("elDocumental.joinCta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        }
      />
    </PageWrapper>
  );
}
