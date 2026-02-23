import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, ChevronDown, ArrowRight, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ExpandableText } from './components/ExpandableText';
import { Carousel, CarouselHandle } from './components/Carousel';
import { Reviews } from './components/Reviews';
import { SpecialtyPage } from './components/SpecialtyPage';
import { BlogPage, BLOG_POSTS } from './components/BlogPage';
import { PaymentsPage } from './components/PaymentsPage';
import { HoldtraeningPage } from './components/HoldtraeningPage';
import { PolicyPage } from './components/PolicyPage';
import { OmOsPage } from './components/OmOsPage';
import { BlogArticlePage } from './components/BlogArticlePage';
import { Navbar } from './components/Navbar';
import { FlowingLines, WaveDivider } from './components/FlowingLines';
import { ScrollIndicator } from './components/ScrollIndicator';

const TREATMENTS = [
  { id: '1', title: 'Nakke', slug: 'skulder', description: 'Nakkesmerter og stivhed opstår ofte ved muskelspændinger, langvarigt skærmarbejde eller whiplash. Vi undersøger bevægelighed og muskelspænding og tilpasser behandlingen til dig.', image: '/nakke.jpeg', link: '/speciale/skulder' },
  { id: '2', title: 'Skulder', slug: 'skulder', description: 'Skulderproblemer som impingement, rotatorcuff-skader og frossen skulder begrænser hverdagen. Vi genopretter bevægelighed og styrker de stabiliserende muskler.', image: '/Skulder.jpeg', link: '/speciale/skulder' },
  { id: '3', title: 'Ryg', slug: 'ryg', description: 'Rygsmerter er en af de hyppigste årsager til sygemeldinger. Vi finder årsagen bag dine smerter – muskulære eller strukturelle – og behandler effektivt og målrettet.', image: '/Ryg.jpeg', link: '/speciale/ryg' },
  { id: '4', title: 'Hofte', slug: 'knae', description: 'Hoftesmerter kan opstå fra led, muskler eller sener og påvirke gang og bevægelse. Vi undersøger biomekanikken og arbejder med styrke og mobilitet i hofteregionen.', image: '/Hofte.jpeg', link: '/speciale/knae' },
  { id: '5', title: 'Knæ', slug: 'knae', description: 'Knæsmerter skyldes ofte overbelastning, meniskproblemer eller slidgigt. Vi tilbyder grundig undersøgelse og målrettet træning, der aflaster og styrker knæet.', image: '/Knæ.jpeg', link: '/speciale/knae' },
  { id: '6', title: 'Søvn', slug: 'soevn', description: 'Kroniske smerter og spændinger kan forstyrre din søvn og skabe en ond cirkel. Vi identificerer og behandler de fysiske årsager, der hæmmer din nattesøvn.', image: '/Søvn.jpeg', link: '/speciale/soevn' },
  { id: '7', title: 'Triathlon & Løb', slug: 'triatlon', description: 'Løberknæ, skinnebensbetændelse og overbelastningsskader er hyppige hos udholdenhedsatleter. Vi tilpasser behandling og genoptræning til dine sportslige mål.', image: '/Triatlon.jpeg', link: '/speciale/triatlon' },
  { id: '8', title: 'Golf', slug: 'golf', description: 'Golfalbuebetændelse og rotationsskader er klassiske golfskader. Vi behandler med fokus på at genoprette funktion og forebygge gentagelse, så du hurtigt er tilbage på banen.', image: '/Golf.jpeg', link: '/speciale/golf' },
];

const TEAM = [
  { id: '1', title: 'Anders Ranum', description: 'Nakke-Fysioterapeut', image: '', link: '#' },
  { id: '2', title: 'Benjamin Mark Andersen', description: 'Fysioterapeut, Professionel triatlon coach, Cykel vejleder, Ankel-specialist', image: '', link: '#' },
  { id: '3', title: 'Martine Hoaas', description: 'Professionel løbe coach, Ernæringsekspert', image: '', link: '#' },
  { id: '4', title: 'Sascha Christensen', description: 'Skulder-Fysioterapeut og Fysiurgisk Massør', image: '', link: '#' },
  { id: '5', title: 'Julie Sandager', description: 'Knæ og Hofte Fysioterapeut', image: '', link: '#' },
  { id: '6', title: 'Julie Mark-Skousgaard', description: 'Fysiurgisk Massør', image: '', link: '#' },
  { id: '7', title: 'Malte Pedersen', description: 'Ryg-Fysioterapeut og Fysiurgisk Massør', image: '', link: '#' },
];

