import { motion } from "motion/react";
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
  X
} from "lucide-react";
import { useState, useEffect } from "react";

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
    title: "Résidence Emergence",
    location: "Bastos, Yaoundé",
    type: "Résidentiel",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Centre Commercial Littoral",
    location: "Akwa, Douala",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Pont de la Sanaga (Rénovation)",
    location: "Edéa",
    type: "Infrastructure",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Villa Moderne Kribi",
    location: "Cité des Plages, Kribi",
    type: "Luxe",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-secondary font-sans selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-lg shadow-primary/20">
              <Construction className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-secondary" : "text-white"}`}>
              SOBUFT GROUP<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Accueil", "Services", "Projets", "À Propos", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-secondary" : "text-white/90"}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-primary hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/30">
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
            {["Accueil", "Services", "Projets", "À Propos", "Contact"].map((item) => (
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
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541913080215-63dd88e9308f?q=80&w=2000&auto=format&fit=crop" 
            alt="BTP Cameroon Engineering" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 py-1.5 px-3 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider">Leader du BTP au Cameroun</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Bâtissons Ensemble <span className="text-primary">l'Avenir</span> de Notre Nation.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Expertise technique de pointe et fiabilité sans compromis pour tous vos projets de construction et de génie civil sur l'ensemble du territoire camerounais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all group active:scale-95 shadow-xl shadow-primary/20">
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
            <div className="text-xs text-white/60 uppercase tracking-widest font-semibold">Projets livrés</div>
          </div>
          <div className="text-white border-l border-white/20 pl-12">
            <div className="text-4xl font-bold text-primary mb-1">12</div>
            <div className="text-xs text-white/60 uppercase tracking-widest font-semibold">Années d'expertise</div>
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
                className="group relative overflow-hidden rounded-[2.5rem] bg-gray-900 aspect-[16/10]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                  referrerPolicy="no-referrer"
                />
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
                    <p className="text-gray-500">Immeuble T. Bella, Avenue Kennedy, Yaoundé</p>
                    <p className="text-gray-500">Bureau B-402, 4ème Étage</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Appel Direct</h4>
                    <p className="text-gray-500">+237 6XX XXX XXX</p>
                    <p className="text-gray-500">+237 2XX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Professionnel</h4>
                    <p className="text-gray-500">contact@cambuild-btp.cm</p>
                    <p className="text-gray-500">projets@cambuild-btp.cm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nom Complet</label>
                    <input type="text" placeholder="Ex: Jean Paul" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Téléphone</label>
                    <input type="text" placeholder="+237 ..." className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Type de Projet</label>
                  <select className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                    <option>Construction Résidentielle</option>
                    <option>Bâtiment Industriel</option>
                    <option>Rénovation Totale</option>
                    <option>Génie Civil</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Votre Message</label>
                  <textarea rows={4} placeholder="Détaillez votre projet ou vos besoins..." className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Envoyer ma Demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary pt-20 pb-10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
                  <Construction className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">SOBUFT GROUP<span className="text-primary">.</span></span>
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
                <li><a href="#propos" className="hover:text-primary transition-colors">Notre Équipe</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Documents & Légal</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Documents de l'Entreprise</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mentions Légales</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Conditions Générales</a></li>
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
    </div>
  );
}
