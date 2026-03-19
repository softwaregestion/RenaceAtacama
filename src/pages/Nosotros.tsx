import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TeamMember {
  id: string;
  name: string;
  linkedin: string;
  image: string;
}

function getI18nStringArray(t: TFunction, key: string): string[] | undefined {
  const v = t(key, { returnObjects: true });
  return Array.isArray(v) ? (v as string[]) : undefined;
}

/** Perfiles a ocultar en la sección NUESTROS PROFESIONALES */
const HIDDEN_PROFILES = ['Sandra Acosta', 'César Guzmán Torrico'];

/** Perfiles a ocultar temporalmente en la sección COLABORADORES/EMBAJADORES */
const HIDDEN_COLABORADORES = ["Celeste Giardinelli"];

type NosotrosVariant = "all" | "colaboradores" | "embajadores";

/** Orden de visualización en NUESTROS PROFESIONALES (el resto mantiene orden del array TEAM) */
const TEAM_ORDER = [
  'Claudio Bedoya',
  'Diego Albagly',
  'Catherinne Herrera',
  'Patricio Cabezas',
  'Marco Bedoya',
  'Mario Pino',
  'Bruno Alfaro',
  'María José Cáceres',
  'Christian Matamala',
  'Paula Castillo',
  'Ashley Castillo',
  'Miguel Angel Curihuinca',
  'Ricardo Quiroz',
  'Roberto Fuentes',
];

const TEAM: TeamMember[] = [
  {
    id: "claudioBedoya",
    name: "Claudio Bedoya",
    linkedin: "https://www.linkedin.com/in/claudio-bedoya",
    image: "/claudio-bedoya.jpg",
  },
  {
    id: "patricioCabezas",
    name: "Patricio Cabezas",
    linkedin: "https://www.linkedin.com/in/patricio-javier-cabezas-alamos-aa7371bb",
    image: "/patricio-cabezas.png",
  },
  {
    id: "catherinneHerrera",
    name: "Catherinne Herrera",
    linkedin: "https://www.linkedin.com/in/catherinne-herrera-8792508/",
    image: "/catherinne-herrera.jpg",
  },
  {
    id: "diegoAlbagly",
    name: "Diego Albagly",
    linkedin: "https://www.linkedin.com/in/diego-albagly-sanfuentes-9a788b38",
    image: "/diego-albagly-sanfuentes-.jpg",
  },
  {
    id: "marcoBedoya",
    name: "Marco Bedoya",
    linkedin: "https://www.linkedin.com/in/marcobedoya",
    image: "/marco-bedoya.jpg",
  },
  {
    id: "sandraAcosta",
    name: "Sandra Acosta",
    linkedin: "https://www.linkedin.com/in/sandraxab/?utm_source=share&utm_ca",
    image: "/sandra-acosta-beltran.png",
  },
  {
    id: "marioPino",
    name: "Mario Pino",
    linkedin: "https://www.linkedin.com/in/mario-pino-879069150",
    image: "/mario-pino.jpg",
  },
  {
    id: "brunoAlfaro",
    name: "Bruno Alfaro",
    linkedin: "https://www.linkedin.com/in/bruno-alfaro-garces-90714416/?originalSubdomain=cl",
    image: "/bruno-alfaro-foto2.jpg",
  },
  {
    id: "christianMatamala",
    name: "Christian Matamala",
    linkedin: "https://www.linkedin.com/in/christian-matamala-irribarra",
    image: "/christian-matamala.jpg",
  },
  {
    id: "miguelAngelCurihuinca",
    name: "Miguel Angel Curihuinca",
    linkedin: "https://www.linkedin.com/in/miguel-curihuinca",
    image: "/miguel-curihuinca.jpg",
  },
  {
    id: "ricardoQuiroz",
    name: "Ricardo Quiroz",
    linkedin: "https://www.linkedin.com/in/ricardo-quiroz-arredondo-50ba64172",
    image: "/ricardo-quiroz-arredondo.jpg",
  },
  {
    id: "robertoFuentes",
    name: "Roberto Fuentes",
    linkedin: "https://www.linkedin.com/in/roberto-fuentes-angellotti-53832328",
    image: "/roberto-fuentes.jpg",
  },
  {
    id: "mariaJoseCaceres",
    name: "María José Cáceres",
    linkedin: "https://www.linkedin.com/in/maria-jose-caceres",
    image: "mmmm-doce.jpg",
  },
  {
    id: "cesarGuzmanTorrico",
    name: "César Guzmán Torrico",
    linkedin: "",
    image: "/cesas-guzman-torrico.jpg",
  },
  {
    id: "paulaCastillo",
    name: "Paula Castillo",
    linkedin: "https://www.linkedin.com/in/paula-castillo-del-desierto-651239211",
    image: "/angeline-valentina-reyes.jpg",
  },
  {
    id: "ashleyCastillo",
    name: "Ashley Castillo",
    linkedin: "https://www.linkedin.com/in/ashley-castillo",
    image: "/ashley-castillo-briones.jpg",
  },
];

