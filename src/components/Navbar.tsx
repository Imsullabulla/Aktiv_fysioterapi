import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    }, 200);
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
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute -left-24 mt-4 w-[540px] bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden z-[60] px-5 pt-4 pb-3"
                        >
                          {/* Header */}
                          <p className="text-[10px] font-medium tracking-widest uppercase text-charcoal/35 mb-2 px-2">Specialeområder</p>

                          {/* Two-column grid */}
                          <div className="grid grid-cols-2 gap-x-1 gap-y-0">
                            {SPECIALTIES.map((spec) => (
                              <Link
                                key={spec.slug}
                                to={`/speciale/${spec.slug}`}
                                className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#f5f1ec] transition-colors group"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                <img
                                  src={spec.image}
                                  alt={spec.title}
                                  className="w-11 h-11 rounded-full object-cover flex-shrink-0 border border-charcoal/8 group-hover:border-brand-secondary/40 transition-all"
                                />
                                <div className="min-w-0">
                                  <p className="font-semibold text-charcoal text-[13px] leading-tight group-hover:text-brand-primary transition-colors">{spec.title}</p>
                                  <p className="text-charcoal/40 text-[11px] leading-tight">{spec.desc}</p>
                                </div>
                              </Link>
                            ))}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <div key={item}>
                  {item === 'Blog' || item === 'Betaling' || item === 'Holdtræning' || item === 'Om os' ? (
                    <Link to={item === 'Blog' ? '/blog' : item === 'Betaling' ? '/betaling' : item === 'Holdtræning' ? '/holdtraening' : '/om-os'} className="text-2xl font-bold text-charcoal hover:text-brand-primary" onClick={() => setIsMenuOpen(false)}>
                      {item}
                    </Link>
                  ) : (
                    <a href="#" className="text-2xl font-bold text-charcoal hover:text-brand-primary">
                      {item}
                    </a>
                  )}
                  {item === 'Specialeområder' && (
                    <div className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-brand-primary/20 pl-4">
                      {SPECIALTIES.map((spec) => (
                        <Link
                          key={spec.slug}
                          to={`/speciale/${spec.slug}`}
                          className="text-lg text-charcoal/70 hover:text-brand-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {spec.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-4 pt-6">
                <a href="https://system.easypractice.net/overview/aktiv-fysioterapi" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-secondary text-white py-4 rounded font-bold block text-center">Book tid</a>
                <button className="w-full bg-brand-primary text-white py-4 rounded font-bold">Gratis screening</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
