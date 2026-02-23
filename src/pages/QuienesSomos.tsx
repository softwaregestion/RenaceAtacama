import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";

export default function QuienesSomos() {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title={t("quienesSomos.title")}
          text={t("quienesSomos.subtitle")}
          className="mb-16"
        />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-cream-dark border border-border shadow-sm hover:shadow-xl transition-shadow"
        >
          <SectionAccent className="mb-6">{t("quienesSomos.vision")}</SectionAccent>
          <p className="text-xl md:text-2xl font-bold text-foreground max-w-3xl leading-relaxed">
            {t("quienesSomos.visionText")}
          </p>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
