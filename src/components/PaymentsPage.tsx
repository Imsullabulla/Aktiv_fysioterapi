import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, Heart, Phone, Mail, CheckCircle, Smartphone, FileText, Landmark, Banknote } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { FlowingLines } from './FlowingLines';

const PRICES = [
    {
        title: 'Førstegangskonsultation',
        price: '750',
        description: 'Grundig undersøgelse, diagnosticering og individuel behandlingsplan',
        features: [
            'Fysioterapeutisk udredning',
            'Individuel behandlingsplan',
            'Øvelsesprogram',
            'Varighed ca. 60 min',
        ],
        highlighted: true,
    },
    {
        title: 'Opfølgende behandling',
        price: '500',
        description: 'Målrettet behandling baseret på din behandlingsplan',
        features: [
            'Hands-on behandling',
            'Progressionsvurdering',
            'Tilpassede øvelser',
            'Varighed ca. 30-45 min',
        ],
        highlighted: false,
    },
    {
        title: 'Golf Body Test',
        price: '1.700',
        description: 'Komplet screening af din krop optimeret til golf',
        features: [
            'Fuld kropsscreening',
            'Bevægelighedsanalyse',
            'Individuel træningsplan',
            'Forbedring af dit swing',
        ],
        highlighted: false,
    },
];

const PAYMENT_METHODS = [
    { name: 'MobilePay', desc: 'Betal nemt med din telefon', icon: Smartphone, gradient: 'from-[#5A31F4] to-[#8B5CF6]' },
    { name: 'Faktura', desc: 'Vi sender en faktura til dig', icon: FileText, gradient: 'from-[#224C4F] to-[#2D6A6E]' },
    { name: 'Bankoverførsel', desc: 'Overfør direkte til vores konto', icon: Landmark, gradient: 'from-[#DB7F67] to-[#E9A58F]' },
    { name: 'Kontant', desc: 'Betal kontant i klinikken', icon: Banknote, gradient: 'from-[#2D8A4E] to-[#4CAF70]' },
];


