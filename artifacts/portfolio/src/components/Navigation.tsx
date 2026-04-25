import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, Menu, X, Download, Languages } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useLanguage } from "@/lib/i18n";
import { Button } from "./ui/button";

const CV_URL = `${import.meta.env.BASE_URL}cv-ali-ahnach.pdf`;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-primary z-50"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="text-xl font-bold tracking-tighter flex items-center gap-2"
          >
            <span className="text-primary bg-primary/10 px-2 py-1 rounded-md font-mono text-sm">AA</span>
            <span className="hidden sm:inline-block">Ali Ahnach</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 border-l pl-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLang}
                title={t("nav.langToggle")}
                className="rounded-full h-9 px-3 font-mono text-xs uppercase"
              >
                <Languages className="w-4 h-4 mr-1.5" />
                {lang === "fr" ? "EN" : "FR"}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full w-9 h-9"
                title={t("nav.themeToggle")}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">{t("nav.themeToggle")}</span>
              </Button>
              <Button asChild variant="outline" size="sm" className="ml-1">
                <a href={CV_URL} download>
                  <Download className="w-4 h-4 mr-2" />
                  {t("nav.downloadCv")}
                </a>
              </Button>
              <Button asChild size="sm">
                <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                  {t("nav.contactCta")}
                </a>
              </Button>
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLang}
              className="rounded-full h-9 px-3 font-mono text-xs uppercase"
            >
              {lang === "fr" ? "EN" : "FR"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-9 h-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">{t("nav.themeToggle")}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg p-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block text-lg font-medium text-foreground py-2 border-b border-border/50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="w-full">
              <a href={CV_URL} download>
                <Download className="w-4 h-4 mr-2" />
                {t("nav.downloadCv")}
              </a>
            </Button>
            <Button asChild className="w-full">
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                {t("nav.contactCta")}
              </a>
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
