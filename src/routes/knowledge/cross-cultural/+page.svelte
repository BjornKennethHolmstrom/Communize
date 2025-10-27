<!-- /src/routes/knowledge/cross-cultural/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Cross-cultural wisdom",
      subtitle: "Learning from diverse traditions of communal living and stewardship",
      intro: "The Western 'discovery' of the commons is actually a rediscovery—Indigenous peoples, African communities, Latin American movements, and Asian traditions have practiced communal stewardship for millennia. These resources center non-Western perspectives and challenge colonial narratives of individualism and extraction.",
      backToKnowledge: "Back to knowledge commons",
      essential: "Essential cross-cultural resources",
      additional: "Additional resources",
      showMore: "Show more",
      showLess: "Show less",
      importantNote: "Important note on decolonizing knowledge",
      noteText: "These resources are entry points, not complete representations. Indigenous and non-Western knowledge systems are vast, complex, and belong to their communities. Approach with humility, recognize your own positionality, and follow Indigenous leadership in learning and action.",
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
        paper: "Academic paper",
        film: "Film"
      },
      openAccess: "Open access",
      external: "External link"
    },
    sv: {
      title: "Interkulturell visdom",
      subtitle: "Att lära från olika traditioner av gemensamt liv och förvaltarskap",
      intro: "Den västerländska 'upptäckten' av allmänningar är faktiskt en återupptäckt—ursprungsfolk, afrikanska gemenskaper, latinamerikanska rörelser och asiatiska traditioner har praktiserat gemensamt förvaltarskap i årtusenden. Dessa resurser centrerar icke-västerländska perspektiv och utmanar koloniala berättelser om individualism och utvinning.",
      backToKnowledge: "Tillbaka till kunskapsallmänningen",
      essential: "Viktiga interkulturella resurser",
      additional: "Ytterligare resurser",
      showMore: "Visa mer",
      showLess: "Visa mindre",
      importantNote: "Viktig anmärkning om avkolonisering av kunskap",
      noteText: "Dessa resurser är ingångspunkter, inte fullständiga representationer. Ursprungsfolks och icke-västerländska kunskapssystem är vidsträckta, komplexa och tillhör sina gemenskaper. Närma dig med ödmjukhet, erkänn din egen position och följ ursprungsfolks ledarskap i lärande och handling.",
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
        paper: "Akademisk artikel",
        film: "Film"
      },
      openAccess: "Öppen tillgång",
      external: "Extern länk"
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);
  
  // Essential resources
  const essentialResources = [
    {
      title: "Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge, and the Teachings of Plants",
      author: "Robin Wall Kimmerer",
      year: 2013,
      type: "book",
      difficulty: "beginner",
      region: "North America (Potawatomi)",
      description: {
        en: "Botanist and member of the Citizen Potawatomi Nation weaves Indigenous knowledge with Western science. Shows how Indigenous peoples have practiced reciprocal relationship with land for millennia—not as resource to extract but as kin to care for. Essential introduction to Indigenous ecological wisdom.",
        sv: "Botanist och medlem av Citizen Potawatomi Nation väver samman ursprungsfolks kunskap med västerländsk vetenskap. Visar hur ursprungsfolk har praktiserat ömsesidigt förhållande med mark i årtusenden—inte som resurs att utvinna utan som släkting att vårda. Nödvändig introduktion till ursprungsfolks ekologiska visdom."
      },
      whyItMatters: {
        en: "Accessible, beautiful entry point to Indigenous worldviews. Shows that 'commons' thinking isn't innovation—it's remembering.",
        sv: "Tillgänglig, vacker ingångspunkt till ursprungsfolks världsbilder. Visar att 'allmännings'-tänkande inte är innovation—det är att minnas."
      },
      link: "https://milkweed.org/book/braiding-sweetgrass",
      openAccess: false
    },
    {
      title: "Ubuntu: An African Philosophy",
      author: "Mogobe Ramose",
      year: 1999,
      type: "paper",
      difficulty: "intermediate",
      region: "Southern Africa",
      description: {
        en: "Philosophical exploration of Ubuntu—'I am because we are.' Not just communalism but fundamental ontology: personhood is relational, constituted through community. Shows how African philosophy challenges Western individualism at its roots.",
        sv: "Filosofisk utforskning av Ubuntu—'Jag är för att vi är.' Inte bara kommunalism utan fundamental ontologi: personlighet är relationell, konstituerad genom gemenskap. Visar hur afrikansk filosofi utmanar västerländsk individualism i dess rötter."
      },
      whyItMatters: {
        en: "Demonstrates that communizing isn't just economic or political—it's ontological. Different way of being human.",
        sv: "Visar att kommunisering inte bara är ekonomisk eller politisk—det är ontologiskt. Ett annat sätt att vara människa."
      },
      link: "https://www.jstor.org/stable/40239883",
      openAccess: false
    },
    {
      title: "Buen Vivir: The Rights of Nature in Bolivia and Ecuador",
      author: "Eduardo Gudynas",
      year: 2011,
      type: "article",
      difficulty: "intermediate",
      region: "Latin America (Andean)",
      description: {
        en: "Explores Buen Vivir (Sumak Kawsay in Quechua)—'good living' philosophy from Andean Indigenous traditions. Not development or growth but harmony with nature and community. Bolivia and Ecuador enshrined rights of nature in constitutions based on this worldview.",
        sv: "Utforskar Buen Vivir (Sumak Kawsay på quechua)—'gott liv'-filosofi från andinska ursprungsfolks traditioner. Inte utveckling eller tillväxt utan harmoni med natur och gemenskap. Bolivia och Ecuador införlivade naturens rättigheter i konstitutioner baserade på denna världsbild."
      },
      whyItMatters: {
        en: "Shows how Indigenous philosophy is being translated into constitutional law—reimagining state and economy from commons perspective.",
        sv: "Visar hur ursprungsfolks filosofi översätts till konstitutionell lag—återuppfinns stat och ekonomi från allmänningsperspektiv."
      },
      link: "https://www.tni.org/en/publication/buen-vivir",
      openAccess: true
    },
    {
      title: "The Land Is Not Empty: Following Jesus in Dismantling the Doctrine of Discovery",
      author: "Sarah Augustine",
      year: 2021,
      type: "book",
      difficulty: "intermediate",
      region: "North America (Indigenous)",
      description: {
        en: "Indigenous scholar examines the Doctrine of Discovery—papal bulls that declared Indigenous lands 'empty' and available for Christian colonization. Shows how land theft was theologized and how settlers must face this history. Essential for understanding enclosure as colonial violence.",
        sv: "Ursprungsfolks forskare undersöker upptäcktsläran—påvliga bullar som förklarade ursprungsfolks marker 'tomma' och tillgängliga för kristen kolonisering. Visar hur markstöld teologiserades och hur bosättare måste möta denna historia. Nödvändig för att förstå inhägnad som kolonialt våld."
      },
      whyItMatters: {
        en: "Makes explicit the connection between enclosure and colonialism. Commons work must include decolonization.",
        sv: "Gör explicit kopplingen mellan inhägnad och kolonialism. Allmänningsarbete måste inkludera avkolonisering."
      },
      link: "https://www.ivpress.com/the-land-is-not-empty",
      openAccess: false
    },
    {
      title: "Commons Sense for the 21st Century",
      author: "David Bollier (with global perspectives)",
      year: 2019,
      type: "article",
      difficulty: "beginner",
      region: "Global",
      description: {
        en: "Accessible overview of commons globally—includes Indigenous land management, Asian rice commons, African pastoral commons. Centers non-Western examples. Shows commons are global, diverse, and ancient.",
        sv: "Tillgänglig översikt av allmänningar globalt—inkluderar ursprungsfolks markförvaltning, asiatiska risallmänningar, afrikanska pastoral-allmänningar. Centrerar icke-västerländska exempel. Visar att allmänningar är globala, olika och forntida."
      },
      whyItMatters: {
        en: "Counters the Eurocentric narrative of commons as Western concept. Shows global diversity of commoning practices.",
        sv: "Motverkar den eurocentriska berättelsen om allmänningar som västerländskt koncept. Visar global mångfald av kommuniseringspraktiker."
      },
      link: "https://www.bollier.org/blog/commons-sense-21st-century",
      openAccess: true
    }
  ];
  
  // Additional resources
  const additionalResources = [
    {
      title: "As Long as Grass Grows: The Indigenous Fight for Environmental Justice",
      author: "Dina Gilio-Whitaker",
      year: 2019,
      type: "book",
      difficulty: "intermediate",
      region: "North America (Indigenous)",
      description: {
        en: "Documents Indigenous environmental justice movements defending land and water commons against extraction. Shows Indigenous peoples as frontline defenders of planetary commons.",
        sv: "Dokumenterar ursprungsfolks miljörättvisrörelser som försvarar mark- och vattenallmänningar mot utvinning. Visar ursprungsfolk som frontlinje-försvarare av planetära allmänningar."
      },
      link: "https://www.beacon.org/As-Long-as-Grass-Grows-P1515.aspx",
      openAccess: false
    },
    {
      title: "Friction: An Ethnography of Global Connection",
      author: "Anna Lowenhaupt Tsing",
      year: 2004,
      type: "book",
      difficulty: "advanced",
      region: "Indonesia",
      description: {
        en: "Ethnography of Indonesian rainforest showing clash between Indigenous forest commons and corporate logging. Brilliant analysis of globalization from the ground.",
        sv: "Etnografi av indonesisk regnskog som visar sammandrabbning mellan ursprungsfolks skogsallmänningar och företagsavverkning. Briljant analys av globalisering från marken."
      },
      link: "https://press.princeton.edu/books/paperback/9780691120652/friction",
      openAccess: false
    },
    {
      title: "The Whanganui River as Legal Person",
      author: "New Zealand Government",
      year: 2017,
      type: "website",
      difficulty: "beginner",
      region: "Aotearoa/New Zealand (Māori)",
      description: {
        en: "In 2017, New Zealand granted personhood to Whanganui River based on Māori worldview that river is ancestor. Landmark in recognizing Indigenous relationships to land as law.",
        sv: "2017 beviljade Nya Zeeland personskap till Whanganui-floden baserat på Māori-världsbild att floden är förfader. Landmärke i att erkänna ursprungsfolks förhållanden till mark som lag."
      },
      link: "https://www.parliament.nz/en/get-involved/features/innovative-bill-protects-whanganui-river-with-legal-personhood/",
      openAccess: true
    },
    {
      title: "Sacred Economics: Money, Gift, and Society in the Age of Transition",
      author: "Charles Eisenstein",
      year: 2011,
      type: "book",
      difficulty: "intermediate",
      region: "Global (Indigenous gift economies)",
      description: {
        en: "Examines gift economies across cultures—Potlatch ceremonies, Kula rings, Indigenous reciprocity. Argues for 'sacred economy' that recognizes interdependence.",
        sv: "Undersöker gåvoekonomier över kulturer—Potlatch-ceremonier, Kula-ringar, ursprungsfolks ömsesidighet. Argumenterar för 'helig ekonomi' som erkänner ömsesidigt beroende."
      },
      link: "https://sacred-economics.com/",
      openAccess: true
    },
    {
      title: "The Commons in History: Culture, Conflict, and Ecology",
      author: "Tine De Moor, Leigh Shaw-Taylor, Paul Warde (eds)",
      year: 2002,
      type: "book",
      difficulty: "advanced",
      region: "Global comparative",
      description: {
        en: "Comparative historical study of commons across Europe, Asia, Africa. Shows universal patterns and local variations in commons governance.",
        sv: "Jämförande historisk studie av allmänningar över Europa, Asien, Afrika. Visar universella mönster och lokala variationer i allmänningsstyrning."
      },
      link: "https://www.cambridge.org/core/books/commons-in-history/E8E8E8E8E8E8E8E8E8E8E8E8E8E8E8E8",
      openAccess: false
    },
    {
      title: "Decolonizing Solidarity: Dilemmas and Directions for Supporters of Indigenous Struggles",
      author: "Clare Land",
      year: 2015,
      type: "book",
      difficulty: "intermediate",
      region: "Australia (Settler responsibility)",
      description: {
        en: "Guide for non-Indigenous people on supporting Indigenous struggles without appropriation. Essential for settlers working on commons.",
        sv: "Guide för icke-ursprungsfolk om att stödja ursprungsfolks strider utan appropriering. Nödvändig för bosättare som arbetar med allmänningar."
      },
      link: "https://www.zedbooks.net/shop/book/decolonizing-solidarity/",
      openAccess: false
    },
    {
      title: "The Original Instructions: Indigenous Teachings for a Sustainable Future",
      author: "Melissa K. Nelson (ed)",
      year: 2008,
      type: "book",
      difficulty: "beginner",
      region: "North America (Pan-Indigenous)",
      description: {
        en: "Collection of Indigenous voices on sustainability, reciprocity, and relationship with land. Diverse tribal perspectives.",
        sv: "Samling av ursprungsfolks röster om hållbarhet, ömsesidighet och förhållande med mark. Olika stammar perspektiv."
      },
      link: "https://www.simonandschuster.com/books/Original-Instructions/Melissa-K-Nelson/9781594774652",
      openAccess: false
    },
    {
      title: "Indigenous Peoples Rights and Unreported Struggles: Conflict and Peace",
      author: "Permanent Forum on Indigenous Issues (UN)",
      year: 2024,
      type: "website",
      difficulty: "intermediate",
      region: "Global",
      description: {
        en: "UN resources on Indigenous rights, including land rights and traditional governance. Reports and documents on Indigenous commons worldwide.",
        sv: "FN-resurser om ursprungsfolks rättigheter, inklusive markrättigheter och traditionell styrning. Rapporter och dokument om ursprungsfolks allmänningar världen över."
      },
      link: "https://www.un.org/development/desa/indigenouspeoples/",
      openAccess: true
    },
    {
      title: "Andean Lives: Gregorio Condori Mamani and Asunta Quispe Huamán",
      author: "Ricardo Valderrama Fernández & Carmen Escalante Gutiérrez",
      year: 1996,
      type: "book",
      difficulty: "intermediate",
      region: "Latin America (Peru)",
      description: {
        en: "Oral histories of Quechua-speaking Indigenous people in Peru. Documents traditional ayllu (community) systems and reciprocal labor.",
        sv: "Muntliga historier om quechuatalande ursprungsfolk i Peru. Dokumenterar traditionella ayllu (gemenskap) system och ömsesidigt arbete."
      },
      link: "https://utpress.utexas.edu/books/valfer-andean-lives",
      openAccess: false
    },
    {
      title: "Two-Eyed Seeing: Indigenous Perspectives on Knowledge",
      author: "Albert Marshall (Mi'kmaw Elder)",
      year: 2012,
      type: "article",
      difficulty: "beginner",
      region: "North America (Mi'kmaq)",
      description: {
        en: "Mi'kmaw concept of learning to see from one eye with Indigenous knowledge and the other with Western science. Framework for knowledge integration.",
        sv: "Mi'kmaw-koncept om att lära sig se från ett öga med ursprungsfolks kunskap och det andra med västerländsk vetenskap. Ramverk för kunskapsintegration."
      },
      link: "http://www.integrativescience.ca/Principles/TwoEyedSeeing/",
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
  keywords="Indigenous commons, Ubuntu, Buen Vivir, traditional ecological knowledge, decolonization, Indigenous land rights, gift economies"
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
      <p class="text-earth-700 leading-relaxed max-w-3xl mb-8">
        {t.intro}
      </p>
      
      <!-- Important Note -->
      <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
        <h3 class="font-semibold text-amber-900 mb-2 flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {t.importantNote}
        </h3>
        <p class="text-sm text-amber-900 leading-relaxed">
          {t.noteText}
        </p>
      </div>
    </div>

    <!-- Essential Resources -->
    <section class="mb-12">
      <h2 class="text-2xl font-serif text-earth-900 mb-6 border-b-2 border-earth-300 pb-3">
        {t.essential}
      </h2>
      
      <div class="space-y-6">
        {#each essentialResources as resource}
          <article class="bg-white rounded-xl p-6 border-2 border-earth-200 hover:border-earth-400 transition-all">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 text-xs rounded-full border bg-amber-100 text-amber-800 border-amber-300 font-medium">
                {resource.region}
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
            <div class="bg-earth-50 border-l-4 border-earth-500 p-4 mb-4">
              <p class="text-sm font-medium text-earth-800 mb-1">
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
              class="inline-flex items-center gap-2 text-earth-600 hover:text-earth-800 font-medium"
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
          class="flex items-center gap-2 px-4 py-2 text-earth-600 hover:text-earth-800 font-medium"
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
                <span class="px-3 py-1 text-xs rounded-full border bg-amber-100 text-amber-800 border-amber-300 font-medium">
                  {resource.region}
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
                class="inline-flex items-center gap-1 text-sm text-earth-600 hover:text-earth-800 font-medium"
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
        class="inline-flex items-center gap-2 text-earth-600 hover:text-earth-800 font-medium"
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
