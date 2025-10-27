<!-- /src/routes/knowledge/thematic/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Thematic collections",
      subtitle: "Deep dives into governance, economics, feminism, ecology, and digital commons",
      intro: "Sometimes you need to go deep on a specific aspect of communizing. These thematic collections organize resources around key dimensions—from democratic governance methods to feminist economics, from ecological commons to digital sovereignty.",
      backToKnowledge: "Back to knowledge commons",
      themes: "Explore by theme",
      allResources: "All thematic resources",
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
      filterByTheme: "Filter by theme",
      allThemes: "All themes"
    },
    sv: {
      title: "Tematiska samlingar",
      subtitle: "Djupdykningar i styrning, ekonomi, feminism, ekologi och digitala allmänningar",
      intro: "Ibland behöver du gå djupt i en specifik aspekt av kommunisering. Dessa tematiska samlingar organiserar resurser kring nyckeldimensioner—från demokratiska styrningsmetoder till feministisk ekonomi, från ekologiska allmänningar till digital suveränitet.",
      backToKnowledge: "Tillbaka till kunskapsallmänningen",
      themes: "Utforska efter tema",
      allResources: "Alla tematiska resurser",
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
      filterByTheme: "Filtrera efter tema",
      allThemes: "Alla teman"
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);
  
  // Themes with colors
  const themes = {
    governance: {
      name: { en: 'Governance & decision-making', sv: 'Styrning & beslutsfattande' },
      color: 'amber',
      icon: 'scale'
    },
    economics: {
      name: { en: 'Economics & cooperative models', sv: 'Ekonomi & kooperativa modeller' },
      color: 'moss',
      icon: 'currency'
    },
    feminism: {
      name: { en: 'Feminism & care commons', sv: 'Feminism & omsorgsallmänningar' },
      color: 'rose',
      icon: 'heart'
    },
    ecology: {
      name: { en: 'Ecology & environmental commons', sv: 'Ekologi & miljöallmänningar' },
      color: 'emerald',
      icon: 'leaf'
    },
    digital: {
      name: { en: 'Digital commons & technology', sv: 'Digitala allmänningar & teknologi' },
      color: 'blue',
      icon: 'code'
    }
  };
  
  // All resources with theme tags
  const resources = [
    // Governance
    {
      title: "Rules for Radicals: A Pragmatic Primer for Realistic Radicals",
      author: "Saul Alinsky",
      year: 1971,
      type: "book",
      difficulty: "intermediate",
      theme: "governance",
      description: {
        en: "Classic organizing manual on building people power and democratic movements. Practical tactics for community organizing and collective action.",
        sv: "Klassisk organisationsmanual om att bygga folklig makt och demokratiska rörelser. Praktiska taktiker för gemenskapsorganisering och kollektiv handling."
      },
      link: "https://www.penguinrandomhouse.com/books/197365/rules-for-radicals-by-saul-d-alinsky/",
      openAccess: false
    },
    {
      title: "Consensus Decision Making",
      author: "Seeds for Change",
      year: 2024,
      type: "website",
      difficulty: "beginner",
      theme: "governance",
      description: {
        en: "Comprehensive free guides on consensus process, facilitation, and collective decision-making. Practical toolkits and facilitation guides.",
        sv: "Omfattande fria guider om konsensusprocess, facilitering och kollektivt beslutsfattande. Praktiska verktygslådor och faciliteringsguider."
      },
      link: "https://www.seedsforchange.org.uk/consensus",
      openAccess: true
    },
    {
      title: "Sociocracy: A Deeper Democracy",
      author: "John Buck & Sharon Villines",
      year: 2007,
      type: "book",
      difficulty: "intermediate",
      theme: "governance",
      description: {
        en: "Introduction to sociocracy—consent-based governance system with distributed authority. Used by cooperatives and organizations globally.",
        sv: "Introduktion till sociokrati—samtycksbaserat styrningssystem med distribuerad auktoritet. Används av kooperativ och organisationer globalt."
      },
      link: "https://www.sociocracy.info/",
      openAccess: false
    },
    {
      title: "Democracy Against Domination",
      author: "K. Sabeel Rahman",
      year: 2016,
      type: "book",
      difficulty: "advanced",
      theme: "governance",
      description: {
        en: "Political theory arguing for structural economic democracy to prevent domination. Connects constitutional thinking to economic governance.",
        sv: "Politisk teori som argumenterar för strukturell ekonomisk demokrati för att förhindra dominans. Kopplar konstitutionellt tänkande till ekonomisk styrning."
      },
      link: "https://global.oup.com/academic/product/democracy-against-domination-9780190234508",
      openAccess: false
    },
    
    // Economics
    {
      title: "Capital in the Twenty-First Century",
      author: "Thomas Piketty",
      year: 2013,
      type: "book",
      difficulty: "advanced",
      theme: "economics",
      description: {
        en: "Empirical study showing capitalism naturally concentrates wealth. Makes case for progressive taxation and democratic control of capital.",
        sv: "Empirisk studie som visar att kapitalism naturligt koncentrerar välstånd. Argumenterar för progressiv beskattning och demokratisk kontroll av kapital."
      },
      link: "https://www.hup.harvard.edu/books/9780674979857",
      openAccess: false
    },
    {
      title: "The Cooperative Movement",
      author: "Co-operatives UK",
      year: 2024,
      type: "website",
      difficulty: "beginner",
      theme: "economics",
      description: {
        en: "Resources on starting and running cooperatives. Legal guides, governance templates, case studies. UK-focused but globally relevant.",
        sv: "Resurser om att starta och driva kooperativ. Juridiska guider, styrningsmallar, fallstudier. UK-fokuserad men globalt relevant."
      },
      link: "https://www.uk.coop/",
      openAccess: true
    },
    {
      title: "Economic Democracy: The Political Struggle of the Twenty-First Century",
      author: "J.W. Smith",
      year: 2005,
      type: "book",
      difficulty: "intermediate",
      theme: "economics",
      description: {
        en: "Comprehensive case for democratizing the economy. Analyzes how wealth concentration undermines political democracy.",
        sv: "Omfattande argument för att demokratisera ekonomin. Analyserar hur välståndskoncentration undergräver politisk demokrati."
      },
      link: "https://www.economicdemocracy.org/",
      openAccess: true
    },
    {
      title: "The Sharing Economy: The End of Employment and the Rise of Crowd-Based Capitalism",
      author: "Arun Sundararajan",
      year: 2016,
      type: "book",
      difficulty: "intermediate",
      theme: "economics",
      description: {
        en: "Analysis of platform economy—both its extractive corporate form and cooperative alternatives. Shows why ownership structure matters.",
        sv: "Analys av plattformsekonomi—både dess extraktiva företagsform och kooperativa alternativ. Visar varför ägandestruktur spelar roll."
      },
      link: "https://mitpress.mit.edu/9780262034579/",
      openAccess: false
    },
    
    // Feminism
    {
      title: "Revolution at Point Zero: Housework, Reproduction, and Feminist Struggle",
      author: "Silvia Federici",
      year: 2012,
      type: "book",
      difficulty: "intermediate",
      theme: "feminism",
      description: {
        en: "Essays on reproductive labor, care work, and the commons. Shows how capitalism depends on unwaged women's work and why commoning must be feminist.",
        sv: "Essäer om reproduktivt arbete, omsorgsarbete och allmänningar. Visar hur kapitalism beror på oavlönat kvinnoarbete och varför kommunisering måste vara feministisk."
      },
      link: "https://www.pmpress.org/index.php?l=product_detail&p=216",
      openAccess: false
    },
    {
      title: "Care Manifesto: The Politics of Interdependence",
      author: "The Care Collective",
      year: 2020,
      type: "book",
      difficulty: "beginner",
      theme: "feminism",
      description: {
        en: "Short manifesto arguing for care as central organizing principle. Proposes universal care systems as commons rather than commodities.",
        sv: "Kort manifest som argumenterar för omsorg som central organiseringsprincip. Föreslår universella omsorgssystem som allmänningar snarare än varor."
      },
      link: "https://www.versobooks.com/products/2709-the-care-manifesto",
      openAccess: false
    },
    {
      title: "The Dawn of Everything: A New History of Humanity",
      author: "David Graeber & David Wengrow",
      year: 2021,
      type: "book",
      difficulty: "intermediate",
      theme: "feminism",
      description: {
        en: "Challenges patriarchal narratives of human history. Shows diverse forms of social organization including matrilineal commons and gender-egalitarian societies.",
        sv: "Utmanar patriarkala berättelser om mänsklig historia. Visar olika former av social organisering inklusive matrilinjära allmänningar och köns-jämlika samhällen."
      },
      link: "https://us.macmillan.com/books/9780374157357/thedawnofeverything",
      openAccess: false
    },
    {
      title: "Feminist Economics",
      author: "International Association for Feminist Economics",
      year: 2024,
      type: "website",
      difficulty: "advanced",
      theme: "feminism",
      description: {
        en: "Academic organization publishing research on gender and economics. Journal articles, working papers, resources on care work and household labor.",
        sv: "Akademisk organisation som publicerar forskning om kön och ekonomi. Tidskriftsartiklar, arbetsdokument, resurser om omsorgsarbete och hushållsarbete."
      },
      link: "https://www.iaffe.org/",
      openAccess: true
    },
    
    // Ecology
    {
      title: "The Commons: New Perspectives on the Practice of Commons",
      author: "Fabienne Barrière-O'Kane et al (eds)",
      year: 2021,
      type: "book",
      difficulty: "intermediate",
      theme: "ecology",
      description: {
        en: "Contemporary perspectives on ecological commons management. Urban commons, forest commons, water commons across diverse contexts.",
        sv: "Samtida perspektiv på ekologisk allmänningsförvaltning. Urbana allmänningar, skogsallmänningar, vattenallmänningar över olika kontexter."
      },
      link: "https://www.routledge.com/The-Commons/Barriere-OKane-Gerber-Bersier/p/book/9780367534233",
      openAccess: false
    },
    {
      title: "Half-Earth: Our Planet's Fight for Life",
      author: "E.O. Wilson",
      year: 2016,
      type: "book",
      difficulty: "beginner",
      theme: "ecology",
      description: {
        en: "Proposes setting aside half of Earth's surface as protected commons for biodiversity. Bold vision for planetary-scale ecological commoning.",
        sv: "Föreslår att avsätta hälften av jordens yta som skyddade allmänningar för biologisk mångfald. Djärv vision för planetär-skala ekologisk kommunisering."
      },
      link: "https://www.liveright.com/9781631492525/half-earth/",
      openAccess: false
    },
    {
      title: "The Water Commons",
      author: "The Commons",
      year: 2024,
      type: "website",
      difficulty: "beginner",
      theme: "ecology",
      description: {
        en: "Resources on water as commons. Case studies of community water management, indigenous water rights, water justice movements.",
        sv: "Resurser om vatten som allmänningar. Fallstudier av gemenskapsvattenförvaltning, ursprungsfolks vattenrättigheter, vattenrättvisrörelser."
      },
      link: "https://thecommonslibrary.org/",
      openAccess: true
    },
    {
      title: "The Mushroom at the End of the World",
      author: "Anna Lowenhaupt Tsing",
      year: 2015,
      type: "book",
      difficulty: "advanced",
      theme: "ecology",
      description: {
        en: "Anthropology of matsutake mushrooms showing interspecies commons, gift economies, and survival in capitalist ruins. Beautiful meditation on more-than-human worlds.",
        sv: "Antropologi om matsutake-svampar som visar interspecies-allmänningar, gåvoekonomier och överlevnad i kapitalistiska ruiner. Vacker meditation om mer-än-mänskliga världar."
      },
      link: "https://press.princeton.edu/books/paperback/9780691178325/the-mushroom-at-the-end-of-the-world",
      openAccess: false
    },
    
    // Digital
    {
      title: "Free Software, Free Society: Selected Essays of Richard M. Stallman",
      author: "Richard Stallman",
      year: 2015,
      type: "book",
      difficulty: "intermediate",
      theme: "digital",
      description: {
        en: "Foundational texts on free software philosophy. Why software freedom matters and how the GPL creates digital commons.",
        sv: "Grundläggande texter om fri programvarufilosofi. Varför programvarufrihet spelar roll och hur GPL skapar digitala allmänningar."
      },
      link: "https://www.gnu.org/philosophy/fsfs/rms-essays.pdf",
      openAccess: true
    },
    {
      title: "Radical Technologies: The Design of Everyday Life",
      author: "Adam Greenfield",
      year: 2017,
      type: "book",
      difficulty: "intermediate",
      theme: "digital",
      description: {
        en: "Critical examination of how technologies shape daily life. Analyzes smartphone apps, smart cities, cryptocurrencies—showing how they could serve commons or corporations.",
        sv: "Kritisk undersökning av hur teknologier formar dagligt liv. Analyserar smartphone-appar, smarta städer, kryptovalutor—visar hur de kunde tjäna allmänningar eller företag."
      },
      link: "https://www.versobooks.com/products/322-radical-technologies",
      openAccess: false
    },
    {
      title: "Platform Cooperativism: Challenging the Corporate Sharing Economy",
      author: "Trebor Scholz",
      year: 2016,
      type: "article",
      difficulty: "beginner",
      theme: "digital",
      description: {
        en: "Foundational essay on platform cooperativism. Accessible introduction to why we need democratic ownership of digital platforms.",
        sv: "Grundläggande essä om plattformskooperativism. Tillgänglig introduktion till varför vi behöver demokratiskt ägande av digitala plattformar."
      },
      link: "https://rosalux.nyc/wp-content/uploads/2020/11/RLS-NYC_platformcoop.pdf",
      openAccess: true
    },
    {
      title: "Protocol: How Control Exists After Decentralization",
      author: "Alexander Galloway",
      year: 2004,
      type: "book",
      difficulty: "advanced",
      theme: "digital",
      description: {
        en: "Theoretical analysis of internet protocols as forms of control. Essential for understanding how digital commons get encoded in technical standards.",
        sv: "Teoretisk analys av internetprotokoll som former av kontroll. Nödvändig för att förstå hur digitala allmänningar kodas in i tekniska standarder."
      },
      link: "https://mitpress.mit.edu/9780262572330/protocol/",
      openAccess: false
    },
    {
      title: "The Pirate Book",
      author: "Magnus Eriksson & Rasmus Fleischer (eds)",
      year: 2015,
      type: "book",
      difficulty: "intermediate",
      theme: "digital",
      description: {
        en: "Essays on digital piracy, file sharing, and information commons. Challenges intellectual property from commons perspective.",
        sv: "Essäer om digital piratkopiering, fildelning och informationsallmänningar. Utmanar intellektuell egendom från allmänningsperspektiv."
      },
      link: "https://piratetimes.net/the-pirate-book/",
      openAccess: true
    }
  ];
  
  let selectedTheme = $state<string>('all');
  let showAllResources = $state(false);
  
  const filteredResources = $derived(
    selectedTheme === 'all' 
      ? resources 
      : resources.filter(r => r.theme === selectedTheme)
  );
  
  const essentialResources = $derived(filteredResources.slice(0, 6));
  const additionalResources = $derived(filteredResources.slice(6));
  
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
  
  function getThemeColor(theme: string): string {
    const colors = {
      governance: 'bg-amber-100 text-amber-800 border-amber-300',
      economics: 'bg-moss-100 text-moss-800 border-moss-300',
      feminism: 'bg-rose-100 text-rose-800 border-rose-300',
      ecology: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      digital: 'bg-blue-100 text-blue-800 border-blue-300'
    };
    return colors[theme] || colors.economics;
  }
  
  function getThemeBorderColor(theme: string): string {
    const colors = {
      governance: 'border-amber-300 hover:border-amber-400',
      economics: 'border-moss-300 hover:border-moss-400',
      feminism: 'border-rose-300 hover:border-rose-400',
      ecology: 'border-emerald-300 hover:border-emerald-400',
      digital: 'border-blue-300 hover:border-blue-400'
    };
    return colors[theme] || colors.economics;
  }
