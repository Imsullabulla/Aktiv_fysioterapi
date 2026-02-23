import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { FlowingLines } from './FlowingLines';

export const BLOG_POSTS = [
    {
        id: '1',
        slug: 'rygsmerter-der-ikke-vil-forsvinde',
        title: 'Rygsmerter der ikke vil forsvinde? Fysioterapi som løsning',
        excerpt: 'Kender du følelsen af at stå op om morgenen og allerede mærke ryggen? Den stikker, den er stiv, og du ved, at det kommer til at præge hele dagen. Fysioterapi kan hjælpe dig med at finde årsagen og komme smerterne til livs.',
        image: '/Ryg.jpeg',
        category: 'Ryg',
        date: '15. februar 2026',
        readTime: '5 min',
    },
    {
        id: '2',
        slug: 'skulder-og-nakkesmerter',
        title: 'Skulder- og nakkesmerter: Forstå sammenhængen',
        excerpt: 'Mange oplever smerter i skulder og nakke efter lange dage ved computeren. Vi kigger på de mest almindelige årsager og hvordan målrettet fysioterapi kan genoprette bevægelighed og reducere smerte.',
        image: '/nakke.jpeg',
        category: 'Nakke & Skulder',
        date: '8. februar 2026',
        readTime: '4 min',
    },
    {
        id: '3',
        slug: 'knaeskader-hos-motionister',
        title: 'Knæskader hos motionister: Forebyggelse og behandling',
        excerpt: 'Knæproblemer er en af de hyppigste årsager til, at motionister søger fysioterapi. Lær om de mest udbredte knæskader, og hvad du kan gøre for at undgå dem.',
        image: '/Knæ.jpeg',
        category: 'Knæ & Hofte',
        date: '1. februar 2026',
        readTime: '6 min',
    },
    {
        id: '4',
        slug: 'soevnens-betydning',
        title: 'Søvnens betydning for din fysiske restitution',
        excerpt: 'God søvn er afgørende for kroppens evne til at hele og restituere. Vi dykker ned i, hvordan søvnkvalitet påvirker dine muskler, led og din generelle sundhed.',
        image: '/Søvn.jpeg',
        category: 'Søvn',
        date: '25. januar 2026',
        readTime: '5 min',
    },
    {
        id: '5',
        slug: 'golf-og-fysioterapi',
        title: 'Golf og fysioterapi: Optimer dit swing og forebyg skader',
        excerpt: 'Golf kræver en kompleks bevægelse, der belaster kroppen asymmetrisk. Læs om de mest almindelige golfskader, og hvordan fysioterapi kan forbedre dit spil.',
        image: '/Golf.jpeg',
        category: 'Golf',
        date: '18. januar 2026',
        readTime: '4 min',
    },
    {
        id: '6',
        slug: 'loebeskader',
        title: 'Løbeskader: Fra diagnose til comeback',
        excerpt: 'Hvad enten det er skinnebensbetændelse, akillessenebetændelse eller knæsmerter – løbeskader behøver ikke at stoppe dig. Vi gennemgår vejen tilbage til løbestierne.',
        image: '/Triatlon.jpeg',
        category: 'Løb & Triatlon',
        date: '10. januar 2026',
        readTime: '7 min',
    },
    {
        id: '7',
        slug: 'hoftesmerter',
        title: 'Hoftesmerter: Årsager og behandlingsmuligheder',
        excerpt: 'Hoftesmerter kan have mange årsager – fra muskeldysfunktion til slidgigt. Vi ser på, hvordan en grundig fysioterapeutisk undersøgelse kan finde årsagen og skabe vedvarende lindring.',
        image: '/Hofte.jpeg',
        category: 'Knæ & Hofte',
        date: '3. januar 2026',
        readTime: '5 min',
    },
    {
        id: '8',
        slug: 'skuldersmerter-hvornaar',
        title: 'Skuldersmerter: Hvornår skal du søge hjælp?',
        excerpt: 'Mange lever med skuldersmerter i lang tid, før de søger behandling. Lær at genkende de tegn, der betyder, at det er tid til at kontakte en fysioterapeut.',
        image: '/Skulder.jpeg',
        category: 'Nakke & Skulder',
        date: '20. december 2025',
        readTime: '4 min',
    },
];

