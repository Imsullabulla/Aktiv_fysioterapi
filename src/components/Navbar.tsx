import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  alwaysSolid?: boolean;
}

const SPECIALTIES = [
  { title: 'Nakke & Skulder', slug: 'skulder', image: '/nakke.jpeg', desc: 'Smerter, stivhed og spændinger', person: 'Anders Ranum' },
  { title: 'Ryg', slug: 'ryg', image: '/Ryg.jpeg', desc: 'Lænde- og rygsmerter', person: 'Malte Pedersen' },
  { title: 'Knæ & Hofte', slug: 'knae', image: '/Knæ.jpeg', desc: 'Skader og slidgigt', person: 'Julie Sandager' },
  { title: 'Søvn', slug: 'soevn', image: '/Søvn.jpeg', desc: 'Bedre søvnkvalitet', person: 'Julie Mark-Skousgaard' },
  { title: 'Golf', slug: 'golf', image: '/Golf.jpeg', desc: 'Forebyg skader på banen', person: 'Sascha Christensen' },
  { title: 'Løb & Triatlon', slug: 'triatlon', image: '/Triatlon.jpeg', desc: 'Løbeskader og performance', person: 'Benjamin M. Andersen' },
];

const NAV_ITEMS = ['Forside', 'Specialeområder', 'Blog', 'Betaling', 'Om os', 'Holdtræning'];

export const Navbar: React.FC<NavbarProps> = ({ alwaysSolid = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(alwaysSolid);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSpecOpen, setIsMobileSpecOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (alwaysSolid) {
      setIsScrolled(true);
      return;
    }
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY, alwaysSolid]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 250);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#224C4F] shadow-md ${isScrolled ? 'py-3' : 'py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="bg-[#224C4F] rounded-lg p-1">
              <img src="/logo.png" alt="Aktiv Fysioterapi" className="h-14 w-auto transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              if (item === 'Specialeområder') {
                return (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="text-lg font-semibold text-white hover:text-brand-secondary transition-colors flex items-center gap-1">
                      {item}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute -left-40 mt-5 w-[620px] rounded-2xl overflow-hidden z-[60]"
                          style={{
                            background: 'rgba(255, 255, 255, 0.92)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          {/* Top accent bar */}
                          <div className="h-[3px] w-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />

                          <div className="px-6 pt-5 pb-4">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30">Specialeområder</p>
                              <div className="h-px flex-1 ml-4 bg-charcoal/5" />
                            </div>

                            {/* Specialty cards grid */}
                            <div className="grid grid-cols-2 gap-2">
                              {SPECIALTIES.map((spec, index) => (
                                <motion.div
                                  key={spec.slug}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.05 + index * 0.04, ease: 'easeOut' }}
                                >
                                  <Link
                                    to={`/speciale/${spec.slug}`}
                                    className="dropdown-card group flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all duration-250 relative overflow-hidden border border-transparent hover:border-brand-primary/10 hover:bg-gradient-to-r hover:from-brand-primary/[0.04] hover:to-transparent"
                                    onClick={() => setIsDropdownOpen(false)}
                                  >
                                    {/* Left accent line on hover */}
                                    <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-full bg-brand-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                                    {/* Image */}
                                    <div className="relative flex-shrink-0">
                                      <img
                                        src={spec.image}
                                        alt={spec.title}
                                        className="w-14 h-14 rounded-xl object-cover transition-all duration-300 group-hover:shadow-md"
                                        style={{
                                          border: '2px solid rgba(34, 76, 79, 0.08)',
                                        }}
                                      />
                                      <div className="absolute inset-0 rounded-xl ring-2 ring-brand-secondary/0 group-hover:ring-brand-secondary/30 transition-all duration-300" />
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0 flex-1">
                                      <p className="font-bold text-charcoal text-[13.5px] leading-tight group-hover:text-brand-primary transition-colors duration-200">
                                        {spec.title}
                                      </p>
                                      <p className="text-charcoal/35 text-[11.5px] leading-snug mt-0.5">
                                        {spec.desc}
                                      </p>
                                    </div>

                                    {/* Arrow */}
                                    <ArrowRight
                                      size={14}
                                      className="flex-shrink-0 text-brand-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                    />
                                  </Link>
                                </motion.div>
                              ))}
                            </div>

                            {/* Footer CTA */}
                            <div className="mt-3 pt-3 border-t border-charcoal/5">
                              <Link
                                to="/#specialeomraader"
                                className="group/cta flex items-center justify-center gap-2 text-[12px] font-semibold text-brand-primary/60 hover:text-brand-primary transition-colors py-1"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                Se alle specialeområder
                                <ArrowRight size={12} className="group-hover/cta:translate-x-1 transition-transform duration-200" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              const linkTo = item === 'Blog' ? '/blog' : item === 'Betaling' ? '/betaling' : item === 'Holdtræning' ? '/holdtraening' : item === 'Om os' ? '/om-os' : '/';
              return (
                <Link
                  key={item}
                  to={linkTo}
                  className="text-lg font-semibold text-white hover:text-brand-secondary transition-colors"
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + idx * 0.04 }}
                >
                  {item === 'Specialeområder' ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between text-2xl font-bold text-charcoal hover:text-brand-primary py-3 transition-colors"
                        onClick={() => setIsMobileSpecOpen(!isMobileSpecOpen)}
                      >
                        {item}
                        <ChevronDown
                          size={22}
                          className={`text-charcoal/30 transition-transform duration-300 ${isMobileSpecOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isMobileSpecOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="ml-1 mt-1 mb-3 flex flex-col gap-1 border-l-[3px] border-brand-secondary/30 pl-4">
                              {SPECIALTIES.map((spec, specIdx) => (
                                <motion.div
                                  key={spec.slug}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: specIdx * 0.04 }}
                                >
                                  <Link
                                    to={`/speciale/${spec.slug}`}
                                    className="flex items-center gap-3 py-2.5 group"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    <img
                                      src={spec.image}
                                      alt={spec.title}
                                      className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border-2 border-charcoal/5 group-hover:border-brand-secondary/40 transition-all"
                                    />
                                    <div>
                                      <p className="font-semibold text-charcoal text-[15px] leading-tight group-hover:text-brand-primary transition-colors">
                                        {spec.title}
                                      </p>
                                      <p className="text-charcoal/35 text-[12px] leading-tight">
                                        {spec.desc}
                                      </p>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item === 'Blog' || item === 'Betaling' || item === 'Holdtræning' || item === 'Om os' ? (
                    <Link
                      to={item === 'Blog' ? '/blog' : item === 'Betaling' ? '/betaling' : item === 'Holdtræning' ? '/holdtraening' : '/om-os'}
                      className="block text-2xl font-bold text-charcoal hover:text-brand-primary py-3 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      className="block text-2xl font-bold text-charcoal hover:text-brand-primary py-3 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  )}

                  {/* Subtle divider */}
                  {idx < NAV_ITEMS.length - 1 && (
                    <div className="h-px bg-charcoal/5" />
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex flex-col gap-3 pt-6 mt-2 border-t border-charcoal/10"
              >
                <a
                  href="https://system.easypractice.net/overview/aktiv-fysioterapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-secondary text-white py-4 rounded-xl font-bold block text-center text-lg hover:shadow-lg transition-shadow"
                >
                  Book tid
                </a>
                <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-shadow">
                  Gratis screening
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
