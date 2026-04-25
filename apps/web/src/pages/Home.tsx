import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/i18n";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Terminal,
} from "lucide-react";
import {
  SiGithub,
  SiC,
  SiPython,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiMysql,
  SiLinux,
  SiLatex,
} from "react-icons/si";
import { FaJava, FaLinkedin } from "react-icons/fa";

const SiCss3 = SiCss;
const SiJava = FaJava;
const SiLinkedin = FaLinkedin;

const CV_URL = `${import.meta.env.BASE_URL}cv-ali-ahnach.pdf`;
const PROFILE_PHOTO = `${import.meta.env.BASE_URL}profile.jpg`;
const AROMES_DE_PARIS_IMAGE = `${import.meta.env.BASE_URL}hero-bg.svg`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const projectImageAnimation = {
  initial: { scale: 1.04, y: 0 },
  animate: {
    scale: [1.04, 1.1, 1.04],
    y: [0, -8, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

export default function Home() {
  const { t } = useLanguage();

  const educationItems = [
    {
      title: t("edu.1.title"),
      school: t("edu.1.school"),
      date: t("edu.1.date"),
      desc: t("edu.1.desc"),
    },
    {
      title: t("edu.2.title"),
      school: t("edu.2.school"),
      date: t("edu.2.date"),
      desc: t("edu.2.desc"),
    },
    {
      title: t("edu.3.title"),
      school: t("edu.3.school"),
      date: t("edu.3.date"),
      desc: t("edu.3.desc"),
    },
  ];

  const skillCategories = [
    {
      title: t("skills.cat.languages"),
      skills: [
        { name: "C", icon: SiC },
        { name: "Java", icon: SiJava },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      title: t("skills.cat.frontend"),
      skills: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
      ],
    },
    {
      title: t("skills.cat.database"),
      skills: [{ name: "MySQL", icon: SiMysql }],
    },
    {
      title: t("skills.cat.systems"),
      skills: [
        { name: t("skills.linuxBasic"), icon: SiLinux },
        { name: "LaTeX", icon: SiLatex },
      ],
    },
  ];

  const softSkills = [
    t("skills.soft.team"),
    t("skills.soft.motivation"),
    t("skills.soft.organization"),
    t("skills.soft.learning"),
    t("skills.soft.communication"),
    t("skills.soft.time"),
  ];

  const projects = [
    {
      title: t("projects.1.title"),
      type: t("projects.1.type"),
      desc: t("projects.1.desc"),
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: AROMES_DE_PARIS_IMAGE,
    },
    {
      title: t("projects.2.title"),
      type: t("projects.2.type"),
      desc: t("projects.2.desc"),
      tech: ["OCR", "Mobile", "Cloud"],
    },
    {
      title: t("projects.3.title"),
      type: t("projects.3.type"),
      desc: t("projects.3.desc"),
      tech: ["Marketing", "Design"],
    },
    {
      title: t("projects.4.title"),
      type: t("projects.4.type"),
      desc: t("projects.4.desc"),
      tech: ["Java", "OOP"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center min-h-[90vh]"
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-3xl order-2 lg:order-1"
              >
                <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 font-mono text-xs bg-primary/10 text-primary border-primary/20"
                  >
                    <Terminal className="w-3 h-3 mr-2" />
                    {t("hero.badge")}
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground"
                >
                  Ali Ahnach
                </motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6"
                >
                  {t("hero.title")}{" "}
                  <span className="text-foreground">{t("hero.titleHighlight")}</span>{" "}
                  {t("hero.titleEnd")}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                >
                  {t("hero.subtitle")}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="h-12 px-8">
                    <a href="#contact">
                      {t("hero.cta.contact")} <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8">
                    <a href={CV_URL} download>
                      <Download className="mr-2 w-4 h-4" /> {t("hero.cta.cv")}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8">
                    <a href="https://github.com/AliAhnach" target="_blank" rel="noopener noreferrer">
                      <SiGithub className="mr-2 w-4 h-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8">
                    <a
                      href="https://www.linkedin.com/in/ali-ahnach"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiLinkedin className="mr-2 w-4 h-4" /> LinkedIn
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-full blur-2xl opacity-60" />
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse" />
                    <Avatar className="relative h-56 w-56 md:h-72 md:w-72 ring-4 ring-primary/20 shadow-2xl">
                      <AvatarImage src={PROFILE_PHOTO} alt="Ali Ahnach" className="object-cover" />
                      <AvatarFallback className="text-6xl md:text-7xl font-bold font-mono bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                        AA
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-border shadow-lg rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-xs font-mono text-foreground">{t("hero.location")}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT & CONTACT QUICK INFO */}
        <section id="about" className="py-20 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="bg-primary/20 text-primary p-2 rounded-lg mr-4">
                      <Terminal className="w-6 h-6" />
                    </span>
                    {t("about.title")}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t("about.p1")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.p2")}
                  </p>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="bg-card border-border/50 shadow-sm">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4">{t("about.contact")}</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{t("about.location")}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <a
                            href="tel:+212682250928"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +212 6 82 25 09 28
                          </a>
                        </li>
                        <li className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <a
                            href="mailto:aliahnach422@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            aliahnach422@gmail.com
                          </a>
                        </li>
                      </ul>

                      <Separator className="my-6" />

                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                          {t("about.languages")}
                        </h4>
                        <div className="flex justify-between items-center text-sm">
                          <span>{t("about.lang.arabic")}</span>
                          <span className="text-muted-foreground">{t("about.level.fluent")}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>{t("about.lang.french")}</span>
                          <span className="text-muted-foreground">{t("about.level.good")}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>{t("about.lang.english")}</span>
                          <span className="text-muted-foreground">
                            {t("about.level.intermediate")}
                          </span>
                        </div>
                      </div>

                      <Separator className="my-6" />

                      <Button asChild className="w-full" variant="default">
                        <a href={CV_URL} download>
                          <Download className="w-4 h-4 mr-2" /> {t("hero.cta.cv")}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{t("edu.title")}</h3>
              <p className="text-muted-foreground text-lg">{t("edu.subtitle")}</p>
            </motion.div>

            <div className="relative border-l-2 border-primary/20 pl-8 ml-4 space-y-12">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-background border-4 border-primary" />
                  <div className="bg-card p-6 rounded-lg border shadow-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                        <div className="flex items-center text-primary font-medium mt-1">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {item.school}
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit shrink-0 font-mono">
                        {item.date}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{t("skills.title")}</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t("skills.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className="h-full bg-card hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-6 border-b pb-2">{category.title}</h4>
                      <ul className="space-y-4">
                        {category.skills.map((skill) => (
                          <li key={skill.name} className="flex items-center gap-3">
                            <skill.icon className="w-6 h-6 text-muted-foreground" />
                            <span className="font-mono text-sm">{skill.name}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h4 className="text-xl font-bold mb-6 text-center">{t("skills.softTitle")}</h4>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 md:flex md:items-end md:justify-between"
            >
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h3>
                <p className="text-muted-foreground text-lg">{t("projects.subtitle")}</p>
              </div>
              <Button variant="outline" asChild className="mt-6 md:mt-0 hidden sm:flex">
                <a href="https://github.com/AliAhnach" target="_blank" rel="noopener noreferrer">
                  {t("projects.viewGithub")} <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-md transition-all group overflow-hidden border-border/50">
                    {project.image ? (
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/50">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          initial={idx === 0 ? projectImageAnimation.initial : { scale: 1 }}
                          animate={idx === 0 ? projectImageAnimation.animate : undefined}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                      </div>
                    ) : null}
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="mb-4">
                        <Badge
                          variant="outline"
                          className="mb-3 text-primary border-primary/30 bg-primary/5"
                        >
                          {project.type}
                        </Badge>
                        <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-6">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((techItem) => (
                          <Badge
                            key={techItem}
                            variant="secondary"
                            className="font-mono text-xs bg-muted/50 text-foreground"
                          >
                            {techItem}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild className="w-full">
                <a href="https://github.com/AliAhnach" target="_blank" rel="noopener noreferrer">
                  {t("projects.viewGithub")} <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{t("exp.title")}</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-l-primary shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold">{t("exp.role")}</h4>
                      <p className="text-muted-foreground mt-1 flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {t("exp.type")}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {[t("exp.b1"), t("exp.b2"), t("exp.b3"), t("exp.b4")].map((b, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mr-2" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 z-0" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h3>
              <p className="text-xl text-muted-foreground mb-8">
                {t("contact.text.before")}{" "}
                <span className="font-semibold text-foreground">
                  {t("contact.text.highlight")}
                </span>
                {t("contact.text.after")}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-base">
                  <a href="mailto:aliahnach422@gmail.com">{t("contact.email")}</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                  <a href={CV_URL} download>
                    <Download className="mr-2 w-5 h-5" /> {t("contact.cv")}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                  <a
                    href="https://www.linkedin.com/in/ali-ahnach"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLinkedin className="mr-2 w-5 h-5" /> {t("contact.linkedin")}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-mono font-bold text-lg">
              <span className="text-primary bg-primary/10 px-2 py-1 rounded-md">AA</span>
              Ali Ahnach
            </div>

            <div className="flex gap-6 text-muted-foreground">
              <a
                href="mailto:aliahnach422@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <span className="sr-only">Email</span>
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/AliAhnach"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-ahnach"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center md:text-left text-sm text-muted-foreground border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between">
            <p>
              © {new Date().getFullYear()} Ali Ahnach. {t("footer.rights")}
            </p>
            <p className="mt-2 md:mt-0">{t("footer.tagline")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
