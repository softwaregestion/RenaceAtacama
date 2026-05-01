import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Film, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { CTABand, PageSection } from "@/components/shared";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";


const DOC_KEYS = ["doc1", "doc2"] as const;

/** Posiciones asimétricas para cada imagen dentro del contenedor (object-position) */
const OBJECT_POSITIONS = [
  "50% 50%",
  "50% 30%",
  "50% 50%",
  "50% 40%",
  "50% 50%",
  "50% 40%",
  "50% 50%",
];

export default function BioBeginns() {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const docs = useMemo(
    () =>
      DOC_KEYS.map((key, i) => ({
        title: t(`bioBeginns.${key}Title`),
        text: t(`bioBeginns.${key}Text`),
        text2: t(`bioBeginns.${key}Text2`),
      })),
    [t]
  );
 

    [t]
 
  return (
    <PageWrapper noTopPadding>
      <section id="bioBeginns" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-[#9b734c] text-sm font-medium mb-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9b734c] shrink-0" />
              {t("bioBeginns.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              {t("bioBeginns.title")}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
              {t("bioBeginns.subtitle")}
            </p>       
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#9b734c]/5 via-background to-[#5b2500]/5"> 
        <div className="flex justify-center bg-transparent">
              <a href="https://www.beginss.com/" target="_blank" rel="noopener noreferrer">
                  <img                 
                    src="/beginns-logo-blancoynegro.png"
                    alt={t("bioOMA.title")}
                    className="h-20 lg:h-28 w-auto object-contain"
                  />
              </a>
              </div>  
      </section>
    </PageWrapper>
  );
}
