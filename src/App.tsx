import { motion, AnimatePresence } from "motion/react";
import { 
  HardHat, 
  Construction, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Users,
  MessageSquare,
  Facebook,
  Linkedin,
  Instagram,
  Menu,
  X,
  Bell,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

const SERVICES = [
  {
    title: "Construction Immobilière",
    description: "De la villa résidentielle au complexe d'appartements de luxe. Nous bâtissons vos rêves avec une précision millimétrée.",
    icon: Building2,
  },
  {
    title: "Génie Civil & TP",
    description: "Infrastructures routières, ponts et ouvrages d'art. Nous façonnons le paysage urbain du Cameroun.",
    icon: Construction,
  },
  {
    title: "Rénovation & Design",
    description: "Donnez une seconde vie à vos bâtiments. Modernisation, extension et aménagement intérieur haut de gamme.",
    icon: HardHat,
  },
  {
    title: "Gestion de Projets",
    description: "Accompagnement complet de l'étude de faisabilité à la remise des clés. Expertise technique et administrative.",
    icon: Users,
  }
];

const PROJECTS = [
  {
    title: "Immeuble R+3 avec terrasse accessible",
    location: "Logpom, Douala",
    type: "Résidentiel",
    fullDescription: "Ce projet d'envergure, initié en 2018 à Logpom (Douala), consiste en la construction d'un immeuble résidentiel R+3. Sa caractéristique majeure est une terrasse accessible offrant une vue panoramique sur les environs. Le déploiement a suivi une planification rigoureuse, de la fondation aux finitions architecturales modernes, garantissant confort et durabilité."
  },
  {
    title: "Résidence Emergence",
    location: "Bastos, Yaoundé",
    type: "Résidentiel",
    fullDescription: "La Résidence Emergence est un complexe résidentiel de luxe situé au cœur de Bastos. Ce projet phare de Sobuft Group BTP combine élégance architecturale et confort moderne. Il comprend 12 appartements spacieux équipés de systèmes intelligents, un rooftop panoramique et une infrastructure de sécurité conforme aux standards internationaux."
  },
  {
    title: "Centre Commercial Littoral",
    location: "Akwa, Douala",
    type: "Commercial",
    fullDescription: "Ce centre commercial de 5 étages redéfinit le shopping à Douala. Situé stratégiquement à Akwa, il offre des espaces modulables pour les commerces de détail, des bureaux d'affaires et une aire de restauration. Notre expertise en génie civil a permis de relever les défis de sol spécifiques à la zone littorale."
  },
  {
    title: "Pont de la Sanaga (Rénovation)",
    location: "Edéa",
    type: "Infrastructure",
    fullDescription: "Un projet d'envergure nationale consistant en la réfection structurelle complète du pont historique sur la Sanaga. Nous avons utilisé des techniques de renforcement en composites et une protection anticorrosion avancée pour assurer la pérennité de cet axe vital pour l'économie camerounaise."
  },
  {
    title: "Villa Moderne Kribi",
    location: "Cité des Plages, Kribi",
    type: "Luxe",
    fullDescription: "Une villa balnéaire d'exception alliant design minimaliste et ouverture sur l'océan. Ce projet a mis l'accent sur l'utilisation de matériaux locaux et la durabilité environnementale. Sobuft Group BTP a réalisé ici une véritable synthèse entre luxe et respect de la nature environnante."
  }
];

const REASONS = [
  {
    title: "Solidité Garantie",
    description: "Matériaux conformes aux normes internationales et suivi rigoureux.",
    icon: ShieldCheck
  },
  {
    title: "Respect des Délais",
    description: "Planification optimisée pour livrer vos chantiers en temps et en heure.",
    icon: Clock
  },
  {
    title: "Devis Transparent",
    description: "Aucun frais caché. Un rapport qualité-prix imbattable au Cameroun.",
    icon: CheckCircle2
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; body: ReactNode } | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (type: string) => {
    const contentMap: Record<string, { title: string; body: ReactNode }> = {
      docs: {
        title: "Documents Officiels",
        body: (
          <div className="space-y-4">
            <p className="text-gray-600">Retrouvez ci-dessous les informations d'enregistrement officiel de l'entreprise :</p>
            <div className="bg-gray-50 p-6 rounded-2xl space-y-3 font-mono text-sm border border-gray-100">
              <p><span className="text-secondary font-black">NIU :</span> MO42517678210F</p>
              <p><span className="text-secondary font-black">N°RCCM :</span> RC/YAO/2025/B/846</p>
              <p><span className="text-secondary font-black">CAPITAL :</span> SARL AU CAPITAL DE 1 000 000 FCFA</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-primary font-bold mb-2">COORDONNÉES BANCAIRES</p>
                <p>BANQUE : AFRILAND FIRST BANK</p>
                <p>COMPTE : CM21 10005 00055 10215441001 38</p>
              </div>
            </div>
          </div>
        )
      },
      mentions: {
        title: "Mentions Légales",
        body: (
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <section>
              <h4 className="font-black text-secondary uppercase text-xs tracking-widest mb-2 italic">Éditeur du site</h4>
              <p className="text-sm">Le site sobuftgroup-btp.cm est édité par SOBUFT GROUP BTP, SARL au siège social à Yaoundé, Avenue Kennedy.</p>
            </section>
            <section>
              <h4 className="font-black text-secondary uppercase text-xs tracking-widest mb-2 italic">Directeur de Publication</h4>
              <p className="text-sm">Directeur Général de SOBUFT GROUP BTP.</p>
            </section>
            <section>
              <h4 className="font-black text-secondary uppercase text-xs tracking-widest mb-2 italic">Hébergement</h4>
              <p className="text-sm">Le site est hébergé sur les serveurs sécurisés d'AI Studio Cloud, assurant une disponibilité 24/7.</p>
            </section>
          </div>
        )
      },
      privacy: {
        title: "Politique de Confidentialité",
        body: (
          <div className="space-y-4 text-sm text-gray-600">
            <p>SOBUFT GROUP BTP s'engage à protéger la vie privée de ses clients et utilisateurs. Les données collectées via nos formulaires ne servent qu'au suivi commercial de vos projets.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Aucune donnée ne sera revendue à des tiers.</li>
              <li>Droit d'accès et de rectification sur simple demande.</li>
              <li>Utilisation de cookies pour améliorer votre expérience de navigation.</li>
            </ul>
          </div>
        )
      },
      cgu: {
        title: "Conditions Générales",
        body: (
          <div className="space-y-4 text-xs text-gray-500 max-h-[400px] overflow-y-auto pr-4">
            <p className="font-bold text-secondary">1. Objet</p>
            <p>Les présentes CGU régissent l'utilisation du site de SOBUFT GROUP BTP.</p>
            <p className="font-bold text-secondary">2. Prestations</p>
            <p>Nos services font l'objet de devis détaillés valables 30 jours calendaires.</p>
            <p className="font-bold text-secondary">3. Propriété Intellectuelle</p>
            <p>Tous les visuels, textes et logos sur ce site sont la propriété exclusive de SOBUFT GROUP BTP.</p>
            <p className="font-bold text-secondary">4. Juridiction</p>
            <p>Tout litige sera soumis aux tribunaux compétents de la ville de Yaoundé (Cameroun).</p>
          </div>
        )
      }
    };
    setModalContent(contentMap[type]);
  };

  return (
    <div className="min-h-screen bg-white text-secondary font-sans selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://sobuftgroupbtp.com/images-source-sobuft/sobuft-png-logo.png" 
              alt="SOBUFT GROUP Logo" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-secondary" : "text-white"}`}>
              SOBUFT GROUP BTP<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Accueil", "Services", "Projets", "Equipe", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-secondary" : "text-white/90"}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-primary hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/30">
              Devis Gratuit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu className={scrolled ? "text-secondary" : "text-white"} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 border-t"
          >
            {["Accueil", "Services", "Projets", "Equipe", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg font-medium text-secondary hover:text-primary border-b border-gray-100 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white w-full py-4 rounded-xl font-bold mt-4 shadow-lg">
              Demander un Devis
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-secondary">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.2)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 py-1.5 px-3 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider">Leader du BTP au Cameroun</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Bâtissons Ensemble <span className="text-primary">l'Avenir</span> de Notre Nation.
            </h1>
            <p className="text-xl font-bold text-[#f2f6ff] mb-10 leading-relaxed">
              Expertise technique de pointe et fiabilité sans compromis pour tous vos projets de construction et de génie civil sur l'ensemble du territoire camerounais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all group active:scale-95 shadow-xl shadow-primary/20">
                Lancer mon projet <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-95">
                Voir nos réalisations
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Numbers */}
        <div className="absolute bottom-12 right-12 hidden lg:flex gap-12">
          <div className="text-white">
            <div className="text-4xl font-bold text-primary mb-1">150+</div>
            <div className="text-xs text-white/60 uppercase tracking-widest font-bold">Projets livrés</div>
          </div>
          <div className="text-white border-l border-white/20 pl-12">
            <div className="text-4xl font-bold text-primary mb-1">12</div>
            <div className="text-xs text-white/60 uppercase tracking-widest font-bold">Années d'expertise</div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-gray-50 bg-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {REASONS.map((reason, i) => (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <reason.icon className="text-primary group-hover:text-white w-8 h-8 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-gray-500 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-4xl md:text-5xl font-black text-secondary leading-tight">
              Une solution intégrale pour tous vos chantiers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl glass-card transition-all hover:translate-y-[-8px] hover:shadow-2xl hover:border-primary/20"
              >
                <service.icon className="text-primary w-12 h-12 mb-8" />
                <h3 className="text-xl font-bold mb-4 pr-10">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projets" className="py-32 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Portefeuille de Réalisations</h2>
              <p className="text-4xl md:text-5xl font-black leading-tight">
                Découvrez nos projets emblématiques au Cameroun.
              </p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-primary/30">
              Voir tout le catalogue <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => {
                  setSelectedProjectIndex(i);
                }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-gray-900 aspect-[16/10] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-black flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                  {project.type === "Résidentiel" ? <Building2 className="w-32 h-32 text-primary/30" /> : 
                   project.type === "Commercial" ? <Building2 className="w-32 h-32 text-primary/30" /> :
                   project.type === "Infrastructure" ? <Construction className="w-32 h-32 text-primary/30" /> :
                   <HardHat className="w-32 h-32 text-primary/30" />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary text-[10px] uppercase font-black tracking-widest px-2 py-1 rounded">
                      {project.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/70 font-medium italic">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black group-hover:text-primary transition-colors mb-2">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Capital Humain</h2>
            <p className="text-4xl md:text-5xl font-black text-secondary leading-tight mb-6">
              L'Excellence derrière chaque Structure.
            </p>
            <p className="text-gray-500">
              Notre force réside dans notre équipe d'experts passionnés, dirigée par une vision d'innovation et de qualité supérieure pour le Cameroun.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* CEO Highlight */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl">
                <img 
                  src="https://sobuftgroupbtp.com/images-source-sobuft/sobuft-ceo.png" 
                  alt="M. SONFACK THIERRY GREG - CEO SOBUFT GROUP BTP" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 space-y-8"
            >
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  Mot du Dirigeant
                </div>
                <h3 className="text-4xl font-black text-secondary mb-4">M. SONFACK THIERRY GREG</h3>
                <p className="text-xl text-primary font-bold italic mb-6">Président Directeur Général</p>
                <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  "Chez SOBUFT GROUP BTP, nous ne construisons pas seulement des bâtiments ; nous bâtissons des relations durables et un avenir solide pour notre pays. Chaque brique posée est un gage de notre engagement envers l'excellence et le développement durable du Cameroun."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <h4 className="text-3xl font-black text-secondary">+12</h4>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Années de Vision</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-black text-secondary">Visionnaire</h4>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Expert BTP</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Other Team Members Grid (Optional placeholders) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-24 border-t border-gray-100">
            {[
              { name: "Direction Technique", role: "Ingénierie & Design", icon: Building2 },
              { name: "Service Client", role: "Relations Partenaires", icon: Users },
              { name: "Logistique BTP", role: "Gestion Chantiers", icon: Construction },
              { name: "Assistance Projets", role: "Suivi Administratif", icon: MessageSquare }
            ].map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-square mb-6 bg-secondary flex items-center justify-center border border-gray-100/10">
                  <member.icon className="w-20 h-20 text-primary opacity-20" />
                </div>
                <h4 className="font-bold text-secondary">{member.name}</h4>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Construction className="w-96 h-96 -mr-20 -mt-20 rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Prêt à poser la première pierre ?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Que ce soit pour une villa de luxe ou une infrastructure majeure, nos experts sont là pour vous conseiller gratuitement.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-black transition-all shadow-2xl flex items-center gap-3">
              <MessageSquare className="w-6 h-6" /> Discuter par WhatsApp
            </button>
            <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl">
              Être rappelé
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Contactez-nous</h2>
              <p className="text-4xl md:text-5xl font-black text-secondary leading-tight mb-8">
                Parlons de votre futur chantier.
              </p>
              
              <div className="space-y-8 mt-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Siège Social</h4>
                    <p className="text-gray-500">Région du Centre, Département du Mfoundi, Yaoundé</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Appel & WhatsApp</h4>
                    <p className="text-gray-500">+237 671 939 281</p>
                    <p className="text-gray-500">+237 697 671 278</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Professionnel</h4>
                    <p className="text-gray-500">contact@sobuftgroupbtp.com</p>
                    <p className="text-gray-500">projets@sobuftgroupbtp.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-1 md:p-2 rounded-[2.5rem] shadow-2xl overflow-hidden">
              <div className="bg-white m-1 rounded-[2rem] p-8 md:p-12 border border-gray-100">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl rotate-3 shadow-lg shadow-primary/20">
                    <MessageSquare className="text-white w-6 h-6 -rotate-3" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-secondary uppercase tracking-tight">Estimation Rapide</h3>
                    <p className="text-sm text-gray-400 font-medium italic">Réponse garantie sous 24h</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative group">
                      <input 
                        type="text" 
                        required 
                        className="peer w-full px-5 py-6 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-primary focus:bg-white transition-all text-secondary font-bold"
                        placeholder=" "
                      />
                      <label className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold transition-all pointer-events-none peer-focus:top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-primary">
                        Votre Nom Complet
                      </label>
                    </div>

                    <div className="relative group">
                      <input 
                        type="text" 
                        required 
                        className="peer w-full px-5 py-6 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-primary focus:bg-white transition-all text-secondary font-bold"
                        placeholder=" "
                      />
                      <label className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold transition-all pointer-events-none peer-focus:top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-primary">
                        Numéro de Téléphone
                      </label>
                    </div>

                    <div className="relative group">
                      <select 
                        required 
                        defaultValue=""
                        className="peer w-full px-5 py-6 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-primary focus:bg-white transition-all text-secondary font-bold appearance-none cursor-pointer"
                      >
                        <option value="" disabled hidden></option>
                        <option>Construction Immobilière</option>
                        <option>Génie Civil & TP</option>
                        <option>Rénovation & Design</option>
                        <option>Gestion de Projets</option>
                      </select>
                      <label className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold transition-all pointer-events-none peer-focus:top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-primary">
                        Type de Projet
                      </label>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Menu className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="relative">
                      <textarea 
                        rows={3}
                        required 
                        className="peer w-full px-5 py-6 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-primary focus:bg-white transition-all text-secondary font-bold resize-none"
                        placeholder=" "
                      ></textarea>
                      <label className="absolute left-5 top-8 -translate-y-1/2 text-gray-400 font-bold transition-all pointer-events-none peer-focus:top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-primary">
                        Détails du projet
                      </label>
                    </div>
                  </div>

                  <button className="w-full bg-secondary text-white py-6 rounded-2xl font-black text-lg shadow-xl hover:bg-primary transition-all flex items-center justify-center gap-3 group">
                    Obtenir mon Devis <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary pt-20 pb-10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-3 mb-8">
                  <img 
                    src="https://sobuftgroupbtp.com/images-source-sobuft/sobuft-png-logo.png" 
                    alt="SOBUFT GROUP Logo" 
                    className="h-16 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xl font-bold tracking-tight">SOBUFT GROUP BTP<span className="text-primary">.</span></span>
                </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                L'excellence architecturale et technique au cœur de l'Afrique. Nous construisons le Cameroun de demain, un projet à la fois.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Informations Légales</p>
                  <div className="text-xs text-white/50 space-y-0.5">
                    <p>NIU: MO42517678210F</p>
                    <p>N°RCCM: RC/YAO/2025/B/846</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Coordonnées Bancaires</p>
                  <div className="text-xs text-white/50 space-y-0.5">
                    <p>Nom du Compte: SOBUFT GROUP BTP</p>
                    <p>Banque: AFRILAND FIRST BANK</p>
                    <p className="text-[10px] mt-1 break-all">RIB: CM21 10005 00055 10215441001 38</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Navigation</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#accueil" className="hover:text-primary transition-colors">Accueil</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Nos Services</a></li>
                <li><a href="#projets" className="hover:text-primary transition-colors">Réalisations</a></li>
                <li><a href="#equipe" className="hover:text-primary transition-colors">Notre Équipe</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Documents & Légal</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><button onClick={() => openModal("docs")} className="hover:text-primary transition-colors cursor-pointer text-left uppercase text-[10px] tracking-widest font-black">Documents de l'Entreprise</button></li>
                <li><button onClick={() => openModal("mentions")} className="hover:text-primary transition-colors cursor-pointer text-left uppercase text-[10px] tracking-widest font-black">Mentions Légales</button></li>
                <li><button onClick={() => openModal("privacy")} className="hover:text-primary transition-colors cursor-pointer text-left uppercase text-[10px] tracking-widest font-black">Politique de Confidentialité</button></li>
                <li><button onClick={() => openModal("cgu")} className="hover:text-primary transition-colors cursor-pointer text-left uppercase text-[10px] tracking-widest font-black">Conditions Générales</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Newsletter</h4>
              <p className="text-white/50 text-sm mb-6">Recevez nos conseils et actualités sur le secteur du BTP au Cameroun.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Votre email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary" />
                <button className="bg-primary px-4 py-2 rounded-lg font-bold">OK</button>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center text-white/30 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 SOBUFT GROUP BTP Cameroun. Tous droits réservés.</p>
            <p>Conçu avec excellence pour le développement de l'Afrique.</p>
          </div>
        </div>
      </footer>

      {/* Project Gallery Modal */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10 bg-secondary/95 backdrop-blur-2xl">
              <div className="bg-white w-full max-w-4xl h-fit max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden relative p-8 md:p-16">
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProjectIndex(null)}
                  className="absolute top-8 right-8 z-20 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-gray-200 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-primary/10 text-primary text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full">
                      {PROJECTS[selectedProjectIndex].type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-bold uppercase tracking-widest">
                      <MapPin className="w-3 h-3" /> {PROJECTS[selectedProjectIndex].location}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight mb-10">{PROJECTS[selectedProjectIndex].title}</h2>
                  
                  <div className="prose prose-lg text-gray-600 leading-relaxed mb-12">
                    <p>{PROJECTS[selectedProjectIndex].fullDescription}</p>
                  </div>

                  {/* Navigation */}
                  <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedProjectIndex((prev) => prev === 0 ? PROJECTS.length - 1 : prev! - 1)}
                      className="flex items-center gap-3 text-secondary font-bold hover:text-primary transition-all"
                    >
                      <ChevronLeft /> Projet Précédent
                    </button>
                    <button 
                      onClick={() => setSelectedProjectIndex((prev) => (prev! + 1) % PROJECTS.length)}
                      className="flex items-center gap-3 text-secondary font-bold hover:text-primary transition-all"
                    >
                      Projet Suivant <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
          </div>
        )}
      </AnimatePresence>

      {/* Legal Modal Window */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-secondary/80 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden relative"
            >
              {/* Modal Header */}
              <div className="bg-gray-50 p-8 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-lg shadow-primary/20">
                    <ShieldCheck className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-secondary tracking-tight uppercase">{modalContent.title}</h3>
                </div>
                <button 
                  onClick={() => setModalContent(null)}
                  className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all text-secondary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 md:p-10">
                {modalContent.body}
                <button 
                  onClick={() => setModalContent(null)}
                  className="w-full mt-10 bg-secondary text-white py-5 rounded-2xl font-black text-lg hover:bg-primary transition-all shadow-xl active:scale-95"
                >
                  Fermer la fenêtre
                </button>
              </div>

              {/* Decorative side accent */}
              <div className="absolute top-0 right-0 h-full w-2 bg-primary"></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
