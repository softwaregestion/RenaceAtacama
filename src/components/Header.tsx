import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import i18n, { LANGUAGES, type LanguageCode } from "@/i18n";

const FLAG_BY_LANG: Record<string, string> = {
  es: "🇪🇸",
  en: "🇺🇸",
  "pt-BR": "🇧🇷",
};

export function Header() {
  const { t } = useTranslation();
  const currentFlag = FLAG_BY_LANG[i18n.language] ?? FLAG_BY_LANG.es;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { label: t("nav.home"), href: ROUTES.home },
      {
        label: t("nav.elProyecto"),
        children: [
          { label: t("nav.elProyecto"), href: ROUTES.elProyecto },
          { label: t("nav.productos"), href: ROUTES.productos },
        ],
      },
      { label: t("nav.nosotros"), href: ROUTES.nosotros },
      { label: t("nav.contenido"), href: ROUTES.contenido },
      { label: t("nav.escarabajos"), href: ROUTES.escarabajos },
    ],
    [t]
  );

  const isActive = (href: string) => location.pathname === href;
  const isActiveSection = (children?: { href: string }[]) =>
    children?.some((c) => location.pathname === c.href);

  const handleLanguage = (code: LanguageCode) => {
    i18n.changeLanguage(code);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to={ROUTES.home} className="flex items-center">
            <img
              src="/renace-logo-cafe-oscuro.png"
              alt="Renace Atacama"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              "children" in item ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-800 hover:text-primary transition-colors rounded-lg",
                      isActiveSection(item.children) && "text-primary"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-border py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors",
                              isActive(child.href) && "text-primary font-medium bg-primary/5"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold text-gray-800 hover:text-primary transition-colors rounded-lg",
                    isActive(item.href) && "text-primary"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-border hover:bg-primary/10 hover:border-primary/50 text-2xl leading-none w-10 h-10"
                  aria-label="Idioma"
                >
                  <span aria-hidden>{currentFlag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[10rem]">
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguage(lang.code)}
                    className={cn(i18n.language === lang.code && "bg-primary/10 text-primary font-medium")}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hidden md:flex border-2 border-foreground hover:bg-foreground hover:text-background rounded-full px-6"
            >
              <Link to={ROUTES.contacto}>{t("nav.contact")}</Link>
            </Button>

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t("nav.openMenu")}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-primary/30"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) =>
                "children" in item ? (
                  <div key={item.label} className="pt-2">
                    <p className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "block px-4 py-3 text-base font-medium hover:bg-primary/10 hover:text-primary rounded-lg",
                          isActive(child.href) && "text-primary bg-primary/5"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-base font-semibold hover:bg-primary/10 hover:text-primary rounded-lg",
                      isActive(item.href) && "text-primary bg-primary/5"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
                <Button asChild variant="outline" className="w-full rounded-full" size="lg">
                  <Link to={ROUTES.contacto} onClick={() => setIsMenuOpen(false)}>
                    {t("nav.contact")}
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
