import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';

const BOOKING_URL = 'https://system.easypractice.net/overview/aktiv-fysioterapi';
const MEMBERSHIP_URL = 'https://system.easypractice.net/subscriptions/aktiv-fysioterapi';

export function HoldtraeningPage() {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-charcoal antialiased">
            <Navbar alwaysSolid />

            {/* Hero */}
            <section className="bg-[#224C4F] pt-28 md:pt-32 pb-14 md:pb-20 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-white/[0.03] blur-sm" />
                <div className="absolute bottom-0 left-[5%] w-60 h-60 rounded-full bg-brand-secondary/[0.06]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
                    >
                        <ArrowLeft size={16} />
                        Tilbage til forsiden
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1
                            className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-4 md:mb-6 max-w-4xl text-white"
                            style={{ fontFamily: '"Playfair Display", serif' }}
                        >
                            <span className="font-semibold">Hold</span>
                            <span className="italic font-medium text-brand-secondary">træning</span>
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed mb-6 md:mb-8">
                            Træn i fællesskab med vores holdtræningsforløb. Vi tilbyder bootcamps og golftræning
                            for alle niveauer — ledet af erfarne fysioterapeuter.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={MEMBERSHIP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-brand-secondary text-white px-7 py-3.5 rounded-lg font-semibold hover:scale-[1.02] transition-transform"
                            >
                                Bliv medlem
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Live EasyPractice Embed */}
            <section className="py-10 md:py-16 bg-[#FAF7F2]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8 md:mb-10"
                    >
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"
                            style={{ fontFamily: '"Playfair Display", serif' }}
                        >
                            Kommende holdforløb
                        </h2>
                        <p className="text-charcoal/50 max-w-xl mx-auto">
                            Se vores aktuelle holdtræningsforløb herunder og tilmeld dig direkte.
                            Listen opdateres automatisk med nye hold.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="bg-white rounded-2xl shadow-lg border border-charcoal/8 overflow-hidden"
                    >
                        {/* Loading skeleton */}
                        {!iframeLoaded && (
                            <div className="flex flex-col items-center justify-center py-32 gap-4">
                                <div className="w-10 h-10 border-3 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
                                <p className="text-sm text-charcoal/40">Indlæser holdtræning...</p>
                            </div>
                        )}
                        <iframe
                            src={BOOKING_URL}
                            title="EasyPractice Booking"
                            width="100%"
                            height="900"
                            frameBorder="0"
                            className={`transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0 h-0'}`}
                            onLoad={() => setIframeLoaded(true)}
                            style={{ border: 'none', height: 'clamp(600px, 75vh, 1100px)' }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Membership CTA */}
            <section className="bg-white py-12 md:py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Users className="text-brand-primary" size={28} />
                        </div>
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"
                            style={{ fontFamily: '"Playfair Display", serif' }}
                        >
                            Bliv medlem
                        </h2>
                        <p className="text-charcoal/50 max-w-xl mx-auto mb-8 leading-relaxed">
                            Med et medlemskab får du adgang til alle holdtræningsforløb.
                            Har du spørgsmål, er du altid velkommen til at kontakte os.
                        </p>
                        <a
                            href={MEMBERSHIP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand-secondary text-white px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform"
                        >
                            Bliv medlem
                            <ExternalLink size={16} />
                        </a>
                        <p className="mt-6 text-sm text-charcoal/40">
                            Ring til os på <a href="tel:77414444" className="font-medium text-brand-primary hover:underline">77 41 44 44</a> eller
                            skriv til <a href="mailto:Info@aktiv-fysioterapi.dk" className="font-medium text-brand-primary hover:underline">Info@aktiv-fysioterapi.dk</a>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#224C4F] py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <Link to="/" className="text-white/50 text-sm hover:text-white transition-colors">
                        ← Tilbage til forsiden
                    </Link>
                    <p className="text-white/30 text-sm">© 2026 Aktiv Fysioterapi. Alle rettigheder forbeholdes.</p>
                </div>
            </footer>
        </div>
    );
}
