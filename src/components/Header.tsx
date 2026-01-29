import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES, NAV_ITEMS } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isActiveSection = (children?: { href: string }[]) =>
    children?.some((c) => location.pathname === c.href);

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
            {NAV_ITEMS.map((item) =>
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
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hidden md:flex border-2 border-foreground hover:bg-foreground hover:text-background rounded-full px-6"
            >
              <Link to={ROUTES.contacto}>Contáctanos</Link>
            </Button>

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
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
              {NAV_ITEMS.map((item) =>
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
                    Contáctanos
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