interface Colaborador {
  id: string;
  name: string;
  linkedin?: string;
  image: string;
}

const COLABORADORES: Colaborador[] = [
  {
    id: "mateoBarrenengoa",
    name: "Mateo Barrenengoa",
    linkedin: "https://www.mateobarrenengoa.cl",
    image: "/mateobarrenengoadiegofuentes.jpg",
  },
  {
    id: "tomasMunita",
    name: "Tomás Munita",
    linkedin: "https://www.tomasmunita.com",
    image: "/tomas-munita.jpg",
  },
  {
    id: "felipeBraun",
    name: "Felipe Braun",
    linkedin: "",
    image: "/felipe-braun.jpg",
  },
  {
    id: "solLeyton",
    name: "Sol Leyton",
    linkedin: "https://www.instagram.com/solleyton/",
    image: "/sol-leyton.png",
  },
  {
    id: "saraSamaniegoMarce",
    name: "Sara Samaniego (Marce La Reciclamores)",
    linkedin: "",
    image: "/gente/mrce-larecicladora.jpg",
  },
  {
    id: "celesteGiardinelli",
    name: "Celeste Giardinelli",
    linkedin: "https://www.instagram.com/giardinelliceleste?igsh=MTQyZjIzaWI1emsxbg==",
    image: "/gente/celeste.jpg",
  },
  {
    id: "agustinaGrasso",
    name: "Agustina Grasso",
    linkedin: "https://www.instagram.com/cronistamillennial?igsh=MWRtN2FnbjdjeTlvcA%3D%3D",
    image: "/gente/agustina.jpg",
  },
  {
    id: "claudiaValdes",
    name: "Claudia Valdés",
    linkedin: "https://www.instagram.com/claudiavaldesoficial/reels/",
    image: "/gente/claudia.jpg",
  },
];

const LOGOS_PARTNERS = ["LOGO", "LOGO", "LOGO", "LOGO", "LOGO", "LOGO"];
const LOGOS_PATROCINADORES = [
  "/logo-gore-tarapaca.png",
  "/alto-hospicio-logo.png",
  "/logo-muni-iquique.png",
  "/camara-verde-chile.png",
];

const MARCAS_LOGOS = [
  "/logo-beginns-1.jpg",
  "/logo-conexion-mrkt.jpg",
  "/logo-normadi-1.jpg",
  "/revibe.png",
  "/hymenophyllym-logo.jpg",
  "/iscatex-logo.jpg",
  "/labeltrana-logo-ver.jpg",
  "/proche-logo.png",
  "/logo-hotel.jpg",
  "/unap.jpg",
];

