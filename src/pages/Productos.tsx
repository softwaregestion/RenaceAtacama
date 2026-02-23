import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";

const CAT_KEYS = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7"] as const;

export default function Productos() {
  const { t } = useTranslation();
  const categorias = useMemo(
    () =>
      CAT_KEYS.map((key) => ({
        title: t(`productos.${key}`),
        items: (t(`productos.${key}Items`, { returnObjects: true }) as string[]) || [],
      })),
    [t]
  );

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title={t("productos.title")}
          text={t("productos.subtitle")}
          className="mb-12"
        />
        <SectionAccent className="mb-10">{t("productos.categories")}</SectionAccent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
              className="p-6 rounded-3xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
