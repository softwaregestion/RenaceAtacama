
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

export default function BioOMA() {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const SHAPE_PATH =
  "M560.78.5H202.22c-13.66,0-24.72,11.07-24.72,24.72v41.71c0,14.12-11.45,25.57-25.57,25.57H25.22c-13.66,0-24.72,11.07-24.72,24.72v445.55c0,13.66,11.07,24.72,24.72,24.72h450.34c13.66,0,24.72-11.07,24.72-24.72v-48.17c0-10.55,8.56-19.11,19.11-19.11h41.38c13.66,0,24.72-11.07,24.72-24.72V25.22c0-13.66-11.07-24.72-24.72-24.72Z";

  const docs = useMemo(
    () =>
      DOC_KEYS.map((key, i) => ({
        title: t(`bioOma.${key}Title`),
        text: t(`bioOma.${key}Text`),
        text2: t(`bioOma.${key}Text2`),
      })),
    [t]
  );
 

    [t]
 
  return (
    <PageWrapper noTopPadding>
      <section id="bioOma" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-[#9b734c] text-sm font-medium mb-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9b734c] shrink-0" />
              {t("bioOma.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              {t("bioOma.title")}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
              {t("bioOma.subtitle")}
            </p> 
              <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
              {t("bioOma.Twosubtitle")}
            </p> 
          </motion.div>
        </div>        
      </section>
   <section className="py-16 lg:py-20 bg-gradient-to-br from-[#9b734c]/5 via-background to-[#5b2500]/5">      
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto"
          >
            <div className="relative flex-shrink-0 w-full max-w-md aspect-[586/588]">
              <div
                className="relative w-full h-full overflow-hidden shadow-2xl"
                style={{ clipPath: "url(#escarabajos-shape)" }}
              >
                <img
                  src="/fundadoras/FundadoraOma.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>  
            </div>
            <div className="flex-1 text-center lg:text-left space-y-4">
                <p className="text-xl md:text-2xl font-bold text-foreground font-display max-w-2xl">
                {t("bioOma.NameFounder")}
              </p>
              <div className="inline-flex items-center gap-2 text-primary">
               
                <span className="text-sm font-semibold uppercase tracking-wide">{t("bioOma.SubtFounder")}</span>
              </div>
            
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("bioOma.DescFounder")}
              </p>
            </div>
          </motion.div>
        </div> 
       
      </section>
<section className="py-16 lg:py-20 bg-gradient-to-br from-[#9b734c]/5 via-background to-[#5b2500]/5"> 
 <div className="flex justify-center bg-transparent">
              <a href="https://omagroup.com.br/" target="_blank" rel="noopener noreferrer">
              <img                 
                src="/oma-logo-blancoynegro.png"
                alt={t("bioOMA.title")}
                className="h-20 lg:h-28 w-auto object-contain"
              />
            </a>
          </div>
</section>




    </PageWrapper>
  );
}
