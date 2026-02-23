import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";

export default function AccionSocial() {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title={t("accionSocial.title")}
          text={t("accionSocial.subtitle")}
          className="mb-12"
        />
        <SectionAccent className="mb-10">{t("accionSocial.commitment")}</SectionAccent>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-cream-dark border border-border shadow-sm hover:shadow-xl transition-all mb-16"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {t("accionSocial.text")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-14 px-6 rounded-3xl bg-primary/10 border border-primary/20"
        >
          <p className="text-2xl md:text-3xl font-bold text-foreground font-display max-w-3xl mx-auto">
            {t("accionSocial.quote")}
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
