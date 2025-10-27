<!-- /src/routes/knowledge/contemporary/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Contemporary practice",
      subtitle: "Modern movements and emerging patterns of communizing",
      intro: "The commons are not relics of the past—they're being actively built, defended, and reimagined right now. From platform cooperatives to degrowth movements, from solidarity economies to community wealth building, these resources document the cutting edge of contemporary communizing.",
      backToKnowledge: "Back to knowledge commons",
      essential: "Essential contemporary resources",
      additional: "Additional resources",
      showMore: "Show more",
      showLess: "Show less",
      difficulty: {
        beginner: "Beginner-friendly",
        intermediate: "Intermediate",
        advanced: "Advanced"
      },
      type: {
        book: "Book",
        article: "Article",
        video: "Video",
        podcast: "Podcast",
        website: "Website",
        paper: "Academic paper"
      },
      openAccess: "Open access",
      external: "External link"
    },
    sv: {
      title: "Samtida praktik",
      subtitle: "Moderna rörelser och framväxande mönster av kommunisering",
      intro: "Allmänningar är inte reliker från det förflutna—de byggs aktivt, försvaras och återuppfinns just nu. Från plattformskooperativ till tillväxtkritiska rörelser, från solidaritetsekonomi till gemenskapsvälfärdsbyggande, dessa resurser dokumenterar den skärande eggen av samtida kommunisering.",
      backToKnowledge: "Tillbaka till kunskapsallmänningen",
      essential: "Viktiga samtida resurser",
      additional: "Ytterligare resurser",
      showMore: "Visa mer",
      showLess: "Visa mindre",
      difficulty: {
        beginner: "Nybörjarvänlig",
        intermediate: "Mellan",
        advanced: "Avancerad"
      },
      type: {
        book: "Bok",
        article: "Artikel",
        video: "Video",
        podcast: "Podcast",
        website: "Webbplats",
        paper: "Akademisk artikel"
      },
      openAccess: "Öppen tillgång",
      external: "Extern länk"
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);
  
  // Essential resources
  const essentialResources = [
    {
      title: "Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist",
      author: "Kate Raworth",
      year: 2017,
      type: "book",
      difficulty: "beginner",
      description: {
        en: "Revolutionary economic framework proposing we operate within planetary boundaries (ecological ceiling) while meeting human needs (social foundation). The 'doughnut' is the safe and just space for humanity. Challenges GDP growth obsession and proposes commons-based alternatives.",
        sv: "Revolutionerande ekonomiskt ramverk som föreslår att vi verkar inom planetära gränser (ekologiskt tak) samtidigt som vi möter mänskliga behov (social grund). 'Munkringen' är det säkra och rättvisa utrymmet för mänskligheten. Utmanar BNP-tillväxtbesattheten och föreslår allmänningsbaserade alternativ."
      },
      whyItMatters: {
        en: "Provides accessible framework for reimagining economics around wellbeing and planetary health rather than endless growth. Widely adopted by cities and movements globally.",
        sv: "Ger tillgängligt ramverk för att återuppfinna ekonomi kring välbefinnande och planetär hälsa snarare än oändlig tillväxt. Allmänt antagen av städer och rörelser globalt."
      },
      link: "https://www.chelseagreen.com/product/doughnut-economics/",
      openAccess: false
    },
    {
      title: "Ours to Hack and to Own: The Rise of Platform Cooperativism",
      author: "Trebor Scholz & Nathan Schneider (eds)",
      year: 2016,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Foundational text on platform cooperativism—worker-owned alternatives to Uber, Airbnb, and other extractive platforms. Shows how digital technology can serve commons rather than venture capital. Case studies, theory, and practical guidance.",
        sv: "Grundläggande text om plattformskooperativism—arbetarägda alternativ till Uber, Airbnb och andra extraktiva plattformar. Visar hur digital teknologi kan tjäna allmänningar snarare än riskkapital. Fallstudier, teori och praktisk vägledning."
      },
      whyItMatters: {
        en: "Demonstrates that the 'sharing economy' can actually share ownership and governance, not just precarious gigs.",
        sv: "Visar att 'delningsekonomin' faktiskt kan dela ägande och styrning, inte bara osäkra gig-jobb."
      },
      link: "https://www.orbooks.com/catalog/ours-to-hack-and-to-own/",
      openAccess: false
    },
    {
      title: "Degrowth: A Vocabulary for a New Era",
      author: "Giacomo D'Alisa, Federico Demaria, Giorgos Kallis (eds)",
      year: 2014,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Comprehensive introduction to degrowth—the proposal to deliberately shrink economies to sustainable levels while improving wellbeing. 50+ essays defining key concepts. Shows why endless growth is impossible and undesirable, and how commons offer alternatives.",
        sv: "Omfattande introduktion till tillväxtkritik—förslaget att medvetet krympa ekonomier till hållbara nivåer samtidigt som välbefinnandet förbättras. 50+ essäer som definierar nyckelbegrepp. Visar varför oändlig tillväxt är omöjlig och oönskad, och hur allmänningar erbjuder alternativ."
      },
      whyItMatters: {
        en: "Central to understanding why ecological sustainability requires not just green growth but fundamental economic transformation toward commons.",
        sv: "Central för att förstå varför ekologisk hållbarhet kräver inte bara grön tillväxt utan fundamental ekonomisk transformation mot allmänningar."
      },
      link: "https://www.routledge.com/Degrowth-A-Vocabulary-for-a-New-Era/DAlisa-Demaria-Kallis/p/book/9781138000773",
      openAccess: false
    },
    {
      title: "Community Wealth Building: A New Approach to Local Economic Development",
      author: "Ted Howard & The Democracy Collaborative",
      year: 2020,
      type: "website",
      difficulty: "beginner",
      description: {
        en: "Practical framework for building local, inclusive economies through community ownership. Focuses on anchor institutions, worker cooperatives, community land trusts, and local procurement. Cleveland Model as primary example. Extensive free resources and toolkits.",
        sv: "Praktiskt ramverk för att bygga lokala, inkluderande ekonomier genom gemenskapsägande. Fokuserar på ankarinstitutioner, arbetarkooperativ, gemenskapsmarkstiftelser och lokal upphandling. Cleveland-modellen som huvudexempel. Omfattande fria resurser och verktygslådor."
      },
      whyItMatters: {
        en: "Shows how cities and regions can build wealth that stays local rather than extracting to distant shareholders. Proven model being replicated globally.",
        sv: "Visar hur städer och regioner kan bygga välstånd som stannar lokalt snarare än att extrahera till avlägsna aktieägare. Beprövad modell som replikeras globalt."
      },
      link: "https://democracycollaborative.org/community-wealth-building",
      openAccess: true
    },
    {
      title: "The Future We Choose: Surviving the Climate Crisis",
      author: "Christiana Figueres & Tom Rivett-Carnac",
      year: 2020,
      type: "book",
      difficulty: "beginner",
      description: {
        en: "By architects of the Paris Climate Agreement—practical vision for climate action emphasizing collective action, systems thinking, and regenerative economies. Accessible and hopeful while being realistic about scale of transformation needed.",
        sv: "Av arkitekterna bakom Parisavtalet—praktisk vision för klimatåtgärder som betonar kollektiv handling, systemtänkande och regenerativa ekonomier. Tillgänglig och hoppfull samtidigt som den är realistisk om omfattningen av transformation som behövs."
      },
      whyItMatters: {
        en: "Connects climate action to commons thinking—showing that individual consumer choices aren't enough, we need collective transformation.",
        sv: "Kopplar klimatåtgärder till allmänningstänkande—visar att individuella konsumentval inte räcker, vi behöver kollektiv transformation."
      },
      link: "https://www.penguinrandomhouse.com/books/623830/the-future-we-choose-by-christiana-figueres-and-tom-rivett-carnac/",
      openAccess: false
    }
  ];
  
  // Additional resources
  const additionalResources = [
    {
      title: "The Democracy Collaborative - Resources",
      author: "Democracy Collaborative",
      year: 2024,
      type: "website",
      difficulty: "beginner",
      description: {
        en: "Extensive free resources on community wealth building, worker cooperatives, democratic ownership. Toolkits, case studies, policy guides.",
        sv: "Omfattande fria resurser om gemenskapsvälfärdsbyggande, arbetarkooperativ, demokratiskt ägande. Verktygslådor, fallstudier, policyguider."
      },
      link: "https://democracycollaborative.org/learn",
      openAccess: true
    },
    {
      title: "Platform Cooperativism Consortium",
      author: "New School",
      year: 2024,
      type: "website",
      difficulty: "beginner",
      description: {
        en: "Hub for platform co-op movement—research, training, networking. Free resources on starting platform cooperatives.",
        sv: "Hubb för plattformskoop-rörelsen—forskning, utbildning, nätverkande. Fria resurser om att starta plattformskooperativ."
      },
      link: "https://platform.coop/",
      openAccess: true
    },
    {
      title: "Less Is More: How Degrowth Will Save the World",
      author: "Jason Hickel",
      year: 2020,
      type: "book",
      difficulty: "beginner",
      description: {
        en: "Accessible introduction to degrowth showing why endless growth destroys the planet and how we can thrive within limits through commons.",
        sv: "Tillgänglig introduktion till tillväxtkritik som visar varför oändlig tillväxt förstör planeten och hur vi kan blomstra inom gränser genom allmänningar."
      },
      link: "https://www.penguin.co.uk/books/317860/less-is-more-by-hickel-jason/9781786091215",
      openAccess: false
    },
    {
      title: "Building the Cooperative Commonwealth",
      author: "Jessica Gordon Nembhard",
      year: 2014,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "History and contemporary practice of African American cooperatives—showing how Black communities have used cooperative economics for liberation.",
        sv: "Historia och samtida praktik av afroamerikanska kooperativ—visar hur svarta gemenskaper har använt kooperativ ekonomi för frigörelse."
      },
      link: "https://www.pennpress.org/9780271061696/collective-courage/",
      openAccess: false
    },
    {
      title: "The Participatory Budgeting Project",
      author: "PB Project",
      year: 2024,
      type: "website",
      difficulty: "beginner",
      description: {
        en: "Resources on participatory budgeting—giving communities direct control over public spending. How-to guides, case studies, advocacy tools.",
        sv: "Resurser om deltagandebudgetering—ge gemenskaper direkt kontroll över offentliga utgifter. Hur-man-gör-guider, fallstudier, påverkansverktyg."
      },
      link: "https://www.participatorybudgeting.org/",
      openAccess: true
    },
    {
      title: "Pluriverse: A Post-Development Dictionary",
      author: "Ashish Kothari et al (eds)",
      year: 2019,
      type: "book",
      difficulty: "advanced",
      description: {
        en: "Global perspectives on alternatives to development—Buen Vivir, Ubuntu, Swaraj, and more. Shows diverse worldviews that center commons and relationality.",
        sv: "Globala perspektiv på alternativ till utveckling—Buen Vivir, Ubuntu, Swaraj och mer. Visar olika världsbilder som centrerar allmänningar och relationalitet."
      },
      link: "https://cup.columbia.edu/book/pluriverse/9788193732984",
      openAccess: false
    },
    {
      title: "Transition Network Resources",
      author: "Transition Network",
      year: 2024,
      type: "website",
      difficulty: "beginner",
      description: {
        en: "Guides for starting Transition initiatives—community resilience, local food, renewable energy. Free downloadable handbooks.",
        sv: "Guider för att starta omställningsinitiativ—gemenskapsmotståndskraft, lokal mat, förnybar energi. Gratis nedladdningsbara handböcker."
      },
      link: "https://transitionnetwork.org/resources/",
      openAccess: true
    },
    {
      title: "The New Economy Coalition",
      author: "New Economy Coalition",
      year: 2024,
      type: "website",
      difficulty: "beginner",
      description: {
        en: "Network of organizations building new economy—cooperatives, local currencies, community ownership. Resources and case studies.",
        sv: "Nätverk av organisationer som bygger ny ekonomi—kooperativ, lokala valutor, gemenskapsägande. Resurser och fallstudier."
      },
      link: "https://neweconomy.net/",
      openAccess: true
    },
    {
      title: "Solidarity Economy: Building Alternatives for People and Planet",
      author: "Emily Kawano, Tom Masterson, Jonathan Teller-Elsberg (eds)",
      year: 2010,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Papers on solidarity economy movements worldwide—worker cooperatives, community currencies, participatory budgeting, commons.",
        sv: "Artiklar om solidaritetsekonomirörelser världen över—arbetarkooperativ, gemenskapsvalutor, deltagandebudgetering, allmänningar."
      },
      link: "https://www.centerforsolidarityeconomy.org/solidarity-economy-building-alternatives/",
      openAccess: false
    },
    {
      title: "The Case for the Green New Deal",
      author: "Ann Pettifor",
      year: 2019,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Economic case for massive public investment in green transition. Shows how we can afford it and why commons approach is necessary.",
        sv: "Ekonomiskt argument för massiva offentliga investeringar i grön omställning. Visar hur vi har råd med det och varför allmänningsansats är nödvändig."
      },
      link: "https://www.versobooks.com/products/202-the-case-for-the-green-new-deal",
      openAccess: false
    },
    {
      title: "The Democracy at Work Institute - Resources",
      author: "DAWI",
      year: 2024,
      type: "website",
      difficulty: "beginner",
      description: {
        en: "Practical resources for starting and running worker cooperatives in the US. Legal guides, business planning, governance templates.",
        sv: "Praktiska resurser för att starta och driva arbetarkooperativ i USA. Juridiska guider, affärsplanering, styrningsmallar."
      },
      link: "https://institute.coop/resources",
      openAccess: true
    },
    {
      title: "Mutual Aid: Building Solidarity During This Crisis (and the Next)",
      author: "Dean Spade",
      year: 2020,
      type: "book",
      difficulty: "beginner",
      description: {
        en: "Practical guide to organizing mutual aid networks. Based on experience during COVID-19 and historical mutual aid movements.",
        sv: "Praktisk guide för att organisera ömsesidiga hjälpnätverk. Baserad på erfarenhet under COVID-19 och historiska ömsesidiga hjälprörelser."
      },
      link: "https://www.versobooks.com/products/2791-mutual-aid",
      openAccess: false
    },
    {
      title: "The Preston Model",
      author: "CLES (Centre for Local Economic Strategies)",
      year: 2024,
      type: "website",
      difficulty: "intermediate",
      description: {
        en: "Case study and resources on Preston, UK's community wealth building model. Became international reference for local economic democracy.",
        sv: "Fallstudie och resurser om Preston, Storbritanniens gemenskapsvälfärdsbyggnadsmodell. Blev internationell referens för lokal ekonomisk demokrati."
      },
      link: "https://cles.org.uk/community-wealth-building/the-preston-model/",
      openAccess: true
    }
  ];
  
  let showAdditional = $state(false);
  
  function getDifficultyColor(difficulty: string): string {
    const colors = {
      beginner: 'bg-moss-100 text-moss-800 border-moss-300',
      intermediate: 'bg-earth-100 text-earth-800 border-earth-300',
      advanced: 'bg-clay-100 text-clay-800 border-clay-300'
    };
    return colors[difficulty] || colors.intermediate;
  }
  
  function getTypeColor(type: string): string {
    return 'bg-clay-100 text-clay-700 border-clay-300';
  }
