import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  name: string;
  title: string;
  summary: string;
  experience?: string[];
  competencias?: string[];
  role: string;
  linkedin: string;
  image: string;
}

/** Perfiles a ocultar en la sección NUESTROS PROFESIONALES */
const HIDDEN_PROFILES = ['Sandra Acosta', 'César Guzmán Torrico'];

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
  'Ashley Castillo Briones',
  'Miguel Angel Curihuinca',
  'Ricardo Quiroz',
  'Roberto Fuentes',
];

const TEAM: TeamMember[] = [
  {
    name: 'Claudio Bedoya',
    title: 'Director del Proyecto etapa Diagnostico y Plan Maestro',
    summary: 'Con formación en Europa y amplia experiencia en el sector privado, minería y energía, evaluación ambiental y licencia social. También en desarrollo sostenible y gestión de proyectos en el norte de Chile.',
    experience: [
      'Ha liderado iniciativas de gobernanza territorial, restauración ambiental y articulación público-privada en contextos de alta complejidad social y ecológica.',
    ],
    role: 'Director del proyecto, conduciendo la visión general, la coordinación técnica y la integración de los distintos equipos y actores involucrados en el proceso de regeneración del territorio.',
    linkedin: 'https://www.linkedin.com/in/claudio-bedoya',
    image: '/claudio-bedoya.jpg',
  },
  {
    name: 'Patricio Cabezas',
    title: 'Ingeniero Senior',
    summary: 'Ingeniero Senior con alta experiencia en cargos ejecutivos y directorios en grandes compañías, como también en el desarrollo de startup de alto impacto medioambiental y proyectos de gran escala.',
    role: 'Ingeniero Senior con experiencia en cargos ejecutivos, directorios y proyectos de alto impacto medioambiental.',
    linkedin: 'https://www.linkedin.com/in/patricio-javier-cabezas-alamos-aa7371bb',
    image: '/patricio-cabezas.png',
  },
  {
    name: 'Catherinne Herrera',
    title: 'Ingeniera Textil | Consultora y Asesora Senior en Moda Sostenible e Innovación',
    summary: 'Ingeniera Textil titulada de la Universidad de Santiago de Chile, con más de 25 años de experiencia en la industria textil, retail, producción y moda. Consultora senior enfocada en sostenibilidad, innovación y economía circular. Su trayectoria combina la gestión técnica y comercial con la formación de equipos y la asesoría estratégica en proyectos de desarrollo sustentable, diseño circular y reinvención de modelos de negocio con impacto social y ambiental.',
    experience: [
      'Consejo Iberoamericano de Moda Sostenible (CIMS) – Consultora Experta (2024 – presente). Integra el equipo de expertos del CIMS, aportando con su experiencia en moda sostenible, producción, materiales, certificaciones y normativas.',
      'Iscatex SpA – Consultora Senior y Speaker en Negocios de Moda Sostenible (2008 – presente). Asesora y capacita empresas como Cencosud, Texsur y Gendarmería de Chile en procesos de ingeniería, desarrollo de productos, reciclaje industrial textil y sostenibilidad. Lidera proyectos de innovación y consultoría técnico-textil para sectores públicos y privados.',
      'Chinatex S.A. – Gerente General (2010 – 2012). Dirección de equipo, estrategia comercial, planificación de ventas y posicionamiento de marca en el mercado textil.',
      'Fundación Artesanías de Chile – Gerente Comercial (2009 – 2010). Gestión de canales de venta, proyección de resultados y coordinación de tiendas propias.',
      'Grupo Monarch S.A. – Gerente de Ventas Tais y L\'Asst (2008 – 2009). Desarrollo de colecciones y productos, planificación de compras y control de eficiencia de ventas.',
      'Tejidos Caffarena S.A. – Jefa de Desarrollo de Productos (2006 – 2008). Liderazgo en creación de líneas de ropa interior para marcas propias y de terceros (Alaniz, París).',
      'VF Corporation – Encargada de Programación y Control de Producción (2000 – 2005). Gestión de proveedores internacionales y control de calidad de colecciones textiles para América, Asia y Chile.',
    ],
    role: 'Experta en Ingeniería Textil y Economía Circular',
    linkedin: 'https://www.linkedin.com/in/catherinne-herrera-8792508/',
    image: '/catherinne-herrera.jpg',
  },
  {
    name: 'Diego Albagly',
    title: 'Sociólogo, máster en Medioambiente y Desarrollo Territorial y Educación y Sociedad.',
    summary: 'Socio y Director del Instituto Profesional ARCOS.',
    experience: [
      '20 años de experiencia en ámbitos público y privado. Desarrollando diferentes cargos en las áreas de minería (AMSA) , energía (ENGIE), educación, en instituciones internacionales (CEPAL) y del tercer sector (Director Ejecutivo Fundación Juventud Emprendedora).',
    ],
    role: 'Sociólogo',
    linkedin: 'https://www.linkedin.com/in/diego-albagly-sanfuentes-9a788b38',
    image: '/diego-albagly-sanfuentes-.jpg',
  },
  {
    name: 'Marco Bedoya',
    title: 'Consultor senior en medio ambiente y sustentabilidad',
    summary: 'Medio ambiente y sustentabilidad (Chile/Suiza)',
    experience: [
      'Más de 15 años de experiencia internacional en estrategias corporativas de sostenibilidad, evaluación ambiental y social de proyectos, gestión del cambio climático, biodiversidad, agua y residuos. Ha trabajado en sectores como minería, energía, materiales de construcción, agricultura y cosmética de lujo, en Chile, Suiza y otros países de Europa y Latinoamérica.',
    ],
    role: 'Asesor en sostenibilidad | Estratega ESG | Vinculación con comunidades y stakeholders internacionales',
    linkedin: 'https://www.linkedin.com/in/marcobedoya',
    image: '/marco-bedoya.jpg',
  },
  {
    name: 'Sandra Acosta',
    title: 'Planificación estratégica',
    summary: 'Unidades productivas inclusivas | Regeneración sistémica',
    experience: [
      'Diseño de modelos de circularidad textil (ciclo de vida, upcycling, reciclaje).',
      'Gestión de proyectos interdisciplinarios complejos (marcos SGI, FOM, OGE).',
      'Desarrollo de unidades productivas inclusivas mediante talleres circulares.',
      'Liderazgo en gobernanza comunitaria y diagnósticos participativos.',
      'Obtención de financiamiento internacional para proyectos sostenibles (Colombia, España, LATAM).'
    ],
    competencias: [
      'Pensamiento sistémico',
      'Economía circular',
      'Liderazgo interdisciplinario',
    ],
    role: 'Coordinadora técnica | Asesora en economía regenerativa | Liderazgo comunitario | Movilización de recursos',
    linkedin: 'https://www.linkedin.com/in/sandraxab/?utm_source=share&utm_ca',
    image: '/sandra-acosta-beltran.png',
  },
  {
    name: 'Mario Pino',
    title: 'Arquitecto chileno-francés | DPLG (Diploma de Estado)',
    summary: 'Trayectoria en planificación urbana (tradicional y comercial), restauración de edificios patrimoniales, vivienda social y desarrollos para el sector terciario y retail. Sus líneas técnicas principales son: Integración fotovoltaica: transformación de estacionamientos en zonas de generación solar. Regeneración hídrica: diseño de sistemas vegetados de tratamiento de aguas residuales para su reutilización.',
    experience: [
      'Marrakech Eco-District (en curso): Diseño de parques fotovoltaicos para generación eléctrica y sistemas de tratamiento de aguas residuales/abastecimiento de agua potable.',
      'Clínica Les Oliviers, Francia: Implementación de estanques vegetados para tratamiento de aguas residuales, reutilizadas en riego de jardines y huertos.',
      'IDM-ARCAN Architecture, Marsella (2022–23): Proyectos de accesibilidad y cumplimiento térmico en edificios gubernamentales',
    ],
    role: 'Especialista en planificación urbana, restauración patrimonial, vivienda social, retail y diseño sostenible.',
    linkedin: 'https://www.linkedin.com/in/mario-pino-879069150',
    image: '/mario-pino.jpg',
  },
  {
    name: 'Bruno Alfaro',
    title: 'Ingeniero Civil Metalúrgico',
    summary: 'Ingeniero Civil Metalúrgico con más de 25 años de experiencia en la industria minero-metalúrgica, especializado en gestión de proyectos, administración de contratos y optimización de procesos. Ha liderado equipos multidisciplinarios en proyectos de gran escala para empresas como Codelco, destacando por su capacidad de planificación estratégica, eficiencia operativa y gestión de recursos.',
    experience: [
      'Gerente General en Proyectos & Negocios Minero Metalúrgicos, con foco en gestión integral de proyectos y comercialización de minerales.',
      'Consultor senior en proyectos mineros y metalúrgicos, aportando soluciones técnicas y estratégicas.',
      'Administrador de contratos para distintas divisiones de Codelco (Chuquicamata, Salvador, Teniente).',
      'Dirección de unidades de procesos metalúrgicos, recuperación de agua y control operacional.'
    ],
    role: 'Coordinación técnica | Estrategia de implementación y vinculación con actores industriales',
    linkedin: 'https://www.linkedin.com/in/bruno-alfaro-garces-90714416/?originalSubdomain=cl',
    image: '/bruno-alfaro-foto2.jpg',
  },
  {
    name: 'Christian Matamala',
    title: 'Consultor y coach socioambiental',
    summary: '35 años de experiencia en educación ambiental, sostenibilidad y sistemas regenerativos.',
    experience: [
      'Evaluaciones de riesgo ambiental (Chile, Brasil, Perú, Argentina).',
      'Coaching en liderazgo sistémico (alineado con ONU/BID: Capitalismo Consciente, Teoría U).',
      'Resolución de conflictos para comunidades indígenas cercanas a faenas mineras (divisiones de Codelco).',
      'Diseño de políticas públicas: planes de educación climática en Río de Janeiro (Brasil) y políticas hídricas de la NDC en Chile.'
    ],
    role: 'Coordinador técnico | Líder en práctica socioambiental | Estratega en comunicación con actores clave',
    linkedin: 'https://www.linkedin.com/in/christian-matamala-irribarra',
    image: '/christian-matamala.jpg',
  },
  {
    name: 'Miguel Angel Curihuinca',
    title: 'Geógrafo y Magíster en Urbanismo',
    summary: 'Geógrafo de la Universidad de Chile con un Magíster en Urbanismo. Ha desarrollado una carrera centrada en la planificación territorial, la regeneración urbana y la integración de la dimensión ambiental en proyectos de infraestructura y desarrollo regional. Su experiencia combina diagnóstico espacial, gestión de residuos y articulación con comunidades locales, especialmente en contextos del norte de Chile.',
    experience: [
      'Participó en el "Plan de Regeneración Urbano-Habitacional Cerro Navia" durante su Magíster, una propuesta que buscó alternativas habitacionales mediante análisis multicriterio de vulnerabilidad, suelo y normativa urbana.',
      'Colaboró en iniciativas de conservación de biodiversidad para la Anglo American Chile, aportando con análisis territorial y mapeo de focos de residuos e impactos ambientales en áreas de operación.',
      'Ha compartido estudios y reflexiones sobre proyectos de valorización de residuos (como plantas que convierten basura en energía, agua y ladrillos) y su implicancia para la planificación regional.',
    ],
    role: 'Geógrafo',
    linkedin: 'https://www.linkedin.com/in/miguel-curihuinca',
    image: '/miguel-curihuinca.jpg',
  },
  {
    name: 'Ricardo Quiroz',
    title: 'Ingeniero Civil en Metalurgia',
    summary: 'Experto en proyectos en minería',
    experience: [
      '25 años de experiencia en proyectos en minería de diferente escala, especialización en diseño, construcción, operación y cierre de manejo de residuos mineros masivos (relaves, escorias, ripios, marinas), asesor en manejo de residuos de construcción y demolición (RCD) y residuos industriales peligrosos.',
    ],
    competencias: [
      'Optimización de procesos',
      'Logística sostenible',
      'Gestión de operaciones',
    ],
    role: 'Especialista en Prevención de Riesgos, Optimización de Procesos y Logística Sostenible',
    linkedin: 'https://www.linkedin.com/in/ricardo-quiroz-arredondo-50ba64172',
    image: '/ricardo-quiroz-arredondo.jpg',
  },
  {
    name: 'Roberto Fuentes',
    title: 'Director creativo en publicidad y comunicación',
    summary: 'Profesional con más de 15 años de experiencia liderando proyectos de comunicación, branding y campañas para marcas nacionales e internacionales. Ha trabajado en agencias de publicidad desarrollando estrategias creativas que integran diseño, storytelling y posicionamiento de marca.',
    experience: [
      'Director creativo en agencias de publicidad en Chile, liderando equipos multidisciplinarios.',
      'Desarrollo de campañas integrales para clientes de diversos sectores (consumo masivo, servicios, emprendimientos).',
      'Estrategia de comunicación y branding para proyectos con foco en sostenibilidad y posicionamiento social.',
    ],
    role: 'Director creativo | Responsable de publicidad, branding y comunicación para posicionar la imagen de Recicla Atacama en medios y redes sociales.',
    linkedin: 'https://www.linkedin.com/in/roberto-fuentes-angellotti-53832328',
    image: '/roberto-fuentes.jpg',
  },
  {
    name: 'María José Cáceres',
    title: 'Partner',
    summary: 'Publicista, Co-founder & CEO de Normandi Media, agencia de marketing digital reconocida por su enfoque innovador y trabajo con grandes marcas en Latinoamérica.',
    role: 'Partner',
    linkedin: 'https://www.linkedin.com/in/maria-jose-caceres',
    image: 'mmmm-doce.jpg',
  },
  {
    name: 'César Guzmán Torrico',
    title: 'Ingeniero Civil Químico | Especialista en Procesos Metalúrgicos y Sostenibilidad',
    summary: 'Ingeniero Civil Químico con más de 20 años de experiencia en el desarrollo e implementación de soluciones tecnológicas aplicadas a la minería, metalurgia y economía circular. Su trabajo se ha centrado en la optimización de procesos, innovación en valorización de residuos y desarrollo de estrategias sostenibles para la industria.',
    experience: [
      'Especialista en ingeniería de procesos para la gran minería del cobre en Chile, Perú y Bolivia.',
      'Consultor en innovación tecnológica y eficiencia energética en operaciones metalúrgicas.',
      'Asesor en proyectos de gestión de residuos industriales y reaprovechamiento de subproductos mineros.',
      'Colaborador en iniciativas de economía circular y recuperación de materiales estratégicos.',
    ],
    competencias: [
      'Optimización de procesos metalúrgicos',
      'Innovación tecnológica',
      'Gestión ambiental',
      'Sostenibilidad industrial',
      'Valorización de residuos',
    ],
    role: 'Asesor técnico en procesos industriales | Innovación y desarrollo de tecnologías limpias | Vinculación con la industria minera y metalúrgica',
    linkedin: '',
    image: '/cesas-guzman-torrico.jpg',
  },
  {
    name: 'Paula Castillo',
    title: 'Arquitecta',
    summary: 'Especialista en evaluación de impacto ambiental',
    experience: [
      'Evaluación y monitoreo de proyectos ambientales',
      'Implementación de sistemas de gestión ambiental',
      'Asesoría en normativa ambiental chilena',
    ],
    competencias: [
      'Evaluación de impacto ambiental',
      'Gestión de recursos naturales',
      'Cumplimiento normativo',
    ],
    role: 'Asesora en evaluación de impacto ambiental',
    linkedin: 'https://www.linkedin.com/in/paula-castillo-del-desierto-651239211',
    image: '/angeline-valentina-reyes.jpg',
  },
  {
    name: 'Ashley Castillo Briones',
    title: 'Trabajadora social',
    summary: 'Licenciada en trabajo social de la universidad Arturo Prat',
    experience: [
      'Licenciada en trabajo social de la universidad Arturo Prat y educadora popular hace 7 años en el barrio histórico el colorado, con experiencia en el desarrollo y fortalecimiento de procesos comunitarios. Actualmente estoy a cargo de una organización social llamada Escuelita Popular Luchín desde la cual impulsamos proyectos orientados a la participación, la educación popular y la promoción de derechos desde la niñez. Mi trabajo se centra en el acompañamiento de comunidades, el diseño de estrategias colectivas y la construcción de redes de apoyo que fortalezcan el tejido social y el bienestar común.',
    ],
    role: 'Trabajadora social',
    linkedin: 'https://www.linkedin.com/in/ashley-castillo',
    image: '/ashley-castillo-briones.jpg',
  },
];

