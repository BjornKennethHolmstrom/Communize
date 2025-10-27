<!-- /src/routes/knowledge/foundational/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Foundational theory",
      subtitle: "Core texts on the commons, gift economies, and collective governance",
      intro: "These foundational works provide the theoretical grounding for understanding communizing—from Elinor Ostrom's groundbreaking research on commons governance to David Graeber's anthropology of debt and gift.",
      backToKnowledge: "Back to knowledge commons",
      essential: "Essential readings",
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
      title: "Grundläggande teori",
      subtitle: "Kärntexter om allmänningar, gåvoekonomier och kollektiv styrning",
      intro: "Dessa grundläggande verk ger den teoretiska grunden för att förstå kommunisering—från Elinor Ostroms banbrytande forskning om allmänningsstyrning till David Graebers antropologi om skuld och gåva.",
      backToKnowledge: "Tillbaka till kunskapsallmänningen",
      essential: "Viktiga läsningar",
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
  
  // Essential resources (always shown)
  const essentialResources = [
    {
      title: "Governing the Commons",
      author: "Elinor Ostrom",
      year: 1990,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Nobel Prize-winning research demonstrating how communities successfully self-organize to manage shared resources—from Swiss alpine meadows to Japanese forests. Ostrom's eight design principles for sustainable commons governance remain foundational to the field.",
        sv: "Nobelprisvinnande forskning som visar hur gemenskaper framgångsrikt självorganiserar för att förvalta delade resurser—från schweiziska alpängar till japanska skogar. Ostroms åtta designprinciper för hållbar allmänningsstyrning förblir grundläggande för fältet."
      },
      whyItMatters: {
        en: "Demolished the 'tragedy of the commons' myth by proving communities can manage resources sustainably without privatization or state control.",
        sv: "Förkrossade 'allmänningarnas tragedi'-myten genom att bevisa att gemenskaper kan förvalta resurser hållbart utan privatisering eller statlig kontroll."
      },
      link: "https://www.cambridge.org/core/books/governing-the-commons/A8BB63BC4A1433A50A3FB92EDBBB97D5",
      openAccess: false
    },
    {
      title: "Debt: The First 5,000 Years",
      author: "David Graeber",
      year: 2011,
      type: "book",
      difficulty: "beginner",
      description: {
        en: "A revolutionary anthropological history showing that gift economies, mutual aid, and communal provisioning predate—and persist alongside—market exchange. Challenges core assumptions about economics and human nature.",
        sv: "En revolutionerande antropologisk historia som visar att gåvoekonomier, ömsesidig hjälp och gemensam försörjning föregår—och består vid sidan av—marknadsutbyte. Utmanar grundläggande antaganden om ekonomi och mänsklig natur."
      },
      whyItMatters: {
        en: "Reveals that cooperation and gift-giving, not barter and markets, are the true basis of human economic life.",
        sv: "Avslöjar att samarbete och gåvogivande, inte byteshandel och marknader, är den sanna grunden för mänskligt ekonomiskt liv."
      },
      link: "https://www.mhpbooks.com/books/debt/",
      openAccess: false
    },
    {
      title: "Think Like a Commoner",
      author: "David Bollier",
      year: 2014,
      type: "book",
      difficulty: "beginner",
      description: {
        en: "An accessible introduction to commons thinking—what they are, how they work, and why they matter. Covers digital commons, urban commons, natural resource commons, and more through engaging stories and clear analysis.",
        sv: "En tillgänglig introduktion till allmänningstänkande—vad de är, hur de fungerar och varför de spelar roll. Täcker digitala allmänningar, urbana allmänningar, naturresursallmänningar och mer genom engagerande berättelser och tydlig analys."
      },
      whyItMatters: {
        en: "The best entry point for understanding contemporary commons movements and their political significance.",
        sv: "Den bästa startpunkten för att förstå samtida allmänningsrörelser och deras politiska betydelse."
      },
      link: "https://www.newsociety.com/books/t/think-like-a-commoner",
      openAccess: false
    },
    {
      title: "The Wealth of Networks",
      author: "Yochai Benkler",
      year: 2006,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Seminal analysis of how digital networks enable 'commons-based peer production'—collaborative creation outside market and hierarchical systems. Wikipedia, FLOSS, and Creative Commons as examples of radically new modes of production.",
        sv: "Banbrytande analys av hur digitala nätverk möjliggör 'allmänningsbaserad jämlik produktion'—samarbetsskapande utanför marknads- och hierarkiska system. Wikipedia, FLOSS och Creative Commons som exempel på radikalt nya produktionssätt."
      },
      whyItMatters: {
        en: "Provides theoretical framework for understanding how commons work in the digital age.",
        sv: "Ger teoretiskt ramverk för att förstå hur allmänningar fungerar i den digitala tidsåldern."
      },
      link: "https://www.benkler.org/wealth_of_networks/",
      openAccess: true
    },
    {
      title: "Caliban and the Witch",
      author: "Silvia Federici",
      year: 2004,
      type: "book",
      difficulty: "advanced",
      description: {
        en: "Feminist analysis of how the transition to capitalism required the destruction of commons and the subordination of women. Links enclosure of land with enclosure of the body—showing capitalism's origins in primitive accumulation and gendered violence.",
        sv: "Feministisk analys av hur övergången till kapitalism krävde förstörelsen av allmänningar och underordnandet av kvinnor. Kopplar inhägnad av mark med inhägnad av kroppen—visar kapitalismens ursprung i primitiv ackumulation och könsbaserat våld."
      },
      whyItMatters: {
        en: "Essential for understanding the gendered dimensions of enclosure and why feminist analysis is central to commons politics.",
        sv: "Nödvändig för att förstå de könsbaserade dimensionerna av inhägnad och varför feministisk analys är central för allmänningspolitik."
      },
      link: "https://www.autonomedia.org/caliban",
      openAccess: false
    }
  ];
  
  // Additional resources (initially hidden, expandable)
  const additionalResources = [
    {
      title: "Free, Fair and Alive: The Insurgent Power of the Commons",
      author: "David Bollier & Silke Helfrich",
      year: 2019,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Proposes a new language and framework for the commons—moving beyond Ostrom's institutional analysis to emphasize aliveness, relationality, and commoning as verb rather than noun.",
        sv: "Föreslår ett nytt språk och ramverk för allmänningar—går bortom Ostroms institutionella analys för att betona livskraft, relationalitet och kommunisering som verb snarare än substantiv."
      },
      link: "https://freefairandalive.org/",
      openAccess: true
    },
    {
      title: "The Gift: How the Creative Spirit Transforms the World",
      author: "Lewis Hyde",
      year: 1983,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Explores gift economies and their logic through art, literature, and anthropology. Shows how creative work thrives in gift relations rather than market exchange.",
        sv: "Utforskar gåvoekonomier och deras logik genom konst, litteratur och antropologi. Visar hur kreativt arbete blomstrar i gåvorelationer snarare än marknadsutbyte."
      },
      link: "https://www.penguinrandomhouse.com/books/294983/the-gift-by-lewis-hyde/",
      openAccess: false
    },
    {
      title: "Patterns of Commoning",
      author: "David Bollier & Silke Helfrich (eds)",
      year: 2015,
      type: "book",
      difficulty: "beginner",
      description: {
        en: "Collection of essays on commoning practices worldwide—from urban commons to digital commons to cultural commons. Practical and inspiring.",
        sv: "Samling av essäer om kommuniseringspraktiker världen över—från urbana allmänningar till digitala allmänningar till kulturella allmänningar. Praktisk och inspirerande."
      },
      link: "http://patternsofcommoning.org/",
      openAccess: true
    },
    {
      title: "The Commons: A Historical and Legal Perspective",
      author: "Susan Jane Buck Cox",
      year: 1985,
      type: "paper",
      difficulty: "advanced",
      description: {
        en: "Early scholarly work examining historical commons management and challenging Garrett Hardin's 'tragedy of the commons' thesis.",
        sv: "Tidigt akademiskt arbete som undersöker historisk allmänningsförvaltning och utmanar Garrett Hardins 'allmänningarnas tragedi'-tes."
      },
      link: "https://academic.oup.com/jla/article-abstract/10/1/95/1041965",
      openAccess: false
    },
    {
      title: "Commons-Based Peer Production and Virtue",
      author: "Yochai Benkler",
      year: 2016,
      type: "paper",
      difficulty: "advanced",
      description: {
        en: "Examines how peer production systems cultivate certain virtues and ethical practices—cooperation, transparency, meritocracy.",
        sv: "Undersöker hur jämlik produktionssystem kultiverar vissa dygder och etiska praktiker—samarbete, transparens, meritokrati."
      },
      link: "https://nissenbaum.tech.cornell.edu/papers/Virtue.pdf",
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
    return 'bg-earth-100 text-earth-700 border-earth-300';
  }
