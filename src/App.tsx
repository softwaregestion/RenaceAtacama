import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import ElProblema from "./pages/ElProblema";
import ElProyecto from "./pages/ElProyecto";
import LaPropuesta from "./pages/LaPropuesta";
import Nosotros from "./pages/Nosotros";
import QuienesSomos from "./pages/QuienesSomos";
import Equipo from "./pages/Equipo";
import Partners from "./pages/Partners";
import ColaboradoresNosotros from "./pages/ColaboradoresNosotros";
import Embajadores from "./pages/Embajadores";
import Contenido from "./pages/Contenido";
import ElDocumental from "./pages/ElDocumental";
import Escarabajos from "./pages/Escarabajos";
import Galeria from "./pages/Galeria";
import AccionSocial from "./pages/AccionSocial";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./lib/routes";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<Index />} />
          <Route path={ROUTES.elProblema} element={<ElProblema />} />
          <Route path={ROUTES.elProyecto} element={<ElProyecto />} />
          <Route path={ROUTES.laPropuesta} element={<LaPropuesta />} />
          <Route path={ROUTES.nosotros} element={<Nosotros />} />
          <Route path={ROUTES.quienesSomos} element={<QuienesSomos />} />
          <Route path={ROUTES.equipo} element={<Equipo />} />
          <Route path={ROUTES.partners} element={<Partners />} />
          <Route path={ROUTES.colaboradores} element={<ColaboradoresNosotros />} />
          <Route path={ROUTES.embajadores} element={<Embajadores />} />
          <Route path={ROUTES.contenido} element={<Contenido />} />
          <Route path={ROUTES.elDocumental} element={<ElDocumental />} />
          <Route path={ROUTES.escarabajos} element={<Escarabajos />} />
          <Route path={ROUTES.galeria} element={<Galeria />} />
          <Route path={ROUTES.accionSocial} element={<AccionSocial />} />
          <Route path={ROUTES.productos} element={<Productos />} />
          <Route path={ROUTES.contacto} element={<Contacto />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