interface Colaborador {
  name: string;
  title: string;
  summary: string;
  experience?: string[];
  role: string;
  linkedin?: string;
  image: string;
}

const COLABORADORES: Colaborador[] = [
  {
    name: 'Mateo Barrenengoa',
    title: 'Documentalista · National Geographic Explorer',
    summary: 'Director y cineasta chileno con más de 10 años de experiencia en la producción de documentales de conservación del patrimonio natural y cultural en Chile y diversos rincones del mundo (Himalaya, Amazonas, África, Patagonia).',
    experience: [
      'Ha producido, filmado y dirigido documentales sobre la conservación de ecosistemas y comunidades humanas, especialmente en contextos remotos.',
      'Reconocido como Explorer de la National Geographic Society, lo que respalda su trayectoria en exploración, narración visual y conservación',
    ],
    role: 'Documentalista',
    linkedin: 'https://www.mateobarrenengoa.cl',
    image: '/mateobarrenengoadiegofuentes.jpg',
  },
  {
    name: 'Tomás Munita',
    title: 'Fotógrafo documental · Colaborador del proyecto',
    summary: 'Fotógrafo documental chileno (1975) con una destacada trayectoria internacional centrada en temas sociales, culturales y medioambientales. Su trabajo, caracterizado por una profunda sensibilidad visual y narrativa, ha sido publicado en medios como The New York Times, National Geographic, Geo, Le Monde y The Guardian. Desde el sur de Chile, desarrolla proyectos independientes y colabora con iniciativas que buscan visibilizar los impactos humanos y ecológicos de nuestro tiempo. En Restaura Atacama, contribuye al registro y la comunicación visual del proceso de transformación del territorio.',
    experience: [
      'Ganador del Polk Photography Award (2018) por su serie The Plight of the Rohingya.',
      'Cuatro veces premiado por World Press Photo (2006, 2013 y 2017).',
      'Photojournalist of the Year por la National Press Photographers Association (NPPA, 2017).',
      'Award of Excellence en Photographer of the Year (POYi), 2017.',
      'Gabriel García Márquez Award (2015) por su reportaje Patagonian Cowboys.',
      'Excellence in Feature Photography de la Society of Publishers in Asia (2015) por The Plight of the Rohingya.',
      'Latin American Photographer of the Year (POY Latam, 2013).',
      'Visa d\'Or Daily News (Francia, 2012) por su cobertura del conflicto sirio.',
      'All Roads National Geographic Award (EE.UU., 2010) por Lost Harvest, Death of Loa River.',
      'ICP Young Photographer Infinity Award (EE.UU., 2005).',
    ],
    role: 'Colaborador / Fotógrafo',
    linkedin: 'www.tomasmunita.com',
    image: '/tomas-munita.jpg',
  },
  {
    name: 'Felipe Braun',
    title: 'Actor, director y gestor cultural · Embajador del proyecto',
    summary: 'Actor, director y gestor cultural chileno, con una destacada trayectoria en teatro, cine y televisión. Reconocido por su compromiso con el desarrollo artístico y social del país, ha participado en producciones emblemáticas y en proyectos culturales orientados a la sostenibilidad, la educación y el medioambiente. Su experiencia en dirección teatral y su rol como promotor de iniciativas creativas lo han convertido en una figura influyente en la escena cultural chilena. En Restaura Atacama, aporta su visión y liderazgo como embajador, promoviendo la conciencia ambiental y la articulación entre arte, comunidad y territorio.',
    role: 'Embajador',
    linkedin: '',
    image: '/felipe-braun.jpg',
  },
  {
    name: 'Sol Leyton',
    title: 'Periodista y comunicadora · Embajadora del proyecto',
    summary: 'Periodista chilena con una destacada trayectoria en televisión y medios de comunicación, reconocida por su cercanía con las audiencias y su compromiso con temas sociales y medioambientales. Ha trabajado en programas de televisión y proyectos documentales enfocados en la identidad, la cultura y las problemáticas del territorio, combinando periodismo, comunicación y divulgación con un enfoque humano. En Restaura Atacama, participa como embajadora, aportando su voz y experiencia para promover la conciencia ambiental y el valor de la acción colectiva en la regeneración del norte de Chile.',
    role: 'Embajadora',
    linkedin: 'https://www.instagram.com/solleyton/',
    image: '/sol-leyton.png',
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

function TeamCard({
  member,
  index,
  t,
}: {
  member: TeamMember;
  index: number;
  t: (key: string) => string;
}) {
  const [isOpen, setIsOpen] = useState(false);
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
        {/* Image: más alta en móvil para que la barra de nombre tape menos */}
        <div className="aspect-[4/5] sm:aspect-square overflow-hidden bg-gray-200">
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
          <div className="w-full bg-gradient-to-r from-[#9b734c] to-[#5b2500] text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-t-2xl hover:opacity-90 transition-opacity">
            <div className="text-left">
              <div className="font-bold text-sm sm:text-lg uppercase tracking-wide">{firstName}</div>
              <div className="font-bold text-sm sm:text-lg uppercase tracking-wide">{lastName || ""}</div>
              <div className="text-[10px] sm:text-xs font-medium mt-0.5 sm:mt-1 opacity-90">{member.title}</div>
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
                  {member.title}
                </DialogDescription>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    <LinkedInIcon />
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
              <p className="text-sm leading-relaxed">{member.summary}</p>
            </div>

            {member.role && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.role")}</h4>
                <p className="text-sm leading-relaxed">{member.role}</p>
              </div>
            )}

            {member.experience && member.experience.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.experience")}</h4>
                <ul className="space-y-2">
                  {member.experience.map((exp, idx) => (
                    <li key={idx} className="text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.competencias && member.competencias.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.competencies")}</h4>
                <div className="flex flex-wrap gap-2">
                  {member.competencias.map((comp, idx) => (
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
  t: (key: string) => string;
}) {
  const [isOpen, setIsOpen] = useState(false);
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
        {/* Image: más alta en móvil para que la barra de nombre tape menos */}
        <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-gray-200">
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
          <div className="w-full bg-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-t-2xl hover:opacity-95 transition-opacity">
            <div className="text-left">
              <div className="font-bold text-xs sm:text-sm uppercase tracking-wide text-orange-500">{firstName}</div>
              <div className="font-bold text-xs sm:text-sm uppercase tracking-wide text-orange-500">{lastName || ""}</div>
              <div className="text-[10px] sm:text-xs font-medium mt-0.5 sm:mt-1 text-[#391800]">{member.title}</div>
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
                  {member.title}
                </DialogDescription>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    <LinkedInIcon />
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
              <p className="text-sm leading-relaxed">{member.summary}</p>
            </div>

            {member.role && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.role")}</h4>
                <p className="text-sm leading-relaxed">{member.role}</p>
              </div>
            )}

            {member.experience && member.experience.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.experience")}</h4>
                <ul className="space-y-2">
                  {member.experience.map((exp, idx) => (
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

export default function Nosotros() {
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
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#391800] hover:bg-[#391800]/90 text-white rounded-full px-10 gap-2"
            >
              <a href="#equipo">
                {t("nosotros.knowTeam")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

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
                <TeamCard key={member.name} member={member} index={i} t={t} />
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
            {COLABORADORES.map((member, i) => (
              <ColabCard key={member.name} member={member} index={i} t={t} />
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
    </PageWrapper>
  );
}