const NAME_LINE_SPLIT_OVERRIDES: Record<string, { first: string; second: string }> = {
  'María José Cáceres': { first: 'María José', second: 'Cáceres' },
  'Miguel Angel Curihuinca': { first: 'Miguel Angel', second: 'Curihuinca' },
};

function TeamCard({
  member,
  index,
  t,
}: {
  member: TeamMember;
  index: number;
  t: TFunction;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const tm = `nosotros.teamMembers.${member.id}`;
  const title = t(`${tm}.title`);
  const summary = t(`${tm}.summary`);
  const role = t(`${tm}.role`);
  const experience = getI18nStringArray(t, `${tm}.experience`);
  const competencias = getI18nStringArray(t, `${tm}.competencias`);
  const override = NAME_LINE_SPLIT_OVERRIDES[member.name];
  const nameParts = member.name.split(" ");
  const firstName = override ? override.first : nameParts[0];
  const lastName = override ? override.second : nameParts.slice(1).join(" ");

  const LinkedInIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10z" />
      <path d="M12 7.5A4.5 4.5 0 1 0 12 16a4.5 4.5 0 0 0 0-8.5z" />
      <circle cx="17.5" cy="6.5" r="1.25" />
    </svg>
  );

  const isInstagram = (member.linkedin ?? "").toLowerCase().includes("instagram.com");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: Math.min(index * 0.05, 0.4) }}
        className="relative group overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Image: un poco más alta en móvil para que la barra tape menos */}
        <div className="aspect-[4/5.6] sm:aspect-square overflow-hidden bg-gray-200">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
        </div>
        {/* Button with gradient: menos alto en móvil para dejar más foto visible */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="w-full bg-gradient-to-r from-[#9b734c] to-[#5b2500] text-white py-2 sm:py-3 px-3 sm:px-4 rounded-t-2xl hover:opacity-90 transition-opacity h-[78px] sm:h-auto overflow-hidden sm:overflow-visible">
            <div className="text-left flex flex-col justify-end h-full">
              <div className="font-bold text-[13px] sm:text-lg uppercase tracking-wide leading-tight">
                {firstName}
              </div>
              <div className="font-bold text-[13px] sm:text-lg uppercase tracking-wide leading-tight">
                {lastName || ""}
              </div>
              <div className="text-[10px] sm:text-xs font-medium mt-0.5 sm:mt-1 opacity-90 truncate sm:whitespace-normal sm:overflow-visible sm:text-clip">
                {title}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start gap-4 mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-lg object-cover flex-shrink-0 bg-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-1">{member.name}</DialogTitle>
                <DialogDescription className="text-base font-medium text-foreground">
                  {title}
                </DialogDescription>
                {member.linkedin && (
                  <a
                    href={member.linkedin.startsWith("http") ? member.linkedin : `https://${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    {isInstagram ? <InstagramIcon /> : <LinkedInIcon />}
                    <span className="text-sm">{t("nosotros.viewLinkedIn")}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.summary")}</h4>
              <p className="text-sm leading-relaxed">{summary}</p>
            </div>

            {role && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.role")}</h4>
                <p className="text-sm leading-relaxed">{role}</p>
              </div>
            )}

            {experience && experience.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.experience")}</h4>
                <ul className="space-y-2">
                  {experience.map((exp, idx) => (
                    <li key={idx} className="text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {competencias && competencias.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.competencies")}</h4>
                <div className="flex flex-wrap gap-2">
                  {competencias.map((comp, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function ColabCard({
  member,
  index,
  t,
}: {
  member: Colaborador;
  index: number;
  t: TFunction;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const cm = `nosotros.colaboradoresMembers.${member.id}`;
  const title = t(`${cm}.title`);
  const summary = t(`${cm}.summary`);
  const role = t(`${cm}.role`);
  const experience = getI18nStringArray(t, `${cm}.experience`);
  const nameParts = member.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const LinkedInIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10z" />
      <path d="M12 7.5A4.5 4.5 0 1 0 12 16a4.5 4.5 0 0 0 0-8.5z" />
      <circle cx="17.5" cy="6.5" r="1.25" />
    </svg>
  );

  const isInstagram = (member.linkedin ?? "").toLowerCase().includes("instagram.com");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative group overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Image: un poco más alta en móvil para que la barra tape menos */}
        <div className="aspect-[4/5.6] sm:aspect-[3/4] overflow-hidden bg-gray-200">
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-full object-cover ${member.name === 'Tomás Munita' ? 'object-bottom' : ''}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
        </div>
        {/* Button with white background: menos alto en móvil para dejar más foto visible */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="w-full bg-white py-2 sm:py-3 px-3 sm:px-4 rounded-t-2xl hover:opacity-95 transition-opacity h-[78px] sm:h-auto overflow-hidden sm:overflow-visible">
            <div className="text-left flex flex-col justify-end h-full">
              <div className="font-bold text-[11px] sm:text-sm uppercase tracking-wide text-orange-500 leading-tight">
                {firstName}
              </div>
              <div className="font-bold text-[11px] sm:text-sm uppercase tracking-wide text-orange-500 leading-tight">
                {lastName || ""}
              </div>
              <div className="text-[10px] sm:text-xs font-medium mt-0.5 sm:mt-1 text-[#391800] truncate sm:whitespace-normal sm:overflow-visible sm:text-clip">
                {title}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start gap-4 mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-lg object-cover flex-shrink-0 bg-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-1">{member.name}</DialogTitle>
                <DialogDescription className="text-base font-medium text-foreground">
                  {title}
                </DialogDescription>
                {member.linkedin && (
                  <a
                    href={member.linkedin.startsWith("http") ? member.linkedin : `https://${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    {isInstagram ? <InstagramIcon /> : <LinkedInIcon />}
                    <span className="text-sm">{t("nosotros.viewProfile")}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.summary")}</h4>
              <p className="text-sm leading-relaxed">{summary}</p>
            </div>

            {role && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.role")}</h4>
                <p className="text-sm leading-relaxed">{role}</p>
              </div>
            )}

            {experience && experience.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.experience")}</h4>
                <ul className="space-y-2">
                  {experience.map((exp, idx) => (
                    <li key={idx} className="text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function InteractiveLogoMarquee() {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const logos = [...MARCAS_LOGOS, ...MARCAS_LOGOS];
  const singleSetWidth = MARCAS_LOGOS.length * 192; // Aproximación: (160px + 32px gap) * cantidad

  useEffect(() => {
    if (!isDragging) {
      const animation = animate(x, -singleSetWidth, {
        duration: 40,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      });
      return () => animation.stop();
    }
  }, [isDragging, x, singleSetWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX;
    const startScroll = x.get();

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      x.set(startScroll + deltaX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="relative overflow-hidden mb-16 cursor-grab active:cursor-grabbing" ref={containerRef}>
      <motion.div
        className="flex gap-8 lg:gap-12"
        style={{ x }}
        onMouseDown={handleMouseDown}
        drag="x"
        dragConstraints={{ left: -singleSetWidth, right: 0 }}
        dragElastic={0}
        whileDrag={{ cursor: "grabbing" }}
      >
        {logos.map((logo, i) => (
          <div
            key={`logo-${i}`}
            className="flex-shrink-0 w-40 h-40 lg:w-52 lg:h-52 bg-white rounded-2xl flex items-center justify-center p-4 transition-all duration-300 hover:scale-110 select-none"
          >
            <img
              src={logo}
              alt={`Logo ${i + 1}`}
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Nosotros({ variant = "all" }: { variant?: NosotrosVariant }) {
  const { t } = useTranslation();
  return (
    <PageWrapper noTopPadding>
      <section id="quienes-somos" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-start gap-2 text-[#9b734c] text-sm font-medium mb-2 uppercase text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-[#9b734c] shrink-0 mt-[0.35rem]" aria-hidden />
              <span>{t("nosotros.tagline")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              {t("nosotros.title")}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
              {variant === "embajadores" ? (
                <span className="block truncate">
                  Nuestros embajadores impulsan la regeneración del territorio con voz, cultura y ciencia.
                </span>
              ) : (
                <>
                  {t("nosotros.introBefore")}
                  <a
                    href="https://beginss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-foreground hover:text-primary transition-colors underline"
                  >
                    Beginss
                  </a>
                  {t("nosotros.introAfter")}
                </>
              )}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#391800] hover:bg-[#391800]/90 text-white rounded-full px-10 gap-2"
            >
              {variant !== "embajadores" ? (
                <a href="#equipo">
                  {t("nosotros.knowTeam")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : null}
            </Button>
          </motion.div>

          {variant !== "embajadores" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 lg:p-12 rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition-shadow max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-start mb-6">
                <img
                  src="/logo-beginns-1.jpg"
                  alt="Beginss"
                  className="h-16 md:h-24 object-contain"
                />
              </div>
              <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed text-left">
                {t("nosotros.beginssCard")}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Logo Showcase Band */}
      <section className="hidden py-8 lg:py-12 bg-gradient-to-r from-[#9b734c] to-[#5b2500]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-center items-center gap-8 lg:gap-12 flex-wrap">
            {MARCAS_LOGOS.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo marca ${i + 1}`}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {variant !== "embajadores" && (
        <>
          {/* Team Section - Dark Brown Background */}
      <section id="equipo" className="py-20 lg:py-28 bg-[#391800] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#F5F2EC] rounded-b-3xl" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-white text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                {t("nosotros.ourProfessionals")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
                {t("nosotros.teamTitle")}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-right"
            >
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {t("nosotros.teamSub")}
              </p>
            </motion.div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {TEAM.filter((member) => !HIDDEN_PROFILES.includes(member.name))
              .sort((a, b) => {
                const i = TEAM_ORDER.indexOf(a.name);
                const j = TEAM_ORDER.indexOf(b.name);
                const orderA = i === -1 ? TEAM_ORDER.length : i;
                const orderB = j === -1 ? TEAM_ORDER.length : j;
                return orderA - orderB;
              })
              .map((member, i) => (
                <TeamCard key={member.id} member={member} index={i} t={t} />
              ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Light Beige */}
      <section id="partners" className="py-20 lg:py-28 bg-[#F5F2EC]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              {t("nosotros.partnersSection")}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("nosotros.partnersTitle")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("nosotros.partnersSub")}
            </p>
          </motion.div>

          <InteractiveLogoMarquee />

          <div>
            <div className="inline-flex items-center gap-2 text-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              {t("nosotros.sponsors")}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("nosotros.sponsorsTitle")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              {t("nosotros.sponsorsSub")}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {LOGOS_PATROCINADORES.map((logo, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl bg-white flex items-center justify-center p-4 hover:shadow-xl transition-all"
                >
                  <img
                    src={logo}
                    alt={`Patrocinador ${i + 1}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      </>
      )}

      {variant !== "colaboradores" && (
        <>
          {/* Colaboradores Section - Orange Gradient CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[#9b734c] to-[#5b2500] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#F5F2EC] rounded-b-3xl" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-white shrink-0"></span>
              {t("nosotros.collaborators")}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
              {t("nosotros.collaboratorsTitle")}
            </h2>
          </motion.div>

          {/* Colaboradores Grid */}
          <div id="colaboradores" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLABORADORES.filter((member) => !HIDDEN_COLABORADORES.includes(member.name)).map((member, i) => (
              <ColabCard key={member.id} member={member} index={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-12 bg-[#391800] text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
              {t("nosotros.banner")}
            </p>
          </div>
        </div>
      </section>

        </>
      )}
    </PageWrapper>
  );
}
