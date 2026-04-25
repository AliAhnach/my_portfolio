import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, string>;

const fr: Dict = {
  // nav
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.education": "Formation",
  "nav.skills": "Compétences",
  "nav.projects": "Projets",
  "nav.experience": "Expérience",
  "nav.contact": "Contact",
  "nav.contactCta": "Me contacter",
  "nav.downloadCv": "Télécharger CV",
  "nav.themeToggle": "Changer le thème",
  "nav.langToggle": "Switch to English",

  // hero
  "hero.badge": "Étudiant ingénieur en développement logiciel",
  "hero.title": "Étudiant ingénieur en",
  "hero.titleHighlight": "développement logiciel",
  "hero.titleEnd": "et applicatif",
  "hero.subtitle":
    "Étudiant en première année du cycle ingénieur en développement logiciel et applicatif à l'ENSA d'Agadir, passionné par le développement informatique.",
  "hero.cta.contact": "Me contacter",
  "hero.cta.cv": "Télécharger mon CV",
  "hero.role": "Étudiant ingénieur",
  "hero.location": "ENSA Agadir, Maroc",

  // about
  "about.title": "Profil",
  "about.p1":
    "Je suis un étudiant ingénieur rigoureux et motivé, actuellement en première année du cycle ingénieur à l'École Nationale des Sciences Appliquées (ENSA) d'Agadir. Ma formation spécialisée en développement logiciel et applicatif me permet d'acquérir de solides bases techniques et méthodologiques.",
  "about.p2":
    "J'aime mettre mes connaissances en pratique, apprendre au contact de professionnels expérimentés et contribuer à des projets concrets et stimulants.",
  "about.contact": "Coordonnées",
  "about.location": "Khénifra, Maroc",
  "about.languages": "Langues",
  "about.lang.arabic": "Arabe",
  "about.lang.french": "Français",
  "about.lang.english": "Anglais",
  "about.level.fluent": "Courant",
  "about.level.good": "Bon niveau",
  "about.level.intermediate": "Intermédiaire",

  // education
  "edu.title": "Parcours Académique",
  "edu.subtitle":
    "Une formation solide en sciences de l'ingénieur et développement logiciel.",
  "edu.1.title": "Cycle ingénieur en génie logiciel",
  "edu.1.school": "ENSA Agadir",
  "edu.1.date": "2025 – Présent",
  "edu.1.desc":
    "Spécialisation en développement logiciel et applicatif. Apprentissage approfondi de l'ingénierie logicielle, des architectures systèmes et de la gestion de projets IT.",
  "edu.2.title": "Classes préparatoires intégrées",
  "edu.2.school": "ENSA Agadir",
  "edu.2.date": "2023 – 2025",
  "edu.2.desc":
    "Formation intensive en mathématiques, physique et sciences de l'ingénieur, préparant au cycle d'ingénieur.",
  "edu.3.title": "Baccalauréat en sciences physiques",
  "edu.3.school": "Lycée Moulay Rachid Aguelmous, Khénifra",
  "edu.3.date": "2022",
  "edu.3.desc": "Mention, avec d'excellentes bases scientifiques.",

  // skills
  "skills.title": "Compétences Techniques",
  "skills.subtitle":
    "Technologies maîtrisées et outils utilisés dans le cadre de mes projets et de ma formation.",
  "skills.cat.languages": "Langages",
  "skills.cat.frontend": "Front-end",
  "skills.cat.database": "Base de données",
  "skills.cat.systems": "Systèmes & Outils",
  "skills.linuxBasic": "Linux (bases)",
  "skills.softTitle": "Soft Skills",
  "skills.soft.team": "Travail en équipe",
  "skills.soft.motivation": "Motivation",
  "skills.soft.organization": "Organisation",
  "skills.soft.learning": "Apprentissage rapide",
  "skills.soft.communication": "Communication",
  "skills.soft.time": "Gestion du temps",

  // projects
  "projects.title": "Projets",
  "projects.subtitle":
    "Réalisations académiques et projets personnels mettant en œuvre mes compétences techniques et organisationnelles.",
  "projects.viewGithub": "Voir mon GitHub",
  "projects.1.title": 'Site web vitrine "Arômes de Paris"',
  "projects.1.type": "Projet en équipe (5 personnes)",
  "projects.1.desc":
    "Conception d'une interface web attractive et intuitive pour une parfumerie. Amélioration de l'expérience utilisateur via un design moderne et présentation organisée des produits (parfums, arômes).",
  "projects.2.title": "Application de gestion des reçus d'achat",
  "projects.2.type": "Projet en équipe (5 personnes) - Mobile",
  "projects.2.desc":
    "Étude et conception d'une solution d'extraction des données. Analyse des technologies OCR et architectures (cloud vs local). Prise en compte des aspects sécurité et réglementation.",
  "projects.3.title": "Chatbot de recommandation vestimentaire",
  "projects.3.type": "Projet collaboratif (17 personnes)",
  "projects.3.desc":
    "Système de recommandation basé sur la météo. Contribution au département marketing : création d'affiches promotionnelles, analyse des besoins et étude du marché.",
  "projects.4.title": "Mini application de gestion des étudiants",
  "projects.4.type": "Projet individuel",
  "projects.4.desc":
    "Développement d'une application Java pour la gestion d'une base d'étudiants (ajout, modification, suppression, recherche).",

  // experience
  "exp.title": "Expérience",
  "exp.role": "Assistant épicerie",
  "exp.type": "Emploi saisonnier (Été)",
  "exp.b1": "Accueil et service des clients, garantissant une bonne expérience client.",
  "exp.b2": "Organisation et rangement rigoureux des produits en rayon.",
  "exp.b3": "Travail en équipe au sein d'un environnement dynamique.",
  "exp.b4":
    "Développement de compétences clés : communication interpersonnelle et gestion du temps.",

  // contact
  "contact.title": "Prêt à collaborer ?",
  "contact.text.before": "Je suis disponible pour",
  "contact.text.highlight": "collaborer sur des projets concrets",
  "contact.text.after":
    ". Si mon profil correspond à vos besoins, n'hésitez pas à me contacter.",
  "contact.email": "Envoyer un email",
  "contact.linkedin": "Mon LinkedIn",
  "contact.cv": "Télécharger mon CV",

  // footer
  "footer.rights": "Tous droits réservés.",
  "footer.tagline": "Fait avec soin.",
};