export function PaymentsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-charcoal antialiased">
            <Navbar alwaysSolid />

            {/* Hero */}
            <section className="bg-[#FAF7F2] pt-28 md:pt-32 pb-14 md:pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-brand-primary/60 hover:text-brand-primary transition-colors mb-6 md:mb-8"
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
                            className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-4 md:mb-6 max-w-4xl"
                            style={{ fontFamily: '"Playfair Display", serif' }}
                        >
                            <span className="font-semibold">Priser & </span>
                            <span className="italic font-medium text-brand-secondary">Betaling</span>
                        </h1>
                        <p className="text-base md:text-lg text-charcoal/60 max-w-2xl leading-relaxed">
                            Hos Aktiv Fysioterapi behøver du ikke en lægehenvisning for at modtage behandling.
                            Vi tilbyder gennemsigtige priser og fleksible betalingsmuligheder.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-12 md:py-20 relative overflow-hidden">
                <FlowingLines />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8 md:mb-14"
                    >
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"
                            style={{ fontFamily: '"Playfair Display", serif' }}
                        >
                            Vores priser
                        </h2>
                        <p className="text-charcoal/50 max-w-xl mx-auto">
                            Vi har superskarpe priser, fordi vi mener det skal være en nem beslutning at investere i sin sundhed.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PRICES.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                            >
                                <div
                                    className={`rounded-2xl p-8 h-full flex flex-col transition-shadow duration-300 hover:shadow-xl ${item.highlighted
                                        ? 'bg-[#224C4F] text-white ring-2 ring-brand-secondary/30'
                                        : 'bg-white border border-charcoal/8'
                                        }`}
                                >
                                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                    <p className={`text-sm mb-6 ${item.highlighted ? 'text-white/60' : 'text-charcoal/45'}`}>
                                        {item.description}
                                    </p>
                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span className="text-4xl font-bold">{item.price}</span>
                                        <span className={`text-sm ${item.highlighted ? 'text-white/50' : 'text-charcoal/40'}`}>kr.</span>
                                    </div>
                                    <ul className="space-y-3 flex-1">
                                        {item.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <CheckCircle
                                                    size={16}
                                                    className={`mt-0.5 flex-shrink-0 ${item.highlighted ? 'text-brand-secondary' : 'text-brand-primary'
                                                        }`}
                                                />
                                                <span className={`text-sm ${item.highlighted ? 'text-white/80' : 'text-charcoal/60'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Fixed price package info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 bg-[#FAF7F2] rounded-2xl p-8 md:p-10"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                                <Heart className="text-brand-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3">Fastpris forløb — spar penge og få tryghed</h3>
                                <p className="text-charcoal/60 leading-relaxed mb-4">
                                    De fleste af vores klienter vælger et fastpris forløb. Ved førstegangskonsultationen
                                    laver vi en fysioterapeutisk udredning, hvor din fysioterapeut forklarer, hvor længe
                                    behandlingsforløbet forventes at vare.
                                </p>
                                <p className="text-charcoal/60 leading-relaxed">
                                    Fastpris forløbet er en samlet pris, der er lavere end prisen for enkeltstående sessioner.
                                    Du sparer penge og undgår bekymringen om, hvor længe du skal være i forløb.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Payment & Insurance Section */}
            <section className="bg-[#FAF7F2] py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Insurance info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                                    <Shield className="text-brand-primary" size={22} />
                                </div>
                                <h2 className="text-2xl font-bold">Tilskud & Forsikring</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 border border-charcoal/5">
                                    <h3 className="font-semibold text-lg mb-3 text-brand-primary">Sygesikring Danmark</h3>
                                    <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                                        Er du medlem af Sygesikring Danmark, kan du modtage tilskud til din behandling.
                                        Informér blot din fysioterapeut, og vi indberetter automatisk.
                                    </p>
                                    <div className="flex gap-4">
                                        <div className="bg-[#FAF7F2] rounded-lg px-4 py-3 text-center flex-1">
                                            <p className="text-xs text-charcoal/40 mb-1">Første konsultation</p>
                                            <p className="font-bold text-lg">133 kr.</p>
                                        </div>
                                        <div className="bg-[#FAF7F2] rounded-lg px-4 py-3 text-center flex-1">
                                            <p className="text-xs text-charcoal/40 mb-1">Efterfølgende</p>
                                            <p className="font-bold text-lg">88 kr.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-charcoal/5">
                                    <h3 className="font-semibold text-lg mb-3">Sundhedsforsikring</h3>
                                    <p className="text-charcoal/60 text-sm leading-relaxed mb-3">
                                        De fleste sundhedsforsikringer dækker fysioterapi. Kontakt din forsikring for at
                                        afklare betingelserne for din dækning. Vi hjælper gerne med at guide dig.
                                    </p>
                                    <p className="text-charcoal/50 text-sm">
                                        Vi arbejder bl.a. med <span className="font-medium text-charcoal/70">Dansk Sundhedsforsikring</span>,{' '}
                                        <span className="font-medium text-charcoal/70">Tryg</span>,{' '}
                                        <span className="font-medium text-charcoal/70">Gjensidige</span> og mange flere.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-charcoal/5">
                                    <h3 className="font-semibold text-lg mb-3">Ingen lægehenvisning nødvendig</h3>
                                    <p className="text-charcoal/60 text-sm leading-relaxed">
                                        Du behøver ikke en lægehenvisning for at modtage behandling hos os, da vi ikke er
                                        en del af den offentlige sygesikring. Der er derfor ingen offentligt tilskud.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Payment methods */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center">
                                    <CreditCard className="text-brand-secondary" size={22} />
                                </div>
                                <h2 className="text-2xl font-bold">Betalingsmuligheder</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {PAYMENT_METHODS.map((method, i) => {
                                    const Icon = method.icon;
                                    return (
                                        <motion.div
                                            key={method.name}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.35, delay: 0.25 + i * 0.08 }}
                                            className="group bg-white rounded-xl p-5 border border-charcoal/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                                        >
                                            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon size={20} className="text-white" />
                                            </div>
                                            <p className="font-semibold text-sm mb-0.5">{method.name}</p>
                                            <p className="text-xs text-charcoal/40">{method.desc}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Contact CTA */}
                            <div className="bg-[#224C4F] rounded-2xl p-8 text-white">
                                <h3
                                    className="text-2xl font-semibold mb-3"
                                    style={{ fontFamily: '"Playfair Display", serif' }}
                                >
                                    Har du spørgsmål?
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">
                                    Kontakt os gerne, hvis du har spørgsmål til priser, betaling eller forsikringsdækning.
                                    Vi er altid klar til at hjælpe.
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href="tel:77414444"
                                        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                                    >
                                        <Phone size={18} />
                                        <span className="text-sm font-medium">77 41 44 44</span>
                                    </a>
                                    <a
                                        href="mailto:Info@aktiv-fysioterapi.dk"
                                        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                                    >
                                        <Mail size={18} />
                                        <span className="text-sm font-medium">Info@aktiv-fysioterapi.dk</span>
                                    </a>
                                </div>
                                <a
                                    href="https://system.easypractice.net/overview/aktiv-fysioterapi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 block text-center bg-brand-secondary text-white py-3.5 rounded-lg font-semibold hover:scale-[1.02] transition-transform"
                                >
                                    Book tid nu
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="bg-[#224C4F] py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <Link to="/" className="text-white/50 text-sm hover:text-white transition-colors">
                        ← Tilbage til forsiden
                    </Link>
                    <p className="text-white/30 text-sm">© 2026 Aktiv Fysioterapi. Alle rettigheder forbeholdes. CVR: 44632896</p>
                </div>
            </footer>
        </div>
    );
}