</script>

{#key $language}
<SEO
  title={t.title}
  description={t.subtitle}
  keywords="democratic governance, cooperative economics, feminist commons, ecological commons, digital commons, sociocracy, platform cooperativism"
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

    <!-- Theme Filter -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold text-earth-900 mb-4">
        {t.filterByTheme}
      </h2>
      <div class="flex flex-wrap gap-3">
        <button
          onclick={() => selectedTheme = 'all'}
          class="px-4 py-2 rounded-lg border-2 transition-all {
            selectedTheme === 'all' 
              ? 'bg-moss-600 text-white border-moss-600' 
              : 'bg-white text-earth-700 border-earth-300 hover:border-moss-400'
          }"
        >
          {t.allThemes}
        </button>
        {#each Object.entries(themes) as [key, theme]}
          <button
            onclick={() => selectedTheme = key}
            class="px-4 py-2 rounded-lg border-2 transition-all {
              selectedTheme === key 
                ? getThemeColor(key).replace('100', '600').replace('800', 'white').replace('border-', 'border-').replace('300', '600')
                : `bg-white text-earth-700 ${getThemeBorderColor(key)}`
            }"
          >
            {theme.name[currentLanguage]}
          </button>
        {/each}
      </div>
      <p class="text-sm text-earth-600 mt-3">
        {filteredResources.length} {currentLanguage === 'en' ? 'resources' : 'resurser'}
      </p>
    </section>

    <!-- Resources -->
    <section class="mb-12">
      <div class="space-y-4">
        {#each (showAllResources ? filteredResources : essentialResources) as resource}
          <article class="bg-white rounded-lg p-5 border-2 {getThemeBorderColor(resource.theme)} transition-all">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="px-2 py-1 text-xs rounded-full border {getThemeColor(resource.theme)}">
                {themes[resource.theme].name[currentLanguage]}
              </span>
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
            <h3 class="text-xl font-serif text-earth-900 mb-1">
              {resource.title}
            </h3>
            <p class="text-sm text-earth-600 mb-3">
              {resource.author} ({resource.year})
            </p>
            
            <!-- Description -->
            <p class="text-sm text-earth-700 mb-3">
              {resource.description[currentLanguage]}
            </p>
            
            <!-- Link -->
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
      
      {#if additionalResources.length > 0 && !showAllResources}
        <div class="text-center mt-8">
          <button
            onclick={() => showAllResources = true}
            class="px-6 py-3 bg-moss-600 hover:bg-moss-700 text-white rounded-lg transition-colors font-medium"
          >
            {t.showMore} ({additionalResources.length} {currentLanguage === 'en' ? 'more' : 'fler'})
          </button>
        </div>
      {:else if showAllResources}
        <div class="text-center mt-8">
          <button
            onclick={() => showAllResources = false}
            class="px-6 py-3 border-2 border-moss-600 text-moss-600 hover:bg-moss-50 rounded-lg transition-colors font-medium"
          >
            {t.showLess}
          </button>
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
