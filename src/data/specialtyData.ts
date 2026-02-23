export interface SpecialtyContent {
    title: string;
    titleHighlight?: string;
    titleBreakBeforeHighlight?: boolean;
    image: string;
    description: string;
    hvemViSer: string[];
    specialist: {
        name: string;
        title: string;
        phone: string;
        email: string;
    };
}

export const SPECIALTY_DATA: Record<string, SpecialtyContent> = {
    skulder: {
        title: 'Skulder- og nakkesmerter',
        titleHighlight: 'nakkesmerter',
        image: '/Skulder.jpeg',
        description: `At have ondt i skulderen eller nakken, kan skyldes mange faktorer. Overbelastning, akutte skader, mange års ensidig slid, og mange andre faktorer. Skulderen er kroppens mest komplicerede led, og det skyldes bl.a. at skulderen skifter udgangsstilling, afhængig af skulderbladets position. Nakken er ligesom skulderen meget kompliceret og er utrolig essentiel for kroppens funktion og vores hverdag. 
    Risikoen ved mange skulder og nakkesmerter er, at smerterne og bevægeligheden ikke altid bliver normal igen ved ro og hvile.`,
        hvemViSer: [
            'Sportsudøvere (elite & amatør) ofte med armene over hovedet (svømning, badminton, paddeltennis, golf, volleyball)',
            'Kontormedarbejdere med meget stillesiddende arbejde eller meget bilkørsel',
            'Håndværkere med mange arbejdsopgaver over hovedhøjde',
            'Folk med mange års slid i skulderen og nakken, som kæmper med mobilitet og bevægelighed'
        ],
        specialist: {
            name: 'Anders Ranum',
            title: 'Fysioterapeut og klinikejer',
            phone: '22 71 44 45',
            email: 'Anders@aktiv-fysioterapi.dk'
        }
    },
    knae: {
        title: 'Knæ- og hoftesmerter',
        titleHighlight: 'hoftesmerter',
        image: '/Knæ.jpeg',
        description: `Når vi har ondt i knæet og hoften, så skal vi ALTID se på helheden i hele den nederste del af kroppen. Knæet og hoften er nemlig nogle af de mest belastede led i kroppen. Smerterne kan ofte stamme fra problemer andre steder, f.eks. en ustabil ankel eller lænd. Derfor er en dybdegående undersøgelse ekstremt vigtig. Skader på korsbånd, ledbånd, menisk eller aldersrelaterede vævsforandringer kan give store smerter og forandre bevægemønstre.`,
        hvemViSer: [
            'Sportsudøvere (elite & amatør) ofte med stor knæbelastning (løb, fodbold, håndbold, volleyball)',
            'Gamle knæ- og hofteskader, som er blevet værre over tid',
            'Folk med arbejde, hvor de går og står meget i løbet af dagen'
        ],
        specialist: {
            name: 'Julie Sandager',
            title: 'Knæ og hoftefysioterapeut',
            phone: '22 71 07 20',
            email: 'Julie@aktiv-fysioterapi.dk'
        }
    },
    ryg: {
        title: 'Rygproblemer',
        titleHighlight: 'problemer',
        titleBreakBeforeHighlight: true,
        image: '/Ryg.jpeg',
        description: `Når vi behandler ryggen, er det vigtigt at afdække, om der er tale om nervesmerter eller mekaniske smerter såsom slid eller overbelastning. Smerter i ryggen kan stamme fra andre steder, f.eks. hoften. Ro og hvile er sjældent løsningen på rygproblemer, hvilket er grunden til, at vi altid foretager en dybdegående undersøgelse.`,
        hvemViSer: [
            'Kontormedarbejdere med stillesiddende arbejde',
            'Håndværkere i akavede arbejdsstillinger',
            'Forældre eller bedsteforældre, der ikke kan lege på gulvet pga. smerter'
        ],
        specialist: {
            name: 'Mathias Amby',
            title: 'Ryg-fysioterapeut og klinikejer',
            phone: '51 91 83 37',
            email: 'Mathias@aktiv-fysioterapi.dk'
        }
    },
    soevn: {
        title: 'Søvnproblemer',
        titleHighlight: 'problemer',
        titleBreakBeforeHighlight: true,
        image: '/Søvn.jpeg',
        description: `Vi specialiserer os i at forbedre din søvnkvalitet. Kvalitetssøvn spiller en afgørende rolle for din generelle sundhed. Vi adresserer både fysiske og psykologiske faktorer gennem en 360 graders vurdering. Vi identificerer årsagen til dine søvnproblemer og tilbyder personlige behandlingsplaner.`,
        hvemViSer: [
            'Travle professionelle, der har svært ved at slappe af',
            'Forældre, der håndterer søvnforstyrrelser',
            'Seniorer, der søger fornyet søvnkvalitet'
        ],
        specialist: {
            name: 'Mathias Amby',
            title: 'Søvnvejleder og klinikejer',
            phone: '51 91 83 37',
            email: 'Mathias@aktiv-fysioterapi.dk'
        }
    },
    golf: {
        title: 'Golf Fysioterapi',
        titleHighlight: 'Fysioterapi',
        image: '/Golf.jpeg',
        description: `Optimer dit golfsving og forbedr din præstation! Vi er en del af GolfKlinik Danmark og specialiserer os i at forbedre golfspilleres kropsbetingelser. Vi identificerer begrænsninger via en Golf Body Test og fokuserer på de områder, der er vigtige for dit sving. Dette reducerer også risikoen for skader markant.`,
        hvemViSer: [
            'Erfarne amatørspillere, der ønsker at slå længere og mere præcist',
            'Nybegyndere, der vil undgå skader fra starten',
            'Spillere, der mærker aldersrelaterede begrænsninger i mobiliteten'
        ],
        specialist: {
            name: 'Anders Ranum & Mathias Amby',
            title: 'Certificerede Golf-fysioterapeuter',
            phone: '77 41 44 44',
            email: 'info@aktiv-fysioterapi.dk'
        }
    },
    triatlon: {
        title: 'Løb og Triatlon',
        titleHighlight: 'Triatlon',
        image: '/Triatlon.jpeg',
        description: `I samarbejde med Zenz8 tilbyder vi specialiseret forkortet hjælp til triatleter og løbere. Vi hjælper med træningsprogrammering, planlægning og behandling af skader. Vi optimerer din præstation, uanset om du vil gennemføre din første 5-km eller konkurrere på eliteplan.`,
        hvemViSer: [
            'Triatleter på alle niveauer',
            'Løbere, der kæmper med overbelastningsskader',
            'Nybegyndere, der har brug for en struktureret plan'
        ],
        specialist: {
            name: 'Benjamin Mark Andersen & Martine Hoaas',
            title: 'Pro-triatleter og specialister',
            phone: '28 49 09 94',
            email: 'Benjamin@aktiv-fysioterapi.dk'
        }
    }
};
