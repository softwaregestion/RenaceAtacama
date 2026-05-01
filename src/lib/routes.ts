export const ROUTES = {
  home: "/",
  elProblema: "/el-problema",
  elProyecto: "/el-proyecto",
  laPropuesta: "/la-propuesta",
  nosotros: "/nosotros",
  quienesSomos: "/quienes-somos",
  equipo: "/equipo",
  partners: "/partners",
  colaboradores: "/colaboradores",
  embajadores: "/embajadores",
  contenido: "/contenido",
  elDocumental: "/el-documental",
  escarabajos: "/escarabajos",
  galeria: "/galeria",
  accionSocial: "/accion-social",
  productos: "/productos",
  contacto: "/contacto",
  jointVenture : "/joint-venture",
  bioOMA : "/bioOMA",
  bioBeginss : "/bioBeginss",
  proyectosComunitarios: "/proyectosComunitarios",
} as const;

export const NAV_ITEMS = [
  { label: "Inicio", href: ROUTES.home },
  {
    label: "El proyecto",
    children: [
      { label: "El proyecto", href: ROUTES.elProyecto },
      { label: "Productos", href: ROUTES.productos },
    ],
  },
  { label: "Nosotros", href: ROUTES.nosotros },
  { label: "Contenido", href: ROUTES.contenido },
  { label: "Escarabajos del Desierto", href: ROUTES.escarabajos },
] as const;
