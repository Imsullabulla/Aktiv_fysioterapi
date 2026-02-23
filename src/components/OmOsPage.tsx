import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Award, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';

// Reusable parallax image with float animation
function ParallaxImage({ src, alt }: { src: string; alt: string; blendMultiply?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      style={{ y }}
      className="relative flex items-center justify-center"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full max-w-sm md:max-w-md select-none"
        style={{ mixBlendMode: 'multiply' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}


export const OmOsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-charcoal antialiased">
      <Navbar alwaysSolid />

      {/* ── Hero ── */}
      <section className="bg-[#224C4F] pt-28 md:pt-40 pb-16 md:pb-28 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-secondary text-sm uppercase tracking-widest font-semibold mb-4 md:mb-6"
          >
            Om os
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 md:mb-8"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            En specialiseret{' '}
            <span className="italic text-brand-secondary">klinik</span>
            <br />for dig
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/60 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12"
          >
            Aktiv Fysioterapi er ikke en generel klinik. Vi er specialister — og det mærker vores klienter fra første dag.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
          >
            <a
              href="https://system.easypractice.net/overview/aktiv-fysioterapi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary text-white px-8 py-4 rounded font-bold hover:scale-105 transition-transform text-center"
            >
              Book tid
            </a>
            <a
              href="tel:77414444"
              className="border-2 border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors text-center"
            >
              Ring til os
            </a>
          </motion.div>
        </div>
        {/* Decorative blurred circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-secondary/5 blur-3xl pointer-events-none" />
      </section>

      {/* ── Section 1: Specialorienteret klinik + Shoulder ── */}
      <section className="bg-white py-14 md:py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-brand-secondary text-sm uppercase tracking-widest font-semibold mb-4">Vores filosofi</motion.p>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary mb-6 md:mb-8 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              En specialorienteret{' '}
              <span className="italic text-brand-secondary">klinik</span>
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Aktiv Fysioterapi er en specialeklinik. Det giver vores klienter en sikkerhed i, at vi ved hvad vi foretager os, da vi ikke tilbyder generel behandling, men specialiseret behandling.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-charcoal/70 text-lg leading-relaxed mb-10">
              Vi holder os opdaterede med den nyeste forskning og arbejder ud fra en evidensbaseret tilgang, der tager højde for klientens præferencer. Vi investerer løbende i efteruddannelse for at sikre kvalitet i både det praktiske og det terapeutiske arbejde.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="space-y-4">
              {[
                { icon: <Award size={20} />, text: 'Evidensbaseret behandling' },
                { icon: <BookOpen size={20} />, text: 'Løbende efteruddannelse' },
                { icon: <Users size={20} />, text: 'Specialiserede fagfolk' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-charcoal/80">
                  <span className="text-brand-secondary">{icon}</span>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <ParallaxImage src="/Shoulder.jpg" alt="Skulder anatomi" blendMultiply />
        </div>
      </section>

      {/* ── Section 2: Moderne fysioterapi + Back ── */}
      <section className="bg-white py-14 md:py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-last md:order-first">
            <ParallaxImage src="/Back.jpg" alt="Ryg anatomi" blendMultiply />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
            className="order-first md:order-last"
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-brand-secondary text-sm uppercase tracking-widest font-semibold mb-4">Tilgang</motion.p>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary mb-6 md:mb-8 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Moderne{' '}
              <span className="italic text-brand-secondary">fysioterapi</span>
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Moderne fysioterapi er en mere aktiv tilgang til behandling af smerter. Det betyder, at klienten selv tager ansvar for at styre sin situation — og vi giver dem redskaberne til det.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Vi ser hele mennesket frem for bare kroppen. Klienten lærer at forstå de underliggende årsager til sine smerter, fremfor blot at blive behandlet for symptomerne. Det reducerer afhængighed af fortsat behandling.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-charcoal/70 text-lg leading-relaxed">
              Store dele af vores forløb handler om at give klienten redskaberne til selv at kunne styre sine symptomer og problemer — så vi på et tidspunkt bliver overflødige.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Forløbskonceptet + Knee ── */}
      <section className="bg-white py-14 md:py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-brand-secondary text-sm uppercase tracking-widest font-semibold mb-4">Behandlingsmodel</motion.p>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary mb-6 md:mb-8 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Forløbs
              <span className="italic text-brand-secondary">konceptet</span>
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Vi tilbyder ikke enkeltbehandlinger — kun en første undersøgelse, og derefter tilbydes et forløb som passer til dig og dine udfordringer.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Det skyldes, at vi tror på, at varige resultater kræver en helhedsorienteret tilgang over tid. Et forløb giver os mulighed for at følge din udvikling, justere behandlingen og sikre, at du opnår det bedst mulige resultat.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-charcoal/70 text-lg leading-relaxed">
              Vi prioriterer kommunikation og samarbejde med klienten højt — det er en moderne og anderledes måde at gå til fysioterapi på.
            </motion.p>
          </motion.div>

          <ParallaxImage src="/knee.jpg" alt="Knæ anatomi" blendMultiply />
        </div>
      </section>

      {/* ── Section 4: Hofte / lokation + Hips ── */}
      <section className="bg-white py-14 md:py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-last md:order-first">
            <ParallaxImage src="/Hips.jpg" alt="Hofte anatomi" blendMultiply />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
            className="order-first md:order-last"
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-brand-secondary text-sm uppercase tracking-widest font-semibold mb-4">Find os</motion.p>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary mb-6 md:mb-8 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Besøg{' '}
              <span className="italic text-brand-secondary">klinikken</span>
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-charcoal/70 text-lg leading-relaxed mb-10">
              Vi holder til i moderne, lyse lokaler i Støvring — let tilgængeligt med gode parkeringsforhold. Klinikken er indrettet med fokus på en tryg og professionel atmosfære.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-brand-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">Adresse</p>
                  <p className="text-charcoal/60">Hobrovej 91B, 9530 Støvring</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={22} className="text-brand-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">Telefon</p>
                  <a href="tel:77414444" className="text-charcoal/60 hover:text-brand-secondary transition-colors">77 41 44 44</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={22} className="text-brand-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">E-mail</p>
                  <a href="mailto:Info@aktiv-fysioterapi.dk" className="text-charcoal/60 hover:text-brand-secondary transition-colors">Info@aktiv-fysioterapi.dk</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-14 md:py-28 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Klar til at komme{' '}
            <span className="italic text-brand-secondary">i gang?</span>
          </h2>
          <p className="text-charcoal/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
            Book en tid hos en af vores specialister i dag. Vi glæder os til at hjælpe dig.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <a
              href="https://system.easypractice.net/overview/aktiv-fysioterapi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary text-white px-8 py-4 rounded font-bold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
            >
              Book tid <ArrowRight size={18} />
            </a>
            <Link
              to="/"
              className="border-2 border-brand-primary/30 text-brand-primary px-8 py-4 rounded font-bold hover:bg-brand-primary hover:text-white transition-colors text-center"
            >
              Tilbage til forsiden
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#224C4F] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <img src="/logo.png" alt="Aktiv Fysioterapi" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/AktivfysioterapiFB" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/aktiv_fysio" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Aktiv Fysioterapi · CVR: 44632896
          </p>
        </div>
      </footer>
    </div>
  );
};
