import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';

interface PolicySection {
    heading?: string;
    content: string[];
}

interface PolicyData {
    title: string;
    sections: PolicySection[];
}

const POLICIES: Record<string, PolicyData> = {
    privatlivspolitik: {
        title: 'Privatlivspolitik',
        sections: [
            {
                heading: 'Cookie- og privatlivspolitik hos Aktiv Fysioterapi',
                content: [
                    'Når du besøger vores website indsamles der oplysninger om dig, som bruges til at tilpasse og forbedre vores indhold og til at øge værdien af de annoncer, der vises på siden. Hvis du ikke ønsker, at der indsamles oplysninger, bør du slette dine cookies og undlade videre brug af websitet. Nedenfor har vi uddybet, hvilke informationer der indsamles, deres formål og hvilke tredjeparter, der har adgang til dem.',
                ],
            },
            {
                heading: 'Cookies',
                content: [
                    'Websitet anvender "cookies", der er en tekstfil, som gemmes på din computer, mobil el. tilsvarende med det formål at genkende den, huske indstillinger, udføre statistik og målrette annoncer. Cookies kan ikke indeholde skadelig kode som f.eks. virus.',
                    'Hvis du sletter eller blokerer cookies vil annoncer kunne blive mindre relevante for dig og optræde hyppigere. Du kan desuden risikere at websitet ikke fungerer optimalt samt at der er indhold, du ikke kan få adgang til.',
                ],
            },
            {
                heading: 'Personoplysninger',
                content: [
                    'Personoplysninger er alle slags informationer, der i et eller andet omfang kan henføres til dig. Når du benytter vores website indsamler og behandler vi en række sådanne informationer. Det sker f.eks. ved alm. tilgang af indhold, hvis du tilmelder dig vores nyhedsbrev, deltager i konkurrencer eller undersøgelser, registrerer dig som bruger eller abonnent, øvrig brug af services eller foretager køb via websitet.',
                    'Vi indsamler og behandler typisk følgende typer af oplysninger: Et unikt ID og tekniske oplysninger om din computer, tablet eller mobiltelefon, dit IP-nummer, geografisk placering, samt hvilke sider du klikker på (interesser). I det omfang du selv giver eksplicit samtykke hertil og selv indtaster informationerne behandles desuden: Navn, telefonnummer, e-mail, adresse og betalingsoplysninger.',
                ],
            },
            {
                heading: 'Sikkerhed',
                content: [
                    'Vi behandler dine personoplysninger sikkert og fortroligt i overensstemmelse med gældende lovgivning, herunder persondataforordningen og databeskyttelsesloven. Dine oplysninger vil alene blive anvendt til det formål, de er indsamlet til, og vil blive slettet, når dette formål er opfyldt eller ikke længere relevant.',
                    'Vi har truffet tekniske og organisatoriske foranstaltninger mod, at dine oplysninger hændeligt eller ulovligt bliver slettet, offentliggjort, fortabt, forringet eller kommer til uvedkommendes kendskab, misbruges eller i øvrigt behandles i strid med lovgivningen.',
                ],
            },
            {
                heading: 'Formål',
                content: [
                    'Oplysningerne bruges til at identificere dig som bruger og vise dig de annoncer, som vil have størst sandsynlighed for at være relevante for dig, at registrere dine køb og betalinger, samt at kunne levere de services, du har efterspurgt, som f.eks. at fremsende et nyhedsbrev. Herudover anvender vi oplysningerne til at optimere vores services og indhold.',
                ],
            },
            {
                heading: 'Periode for opbevaring',
                content: [
                    'Oplysningerne opbevares i det tidsrum, der er tilladt i henhold til lovgivningen, og vi sletter dem, når de ikke længere er nødvendige. Perioden afhænger af karakteren af oplysningen og baggrunden for opbevaring.',
                ],
            },
            {
                heading: 'Videregivelse af oplysninger',
                content: [
                    'Data om din brug af websitet, hvilke annoncer, du modtager og evt. klikker på, geografisk placering, køn og alderssegment m.v. videregives til tredjeparter i det omfang disse oplysninger er kendt. Oplysningerne anvendes til målretning af annoncering.',
                    'Vi benytter herudover en række tredjeparter til opbevaring og behandling af data. Disse behandler udelukkende oplysninger på vores vegne og må ikke anvende dem til egne formål.',
                    'Videregivelse af personoplysninger som navn og e-mail m.v. vil kun ske, hvis du giver samtykke til det. Vi anvender kun databehandlere i EU eller i lande, der kan give dine oplysninger en tilstrækkelig beskyttelse.',
                ],
            },
            {
                heading: 'Indsigt og klage',
                content: [
                    'Du har ret til at få oplyst, hvilke personoplysninger, vi behandler om dig i et almindeligt format (dataportabilitet). Du kan desuden til enhver tid gøre indsigelse mod, at oplysninger anvendes. Du kan også tilbagekalde dit samtykke til, at der bliver behandlet oplysninger om dig.',
                    'Hvis de oplysninger, der behandles om dig, er forkerte har du ret til at de bliver rettet eller slettet. Henvendelse herom kan ske til: Info@aktiv-fysioterapi.dk',
                    'Hvis du vil klage over vores behandling af dine personoplysninger, har du også mulighed for at tage kontakt til Datatilsynet.',
                ],
            },
            {
                heading: 'Udgiver',
                content: [
                    'Aktiv Fysioterapi · CVR: 44186756 · Hobrovej 91B, 9530 Støvring · Telefon: 7741 4444 · Email: Info@aktiv-fysioterapi.dk',
                ],
            },
        ],
    },
    handelsbetingelser: {
        title: 'Handelsbetingelser',
        sections: [
            {
                heading: 'Handelsbetingelser for køb af ydelser og produkter hos Aktiv Fysioterapi',
                content: [],
            },
            {
                heading: 'Betaling',
                content: [
                    'Betaling for services og forløb skal ske i forbindelse med bestilling eller inden opstart af et forløb.',
                    'Alle behandlinger er forudbetalte.',
                    'Du kan betale med kontanter, mobilepay eller med bankoverførsel.',
                ],
            },
            {
                heading: 'Fortrydelsesret',
                content: [
                    'Kunden har ret til at fortryde købet af en service eller forløb inden for 7 dage efter betalingen er modtaget, hvis forløbet ikke er opstartet.',
                    'Hvis kunden ønsker at gøre brug af fortrydelsesretten, skal vedkommende give besked til Aktiv Fysioterapi inden for de 7 dage, og Aktiv Fysioterapi vil herefter refundere det fulde beløb inden for 14 dage, hvis der ikke er modtaget nogen service.',
                    'Købte, påbegyndte og afsluttede behandlingsforløb refunderes ikke.',
                    'Alle behandlingsforløb er personlige og kan ikke overdrages til andre.',
                ],
            },
            {
                heading: 'Ansvarsfraskrivelse',
                content: [
                    'Aktiv Fysioterapi er ikke ansvarlig for skader eller skadevirkninger, der opstår som følge af kundens deltagelse i behandlingsforløb. Kunden er selv ansvarlig for at informere Aktiv Fysioterapi om eventuelle skader eller sygdomme, der kan påvirke deltagelsen i et behandlingsforløb.',
                ],
            },
            {
                heading: 'Persondata',
                content: [
                    'Aktiv Fysioterapi vil behandle kundens persondata i overensstemmelse med den gældende lovgivning. Aktiv Fysioterapi vil kun bruge kundens persondata til at administrere og udføre behandlingen, medmindre kunden har givet samtykke til anden brug af persondata.',
                ],
            },
            {
                heading: 'Ændringer',
                content: [
                    'Aktiv Fysioterapi forbeholder sig retten til at ændre handelsbetingelserne uden forudgående varsel. Kunden vil blive informeret om eventuelle ændringer i handelsbetingelserne.',
                ],
            },
            {
                heading: 'Tvister',
                content: [
                    'Eventuelle tvister mellem kunden og Aktiv Fysioterapi vil blive afgjort i overensstemmelse med dansk rets almindelige regler om tvisteløsning.',
                ],
            },
        ],
    },
    afbudspolitik: {
        title: 'Afbudspolitik',
        sections: [
            {
                heading: 'Afbudspolitik hos Aktiv Fysioterapi',
                content: [
                    'Vi værdsætter din tid og ønsker at give den bedste service til vores klienter. Hvis du er forhindret i at møde op til din planlagte behandling, beder vi dig venligst om at give os besked så hurtigt som muligt.',
                ],
            },
            {
                heading: '24 timers aflysningsfrist',
                content: [
                    'Vi beder om, at alle aflysninger sker mindst 24 timer før din aftale, så vi kan tilbyde tiden til andre klienter.',
                    'Hvis du ikke giver besked i tide, efter ovenstående tidsfrist, opkræves der fuld betaling for din aftale.',
                ],
            },
            {
                heading: 'Afbud i weekenden',
                content: [
                    'Ved afbud i weekenden, send blot en mail eller SMS til den terapeut du har en aftale med. Ellers sendes en besked via kontaktformularen på vores hjemmeside.',
                ],
            },
        ],
    },
    medlemsbetingelser: {
        title: 'Medlemsbetingelser',
        sections: [
            {
                heading: 'Aktiv Fysioterapi ApS Medlemsbetingelser',
                content: [
                    'Følgende medlemsbetingelser er gældende for medlemskaber hos Aktiv Fysioterapi ApS, Hobrovej 91b, 9530 Støvring, CVR-nr. 44632896.',
                    'Aftaler om medlemskab indgået i Aktiv Fysioterapis klinik og via Aktiv Fysioterapis digitale kanaler indgås mellem en privatperson (Medlemmet) og Aktiv Fysioterapi.',
                ],
            },
            {
                heading: 'Vilkår for oprettelse af medlemskab',
                content: [
                    'Ved oprettelsen af medlemskabet skal Medlemmet oplyse sit navn, adresse, e-mail, dansk telefonnummer, reg. nr., konto-/kortnummer og CPR-nummer. Hvis kontakt- eller bankoplysninger efterfølgende ændres, skal dette straks meddeles.',
                ],
            },
            {
                heading: 'Medlemskabstyper',
                content: [
                    'Et medlemskab er personligt og må ikke benyttes af andre end Medlemmet. Medlemskabet giver adgang til at benytte det udstyr og de services, der er omfattet af medlemskabstypen.',
                    'Medlemskabet kan benyttes fra den aftalte startdato, som fremgår af købskvitteringen.',
                ],
            },
            {
                heading: 'Betaling',
                content: [
                    'Medlemmet skal betale månedligt for løbende medlemskab, et oprettelsesgebyr og eventuelle øvrige gebyrer og ydelser i henhold til gældende priser.',
                    'Den månedlige betaling forfalder løbende til det aftalte tidspunkt. Ved forudbetalt medlemskab betaler Medlemmet ved oprettelsen forud for hele perioden.',
                ],
            },
            {
                heading: 'Opsigelse',
                content: [
                    'Medlemmet kan til enhver tid opsige sit medlemskab med 1 måneds varsel til udgangen af en måned.',
                    'En opsigelse kan ske via henvendelse til Aktiv Fysioterapis kontakt mail: Info@aktiv-fysioterapi.dk',
                ],
            },
            {
                heading: 'Fortrydelsesret',
                content: [
                    'Ved køb af et medlemskab har Medlemmet 14 dages fortrydelsesret fra den dag, aftale om medlemskabet blev indgået.',
                    'For at gøre brug af fortrydelsesretten, skal Medlemmet inden udløbet af fortrydelsesfristen give Aktiv Fysioterapi en utvetydig erklæring herom via info@aktiv-fysioterapi.dk eller ved henvendelse i klinikken.',
                ],
            },
            {
                heading: 'Persondata',
                content: [
                    'Når et medlemskab oprettes, indsamler Aktiv Fysioterapi diverse personlige oplysninger om Medlemmet i overensstemmelse med den gældende persondatapolitik.',
                ],
            },
            {
                heading: 'Klageadgang',
                content: [
                    'Hvis Medlemmet vil klage over sit køb af medlemskab, kan vedkommende henvende sig til info@aktiv-fysioterapi.dk',
                    'Medlemmet har desuden mulighed for at klage via Nævnenes Hus, Mæglingsteamet for Forbrugerklager, Toldboden 2, 8800 Viborg.',
                ],
            },
            {
                heading: 'Kontaktinformation',
                content: [
                    'Aktiv Fysioterapi ApS · Hobrovej 91b · 9530 Støvring · CVR: 44632896 · Email: info@aktiv-fysioterapi.dk',
                    'Version 1.0 – 2024, gældende for medlemskaber købt fra og med d. 26. maj 2024.',
                ],
            },
        ],
    },
};

