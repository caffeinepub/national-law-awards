import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import {
  Award,
  Briefcase,
  Building2,
  ChevronRight,
  Crown,
  Gavel,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Mic,
  Network,
  Newspaper,
  Phone,
  Scale,
  Shield,
  Star,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiFacebook, SiX } from "react-icons/si";
import { useNominationCount } from "./hooks/useQueries";

/* =============================================
   TYPES
   ============================================= */
interface AwardCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface JuryMember {
  name: string;
  designation: string;
  initials: string;
}

/* =============================================
   DATA
   ============================================= */
const AWARD_CATEGORIES: AwardCategory[] = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Outstanding Law Firm of the Year",
    description:
      "Recognizing firms delivering exceptional legal service, innovation and client outcomes across India.",
  },
  {
    icon: <Gavel className="w-6 h-6" />,
    title: "Best Litigation Lawyer",
    description:
      "Honoring courtroom excellence, advocacy skills and landmark victories in Indian courts.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Best Corporate Lawyer",
    description:
      "Celebrating outstanding expertise in transactions, M&A, governance and corporate law.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Young Lawyer of the Year",
    description:
      "Spotlighting rising legal talent under 35 making a remarkable impact in the profession.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Legal Innovator of the Year",
    description:
      "Honoring practitioners pioneering technology, access to justice, and legal reform.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Best Legal Aid Initiative",
    description:
      "Recognizing pro-bono work and programs that democratize access to justice across India.",
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Best Women in Law",
    description:
      "Celebrating extraordinary women breaking barriers and leading transformation in law.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Best Judicial Contribution",
    description:
      "Honoring judges whose decisions have shaped the constitutional and legal landscape of India.",
  },
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: "Best Legal Journalist",
    description:
      "Recognizing journalists who illuminate the legal system with integrity, depth and clarity.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Outstanding Legal NGO",
    description:
      "Celebrating NGOs championing human rights, rule of law, and justice for marginalized communities.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Best Law School",
    description:
      "Recognizing institutions of academic excellence shaping the next generation of legal professionals.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Lifetime Achievement in Law",
    description:
      "A tribute to luminaries who have devoted their careers to the pursuit of justice and legal excellence.",
  },
];

const JURY_MEMBERS: JuryMember[] = [
  {
    name: "Dr. Adv. Priya Thakur",
    designation: "Founder of Vidhik Sahayata",
    initials: "PT",
  },
  {
    name: "Shri P.N. Thakur",
    designation: "Co-Founder & Director",
    initials: "PT",
  },
  {
    name: "Adv. Preeti Thakur",
    designation: "Counsel Vidhik Sahayata, High Court of Delhi",
    initials: "PT",
  },
  {
    name: "Adv. Shruti Kriti",
    designation: "Manager, Vidhik Sahayata",
    initials: "SK",
  },
  {
    name: "Adv. Jayprakash B. Somani",
    designation: "Supreme Court of India",
    initials: "JS",
  },
  {
    name: "Adv. Manoj Chowdhury",
    designation: "Supreme Court of India",
    initials: "MC",
  },
];

const BENEFITS = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "National Recognition",
    description:
      "Gain prestigious recognition at India's premier legal awards platform, celebrated across the country's legal community.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Peer Validation",
    description:
      "Be evaluated by a distinguished jury of judges, senior advocates, and legal scholars — your peers at the highest level.",
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Media Coverage",
    description:
      "Extensive coverage across national legal publications, news outlets, and digital media reaching millions of readers.",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Networking Opportunity",
    description:
      "Connect with India's most influential legal professionals, judges, and institutions at our gala ceremony.",
  },
];

/* =============================================
   FADE-IN MOTION WRAPPER
   ============================================= */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =============================================
   SECTION HEADER
   ============================================= */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-24 h-px section-divider" />
    </div>
  );
}

