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

export default function JointVenture() {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const docs = useMemo(
    () =>
      DOC_KEYS.map((key, i) => ({
        title: t(`jointVenture.${key}Title`),
        text: t(`jointVenture.${key}Text`),
        text2: t(`jointVenture.${key}Text2`),
      })),
    [t]
  );
 

    [t]
 
  return (
    <PageWrapper noTopPadding>
      <section id="jointVenture" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#391800] text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-[#9b734c] text-sm font-medium mb-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9b734c] shrink-0" />
              {t("jointVenture.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-white">
              {t("jointVenture.title")}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed text-white">
              {t("jointVenture.subtitle")}
            </p> 
              <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed text-white">
              {t("jointVenture.Twosubtitle")}
            </p>  
            <p></p>      
          </motion.div>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-16 ">
          {docs.map((doc, i) => {
         
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-center bg-[#391800]"
              >
                
                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-3">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doc.text}
                </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">                 
                  {doc.text2}
                </p>
              </motion.div>
            );
          })}
        </div> 
        </div>
      </section>
    </PageWrapper>
  );
}