const en: Dict = {
  // nav
  "nav.home": "Home",
  "nav.about": "About",
  "nav.education": "Education",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "nav.contact": "Contact",
  "nav.contactCta": "Contact me",
  "nav.downloadCv": "Download CV",
  "nav.themeToggle": "Toggle theme",
  "nav.langToggle": "Passer en français",

  // hero
  "hero.badge": "Engineering student in software development",
  "hero.title": "Engineering student in",
  "hero.titleHighlight": "software development",
  "hero.titleEnd": "and applications",
  "hero.subtitle":
    "First-year engineering student in software and applications development at ENSA Agadir, passionate about software engineering.",
  "hero.cta.contact": "Contact me",
  "hero.cta.cv": "Download my CV",
  "hero.role": "Engineering student",
  "hero.location": "ENSA Agadir, Morocco",

  // about
  "about.title": "Profile",
  "about.p1":
    "I am a rigorous and motivated engineering student, currently in my first year of the engineering cycle at the National School of Applied Sciences (ENSA) Agadir. My specialization in software and applications development gives me solid technical and methodological foundations.",
  "about.p2":
    "I enjoy putting my knowledge into practice, learning from experienced professionals and contributing to concrete, stimulating projects.",
  "about.contact": "Contact",
  "about.location": "Khénifra, Morocco",
  "about.languages": "Languages",
  "about.lang.arabic": "Arabic",
  "about.lang.french": "French",
  "about.lang.english": "English",
  "about.level.fluent": "Fluent",
  "about.level.good": "Proficient",
  "about.level.intermediate": "Intermediate",

  // education
  "edu.title": "Education",
  "edu.subtitle":
    "Strong training in engineering sciences and software development.",
  "edu.1.title": "Engineering cycle in software engineering",
  "edu.1.school": "ENSA Agadir",
  "edu.1.date": "2025 – Present",
  "edu.1.desc":
    "Specialization in software and applications development. In-depth study of software engineering, system architectures and IT project management.",
  "edu.2.title": "Integrated preparatory classes",
  "edu.2.school": "ENSA Agadir",
  "edu.2.date": "2023 – 2025",
  "edu.2.desc":
    "Intensive training in mathematics, physics and engineering sciences, preparing for the engineering cycle.",
  "edu.3.title": "High School Diploma — Physical Sciences",
  "edu.3.school": "Moulay Rachid Aguelmous High School, Khénifra",
  "edu.3.date": "2022",
  "edu.3.desc": "Honors, with excellent scientific foundations.",

  // skills
  "skills.title": "Technical Skills",
  "skills.subtitle":
    "Technologies and tools I use in my projects and academic work.",
  "skills.cat.languages": "Languages",
  "skills.cat.frontend": "Front-end",
  "skills.cat.database": "Database",
  "skills.cat.systems": "Systems & Tools",
  "skills.linuxBasic": "Linux (basics)",
  "skills.softTitle": "Soft Skills",
  "skills.soft.team": "Teamwork",
  "skills.soft.motivation": "Motivation",
  "skills.soft.organization": "Organization",
  "skills.soft.learning": "Fast learner",
  "skills.soft.communication": "Communication",
  "skills.soft.time": "Time management",

  // projects
  "projects.title": "Projects",
  "projects.subtitle":
    "Academic and personal projects showcasing my technical and organizational skills.",
  "projects.viewGithub": "View my GitHub",
  "projects.1.title": '"Arômes de Paris" showcase website',
  "projects.1.type": "Team project (5 people)",
  "projects.1.desc":
    "Designed an attractive and intuitive web interface for a perfumery. Improved the user experience with a modern design and organized presentation of products (perfumes, scents).",
  "projects.2.title": "Receipt management mobile app",
  "projects.2.type": "Team project (5 people) - Mobile",
  "projects.2.desc":
    "Study and design of a data extraction solution. Analysis of OCR technologies and architectures (cloud vs local). Took into account security and regulatory aspects.",
  "projects.3.title": "Weather-based clothing recommendation chatbot",
  "projects.3.type": "Collaborative project (17 people)",
  "projects.3.desc":
    "Recommendation system based on weather data. Contribution to the marketing department: promotional posters, needs analysis and market research.",
  "projects.4.title": "Student management mini-app",
  "projects.4.type": "Individual project",
  "projects.4.desc":
    "Java application for managing a student database (add, update, delete, search).",

  // experience
  "exp.title": "Experience",
  "exp.role": "Grocery store assistant",
  "exp.type": "Seasonal job (Summer)",
  "exp.b1": "Welcoming and serving customers, ensuring a good customer experience.",
  "exp.b2": "Organizing and arranging products on the shelves with care.",
  "exp.b3": "Teamwork in a dynamic environment.",
  "exp.b4":
    "Developed key skills: interpersonal communication and time management.",

  // contact
  "contact.title": "Ready to collaborate?",
  "contact.text.before": "I am available to",
  "contact.text.highlight": "collaborate on concrete projects",
  "contact.text.after":
    ". If my profile matches your needs, feel free to reach out.",
  "contact.email": "Send an email",
  "contact.linkedin": "My LinkedIn",
  "contact.cv": "Download my CV",

  // footer
  "footer.rights": "All rights reserved.",
  "footer.tagline": "Crafted with care.",
};

const dictionaries: Record<Lang, Dict> = { fr, en };

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "fr" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");

  const t = (key: string) => dictionaries[lang][key] ?? dictionaries.fr[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
