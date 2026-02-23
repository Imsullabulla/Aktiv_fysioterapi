import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Phone, Mail, Calendar, User } from 'lucide-react';
import { SPECIALTY_DATA } from '../data/specialtyData';
import { Navbar } from './Navbar';

export const SpecialtyPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? SPECIALTY_DATA[slug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-brand-primary mb-4">Siden blev ikke fundet</h1>
                    <Link to="/" className="text-brand-secondary font-semibold hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Tilbage til forsiden
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAF7F2] font-sans text-charcoal antialiased">
            <Navbar alwaysSolid />

            {/* Hero Section */}
            <section className="pt-28 md:pt-32 pb-10 md:pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
                    >
                        <div className="flex-1 w-full">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-primary mb-4 md:mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                                {data.titleHighlight ? (() => {
                                    const parts = data.title.split(data.titleHighlight!);
                                    return (
                                        <>
                                            {parts[0]}
                                            {data.titleBreakBeforeHighlight && <br />}
                                            <span className="italic text-brand-secondary">{data.titleHighlight}</span>
                                            {parts[1]}
                                        </>
                                    );
                                })() : data.title}
                            </h1>
                            <p className="text-base md:text-xl text-charcoal/80 leading-relaxed mb-6 md:mb-8">
                                {data.description}
                            </p>
                            <a href="https://system.easypractice.net/book/aktiv-fysioterapi#choose-where" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-secondary text-white px-8 py-4 rounded font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-lg inline-flex items-center justify-center gap-3">
                                <Calendar size={20} /> Book tid i dag
                            </a>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white">
                                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-10 md:py-16 bg-white px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-brand-primary mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center text-white text-lg">?</span>
                            Hvem kan vi hjælpe?
                        </h2>
                        <ul className="space-y-4">
                            {data.hvemViSer.map((item, index) => (
                                <li key={index} className="flex gap-4 items-start text-lg text-charcoal/80">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-secondary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#FAF7F2] p-8 rounded-3xl border border-brand-primary/10"
                    >
                        <h2 className="text-3xl font-bold text-brand-primary mb-8">Din specialist</h2>
                        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
                            <div className="w-32 h-32 rounded-full bg-brand-primary/10 flex items-center justify-center border-4 border-white shadow-lg overflow-hidden shrink-0">
                                <User size={64} className="text-brand-primary/20" />
                                {/* Her kan UI-billedet indsættes senere */}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-brand-primary mb-1">{data.specialist.name}</h3>
                                <p className="text-brand-secondary font-semibold mb-6">{data.specialist.title}</p>

                                <div className="space-y-4">
                                    <a href={`tel:${data.specialist.phone}`} className="flex items-center gap-3 text-charcoal/70 hover:text-brand-primary transition-colors justify-center sm:justify-start">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-sm">
                                            <Phone size={18} />
                                        </div>
                                        {data.specialist.phone}
                                    </a>
                                    <a href={`mailto:${data.specialist.email}`} className="flex items-center gap-3 text-charcoal/70 hover:text-brand-primary transition-colors justify-center sm:justify-start">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-sm">
                                            <Mail size={18} />
                                        </div>
                                        {data.specialist.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer (Simplified) */}
            <footer className="bg-[#224C4F] text-white py-12 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Book din behandling i dag</h2>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">
                        Gør noget ved dine smerter og få din aktive hverdag tilbage. Vi står klar til at hjælpe dig på klinikken i Støvring.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://system.easypractice.net/book/aktiv-fysioterapi#choose-where" target="_blank" rel="noopener noreferrer" className="bg-white text-charcoal px-8 py-3 rounded font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                            Book online
                        </a>
                        <a href="tel:77414444" className="border border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                            <Phone size={18} /> Ring til os
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