const GOOGLE_REVIEWS = [
  { name: 'Line M.', text: 'Jeg har haft en fantastisk oplevelse med Aktiv Fysioterapi. De forstår virkelig deres fag og hjælper mig hver gang.', rating: 5 },
  { name: 'Camilla R.', text: 'De reddede min træning! Meget professionelt og venligt personale.', rating: 5 },
  { name: 'Sarah L.', text: 'Jeg kan varmt anbefale Aktiv Fysioterapi! De kender deres stof og laver grundige undersøgelser.', rating: 5 },
  { name: 'Peter S.', text: 'God service og kompetente behandlere. Føler mig altid tryg og godt behandlet.', rating: 5 },
  { name: 'Morten K.', text: 'Fantastisk klinik med dygtige fysioterapeuter. Har hjulpet mig med min ryg efter mange år med smerter.', rating: 5 },
];

// News items are derived from blog posts
const NEWS = BLOG_POSTS.slice(0, 4).map((post, i) => ({
  id: i + 1,
  title: post.title,
  date: post.date,
}));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speciale/:slug" element={<SpecialtyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/betaling" element={<PaymentsPage />} />
        <Route path="/holdtraening" element={<HoldtraeningPage />} />
        <Route path="/politik/:slug" element={<PolicyPage />} />
        <Route path="/om-os" element={<OmOsPage />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const treatmentsRef = useRef<CarouselHandle>(null);
  const teamRef = useRef<CarouselHandle>(null);

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal antialiased">
      <Navbar />
      <ScrollIndicator />

      {/* Hero Section */}
      <section id="hero" className="relative h-[100vh] w-full overflow-hidden bg-charcoal">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Hero_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end items-start pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Brand name */}


            {/* Main heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 max-w-5xl" style={{ fontFamily: '"Playfair Display", serif' }}>
              <span className="font-semibold">Helhedsorienteret</span>
              <br />
              <span className="italic font-medium text-brand-secondary">behandling</span>
              <span className="font-semibold"> med</span>
              <br />
              <span className="font-semibold">fysioterapi</span>
            </h1>

            {/* Trust Stats Bar */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex items-center divide-x divide-white/10 min-w-max">
                {/* Sund Krop */}
                <div className="flex items-center gap-2 pr-4 md:pr-8">
                  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/30 flex-shrink-0">
                    <path d="M8 1C6 4 3 6 2 10C1 14 2 17 3.5 20C4.5 22 6 23 8 24" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
                    <path d="M6.5 5C5 7 3.5 9 3.5 12" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" />
                  </svg>
                  <div className="text-center">
                    <p className="text-white/90 text-sm md:text-base leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>Sund Krop</p>
                    <p className="text-white/35 text-[9px] md:text-[10px] font-light tracking-widest uppercase">Betroet af mange</p>
                  </div>
                  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/30 flex-shrink-0 scale-x-[-1]">
                    <path d="M8 1C6 4 3 6 2 10C1 14 2 17 3.5 20C4.5 22 6 23 8 24" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
                    <path d="M6.5 5C5 7 3.5 9 3.5 12" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" />
                  </svg>
                </div>

                {/* 100% Tilfredshed */}
                <div className="px-4 md:px-8 text-center">
                  <p className="text-white/90 text-lg md:text-xl leading-tight font-light" style={{ fontFamily: '"Playfair Display", serif' }}>100%</p>
                  <p className="text-white/35 text-[9px] md:text-[10px] font-light tracking-widest uppercase">Tilfredshed</p>
                </div>

                {/* Star Rating */}
                <div className="px-4 md:px-8 text-center">
                  <div className="flex items-center gap-1.5 justify-center">
                    <p className="text-white/90 text-lg md:text-xl leading-tight font-light" style={{ fontFamily: '"Playfair Display", serif' }}>5.0</p>
                    <div className="flex gap-px">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-white/40 text-white/40" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/35 text-[9px] md:text-[10px] font-light tracking-widest uppercase">Google</p>
                </div>

                {/* Review Count */}
                <div className="pl-4 md:pl-8 text-center">
                  <p className="text-white/90 text-lg md:text-xl leading-tight font-light" style={{ fontFamily: '"Playfair Display", serif' }}>40+</p>
                  <p className="text-white/35 text-[9px] md:text-[10px] font-light tracking-widest uppercase">Anmeldelser</p>
                </div>
              </div>
            </div>

            {/* Description text — directly on background, no box */}
            <div className="w-full max-w-4xl mb-8">
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Hos Aktiv Fysioterapi tilbyder vi en aktiv, moderne og grundig undersøgelse for at finde årsagen til dine smerter. Vi tager dig seriøst, lytter til dine udfordringer og sammensætter en behandling skræddersyet til netop dig – så du kan komme tilbage til et aktivt og smertefrit liv.
              </p>
            </div>

            {/* CTA buttons — stacked on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <a href="https://system.easypractice.net/overview/aktiv-fysioterapi" target="_blank" rel="noopener noreferrer" className="bg-white text-charcoal px-8 sm:px-12 py-4 sm:py-5 rounded font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-xl text-center">
                Book tid
              </a>
              <button className="bg-brand-secondary text-white px-8 sm:px-12 py-4 sm:py-5 rounded font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-xl">
                Gratis screening
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="behandlinger" className="py-10 md:py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* Left: title, description, arrows */}
            <div className="flex-none md:w-72 flex flex-col gap-8">
              <div>
                <h2 className="font-bold mb-4 text-brand-secondary">Behandlinger</h2>
                <p className="text-lg text-charcoal/70">
                  Vi tilbyder en bred vifte af specialiserede behandlinger tilpasset dine unikke behov og udfordringer.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => treatmentsRef.current?.scrollPrev()}
                  className="text-charcoal/60 hover:text-brand-primary hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <ChevronLeft size={32} strokeWidth={2.5} />
                </button>
                <button
                  onClick={() => treatmentsRef.current?.scrollNext()}
                  className="text-charcoal/60 hover:text-brand-primary hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <ChevronRight size={32} strokeWidth={2.5} />
                </button>
              </div>
            </div>
            {/* Right: carousel */}
            <div className="flex-1 overflow-hidden min-w-0">
              <Carousel ref={treatmentsRef} items={TREATMENTS} />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#FAF7F2" toColor="#ffffff" />

      {/* Trust Section */}
      <section id="om-os" className="section-padding relative overflow-hidden">
        <FlowingLines />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Placeholder for owner image */}
            <div className="bg-charcoal/5 rounded-2xl aspect-[4/5] flex items-center justify-center border-2 border-dashed border-charcoal/10">
              <span className="text-charcoal/30 font-medium italic">billede af ejer her</span>
            </div>

            <div className="flex flex-col justify-center">
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 text-brand-primary">Din fysioterapeut i Støvring</h3>
                <div className="prose prose-lg text-charcoal/80 space-y-4 mb-10 max-w-none">
                  <p>
                    Hos Aktiv Fysioterapi er du i centrum. Vores erfarne fysioterapeuter i Støvring tilbyder grundig vurdering og behandling af bl.a. rygsmerter, nakkesmerter, ledproblemer og sportsrelaterede skader.
                  </p>
                  <p>
                    Som klient hos os kan you være sikker på, at vi benytter forsvarlige og velovervejede teknikker. Dette sikrer, at du modtager en personlig, professionel og effektiv behandling. Dette skal sikre den helt rette tilgang til dig.
                  </p>
                  <p>
                    Uanset hvilken udfordring du har, er vi klar til at hjælpe dig på vores lokale klinik i Støvring.
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-caveat text-3xl md:text-5xl text-brand-primary mb-2 transform -rotate-2 select-none">
                    Anders Ranum
                  </span>
                  <div className="text-right">
                    <p className="font-bold text-charcoal mb-0">Anders Ranum</p>
                    <p className="text-sm text-charcoal/60 uppercase tracking-wider">Ejer, Aktiv Fysioterapi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ffffff" toColor="#FAF7F2" />

      {/* Team Section */}
      <section id="team" className="section-padding bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-bold mb-4 md:mb-8">Mød holdet bag Aktiv Fysioterapi</h2>
              <p className="text-lg md:text-xl text-charcoal/70">
                Vores team består af engagerede og dygtige fysioterapeuter, der står klar til at hjælpe dig med din genoptræning og behandling.
              </p>
            </div>
            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => teamRef.current?.scrollPrev()}
                className="text-charcoal/60 hover:text-brand-primary hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Forrige"
              >
                <ChevronLeft size={32} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => teamRef.current?.scrollNext()}
                className="text-charcoal/60 hover:text-brand-primary hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Næste"
              >
                <ChevronRight size={32} strokeWidth={1.5} />
              </button>
            </div>
          </div>
          <Carousel ref={teamRef} items={TEAM} buttonLabel="Book tid" />
        </div>
      </section>

      <WaveDivider fromColor="#FAF7F2" toColor="#ffffff" />

      {/* News Section */}
      <section id="nyheder" className="section-padding relative overflow-hidden">
        <FlowingLines variant="alt" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left: title & description */}
            <div className="lg:w-72 flex-none">
              <h2 className="font-bold mb-4">Nyheder</h2>
              <div className="w-12 h-0.5 bg-charcoal/30 mb-4" />
              <p className="text-sm text-charcoal/50 leading-relaxed font-normal">
                Følg med i vores nyheder og aktiviteter i Aktiv Fysioterapi
              </p>
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors mt-4">
                Se alle blogindlæg <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: numbered news list */}
            <div className="flex-1">
              {NEWS.map((item, index) => (
                <motion.a
                  key={item.id}
                  href="#"
                  className="group relative block py-6 cursor-pointer"
                  initial={false}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-6">
                    {/* Numbered circle */}
                    <div className="relative w-11 h-11 rounded-full border-2 border-charcoal/20 flex items-center justify-center flex-shrink-0 overflow-hidden transition-all duration-400 group-hover:border-brand-primary group-hover:shadow-lg group-hover:shadow-brand-primary/20">
                      <div className="absolute inset-0 bg-brand-primary scale-0 rounded-full transition-transform duration-400 ease-out group-hover:scale-100" />
                      <span className="relative z-10 text-sm font-bold text-charcoal/50 transition-colors duration-300 group-hover:text-white">
                        {item.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="flex-1 text-lg md:text-xl font-semibold text-charcoal/80 transition-colors duration-300 group-hover:text-charcoal">
                      {item.title}
                    </h3>

                    {/* Date — visible on desktop */}
                    <span className="hidden md:block text-sm text-charcoal/40 mr-4 transition-colors duration-300 group-hover:text-charcoal/60">
                      {item.date}
                    </span>

                    {/* Arrow + Læs mere */}
                    <div className="flex items-center gap-2 text-charcoal/40 transition-all duration-300 group-hover:text-brand-primary">
                      <span className="text-sm font-semibold opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:inline">
                        Læs mere
                      </span>
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Bottom divider with gradient reveal */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-charcoal/10">
                    <div className="h-full w-0 bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ffffff" toColor="#FAF7F2" />

      {/* Godt at vide — FAQ Accordion */}
      <section id="faq" className="section-padding bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left: title */}
            <div className="lg:w-72 flex-none">
              <h2 className="font-bold mb-4">Godt at vide</h2>
              <div className="w-12 h-0.5 bg-charcoal/30 mb-4" />
              <p className="text-sm text-charcoal/50 leading-relaxed font-normal">
                Praktisk information til dig som ny patient hos Aktiv Fysioterapi
              </p>
            </div>

            {/* Right: accordion */}
            <div className="flex-1">
              {[
                {
                  q: 'Jeg har prøvet alverdens behandlinger (fysioterapeut, osteopat, massør, akupunktør, kranio sakral terapi) uden held - kan Aktiv Fysioterapi så hjælpe mig?',
                  a: '90 % af vores klienter har haft smerter meget længe og prøvet alle mulige behandlinger uden effekt. Vi har god erfaring med at hjælpe disse mennesker, som aldrig rigtig har fundet den rette løsning, fordi vi tager os tid til behandlingerne og arbejder kun ud fra, hvad vi ved virker.',
                },
                {
                  q: 'Hvad koster behandlingen?',
                  a: 'Det kommer an på hvilken problematik du døjer med, og hvor lang tid det vurderes at komme sig over - vi hjælper altid vores klienter helt i mål, uanset hvor stor eller lille problemet er. For tiden har vi 1. gangskonsultation på fysioterapi til 50 %, dvs. 375 kr.',
                },
                {
                  q: 'Kan jeg bruge min sundhedssikring hos Aktiv Fysioterapi?',
                  a: 'Vi kan som udgangspunkt samarbejde med de fleste sundhedsforsikringer. I de fleste tilfælde kan vi klare afregningen direkte med forsikringen, der kan dog være enkelte tilfælde hvor du selv skal lægge ud for behandlingen og selv indsende regningen til forsikringsselskabet efterfølgende. Nogle sundhedssikringer betaler kun den offentlige takst på fysioterapi, hvorfor der normalvis vil være en egenbetaling til klienten.',
                },
                {
                  q: 'Skal jeg have henvisning for at komme til fysioterapi?',
                  a: 'Nej, det kræver ingen henvisning at være klient hos Aktiv Fysioterapi, og du kan derfor henvende dig direkte uden at skulle forbi egen læge forinden. Vi har intet ydernummer og er derfor ikke en del af Den Offentlige Sygesikring.',
                },
                {
                  q: 'Hvilken former for behandling udføres?',
                  a: 'Vores behandlinger tager udgangspunkt i hvad problemet er, og hvad klienten ønsker af behandling. Men den moderne evidensbaseret fysioterapi, omhandler ALTID en eller anden form for styrketræning, for at genoptræne det skadede område af kroppen. Derudover kan vi i nogle tilfælde supplere behandlingen med massage, Mulligan osv.',
                },
                {
                  q: 'Kan jeg blot komme og bruge træningsfaciliteterne?',
                  a: 'Du er meget velkommen til at blive en del af vores lille center og træne i vores lokaler. Der er fri adgang mellem 06-24, via et app-system. Vi har dog en maks kapacitet for hvor mange medlemmer vi kan have. Skriv til os på: info@aktiv-fysioterapi.dk og spørg om der er ledige medlemspladser, så hjælper vi dig med at komme i gang.',
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-charcoal/10">
                  <button
                    className="w-full flex items-center justify-between py-5 text-left group"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-charcoal group-hover:text-brand-primary transition-colors pr-4">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-charcoal/40 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}`}
                  >
                    <p className="text-charcoal/70 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#FAF7F2" toColor="#ffffff" />

      {/* Kontakt & Kort */}
      <section id="kontakt" className="section-padding bg-white relative overflow-hidden">
        <FlowingLines />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="font-bold mb-8 md:mb-12">Kontakt & Kort</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact form */}
            <div>
              <form
                action="mailto:Info@aktiv-fysioterapi.dk"
                method="post"
                encType="text/plain"
                className="flex flex-col gap-5"
              >
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">Fulde navn</label>
                  <input
                    type="text"
                    name="navn"
                    required
                    placeholder="Dit fulde navn"
                    className="w-full border border-charcoal/20 rounded px-4 py-3 text-charcoal focus:outline-none focus:border-brand-primary transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="din@email.dk"
                    className="w-full border border-charcoal/20 rounded px-4 py-3 text-charcoal focus:outline-none focus:border-brand-primary transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">Telefon</label>
                  <input
                    type="tel"
                    name="telefon"
                    required
                    placeholder="+45 00 00 00 00"
                    className="w-full border border-charcoal/20 rounded px-4 py-3 text-charcoal focus:outline-none focus:border-brand-primary transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">Besked</label>
                  <textarea
                    name="besked"
                    required
                    rows={4}
                    placeholder="Beskriv dine symptomer eller dit spørgsmål..."
                    className="w-full border border-charcoal/20 rounded px-4 py-3 text-charcoal focus:outline-none focus:border-brand-primary transition-colors bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-secondary text-white px-8 py-3.5 rounded font-bold hover:opacity-90 transition-opacity self-start"
                >
                  Send besked
                </button>
              </form>
            </div>

            {/* Right: Map + quick contact */}
            <div className="flex flex-col gap-6">
              <iframe
                title="Aktiv Fysioterapi kort"
                src="https://maps.google.com/maps?q=Hobrovej+91B,+9530+St%C3%B8vring&output=embed&hl=da"
                className="w-full h-72 lg:h-80 rounded border-0"
                loading="lazy"
              />
              <ul className="space-y-4 text-charcoal/70">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-primary flex-shrink-0" />
                  <span>77 41 44 44</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-primary flex-shrink-0" />
                  <span>Info@aktiv-fysioterapi.dk</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                  <span>Hobrovej 91B, 9530 Støvring</span>
                </li>
                <li className="flex items-start gap-3 pt-2 border-t border-charcoal/10">
                  <span className="text-sm text-charcoal/50 leading-relaxed">
                    <span className="font-semibold text-charcoal">Åbningstider:</span><br />
                    Man–Tor: 08:00–16:00<br />
                    Fredag: 08:00–14:00<br />
                    Lør–Søn: Lukket
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ffffff" toColor="#FAF7F2" />

      {/* Insurance Partners */}
      <section className="bg-[#FAF7F2] py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-charcoal/50 mb-8 md:mb-12">
            Samarbejder med de fleste forsikringsselskaber
          </p>
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-14 gap-y-6 mb-6 md:mb-8">
            <span className="text-xl md:text-2xl font-black text-charcoal/50 tracking-tight lowercase">tryg</span>
            <span className="text-lg md:text-xl font-semibold text-charcoal/50">Topdanmark</span>
            <span className="text-lg md:text-xl font-bold text-charcoal/50 tracking-widest">CODAN</span>
            <span className="text-lg md:text-xl font-medium text-charcoal/50">Alm. Brand</span>
          </div>
          {/* Row 2 */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-14 gap-y-6">
            <span className="text-xl md:text-2xl font-black text-charcoal/50 tracking-widest">PFA</span>
            <span className="text-lg md:text-xl font-semibold text-charcoal/50">Danica Pension</span>
            <span className="text-lg md:text-xl font-medium text-charcoal/50">✦ Mølholm</span>
            <span className="text-lg md:text-xl font-medium text-charcoal/50">+ Falck Healthcare</span>
          </div>
        </div>
      </section>

      {/* Social & Ratings Section */}
      <section className="relative overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="/hero-buttom-cta.png"
            alt="Aktiv Fysioterapi"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            {/* Follow heading */}
            <p className="text-white/70 font-semibold italic text-lg mb-2">Følg os på</p>
            <h2 className="text-white font-bold mb-12 leading-tight">Facebook & Instagram</h2>

            {/* Ratings */}
            <div className="mb-10">
              <h3 className="text-white font-bold text-xl mb-6">Anmeldelser</h3>

              <div className="flex flex-col sm:flex-row gap-8">
                {/* Google */}
                <a href="https://www.google.com/maps/place/Aktiv+Fysioterapi/@56.8890193,9.8348948,17z/data=!4m8!3m7!1s0x46494b9b884212d7:0x394927d844b70a2c!8m2!3d56.8890193!4d9.8374697!9m1!1b1!16s%2Fg%2F11k9mq4ywk" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-white text-3xl font-bold">5.0</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-brand-secondary text-brand-secondary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Google anmeldelser →</p>
                </a>

                {/* Trustpilot */}
                <a href="https://dk.trustpilot.com/review/aktiv-fysioterapi.dk" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-white text-3xl font-bold">4.7</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className={i < 4 ? 'fill-[#00B67A] text-[#00B67A]' : 'fill-[#00B67A]/40 text-[#00B67A]/40'} />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Trustpilot · 40 anmeldelser →</p>
                </a>
              </div>
            </div>

            {/* Auto-rotating reviews */}
            <div className="mb-10 min-h-[120px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={reviewIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(GOOGLE_REVIEWS[reviewIndex].rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-brand-secondary text-brand-secondary" />
                    ))}
                  </div>
                  <p className="text-white/80 italic leading-relaxed mb-3">
                    "{GOOGLE_REVIEWS[reviewIndex].text}"
                  </p>
                  <p className="text-white/50 text-sm font-semibold">— {GOOGLE_REVIEWS[reviewIndex].name}</p>
                </motion.div>
              </AnimatePresence>
              {/* Dots indicator */}
              <div className="flex gap-2 mt-4">
                {GOOGLE_REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setReviewIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === reviewIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-white/60 text-sm mb-8 max-w-lg">
              Læs mere på vores Facebook og Instagram side, hvad vores kunder siger om os.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mb-10">
              <a
                href="https://www.facebook.com/AktivfysioterapiFB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/aktiv_fysio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
              >
                <Instagram size={22} />
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="https://dk.trustpilot.com/review/aktiv-fysioterapi.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-secondary text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg text-center"
              >
                Læs anmeldelser
              </a>
              <a
                href="#kontakt"
                className="border-2 border-white/40 text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/70 transition-all text-center"
              >
                Kontakt klinikken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#224C4F] text-white">

        {/* CTA Banner */}
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Har du brug for{' '}
            <span className="italic text-brand-secondary">professionel</span>
            {' '}hjælp?
          </h2>
          <p className="text-white/60 mb-8 md:mb-10 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Vores erfarne fysioterapeuter er klar til at hjælpe dig med at komme smerterne til livs. Book en tid eller ring til os i dag.
          </p>
          <div className="flex justify-center">
            <a
              href="https://system.easypractice.net/overview/aktiv-fysioterapi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-charcoal px-8 md:px-10 py-4 rounded font-bold hover:scale-105 transition-transform"
            >
              Book tid
            </a>
          </div>
        </div>

        {/* 4-column grid */}
        <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
            <div>
              <div className="mb-8">
                <img
                  src="/logo.png"
                  alt="Aktiv Fysioterapi"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/40 leading-relaxed mb-8">
                Vi hjælper dig med at få din bevægelighed og livskvalitet tilbage gennem specialiseret fysioterapi og personlig behandling.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/AktivfysioterapiFB" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/aktiv_fysio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Kontakt</h4>
              <ul className="space-y-6 text-white/60">
                <li className="flex items-center gap-4">
                  <Phone size={20} className="text-brand-secondary" />
                  <span>77 41 44 44</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={20} className="text-brand-secondary" />
                  <span>Info@aktiv-fysioterapi.dk</span>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-brand-secondary mt-1" />
                  <span>Hobrovej 91B,<br />9530 Støvring</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Åbningstider</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex justify-between">
                  <span>Mandag - Torsdag</span>
                  <span className="text-white">08:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Fredag</span>
                  <span className="text-white">08:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Lørdag - Søndag</span>
                  <span className="text-white">Lukket</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Genveje</h4>
              <ul className="space-y-4 text-white/60">
                <li><Link to="/betaling" className="hover:text-brand-secondary transition-colors">Priser & Betaling</Link></li>
                <li><Link to="/blog" className="hover:text-brand-secondary transition-colors">Blog</Link></li>
                <li><Link to="/holdtraening" className="hover:text-brand-secondary transition-colors">Holdtræning</Link></li>
                <li><Link to="/politik/privatlivspolitik" className="hover:text-brand-secondary transition-colors">Privatlivspolitik</Link></li>
                <li><Link to="/politik/handelsbetingelser" className="hover:text-brand-secondary transition-colors">Handelsbetingelser</Link></li>
                <li><Link to="/politik/afbudspolitik" className="hover:text-brand-secondary transition-colors">Afbudspolitik</Link></li>
                <li><Link to="/politik/medlemsbetingelser" className="hover:text-brand-secondary transition-colors">Medlemsbetingelser</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="text-white/40 text-sm hover:text-white transition-colors">
              ← Tilbage til forsiden
            </Link>
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Aktiv Fysioterapi. Alle rettigheder forbeholdes. CVR: 44632896
            </p>
          </div>
        </div>

      </footer>
    </div>
  );
}