export function BlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-charcoal antialiased">
            <Navbar alwaysSolid />

            {/* Hero / Intro */}
            <section className="relative min-h-[60vh] flex items-end overflow-hidden">
                {/* Background image */}
                <img
                    src="/Blog_billede.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 md:pt-40 pb-10 md:pb-16">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6 md:mb-8"
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
                            <span className="font-semibold">Blogindlæg om </span>
                            <span className="italic font-medium text-brand-secondary">fysioterapi</span>
                            <span className="font-semibold"> og sundhed</span>
                        </h1>
                        <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
                            Dyk ned i vores blog for at lære mere om, hvordan fysioterapi kan hjælpe dig med alt fra
                            rygsmerter og skulderskader til bedre søvn og sportsperformance. Vi deler viden, erfaringer
                            og de nyeste indsigter inden for fysioterapi.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Description cards */}
            <section className="bg-[#FAF7F2] py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 border border-charcoal/5">
                            <h3 className="font-semibold text-lg mb-2 ">Hvad er fysioterapi?</h3>
                            <p className="text-charcoal/50 text-sm leading-relaxed">
                                Vi udforsker, hvordan fysioterapeuter arbejder med kroppens naturlige helingsprocesser og søger
                                efter den underliggende årsag til problemer for at fremme langvarig sundhed.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-charcoal/5">
                            <h3 className="font-semibold text-lg mb-2 ">Helhedsorienteret tilgang</h3>
                            <p className="text-charcoal/50 text-sm leading-relaxed">
                                Vi fokuserer ikke kun på at lindre symptomer, men søger at forstå og behandle hele kroppen
                                for at genoprette optimal funktion og bevægelse.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-charcoal/5">
                            <h3 className="font-semibold text-lg mb-2 ">Hvorfor vælge os?</h3>
                            <p className="text-charcoal/50 text-sm leading-relaxed">
                                Hos Aktiv Fysioterapi står vores erfarne og passionerede team klar til at støtte dig
                                på din rejse mod bedre sundhed og et aktivt liv uden smerter.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-12 md:py-20 relative overflow-hidden">
                <FlowingLines />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Featured post - first item large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-12"
                    >
                        <Link to={`/blog/${BLOG_POSTS[0].slug}`} className="group block">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#FAF7F2] rounded-2xl overflow-hidden">
                                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                                    <img
                                        src={BLOG_POSTS[0].image}
                                        alt={BLOG_POSTS[0].title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col justify-center p-5 md:p-8 lg:pr-12">
                                    <span className="text-brand-secondary text-xs font-medium uppercase tracking-widest mb-3">
                                        {BLOG_POSTS[0].category}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-brand-primary transition-colors">
                                        {BLOG_POSTS[0].title}
                                    </h2>
                                    <p className="text-charcoal/50 leading-relaxed mb-6">{BLOG_POSTS[0].excerpt}</p>
                                    <div className="flex items-center gap-4 text-sm text-charcoal/35">
                                        <span>{BLOG_POSTS[0].date}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {BLOG_POSTS[0].readTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Rest of posts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.slice(1).map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                            >
                                <Link to={`/blog/${post.slug}`} className="group block h-full">
                                    <article className="bg-white rounded-2xl overflow-hidden border border-charcoal/5 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                                        <div className="aspect-[16/10] overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <span className="text-brand-secondary text-[11px] font-medium uppercase tracking-widest mb-2">
                                                {post.category}
                                            </span>
                                            <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-brand-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-charcoal/45 text-sm leading-relaxed flex-1 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-5 pt-4 border-t border-charcoal/5">
                                                <span className="text-xs text-charcoal/30">{post.date}</span>
                                                <span className="text-brand-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Læs mere <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#224C4F] py-12 md:py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-6"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                        Har du brug for <span className="italic text-brand-secondary">professionel</span> hjælp?
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Vores erfarne fysioterapeuter er klar til at hjælpe dig med at komme smerterne til livs.
                        Book en tid eller ring til os i dag.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://system.easypractice.net/overview/aktiv-fysioterapi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-charcoal px-8 py-4 rounded font-bold hover:scale-105 transition-transform"
                        >
                            Book tid
                        </a>
                        <Link
                            to="/"
                            className="bg-brand-secondary text-white px-8 py-4 rounded font-bold hover:scale-105 transition-transform"
                        >
                            Ring til os
                        </Link>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="bg-[#224C4F] border-t border-white/10 py-8">
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