/* =============================================
   NAVIGATION
   ============================================= */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Categories", href: "#categories" },
    { label: "Jury", href: "#jury" },
    { label: "Nominate", href: "#nominate" },
    {
      label: "Attend",
      href: "https://forms.gle/iSgEWh9d4Ds8cg5y9",
      external: true,
    },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-gold-muted/20 shadow-card-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/assets/generated/law-awards-logo-transparent.dim_400x400.png"
            alt="National Law Awards Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="hidden sm:block">
            <p className="font-display text-base md:text-lg font-bold text-gold leading-tight">
              National Law Awards
            </p>
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
              2.0 · 2026
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="px-4 py-2 font-body text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-200 rounded-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://forms.gle/iSgEWh9d4Ds8cg5y9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="outline"
                className="ml-1 border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-colors"
              >
                Register
              </Button>
            </a>
          </li>
          <li>
            <a
              href="https://forms.gle/kRXdaXqspPNqxEaV6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="ml-1 bg-gold text-navy font-semibold hover:bg-gold-light transition-colors border-0"
              >
                Nominate Now
              </Button>
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-mid border-b border-gold-muted/20 overflow-hidden"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block px-4 py-3 font-body text-base text-muted-foreground hover:text-gold hover:bg-navy-light transition-colors rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex flex-col gap-2">
                <a
                  href="https://forms.gle/iSgEWh9d4Ds8cg5y9"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full border-gold/50 text-gold hover:bg-gold/10 hover:border-gold"
                  >
                    Register as Attendee
                  </Button>
                </a>
                <a
                  href="https://forms.gle/kRXdaXqspPNqxEaV6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button className="w-full bg-gold text-navy font-semibold hover:bg-gold-light border-0">
                    Nominate Now
                  </Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =============================================
   HERO SECTION
   ============================================= */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/law-awards-hero.dim_1400x600.jpg"
          alt="National Law Awards 2026"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 hero-bg-glow" />
        {/* Radial gold glow from center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 45%, oklch(0.78 0.15 75 / 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider z-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-5xl pt-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <img
            src="/assets/generated/law-awards-logo-transparent.dim_400x400.png"
            alt="National Law Awards"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain drop-shadow-[0_0_30px_oklch(0.78_0.15_75_/_0.4)]"
          />
        </motion.div>

        {/* Organizer badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5"
        >
          <Badge
            variant="outline"
            className="border-gold/40 text-gold font-body text-xs tracking-[0.2em] uppercase px-4 py-1.5"
          >
            Vidhik Sahayata Presents
          </Badge>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[1.05]"
        >
          <span className="gold-gradient-text">National</span>
          <br />
          <span className="text-foreground">Law Awards</span>
          <span className="gold-gradient-text"> 2.0</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="font-serif text-xl md:text-2xl text-foreground/80 italic mb-8 max-w-2xl mx-auto"
        >
          Recognizing Excellence in Indian Law — 2026
        </motion.p>

        {/* Event badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-navy-mid/80 border border-gold/25 rounded-sm backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="font-body text-sm font-medium text-foreground/90">
              Bharat Mandapam, Pragati Maidan, New Delhi
            </span>
            <span className="text-gold/40">·</span>
            <span className="font-body text-sm font-medium text-gold">
              April 2026
            </span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://forms.gle/kRXdaXqspPNqxEaV6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gold text-navy font-bold text-base px-8 py-3 hover:bg-gold-light transition-all duration-300 shadow-gold animate-glow-pulse border-0 min-w-[180px]"
            >
              Nominate Now
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
          <a
            href="https://forms.gle/iSgEWh9d4Ds8cg5y9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-gold/60 text-gold hover:bg-gold/10 hover:border-gold text-base px-8 py-3 transition-all duration-300 min-w-[180px]"
            >
              <Users className="w-4 h-4 mr-2" />
              Register as Attendee
            </Button>
          </a>
          <a href="#about">
            <Button
              size="lg"
              variant="outline"
              className="border-gold/40 text-foreground hover:bg-gold/10 hover:border-gold/70 text-base px-8 py-3 transition-all duration-300 min-w-[180px]"
            >
              Learn More
            </Button>
          </a>
        </motion.div>

        {/* Nominations status banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/30 rounded-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
          </span>
          <span className="font-body text-sm font-semibold text-gold tracking-wider uppercase">
            Nominations Are Opening Soon
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* =============================================
   ABOUT SECTION
   ============================================= */
function AboutSection() {
  const stats = [
    { value: "500+", label: "Nominees" },
    { value: "50+", label: "Categories" },
    { value: "100+", label: "Jury Members" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-navy-mid relative">
      {/* Decorative corner ornaments */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <FadeIn>
            <div>
              <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                About the Awards
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                India's Premier
                <br />
                <em className="text-gold not-italic">Legal Recognition</em>
                <br />
                Platform
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
                The National Law Awards 2.0 is India's most prestigious
                recognition platform for legal professionals, law firms, judges,
                and organizations that have made extraordinary contributions to
                the Indian legal system.
              </p>
              <p className="font-body text-base text-muted-foreground mb-8 leading-relaxed">
                Organized by{" "}
                <span className="text-gold font-semibold">Vidhik Sahayata</span>{" "}
                — a leading legal awareness initiative — these awards celebrate
                excellence, integrity, and innovation across all dimensions of
                Indian law.
              </p>
              <div className="w-16 h-px section-divider mb-8" />
              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-gold" />
                <span className="font-body text-sm text-muted-foreground italic">
                  "Justice is the constant and perpetual will to render to every
                  man his due." — Justinian
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-6 p-6 bg-navy border border-gold/15 rounded-sm card-gold-hover group"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold gold-gradient-text min-w-[100px]">
                    {stat.value}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-lg">
                      {stat.label}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">
                      From across India
                    </p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-gold" />
                  </div>
                </motion.div>
              ))}

              {/* Organizer card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="p-5 bg-gold/8 border border-gold/25 rounded-sm"
              >
                <p className="font-body text-xs tracking-widest uppercase text-gold/70 mb-2">
                  Organized by
                </p>
                <img
                  src="/assets/generated/vidhik-sahayata-logo-white.dim_400x160.png"
                  alt="Vidhik Sahayata"
                  className="h-10 object-contain mb-2"
                />
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Leading Legal Awareness Initiative · India
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}

/* =============================================
   AWARD CATEGORIES SECTION
   ============================================= */
function CategoriesSection() {
  return (
    <section id="categories" className="py-20 md:py-28 bg-navy relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <FadeIn>
          <SectionHeader
            eyebrow="Award Categories"
            title="50+ Awards Across Every Dimension of Law"
            subtitle="From courtroom warriors to legal innovators — we honour the full spectrum of legal excellence in India."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {AWARD_CATEGORIES.map((category, index) => (
            <FadeIn key={category.title} delay={Math.floor(index / 4) * 0.1}>
              <div className="h-full p-5 bg-navy-mid border border-gold/12 rounded-sm card-gold-hover group cursor-default flex flex-col gap-3">
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-gold/10 border border-gold/20 rounded-sm text-gold group-hover:bg-gold/15 transition-colors">
                  {category.icon}
                </div>
                {/* Title */}
                <h3 className="font-display text-base font-bold text-foreground leading-snug group-hover:text-gold transition-colors duration-200">
                  {category.title}
                </h3>
                {/* Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-auto">
                  {category.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <p className="font-body text-muted-foreground text-sm">
              + Many more categories across specialized areas of law
            </p>
            <a
              href="https://forms.gle/kRXdaXqspPNqxEaV6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="mt-4 border-gold/40 text-gold hover:bg-gold/10 hover:border-gold"
              >
                View All & Nominate
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}

/* =============================================
   WHY NOMINATE SECTION
   ============================================= */
function WhyNominateSection() {
  return (
    <section className="py-20 md:py-28 bg-navy-mid relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.78 0.15 75 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        <FadeIn>
          <SectionHeader
            eyebrow="Why Nominate"
            title="The Rewards of Recognition"
            subtitle="A nomination for the National Law Awards is more than an accolade — it's a career-defining milestone."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.1}>
              <div className="p-6 bg-navy border border-gold/12 rounded-sm card-gold-hover group text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gold/8 border border-gold/20 rounded-full text-gold group-hover:bg-gold/15 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-gold transition-colors">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}

/* =============================================
   JURY SECTION
   ============================================= */
function JurySection() {
  return (
    <section id="jury" className="py-20 md:py-28 bg-navy relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <FadeIn>
          <SectionHeader
            eyebrow="Distinguished Jury"
            title="Judged by the Best in Law"
            subtitle="Our jury comprises India's most eminent legal minds — judges, senior advocates, academics, and legal luminaries."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {JURY_MEMBERS.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.08}>
              <div className="p-6 bg-navy-mid border border-gold/12 rounded-sm card-gold-hover group flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center font-display font-bold text-lg text-navy border-2 border-gold/40 group-hover:border-gold transition-colors"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.62 0.14 65), oklch(0.78 0.15 75))",
                  }}
                >
                  {member.initials}
                </div>
                {/* Info */}
                <div className="min-w-0">
                  <p className="font-display font-semibold text-foreground text-base leading-snug group-hover:text-gold transition-colors truncate">
                    {member.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1 leading-snug">
                    {member.designation}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Announcement note */}
        <FadeIn delay={0.3}>
          <div className="text-center p-6 bg-gold/5 border border-gold/20 rounded-sm max-w-xl mx-auto">
            <Gavel className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="font-display text-lg font-semibold text-foreground mb-1">
              Full Jury Announcement Coming Soon
            </p>
            <p className="font-body text-sm text-muted-foreground">
              The complete jury panel for National Law Awards 2026 will be
              announced shortly. Stay tuned for updates.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}

/* =============================================
   NOMINATION SECTION (External Form CTA)
   ============================================= */
function NominationSection() {
  const { data: nominationCount } = useNominationCount();

  return (
    <section
      id="nominate"
      className="py-20 md:py-28 bg-navy-mid relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, oklch(0.78 0.15 75 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative">
        <FadeIn>
          <SectionHeader
            eyebrow="Submit a Nomination"
            title="Nominate for National Law Awards 2026"
            subtitle="Know someone who deserves national recognition? Submit your nomination and let India's legal community celebrate their excellence."
          />
        </FadeIn>

        {/* Nomination count */}
        {nominationCount !== undefined && nominationCount > 0 && (
          <FadeIn>
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-gold/8 border border-gold/25 rounded-sm">
                <Users className="w-4 h-4 text-gold" />
                <span className="font-body text-sm text-foreground">
                  <span className="font-bold text-gold">
                    {nominationCount.toString()}
                  </span>{" "}
                  nominations received so far
                </span>
              </div>
            </div>
          </FadeIn>
        )}

        {/* CTA card */}
        <FadeIn delay={0.1}>
          <div className="bg-navy border border-gold/15 rounded-sm p-8 md:p-12 shadow-card-dark text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-full mx-auto mb-6">
              <Trophy className="w-10 h-10 text-gold" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Nominate?
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Submit your nomination through our official Google Form. Click
              below to nominate a deserving legal professional for National Law
              Awards 2026.
            </p>
            <a
              href="https://forms.gle/kRXdaXqspPNqxEaV6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gold text-navy font-bold text-base px-10 py-3 hover:bg-gold-light transition-all duration-300 shadow-gold border-0"
              >
                Submit Nomination
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <p className="font-body text-xs text-muted-foreground mt-5">
              You will be redirected to our official Google Form to complete
              your nomination.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}

/* =============================================
   SPONSORS SECTION
   ============================================= */
function SponsorsSection() {
  const sponsors = [
    "Gold Sponsor",
    "Platinum Partner",
    "Legal Tech Partner",
    "Media Partner",
    "Knowledge Partner",
    "Associate Sponsor",
  ];

  return (
    <section className="py-20 md:py-24 bg-navy relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <FadeIn>
          <SectionHeader
            eyebrow="Partners & Sponsors"
            title="Our Partners & Sponsors"
            subtitle="Join distinguished organizations who support excellence in the Indian legal profession."
          />
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {sponsors.map((sponsor, index) => (
            <FadeIn key={sponsor} delay={index * 0.07}>
              <div className="aspect-[3/1] flex items-center justify-center bg-navy-mid border border-gold/10 rounded-sm card-gold-hover group">
                <div className="text-center">
                  <Building2 className="w-6 h-6 text-gold/30 group-hover:text-gold/60 transition-colors mx-auto mb-2" />
                  <p className="font-body text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                    {sponsor}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="text-center">
            <p className="font-body text-muted-foreground mb-4 text-sm">
              Interested in associating your brand with India's leading legal
              awards?
            </p>
            <a
              href="https://forms.gle/5pQLqMjKi1G9KRLW8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gold text-navy font-bold hover:bg-gold-light transition-colors border-0">
                Become a Sponsor
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}

/* =============================================
   GALLERY SECTION
   ============================================= */
const GALLERY_PHOTOS = [
  { src: "/assets/uploads/photo-1-2.JPG", alt: "National Law Awards Event" },
  { src: "/assets/uploads/photo-2-5.JPG", alt: "Legal Excellence Ceremony" },
  { src: "/assets/uploads/photo-3-3.JPG", alt: "Award Presentation" },
  { src: "/assets/uploads/photo-4-4.JPG", alt: "Distinguished Gathering" },
  { src: "/assets/uploads/photo-5-6.JPG", alt: "Vidhik Sahayata Event" },
  { src: "/assets/uploads/photo-6-7.JPG", alt: "Celebrating Legal Leaders" },
];

function GallerySection() {
  return (
    <section className="py-20 md:py-28 bg-navy relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Events"
            title="Gallery"
            subtitle="Highlights from past National Law Awards & Vidhik Sahayata events"
          />
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_PHOTOS.map((photo, index) => (
            <FadeIn key={photo.src} delay={index * 0.08}>
              <div className="overflow-hidden rounded-sm border border-gold/20 hover:border-gold/50 transition-all duration-300 group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  );
}

/* =============================================
   CONTACT / FOOTER
   ============================================= */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy-mid relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Contact Section */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Brand column */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/assets/generated/law-awards-logo-transparent.dim_400x400.png"
                    alt="National Law Awards"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="font-display text-base font-bold text-gold leading-tight">
                      National Law Awards
                    </p>
                    <p className="font-body text-xs text-muted-foreground tracking-widest">
                      2.0 · 2026
                    </p>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  Celebrating extraordinary contributions to the Indian legal
                  system. Organized by Vidhik Sahayata.
                </p>
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://x.com/vidhiksahayata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-navy border border-gold/15 rounded-sm text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <SiX className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Vidhik-Sahayata/61559497354031/?rdid=y2DdT2ht4yNWKnp8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BvWQfipVw%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-navy border border-gold/15 rounded-sm text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                    aria-label="Facebook"
                  >
                    <SiFacebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground tracking-wide uppercase mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {[
                    {
                      label: "About the Awards",
                      href: "#about",
                      external: false,
                    },
                    {
                      label: "Award Categories",
                      href: "#categories",
                      external: false,
                    },
                    {
                      label: "Distinguished Jury",
                      href: "#jury",
                      external: false,
                    },
                    {
                      label: "Submit Nomination",
                      href: "#nominate",
                      external: false,
                    },
                    {
                      label: "Register as Attendee",
                      href: "https://forms.gle/iSgEWh9d4Ds8cg5y9",
                      external: true,
                    },
                    { label: "Sponsorship", href: "#contact", external: false },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="font-body text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-1.5 group"
                      >
                        <ChevronRight className="w-3 h-3 text-gold/40 group-hover:text-gold transition-colors" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground tracking-wide uppercase mb-4">
                  Contact
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-body text-sm text-foreground/80">
                        Bharat Mandapam, Pragati Maidan, New Delhi
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        Ceremony: April 2026
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                    <a
                      href="mailto:vidhiksahyata@gmail.com"
                      className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      vidhiksahyata@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                    <a
                      href="tel:9935469111"
                      className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      9935469111
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gold flex-shrink-0" />
                    <a
                      href="https://nationallawawards.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      nationallawawards.in
                    </a>
                  </div>
                  <p className="font-body text-xs text-muted-foreground/70 leading-relaxed pt-1">
                    For any inquiries, please feel free to contact us at{" "}
                    <a
                      href="tel:9935469111"
                      className="text-gold/80 hover:text-gold transition-colors"
                    >
                      9935469111
                    </a>{" "}
                    or email us at{" "}
                    <a
                      href="mailto:vidhiksahyata@gmail.com"
                      className="text-gold/80 hover:text-gold transition-colors"
                    >
                      vidhiksahyata@gmail.com
                    </a>
                    .
                  </p>
                </div>

                <Separator className="my-5 bg-gold/10" />

                <div>
                  <p className="font-body text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">
                    Organized by
                  </p>
                  <img
                    src="/assets/generated/vidhik-sahayata-logo-white.dim_400x160.png"
                    alt="Vidhik Sahayata"
                    className="h-8 object-contain mb-1"
                  />
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    Legal Awareness Initiative · India
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10 py-5">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground/70 text-center sm:text-left">
            © {currentYear} National Law Awards 2.0. All rights reserved.
            <span className="mx-2 text-gold/30">·</span>
            Organized by Vidhik Sahayata
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

/* =============================================
   APP ROOT
   ============================================= */
export default function App() {
  return (
    <div className="min-h-screen bg-navy font-body">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "oklch(0.155 0.018 265)",
            border: "1px solid oklch(0.78 0.15 75 / 0.3)",
            color: "oklch(0.95 0.02 85)",
          },
        }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <WhyNominateSection />
        <JurySection />
        <NominationSection />
        <SponsorsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