</script>

{#key $language}
<SEO
  title={t.title}
  description={t.subtitle}
  keywords="platform cooperativism, degrowth, doughnut economics, community wealth building, solidarity economy, transition towns, participatory budgeting"
/>

<div class="min-h-screen" in:fade>
  <!-- Breadcrumb -->
  <nav class="max-w-6xl mx-auto px-4 pt-8 pb-4 text-sm">
    <ol class="flex items-center gap-2 text-earth-600">
      <li>
        <a href="{base}/knowledge" class="hover:text-moss-600 transition-colors">
          {t.backToKnowledge}
        </a>
      </li>
      <li class="text-earth-400">/</li>
      <li class="text-earth-900">{t.title}</li>
    </ol>
  </nav>

  <div class="max-w-6xl mx-auto px-4 py-12">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {t.title}
      </h1>
      <p class="text-xl text-earth-600 mb-6">
        {t.subtitle}
      </p>
      <p class="text-earth-700 leading-relaxed max-w-3xl">
        {t.intro}
      </p>
    </div>

    <!-- Essential Resources -->
    <section class="mb-12">
      <h2 class="text-2xl font-serif text-earth-900 mb-6 border-b-2 border-clay-300 pb-3">
        {t.essential}
      </h2>
      
      <div class="space-y-6">
        {#each essentialResources as resource}
          <article class="bg-white rounded-xl p-6 border-2 border-clay-200 hover:border-clay-400 transition-all">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 text-xs rounded-full border {getTypeColor(resource.type)}">
                {t.type[resource.type]}
              </span>
              <span class="px-2 py-1 text-xs rounded-full border {getDifficultyColor(resource.difficulty)}">
                {t.difficulty[resource.difficulty]}
              </span>
              {#if resource.openAccess}
                <span class="px-2 py-1 text-xs rounded-full border bg-moss-100 text-moss-800 border-moss-300">
                  {t.openAccess}
                </span>
              {/if}
            </div>
            
            <!-- Title and Author -->
            <h3 class="text-2xl font-serif text-earth-900 mb-2">
              {resource.title}
            </h3>
            <p class="text-earth-600 mb-4">
              {resource.author} ({resource.year})
            </p>
            
            <!-- Description -->
            <p class="text-earth-700 mb-4 leading-relaxed">
              {resource.description[currentLanguage]}
            </p>
            
            <!-- Why it matters -->
            <div class="bg-clay-50 border-l-4 border-clay-500 p-4 mb-4">
              <p class="text-sm font-medium text-clay-800 mb-1">
                {currentLanguage === 'en' ? 'Why it matters:' : 'Varför det spelar roll:'}
              </p>
              <p class="text-sm text-earth-700">
                {resource.whyItMatters[currentLanguage]}
              </p>
            </div>
            
            <!-- Link -->
            <a 
              href={resource.link}
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 text-clay-600 hover:text-clay-800 font-medium"
            >
              <span>{currentLanguage === 'en' ? 'Learn more' : 'Läs mer'}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </article>
        {/each}
      </div>
    </section>

    <!-- Additional Resources (Expandable) -->
    <section class="mb-12">
      <div class="flex items-center justify-between mb-6 border-b-2 border-clay-300 pb-3">
        <h2 class="text-2xl font-serif text-earth-900">
          {t.additional}
        </h2>
        <button
          onclick={() => showAdditional = !showAdditional}
          class="flex items-center gap-2 px-4 py-2 text-clay-600 hover:text-clay-800 font-medium"
        >
          <span>{showAdditional ? t.showLess : t.showMore}</span>
          <svg 
            class="w-4 h-4 transition-transform {showAdditional ? 'rotate-180' : ''}"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      {#if showAdditional}
        <div class="space-y-4" transition:fade>
          {#each additionalResources as resource}
            <article class="bg-clay-50 rounded-lg p-5 border border-clay-200">
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-2 py-1 text-xs rounded-full border {getTypeColor(resource.type)}">
                  {t.type[resource.type]}
                </span>
                <span class="px-2 py-1 text-xs rounded-full border {getDifficultyColor(resource.difficulty)}">
                  {t.difficulty[resource.difficulty]}
                </span>
                {#if resource.openAccess}
                  <span class="px-2 py-1 text-xs rounded-full border bg-moss-100 text-moss-800 border-moss-300">
                    {t.openAccess}
                  </span>
                {/if}
              </div>
              
              <h3 class="text-lg font-semibold text-earth-900 mb-1">
                {resource.title}
              </h3>
              <p class="text-sm text-earth-600 mb-2">
                {resource.author} ({resource.year})
              </p>
              <p class="text-sm text-earth-700 mb-3">
                {resource.description[currentLanguage]}
              </p>
              
              <a 
                href={resource.link}
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1 text-sm text-clay-600 hover:text-clay-800 font-medium"
              >
                <span>{currentLanguage === 'en' ? 'View resource' : 'Visa resurs'}</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>
          {/each}
        </div>
      {/if}
    </section>

    <!-- Back link -->
    <div class="text-center pt-8 border-t border-earth-200">
      <a 
        href="{base}/knowledge"
        class="inline-flex items-center gap-2 text-clay-600 hover:text-clay-800 font-medium"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>{t.backToKnowledge}</span>
      </a>
    </div>
  </div>
</div>
{/key}