export function PolicyPage() {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? POLICIES[slug] : null;

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
        <div className="min-h-screen bg-white font-sans text-charcoal antialiased flex flex-col">
            <Navbar alwaysSolid />

            {/* Hero */}
            <section className="bg-[#224C4F] pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-white/[0.03] blur-sm" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
                    >
                        <ArrowLeft size={16} />
                        Tilbage til forsiden
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                        {data.title}
                    </motion.h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="space-y-10"
                    >
                        {data.sections.map((section, i) => (
                            <div key={i}>
                                {section.heading && (
                                    <h2
                                        className="text-xl md:text-2xl font-semibold mb-4 text-brand-primary"
                                        style={{ fontFamily: '"Playfair Display", serif' }}
                                    >
                                        {section.heading}
                                    </h2>
                                )}
                                <div className="space-y-3">
                                    {section.content.map((paragraph, j) => (
                                        <p key={j} className="text-charcoal/70 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Fixed Footer with Flex-Grow spacer above it if needed */}
            <div className="flex-grow" />

            {/* Footer */}
            <footer className="bg-[#224C4F] py-12 mt-auto">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <Link to="/" className="text-white/50 text-sm hover:text-white transition-colors">
                        ← Tilbage til forsiden
                    </Link>
                    <p className="text-white/30 text-sm">© 2026 Aktiv Fysioterapi. Alle rettigheder forbeholdes.</p>
                </div>
            </footer>
        </div>
    );
}