</script>

{#key $language}
<SEO
  title={t.title}
  description={t.subtitle}
  keywords="commons theory, Elinor Ostrom, David Graeber, gift economy, collective governance, commons governance"
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
      <h2 class="text-2xl font-serif text-earth-900 mb-6 border-b-2 border-moss-300 pb-3">
        {t.essential}
      </h2>
      
      <div class="space-y-6">
        {#each essentialResources as resource}
          <article class="bg-white rounded-xl p-6 border-2 border-earth-200 hover:border-moss-300 transition-all">
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
            <div class="bg-moss-50 border-l-4 border-moss-400 p-4 mb-4">
              <p class="text-sm font-medium text-moss-800 mb-1">
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
              class="inline-flex items-center gap-2 text-moss-600 hover:text-moss-700 font-medium"
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
      <div class="flex items-center justify-between mb-6 border-b-2 border-earth-300 pb-3">
        <h2 class="text-2xl font-serif text-earth-900">
          {t.additional}
        </h2>
        <button
          onclick={() => showAdditional = !showAdditional}
          class="flex items-center gap-2 px-4 py-2 text-moss-600 hover:text-moss-700 font-medium"
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
            <article class="bg-earth-50 rounded-lg p-5 border border-earth-200">
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
                class="inline-flex items-center gap-1 text-sm text-moss-600 hover:text-moss-700 font-medium"
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
        class="inline-flex items-center gap-2 text-moss-600 hover:text-moss-700 font-medium"
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
