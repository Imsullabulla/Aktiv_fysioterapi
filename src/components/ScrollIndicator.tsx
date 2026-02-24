import React, { useState, useEffect, useCallback } from 'react';

interface Section {
    id: string;
    label: string;
}

const SECTIONS: Section[] = [
    { id: 'hero', label: 'Hjem' },
    { id: 'behandlinger', label: 'Behandlinger' },
    { id: 'om-os', label: 'Om os' },
    { id: 'team', label: 'Holdet' },
    { id: 'nyheder', label: 'Nyheder' },
    { id: 'faq', label: 'FAQ' },
    { id: 'kontakt', label: 'Kontakt' },
];

export function ScrollIndicator() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        setScrollProgress(progress);

        // Show/hide based on scroll position (hide at very top)
        setIsVisible(scrollTop > 200);

        // Determine active section
        const sectionElements = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
        let current = 0;
        for (let i = sectionElements.length - 1; i >= 0; i--) {
            const el = sectionElements[i];
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.4) {
                    current = i;
                    break;
                }
            }
        }
        setActiveIndex(current);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-0 transition-all duration-500"
            style={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
                transform: `translateY(-50%) translateX(${isVisible ? '0' : '12px'})`,
            }}
        >
            {/* Track container */}
            <div className="relative flex flex-col items-center">
                {SECTIONS.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group relative flex items-center py-2 cursor-pointer"
                        aria-label={`Gå til ${section.label}`}
                    >
                        {/* Tooltip label — shows on hover */}
                        <div
                            className="absolute right-full mr-3 whitespace-nowrap transition-all duration-300 pointer-events-none"
                            style={{
                                opacity: hoveredIndex === index ? 1 : 0,
                                transform: `translateX(${hoveredIndex === index ? '0' : '8px'})`,
                            }}
                        >
                            <span className="text-xs font-semibold text-charcoal/70 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm border border-charcoal/5">
                                {section.label}
                            </span>
                        </div>

                        {/* Dash indicator */}
                        <div
                            className="transition-all duration-300 rounded-full"
                            style={{
                                width: index === activeIndex ? '20px' : hoveredIndex === index ? '14px' : '8px',
                                height: index === activeIndex ? '3px' : '2px',
                                backgroundColor:
                                    index === activeIndex
                                        ? '#224C4F'
                                        : hoveredIndex === index
                                            ? 'rgba(51, 51, 51, 0.5)'
                                            : 'rgba(51, 51, 51, 0.2)',
                            }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
