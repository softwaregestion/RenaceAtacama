/**
 * One-off builder: merges inline data → src/locales/partials/nosotros-people.{es,en}.json
 * Run: node scripts/build-nosotros-people.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../src/locales/partials");

const teamMembersEs = {
  claudioBedoya: {
    title: "Director del Proyecto etapa Diagnostico y Plan Maestro",
    summary:
      "Con formación en Europa y amplia experiencia en el sector privado, minería y energía, evaluación ambiental y licencia social. También en desarrollo sostenible y gestión de proyectos en el norte de Chile.",
    experience: [
      "Ha liderado iniciativas de gobernanza territorial, restauración ambiental y articulación público-privada en contextos de alta complejidad social y ecológica.",
    ],
    role: "Director del proyecto, conduciendo la visión general, la coordinación técnica y la integración de los distintos equipos y actores involucrados en el proceso de regeneración del territorio.",
  },
  patricioCabezas: {
    title: "Consultor senior",
    summary:
      "Consultor senior con alta experiencia en cargos ejecutivos y directorios en grandes compañías, como también en el desarrollo de startup de alto impacto medioambiental y proyectos de gran escala.",
    role: "Consultor senior con experiencia en cargos ejecutivos, directorios y proyectos de alto impacto medioambiental.",
  },
  catherinneHerrera: {
    title: "Ingeniera Textil | Consultora y Asesora Senior en Moda Sostenible e Innovación",
    summary:
      "Ingeniera Textil titulada de la Universidad de Santiago de Chile, con más de 25 años de experiencia en la industria textil, retail, producción y moda. Consultora senior enfocada en sostenibilidad, innovación y economía circular. Su trayectoria combina la gestión técnica y comercial con la formación de equipos y la asesoría estratégica en proyectos de desarrollo sustentable, diseño circular y reinvención de modelos de negocio con impacto social y ambiental.",
    experience: [
      "Consejo Iberoamericano de Moda Sostenible (CIMS) – Consultora Experta (2024 – presente). Integra el equipo de expertos del CIMS, aportando con su experiencia en moda sostenible, producción, materiales, certificaciones y normativas.",
      "Iscatex SpA – Consultora Senior y Speaker en Negocios de Moda Sostenible (2008 – presente). Asesora y capacita empresas como Cencosud, Texsur y Gendarmería de Chile en procesos de ingeniería, desarrollo de productos, reciclaje industrial textil y sostenibilidad. Lidera proyectos de innovación y consultoría técnico-textil para sectores públicos y privados.",
      "Chinatex S.A. – Gerente General (2010 – 2012). Dirección de equipo, estrategia comercial, planificación de ventas y posicionamiento de marca en el mercado textil.",
      "Fundación Artesanías de Chile – Gerente Comercial (2009 – 2010). Gestión de canales de venta, proyección de resultados y coordinación de tiendas propias.",
      "Grupo Monarch S.A. – Gerente de Ventas Tais y L'Asst (2008 – 2009). Desarrollo de colecciones y productos, planificación de compras y control de eficiencia de ventas.",
      "Tejidos Caffarena S.A. – Jefa de Desarrollo de Productos (2006 – 2008). Liderazgo en creación de líneas de ropa interior para marcas propias y de terceros (Alaniz, París).",
      "VF Corporation – Encargada de Programación y Control de Producción (2000 – 2005). Gestión de proveedores internacionales y control de calidad de colecciones textiles para América, Asia y Chile.",
    ],
    role: "Experta en Ingeniería Textil y Economía Circular",
  },
  diegoAlbagly: {
    title: "Sociólogo, máster en Medioambiente y Desarrollo Territorial y Educación y Sociedad.",
    summary: "Socio y Director del Instituto Profesional ARCOS.",
    experience: [
      "20 años de experiencia en ámbitos público y privado. Desarrollando diferentes cargos en las áreas de minería (AMSA) , energía (ENGIE), educación, en instituciones internacionales (CEPAL) y del tercer sector (Director Ejecutivo Fundación Juventud Emprendedora).",
    ],
    role: "Sociólogo",
  },
  marcoBedoya: {
    title: "Consultor senior en medio ambiente y sustentabilidad",
    summary: "Medio ambiente y sustentabilidad (Chile/Suiza)",
    experience: [
      "Más de 15 años de experiencia internacional en estrategias corporativas de sostenibilidad, evaluación ambiental y social de proyectos, gestión del cambio climático, biodiversidad, agua y residuos. Ha trabajado en sectores como minería, energía, materiales de construcción, agricultura y cosmética de lujo, en Chile, Suiza y otros países de Europa y Latinoamérica.",
    ],
    role: "Asesor en sostenibilidad | Estratega ESG | Vinculación con comunidades y stakeholders internacionales",
  },
  sandraAcosta: {
    title: "Planificación estratégica",
    summary: "Unidades productivas inclusivas | Regeneración sistémica",
    experience: [
      "Diseño de modelos de circularidad textil (ciclo de vida, upcycling, reciclaje).",
      "Gestión de proyectos interdisciplinarios complejos (marcos SGI, FOM, OGE).",
      "Desarrollo de unidades productivas inclusivas mediante talleres circulares.",
      "Liderazgo en gobernanza comunitaria y diagnósticos participativos.",
      "Obtención de financiamiento internacional para proyectos sostenibles (Colombia, España, LATAM).",
    ],
    competencias: ["Pensamiento sistémico", "Economía circular", "Liderazgo interdisciplinario"],
    role: "Coordinadora técnica | Asesora en economía regenerativa | Liderazgo comunitario | Movilización de recursos",
  },
  marioPino: {
    title: "Arquitecto chileno-francés | DPLG (Diploma de Estado)",
    summary:
      "Trayectoria en planificación urbana (tradicional y comercial), restauración de edificios patrimoniales, vivienda social y desarrollos para el sector terciario y retail. Sus líneas técnicas principales son: Integración fotovoltaica: transformación de estacionamientos en zonas de generación solar. Regeneración hídrica: diseño de sistemas vegetados de tratamiento de aguas residuales para su reutilización.",
    experience: [
      "Marrakech Eco-District (en curso): Diseño de parques fotovoltaicos para generación eléctrica y sistemas de tratamiento de aguas residuales/abastecimiento de agua potable.",
      "Clínica Les Oliviers, Francia: Implementación de estanques vegetados para tratamiento de aguas residuales, reutilizadas en riego de jardines y huertos.",
      "IDM-ARCAN Architecture, Marsella (2022–23): Proyectos de accesibilidad y cumplimiento térmico en edificios gubernamentales",
    ],
    role: "Especialista en planificación urbana, restauración patrimonial, vivienda social, retail y diseño sostenible.",
  },
  brunoAlfaro: {
    title: "Ingeniero Civil Metalúrgico",
    summary:
      "Ingeniero Civil Metalúrgico con más de 25 años de experiencia en la industria minero-metalúrgica, especializado en gestión de proyectos, administración de contratos y optimización de procesos. Ha liderado equipos multidisciplinarios en proyectos de gran escala para empresas como Codelco, destacando por su capacidad de planificación estratégica, eficiencia operativa y gestión de recursos.",
    experience: [
      "Gerente General en Proyectos & Negocios Minero Metalúrgicos, con foco en gestión integral de proyectos y comercialización de minerales.",
      "Consultor senior en proyectos mineros y metalúrgicos, aportando soluciones técnicas y estratégicas.",
      "Administrador de contratos para distintas divisiones de Codelco (Chuquicamata, Salvador, Teniente).",
      "Dirección de unidades de procesos metalúrgicos, recuperación de agua y control operacional.",
    ],
    role: "Coordinación técnica | Estrategia de implementación y vinculación con actores industriales",
  },
  christianMatamala: {
    title: "Consultor y coach socioambiental",
    summary: "35 años de experiencia en educación ambiental, sostenibilidad y sistemas regenerativos.",
    experience: [
      "Evaluaciones de riesgo ambiental (Chile, Brasil, Perú, Argentina).",
      "Coaching en liderazgo sistémico (alineado con ONU/BID: Capitalismo Consciente, Teoría U).",
      "Resolución de conflictos para comunidades indígenas cercanas a faenas mineras (divisiones de Codelco).",
      "Diseño de políticas públicas: planes de educación climática en Río de Janeiro (Brasil) y políticas hídricas de la NDC en Chile.",
    ],
    role: "Coordinador técnico | Líder en práctica socioambiental | Estratega en comunicación con actores clave",
  },
  miguelAngelCurihuinca: {
    title: "Geógrafo y Magíster en Urbanismo",
    summary:
      "Geógrafo de la Universidad de Chile con un Magíster en Urbanismo. Ha desarrollado una carrera centrada en la planificación territorial, la regeneración urbana y la integración de la dimensión ambiental en proyectos de infraestructura y desarrollo regional. Su experiencia combina diagnóstico espacial, gestión de residuos y articulación con comunidades locales, especialmente en contextos del norte de Chile.",
    experience: [
      'Participó en el "Plan de Regeneración Urbano-Habitacional Cerro Navia" durante su Magíster, una propuesta que buscó alternativas habitacionales mediante análisis multicriterio de vulnerabilidad, suelo y normativa urbana.',
      "Colaboró en iniciativas de conservación de biodiversidad para la Anglo American Chile, aportando con análisis territorial y mapeo de focos de residuos e impactos ambientales en áreas de operación.",
      "Ha compartido estudios y reflexiones sobre proyectos de valorización de residuos (como plantas que convierten basura en energía, agua y ladrillos) y su implicancia para la planificación regional.",
    ],
    role: "Geógrafo",
  },
  ricardoQuiroz: {
    title: "Ingeniero Civil en Metalurgia",
    summary: "Experto en proyectos en minería",
    experience: [
      "25 años de experiencia en proyectos en minería de diferente escala, especialización en diseño, construcción, operación y cierre de manejo de residuos mineros masivos (relaves, escorias, ripios, marinas), asesor en manejo de residuos de construcción y demolición (RCD) y residuos industriales peligrosos.",
    ],
    competencias: ["Optimización de procesos", "Logística sostenible", "Gestión de operaciones"],
    role: "Especialista en Prevención de Riesgos, Optimización de Procesos y Logística Sostenible",
  },
  robertoFuentes: {
    title: "Director creativo en publicidad y comunicación",
    summary:
      "Profesional con más de 15 años de experiencia liderando proyectos de comunicación, branding y campañas para marcas nacionales e internacionales. Ha trabajado en agencias de publicidad desarrollando estrategias creativas que integran diseño, storytelling y posicionamiento de marca.",
    experience: [
      "Director creativo en agencias de publicidad en Chile, liderando equipos multidisciplinarios.",
      "Desarrollo de campañas integrales para clientes de diversos sectores (consumo masivo, servicios, emprendimientos).",
      "Estrategia de comunicación y branding para proyectos con foco en sostenibilidad y posicionamiento social.",
    ],
    role: "Director creativo | Responsable de publicidad, branding y comunicación para posicionar la imagen de Recicla Atacama en medios y redes sociales.",
  },
  mariaJoseCaceres: {
    title: "Partner",
    summary:
      "Publicista, Co-founder & CEO de Normandi Media, agencia de marketing digital reconocida por su enfoque innovador y trabajo con grandes marcas en Latinoamérica.",
    role: "Partner",
  },
  cesarGuzmanTorrico: {
    title: "Ingeniero Civil Químico | Especialista en Procesos Metalúrgicos y Sostenibilidad",
    summary:
      "Ingeniero Civil Químico con más de 20 años de experiencia en el desarrollo e implementación de soluciones tecnológicas aplicadas a la minería, metalurgia y economía circular. Su trabajo se ha centrado en la optimización de procesos, innovación en valorización de residuos y desarrollo de estrategias sostenibles para la industria.",
    experience: [
      "Especialista en ingeniería de procesos para la gran minería del cobre en Chile, Perú y Bolivia.",
      "Consultor en innovación tecnológica y eficiencia energética en operaciones metalúrgicas.",
      "Asesor en proyectos de gestión de residuos industriales y reaprovechamiento de subproductos mineros.",
      "Colaborador en iniciativas de economía circular y recuperación de materiales estratégicos.",
    ],
    competencias: [
      "Optimización de procesos metalúrgicos",
      "Innovación tecnológica",
      "Gestión ambiental",
      "Sostenibilidad industrial",
      "Valorización de residuos",
    ],
    role: "Asesor técnico en procesos industriales | Innovación y desarrollo de tecnologías limpias | Vinculación con la industria minera y metalúrgica",
  },
  paulaCastillo: {
    title: "Arquitecta",
    summary: "Especialista en evaluación de impacto ambiental",
    experience: [
      "Evaluación y monitoreo de proyectos ambientales",
      "Implementación de sistemas de gestión ambiental",
      "Asesoría en normativa ambiental chilena",
    ],
    competencias: ["Evaluación de impacto ambiental", "Gestión de recursos naturales", "Cumplimiento normativo"],
    role: "Asesora en evaluación de impacto ambiental",
  },
  ashleyCastillo: {
    title: "Trabajadora social",
    summary: "Licenciada en trabajo social de la universidad Arturo Prat",
    experience: [
      "Licenciada en trabajo social de la universidad Arturo Prat y educadora popular hace 7 años en el barrio histórico el colorado, con experiencia en el desarrollo y fortalecimiento de procesos comunitarios. Actualmente estoy a cargo de una organización social llamada Escuelita Popular Luchín desde la cual impulsamos proyectos orientados a la participación, la educación popular y la promoción de derechos desde la niñez. Mi trabajo se centra en el acompañamiento de comunidades, el diseño de estrategias colectivas y la construcción de redes de apoyo que fortalezcan el tejido social y el bienestar común.",
    ],
    role: "Trabajadora social",
  },
};

const colaboradoresMembersEs = {
  mateoBarrenengoa: {
    title: "Documentalista · National Geographic Explorer",
    summary:
      "Director y cineasta chileno con más de 10 años de experiencia en la producción de documentales de conservación del patrimonio natural y cultural en Chile y diversos rincones del mundo (Himalaya, Amazonas, África, Patagonia).",
    experience: [
      "Ha producido, filmado y dirigido documentales sobre la conservación de ecosistemas y comunidades humanas, especialmente en contextos remotos.",
      "Reconocido como Explorer de la National Geographic Society, lo que respalda su trayectoria en exploración, narración visual y conservación",
    ],
    role: "Documentalista",
  },
  tomasMunita: {
    title: "Fotógrafo documental · Colaborador del proyecto",
    summary:
      "Fotógrafo documental chileno (1975) con una destacada trayectoria internacional centrada en temas sociales, culturales y medioambientales. Su trabajo, caracterizado por una profunda sensibilidad visual y narrativa, ha sido publicado en medios como The New York Times, National Geographic, Geo, Le Monde y The Guardian. Desde el sur de Chile, desarrolla proyectos independientes y colabora con iniciativas que buscan visibilizar los impactos humanos y ecológicos de nuestro tiempo. En Restaura Atacama, contribuye al registro y la comunicación visual del proceso de transformación del territorio.",
    experience: [
      "Ganador del Polk Photography Award (2018) por su serie The Plight of the Rohingya.",
      "Cuatro veces premiado por World Press Photo (2006, 2013 y 2017).",
      "Photojournalist of the Year por la National Press Photographers Association (NPPA, 2017).",
      "Award of Excellence en Photographer of the Year (POYi), 2017.",
      "Gabriel García Márquez Award (2015) por su reportaje Patagonian Cowboys.",
      "Excellence in Feature Photography de la Society of Publishers in Asia (2015) por The Plight of the Rohingya.",
      "Latin American Photographer of the Year (POY Latam, 2013).",
      "Visa d'Or Daily News (Francia, 2012) por su cobertura del conflicto sirio.",
      "All Roads National Geographic Award (EE.UU., 2010) por Lost Harvest, Death of Loa River.",
      "ICP Young Photographer Infinity Award (EE.UU., 2005).",
    ],
    role: "Colaborador / Fotógrafo",
  },
  felipeBraun: {
    title: "Actor, director y gestor cultural · Embajador del proyecto",
    summary:
      "Actor, director y gestor cultural chileno, con una destacada trayectoria en teatro, cine y televisión. Reconocido por su compromiso con el desarrollo artístico y social del país, ha participado en producciones emblemáticas y en proyectos culturales orientados a la sostenibilidad, la educación y el medioambiente. Su experiencia en dirección teatral y su rol como promotor de iniciativas creativas lo han convertido en una figura influyente en la escena cultural chilena. En Restaura Atacama, aporta su visión y liderazgo como embajador, promoviendo la conciencia ambiental y la articulación entre arte, comunidad y territorio.",
    role: "Embajador",
  },
  solLeyton: {
    title: "Periodista y comunicadora · Embajadora del proyecto",
    summary:
      "Periodista chilena con una destacada trayectoria en televisión y medios de comunicación, reconocida por su cercanía con las audiencias y su compromiso con temas sociales y medioambientales. Ha trabajado en programas de televisión y proyectos documentales enfocados en la identidad, la cultura y las problemáticas del territorio, combinando periodismo, comunicación y divulgación con un enfoque humano. En Restaura Atacama, participa como embajadora, aportando su voz y experiencia para promover la conciencia ambiental y el valor de la acción colectiva en la regeneración del norte de Chile.",
    role: "Embajadora",
  },
  saraSamaniegoMarce: {
    title: "Generadora de Contenido ambiental y fundadora de Reciclamores ONG",
    summary:
      'Marce es conocida como la primera "Recicladora influencer" de Latinoamérica. Su objetivo es crear contenido educativo y social, principalmente en temas de sostenibilidad ambiental, creando conciencia sobre el consumo responsable y hablando principalmente de reciclaje de una manera RE FÁCIL, RE BAKANA Y RE DIFERENTE.\n\nOtro de sus grandes propósitos es visibilizar y dignificar la importante labor que realiza el gremio de los "reciclamores" por el medio ambiente y la sociedad, labor que lleva a cabo desde hace 5 años, en los que ha servido de maestra, ejemplo y vocera en países como Argentina, Brasil, México, Chile, Ecuador, Perú y principalmente Colombia.\n\nDentro de sus logros más destacados, Marce fue a representar a Colombia en Alemania en el foro más importante de jóvenes "One Young World", fue galardonada en los Premios "Insta Fest 2022" como mejor influencer con contenido educativo, y en la Asamblea Mundial de la juventud llevada a cabo en la ONU en Nueva York recibió el reconocimiento de "mejor historia de impacto", además de ser portada en el periódico más importante del mundo, The New York Times.',
    role: "Embajadora",
  },
  celesteGiardinelli: {
    title: "Periodista y exploradora científica",
    summary:
      "Periodista enfocada en divulgación científica y exploración, dedicada a acercar la ciencia a audiencias amplias a través de contenido accesible, narrativo y visual. Su trabajo combina comunicación, terreno y storytelling, abordando temas como biodiversidad, medioambiente y experiencias personales ligadas a la ciencia.\n\nHa desarrollado contenido digital de alto alcance y participa en proyectos de comunicación como podcasts y colaboraciones editoriales. Su enfoque se basa en observar, comprender y traducir fenómenos complejos en relatos cercanos, despertando curiosidad y conexión con el entorno.",
    role: "Embajadora",
  },
  agustinaGrasso: {
    title: "Periodista ambiental y docente universitaria",
    summary:
      "Autora del libro Basuraleza, ¿es posible un mundo sin basura? Directora de los documentales TRASH, el camino de la basura y Transición energética en Argentina. Creadora del portal Escritura Crónica. Fue columnista ambiental para El País de España y editora de ecología en Perfil.com. Conductora del streaming ambiental Hilo Verde.\n\nDocente de nuevas tecnologías y periodismo ambiental en la Universidad Nacional de Avellaneda y de la diplomatura en comunicación ambiental de la Universidad Nacional de San Martín.",
    role: "Embajadora",
  },
  claudiaValdes: {
    title: "Actriz, productora y escritora",
    summary:
      "Cubana formada en la Escuela Nacional de Arte. Su carrera comenzó con la película Lejos de África y alcanzó reconocimiento internacional con Los dioses rotos. Ha trabajado en cine, teatro y televisión en Cuba y Estados Unidos, además de incursionar en la escritura con el libro Mi hija es un astronauta.\n\nActualmente impulsa proyectos que combinan artes escénicas, medios digitales y comunicación, con un enfoque en visibilizar historias inspiradoras y cercanas, especialmente desde la perspectiva de las mujeres y la maternidad.",
    role: "Embajadora",
  },
};

const teamMembersEn = {
  claudioBedoya: {
    title: "Project Director — Diagnostic stage and Master Plan",
    summary:
      "Training in Europe and extensive experience in the private sector, mining and energy, environmental assessment and social license to operate. Also in sustainable development and project management in northern Chile.",
    experience: [
      "He has led initiatives in territorial governance, environmental restoration and public–private articulation in contexts of high social and ecological complexity.",
    ],
    role: "Project director, steering the overall vision, technical coordination and integration of the different teams and stakeholders involved in the territory’s regeneration process.",
  },
  patricioCabezas: {
    title: "Senior consultant",
    summary:
      "Senior consultant with strong experience in executive roles and boards in large companies, as well as in high environmental-impact startups and large-scale projects.",
    role: "Senior consultant with experience in executive roles, boards and high environmental-impact projects.",
  },
  catherinneHerrera: {
    title: "Textile Engineer | Senior Consultant and Advisor in Sustainable Fashion and Innovation",
    summary:
      "Textile Engineer from the University of Santiago, Chile, with more than 25 years in the textile industry, retail, production and fashion. Senior consultant focused on sustainability, innovation and the circular economy. Her path combines technical and commercial management with team building and strategic advice on sustainable development, circular design and business reinvention with social and environmental impact.",
    experience: [
      "Ibero-American Council for Sustainable Fashion (CIMS) – Expert Consultant (2024 – present). Part of the CIMS expert team, contributing experience in sustainable fashion, production, materials, certifications and regulations.",
      "Iscatex SpA – Senior Consultant and Speaker on Sustainable Fashion Business (2008 – present). Advises and trains organizations such as Cencosud, Texsur and Chile’s prison service on engineering processes, product development, industrial textile recycling and sustainability. Leads innovation and technical textile consulting for public and private sectors.",
      "Chinatex S.A. – General Manager (2010 – 2012). Team leadership, commercial strategy, sales planning and brand positioning in the textile market.",
      "Fundación Artesanías de Chile – Commercial Manager (2009 – 2010). Sales channels, results planning and coordination of own stores.",
      "Grupo Monarch S.A. – Sales Manager Tais and L'Asst (2008 – 2009). Collection and product development, purchasing planning and sales efficiency.",
      "Tejidos Caffarena S.A. – Head of Product Development (2006 – 2008). Led creation of underwear lines for own and third-party brands (Alaniz, París).",
      "VF Corporation – Production Planning and Control (2000 – 2005). International supplier management and quality control of textile collections for the Americas, Asia and Chile.",
    ],
    role: "Expert in Textile Engineering and the Circular Economy",
  },
  diegoAlbagly: {
    title: "Sociologist, Master’s in Environment and Territorial Development and in Education and Society.",
    summary: "Partner and Director of ARCOS Professional Institute.",
    experience: [
      "20 years in public and private sectors, in mining (AMSA), energy (ENGIE), education, international organizations (ECLAC) and the third sector (Executive Director, Fundación Juventud Emprendedora).",
    ],
    role: "Sociologist",
  },
  marcoBedoya: {
    title: "Senior consultant in environment and sustainability",
    summary: "Environment and sustainability (Chile/Switzerland)",
    experience: [
      "More than 15 years of international experience in corporate sustainability strategies, environmental and social project assessment, climate change, biodiversity, water and waste. He has worked in mining, energy, construction materials, agriculture and luxury cosmetics in Chile, Switzerland and other countries in Europe and Latin America.",
    ],
    role: "Sustainability advisor | ESG strategist | Liaison with communities and international stakeholders",
  },
  sandraAcosta: {
    title: "Strategic planning",
    summary: "Inclusive productive units | Systemic regeneration",
    experience: [
      "Design of textile circularity models (lifecycle, upcycling, recycling).",
      "Management of complex interdisciplinary projects (EMS frameworks, FOM, OGE).",
      "Development of inclusive productive units through circular workshops.",
      "Leadership in community governance and participatory diagnostics.",
      "Securing international funding for sustainable projects (Colombia, Spain, LATAM).",
    ],
    competencias: ["Systems thinking", "Circular economy", "Interdisciplinary leadership"],
    role: "Technical coordinator | Advisor on regenerative economy | Community leadership | Resource mobilization",
  },
  marioPino: {
    title: "Chilean-French architect | DPLG (State Diploma)",
    summary:
      "Background in urban planning (traditional and commercial), restoration of heritage buildings, social housing and developments for the tertiary and retail sectors. Main technical lines: Photovoltaic integration: turning parking areas into solar generation zones. Water regeneration: design of vegetated wastewater treatment systems for reuse.",
    experience: [
      "Marrakech Eco-District (ongoing): Design of photovoltaic parks for power generation and wastewater treatment / drinking water supply systems.",
      "Clínica Les Oliviers, France: Vegetated ponds for wastewater treatment, reused for garden and orchard irrigation.",
      "IDM-ARCAN Architecture, Marseille (2022–23): Accessibility and thermal compliance projects in government buildings",
    ],
    role: "Specialist in urban planning, heritage restoration, social housing, retail and sustainable design.",
  },
  brunoAlfaro: {
    title: "Civil Metallurgical Engineer",
    summary:
      "Civil Metallurgical Engineer with more than 25 years in the mining–metallurgical industry, specialized in project management, contract administration and process optimization. He has led multidisciplinary teams on large-scale projects for companies such as Codelco, with strengths in strategic planning, operational efficiency and resource management.",
    experience: [
      "General Manager in Mining & Metallurgical Projects & Business, focused on integrated project management and mineral marketing.",
      "Senior consultant on mining and metallurgical projects, providing technical and strategic solutions.",
      "Contract administrator for several Codelco divisions (Chuquicamata, Salvador, Teniente).",
      "Direction of metallurgical process units, water recovery and operational control.",
    ],
    role: "Technical coordination | Implementation strategy and liaison with industrial actors",
  },
  christianMatamala: {
    title: "Socio-environmental consultant and coach",
    summary: "35 years in environmental education, sustainability and regenerative systems.",
    experience: [
      "Environmental risk assessments (Chile, Brazil, Peru, Argentina).",
      "Coaching in systemic leadership (aligned with UN/IDB: Conscious Capitalism, Theory U).",
      "Conflict resolution for Indigenous communities near mining sites (Codelco divisions).",
      "Public policy design: climate education plans in Rio de Janeiro (Brazil) and water policy for Chile’s NDC.",
    ],
    role: "Technical coordinator | Leader in socio-environmental practice | Strategist for engagement with key stakeholders",
  },
  miguelAngelCurihuinca: {
    title: "Geographer and Master’s in Urbanism",
    summary:
      "Geographer from the University of Chile with a Master’s in Urbanism. His career focuses on territorial planning, urban regeneration and integrating the environmental dimension in infrastructure and regional development projects. His experience combines spatial diagnosis, waste management and work with local communities, especially in northern Chile.",
    experience: [
      'He took part in the "Cerro Navia Urban-Housing Regeneration Plan" during his Master’s, exploring housing alternatives through multicriteria analysis of vulnerability, land and urban regulations.',
      "He collaborated on biodiversity conservation initiatives for Anglo American Chile, contributing territorial analysis and mapping of waste hotspots and environmental impacts in operational areas.",
      "He has shared studies and reflections on waste valorization projects (e.g. plants turning waste into energy, water and bricks) and their implications for regional planning.",
    ],
    role: "Geographer",
  },
  ricardoQuiroz: {
    title: "Civil Engineer in Metallurgy",
    summary: "Expert in mining projects",
    experience: [
      "25 years in mining projects of different scales, specializing in design, construction, operation and closure of massive mining waste management (tailings, slag, ripios, marine deposits), advisor on construction and demolition waste (CDW) and hazardous industrial waste.",
    ],
    competencias: ["Process optimization", "Sustainable logistics", "Operations management"],
    role: "Specialist in risk prevention, process optimization and sustainable logistics",
  },
  robertoFuentes: {
    title: "Creative director in advertising and communication",
    summary:
      "More than 15 years leading communication, branding and campaign projects for national and international brands. He has worked in advertising agencies developing creative strategies that combine design, storytelling and brand positioning.",
    experience: [
      "Creative director at advertising agencies in Chile, leading multidisciplinary teams.",
      "Integrated campaigns for clients across mass consumption, services and entrepreneurship.",
      "Communication and branding strategy for projects focused on sustainability and social positioning.",
    ],
    role: "Creative director | Responsible for advertising, branding and communication to position Recicla Atacama in media and social networks.",
  },
  mariaJoseCaceres: {
    title: "Partner",
    summary:
      "Advertising professional, Co-founder & CEO of Normandi Media, a digital marketing agency known for its innovative approach and work with major brands in Latin America.",
    role: "Partner",
  },
  cesarGuzmanTorrico: {
    title: "Chemical Civil Engineer | Specialist in Metallurgical Processes and Sustainability",
    summary:
      "Chemical Civil Engineer with more than 20 years developing and implementing technological solutions applied to mining, metallurgy and the circular economy. His work has focused on process optimization, innovation in waste valorization and sustainable strategies for industry.",
    experience: [
      "Process engineering specialist for large-scale copper mining in Chile, Peru and Bolivia.",
      "Consultant on technological innovation and energy efficiency in metallurgical operations.",
      "Advisor on industrial waste management and reuse of mining by-products.",
      "Contributor to circular economy initiatives and recovery of strategic materials.",
    ],
    competencias: [
      "Metallurgical process optimization",
      "Technological innovation",
      "Environmental management",
      "Industrial sustainability",
      "Waste valorization",
    ],
    role: "Technical advisor on industrial processes | Innovation and clean technology development | Liaison with the mining and metallurgical industry",
  },
  paulaCastillo: {
    title: "Architect",
    summary: "Specialist in environmental impact assessment",
    experience: [
      "Assessment and monitoring of environmental projects",
      "Implementation of environmental management systems",
      "Advice on Chilean environmental regulations",
    ],
    competencias: ["Environmental impact assessment", "Natural resource management", "Regulatory compliance"],
    role: "Advisor on environmental impact assessment",
  },
  ashleyCastillo: {
    title: "Social worker",
    summary: "Licensed social worker from Universidad Arturo Prat",
    experience: [
      "Licensed social worker from Universidad Arturo Prat and popular educator for 7 years in the historic El Colorado neighborhood, with experience developing and strengthening community processes. She leads the social organization Escuelita Popular Luchín, driving projects on participation, popular education and rights from childhood. Her work focuses on accompanying communities, designing collective strategies and building support networks that strengthen social fabric and common well-being.",
    ],
    role: "Social worker",
  },
};

const colaboradoresMembersEn = {
  mateoBarrenengoa: {
    title: "Documentary filmmaker · National Geographic Explorer",
    summary:
      "Chilean director and filmmaker with more than 10 years producing documentaries on conservation of natural and cultural heritage in Chile and around the world (Himalaya, Amazon, Africa, Patagonia).",
    experience: [
      "He has produced, filmed and directed documentaries on ecosystem and human community conservation, especially in remote contexts.",
      "Recognized as a National Geographic Society Explorer, underscoring his path in exploration, visual storytelling and conservation",
    ],
    role: "Documentary filmmaker",
  },
  tomasMunita: {
    title: "Documentary photographer · Project collaborator",
    summary:
      "Chilean documentary photographer (1975) with an outstanding international career on social, cultural and environmental themes. His work, marked by deep visual and narrative sensitivity, has appeared in media such as The New York Times, National Geographic, Geo, Le Monde and The Guardian. From southern Chile he develops independent projects and collaborates with initiatives that highlight the human and ecological impacts of our time. At Restaura Atacama he contributes to documenting and visually communicating the territory’s transformation process.",
    experience: [
      "Polk Photography Award winner (2018) for his series The Plight of the Rohingya.",
      "Four-time World Press Photo winner (2006, 2013 and 2017).",
      "Photojournalist of the Year, National Press Photographers Association (NPPA, 2017).",
      "Award of Excellence, Photographer of the Year (POYi), 2017.",
      "Gabriel García Márquez Award (2015) for his feature Patagonian Cowboys.",
      "Excellence in Feature Photography, Society of Publishers in Asia (2015) for The Plight of the Rohingya.",
      "Latin American Photographer of the Year (POY Latam, 2013).",
      "Visa d'Or Daily News (France, 2012) for his coverage of the Syrian conflict.",
      "All Roads National Geographic Award (USA, 2010) for Lost Harvest, Death of Loa River.",
      "ICP Young Photographer Infinity Award (USA, 2005).",
    ],
    role: "Collaborator / Photographer",
  },
  felipeBraun: {
    title: "Actor, director and cultural manager · Project ambassador",
    summary:
      "Chilean actor, director and cultural manager with a strong career in theater, film and television. Known for his commitment to artistic and social development, he has taken part in landmark productions and cultural projects oriented to sustainability, education and the environment. His experience in theater direction and as a promoter of creative initiatives has made him an influential figure in Chile’s cultural scene. At Restaura Atacama he contributes his vision and leadership as an ambassador, promoting environmental awareness and linking art, community and territory.",
    role: "Ambassador",
  },
  solLeyton: {
    title: "Journalist and communicator · Project ambassador",
    summary:
      "Chilean journalist with a strong career in television and media, known for closeness to audiences and commitment to social and environmental issues. She has worked on TV programs and documentary projects focused on identity, culture and territorial challenges, combining journalism, communication and outreach with a human approach. At Restaura Atacama she participates as an ambassador, bringing her voice and experience to promote environmental awareness and the value of collective action in regenerating northern Chile.",
    role: "Ambassador",
  },
  saraSamaniegoMarce: {
    title: "Environmental content creator and founder of Reciclamores ONG",
    summary:
      'Marce is known as Latin America’s first "recycling influencer." Her goal is to create educational and social content, mainly on environmental sustainability, raising awareness about responsible consumption and talking about recycling in a really easy, really cool and really different way.\n\nAnother major purpose is to make visible and dignify the essential work of "reciclamores" (waste pickers) for the environment and society, which she has carried out for 5 years as a teacher, example and spokesperson in countries such as Argentina, Brazil, Mexico, Chile, Ecuador, Peru and especially Colombia.\n\nAmong her highlights, Marce represented Colombia in Germany at the leading youth forum "One Young World," was awarded at the "Insta Fest 2022" as best influencer with educational content, and at the UN World Youth Assembly in New York received recognition for "best impact story," in addition to being on the cover of The New York Times.',
    role: "Ambassador",
  },
  celesteGiardinelli: {
    title: "Journalist and scientific explorer",
    summary:
      "Journalist focused on science communication and exploration, dedicated to bringing science to broad audiences through accessible, narrative and visual content. Her work combines communication, field work and storytelling, addressing biodiversity, the environment and personal experiences linked to science.\n\nShe has developed high-reach digital content and takes part in communication projects such as podcasts and editorial collaborations. Her approach is to observe, understand and translate complex phenomena into relatable stories that spark curiosity and connection with the environment.",
    role: "Ambassador",
  },
  agustinaGrasso: {
    title: "Environmental journalist and university lecturer",
    summary:
      "Author of the book Basuraleza: Is a world without trash possible? Director of the documentaries TRASH, the path of trash and Energy transition in Argentina. Creator of the Escritura Crónica portal. She was environmental columnist for El País (Spain) and ecology editor at Perfil.com. Host of the environmental streaming show Hilo Verde.\n\nShe teaches new technologies and environmental journalism at Universidad Nacional de Avellaneda and the diploma in environmental communication at Universidad Nacional de San Martín.",
    role: "Ambassador",
  },
  claudiaValdes: {
    title: "Actor, producer and writer",
    summary:
      "Cuban, trained at the National School of Art. Her career began with the film Lejos de África and gained international recognition with Los dioses rotos. She has worked in film, theater and television in Cuba and the United States, and has ventured into writing with the book Mi hija es un astronauta.\n\nShe currently drives projects combining performing arts, digital media and communication, with a focus on inspiring, relatable stories, especially from the perspective of women and motherhood.",
    role: "Ambassador",
  },
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "nosotros-people.es.json"),
  JSON.stringify({ teamMembers: teamMembersEs, colaboradoresMembers: colaboradoresMembersEs }, null, 2),
  "utf8"
);
fs.writeFileSync(
  path.join(outDir, "nosotros-people.en.json"),
  JSON.stringify({ teamMembers: teamMembersEn, colaboradoresMembers: colaboradoresMembersEn }, null, 2),
  "utf8"
);
console.log("Wrote nosotros-people.es.json and nosotros-people.en.json");
