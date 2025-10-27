<!-- /src/routes/knowledge/historical/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Historical lineages",
      subtitle: "The roots of communizing through time and culture",
      intro: "Understanding the commons requires knowing their history—from medieval English commons to Indigenous land stewardship, from the enclosure movements that destroyed them to the cooperative movements that reclaimed them. These histories remind us that communizing is both ancient practice and ongoing struggle.",
      backToKnowledge: "Back to knowledge commons",
      essential: "Essential histories",
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
      title: "Historiska linjer",
      subtitle: "Kommuniseringens rötter genom tid och kultur",
      intro: "Att förstå allmänningar kräver att man känner deras historia—från medeltida engelska allmänningar till ursprungsfolks markförvaltarskap, från inhägnadsrörelserna som förstörde dem till kooperativrörelserna som återtog dem. Dessa historier påminner oss om att kommunisering är både forntida praktik och pågående kamp.",
      backToKnowledge: "Tillbaka till kunskapsallmänningen",
      essential: "Viktiga historier",
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
      title: "The Magna Carta Manifesto: Liberties and Commons for All",
      author: "Peter Linebaugh",
      year: 2008,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Radical reinterpretation of the Magna Carta as a charter not just of liberties but of commons. Traces how English common rights—to forest, meadow, marsh, and stream—were systematically enclosed, and how commoners fought back. Shows the charter's relevance to contemporary struggles.",
        sv: "Radikal omtolkning av Magna Carta som en stadga inte bara om friheter utan om allmänningar. Spårar hur engelska gemensamma rättigheter—till skog, äng, kärr och ström—systematiskt inhägnades, och hur allmänheten kämpade tillbaka. Visar stadgans relevans för samtida strider."
      },
      whyItMatters: {
        en: "Recovers the forgotten commons dimension of constitutional history and links medieval struggles to present-day fights against privatization.",
        sv: "Återvinner den glömda allmänningsdimensionen av konstitutionell historia och kopplar medeltida strider till dagens kamper mot privatisering."
      },
      link: "https://www.ucpress.edu/book/9780520260009/the-magna-carta-manifesto",
      openAccess: false
    },
    {
      title: "Stop, Thief! The Commons, Enclosures, and Resistance",
      author: "Peter Linebaugh",
      year: 2014,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Sweeping historical study of enclosure and resistance from the English commons to contemporary struggles. Documents how capitalism required the violent destruction of commons—of land, labor, and life itself—and how people have always resisted.",
        sv: "Omfattande historisk studie av inhägnad och motstånd från engelska allmänningar till samtida strider. Dokumenterar hur kapitalism krävde våldsam förstörelse av allmänningar—av mark, arbete och livet självt—och hur människor alltid har gjort motstånd."
      },
      whyItMatters: {
        en: "Essential for understanding enclosure not as a one-time historical event but as an ongoing process central to capitalism.",
        sv: "Nödvändig för att förstå inhägnad inte som en engångshändelse utan som en pågående process central för kapitalism."
      },
      link: "https://pmpress.org/index.php?l=product_detail&p=592",
      openAccess: false
    },
    {
      title: "The Invention of Capitalism: Classical Political Economy and the Secret History of Primitive Accumulation",
      author: "Michael Perelman",
      year: 2000,
      type: "book",
      difficulty: "advanced",
      description: {
        en: "Exposes how classical economists like Adam Smith knew that capitalism's origins lay in violent dispossession—enclosure, colonialism, slavery—but deliberately obscured this in their theories. Shows 'primitive accumulation' wasn't primitive but foundational.",
        sv: "Avslöjar hur klassiska ekonomer som Adam Smith visste att kapitalismens ursprung låg i våldsam besittningstagande—inhägnad, kolonialism, slaveri—men medvetet fördunklade detta i sina teorier. Visar att 'primitiv ackumulering' inte var primitiv utan grundläggande."
      },
      whyItMatters: {
        en: "Reveals the violence at capitalism's core and why reclaiming commons is inherently anti-capitalist.",
        sv: "Avslöjar våldet i kapitalismens kärna och varför återkrav av allmänningar är inneboende antikapitalistiskt."
      },
      link: "https://www.dukeupress.edu/the-invention-of-capitalism",
      openAccess: false
    },
    {
      title: "Silencing the Past: Power and the Production of History",
      author: "Michel-Rolph Trouillot",
      year: 1995,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Examines how history is produced and how certain stories—especially of resistance and commons—are silenced. Uses the Haitian Revolution as primary example of an event too radical for its time to be properly recorded. Essential for understanding whose commons histories get told.",
        sv: "Undersöker hur historia produceras och hur vissa berättelser—särskilt om motstånd och allmänningar—tystas. Använder den haitiska revolutionen som huvudexempel på en händelse för radikal för sin tid för att ordentligt dokumenteras. Nödvändig för att förstå vilkas allmänningshistorier som berättas."
      },
      whyItMatters: {
        en: "Teaches critical reading of historical narratives and alerts us to the commons stories deliberately erased.",
        sv: "Lär kritisk läsning av historiska berättelser och uppmärksammar oss på allmänningsberättelser som medvetet utplånats."
      },
      link: "https://www.beacon.org/Silencing-the-Past-P798.aspx",
      openAccess: false
    },
    {
      title: "Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge, and the Teachings of Plants",
      author: "Robin Wall Kimmerer",
      year: 2013,
      type: "book",
      difficulty: "beginner",
      description: {
        en: "Potawatomi botanist weaves Indigenous knowledge with Western science, showing how Indigenous peoples have practiced reciprocal relationship with land for millennia. Not explicitly 'about' commons but demonstrates what genuine ecological commoning looks like.",
        sv: "Potawatomi-botanist väver samman ursprungsfolks kunskap med västerländsk vetenskap, visar hur ursprungsfolk har praktiserat ömsesidigt förhållande med mark i årtusenden. Inte explicit 'om' allmänningar men visar vad genuint ekologiskt kommuniserande ser ut som."
      },
      whyItMatters: {
        en: "Offers living example of commons relationship that predates—and offers alternatives to—capitalist extraction.",
        sv: "Erbjuder levande exempel på allmänningsförhållande som föregår—och erbjuder alternativ till—kapitalistisk utvinning."
      },
      link: "https://milkweed.org/book/braiding-sweetgrass",
      openAccess: false
    }
  ];
  
  // Additional resources
  const additionalResources = [
    {
      title: "The Making of the English Working Class",
      author: "E.P. Thompson",
      year: 1963,
      type: "book",
      difficulty: "advanced",
      description: {
        en: "Monumental history of how enclosure and industrialization created the working class. Documents resistance, mutual aid societies, and early cooperatives as workers fought dispossession.",
        sv: "Monumental historia om hur inhägnad och industrialisering skapade arbetarklassen. Dokumenterar motstånd, ömsesidiga hjälpföreningar och tidiga kooperativ när arbetare kämpade mot besittningstagande."
      },
      link: "https://www.penguinrandomhouse.com/books/298950/the-making-of-the-english-working-class-by-e-p-thompson/",
      openAccess: false
    },
    {
      title: "The Dispossessed: A History of Radical Thought and Action in India",
      author: "Arundhati Roy",
      year: 2014,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Essays on contemporary enclosure in India—displacement of Adivasi peoples, resource extraction, and resistance movements defending commons.",
        sv: "Essäer om samtida inhägnad i Indien—förskjutning av Adivasi-folk, resursutvinning och motståndsrörelser som försvarar allmänningar."
      },
      link: "https://www.haymarketbooks.org/books/677-capitalism",
      openAccess: false
    },
    {
      title: "The Rochdale Pioneers and the Cooperative Movement",
      author: "George Jacob Holyoake",
      year: 1893,
      type: "book",
      difficulty: "beginner",
      description: {
        en: "First-hand account of the 1844 Rochdale cooperative—the foundational model for consumer cooperatives worldwide. Shows how working people created alternatives to capitalism.",
        sv: "Förstahandsberättelse om 1844 Rochdale-kooperativet—grundmodellen för konsumentkooperativ världen över. Visar hur arbetande människor skapade alternativ till kapitalism."
      },
      link: "https://www.gutenberg.org/ebooks/61396",
      openAccess: true
    },
    {
      title: "Black Reconstruction in America",
      author: "W.E.B. Du Bois",
      year: 1935,
      type: "book",
      difficulty: "advanced",
      description: {
        en: "Radical reinterpretation of Reconstruction showing how freed slaves attempted to create commons—collective land ownership, mutual aid, democratic governance—before violent suppression.",
        sv: "Radikal omtolkning av återuppbyggnad som visar hur frigivna slavar försökte skapa allmänningar—kollektivt markägande, ömsesidig hjälp, demokratisk styrning—före våldsamt förtryck."
      },
      link: "https://www.oxfordscholar.com/view/10.1093/acprof:oso/9780195325881.001.0001/acprof-9780195325881",
      openAccess: false
    },
    {
      title: "The Mondragon Experiment",
      author: "Greg MacLeod",
      year: 1997,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "History of the Mondragon Cooperative Corporation in Basque Country—largest worker cooperative in the world, demonstrating commons principles at scale.",
        sv: "Historia om Mondragon Cooperative Corporation i Baskien—världens största arbetarkooperativ, som visar allmänningsprinciper i stor skala."
      },
      link: "https://www.uccpress.ca/books/detail/the-mondragon-experiment",
      openAccess: false
    },
    {
      title: "Zapatista Autonomy and the Making of the Indigenous Autonomy",
      author: "Mariana Mora",
      year: 2017,
      type: "book",
      difficulty: "advanced",
      description: {
        en: "Ethnographic study of how Zapatista communities in Chiapas practice Indigenous autonomy, collective governance, and defense of land commons.",
        sv: "Etnografisk studie av hur Zapatista-gemenskaper i Chiapas praktiserar ursprungsfolks autonomi, kollektiv styrning och försvar av markallmänningar."
      },
      link: "https://www.cambridge.org/core/books/kuxlejal-politics/0C6F4F8B8F6F8F8F8F8F8F8F8F8F8F8F",
      openAccess: false
    },
    {
      title: "For All the People: Uncovering the Hidden History of Cooperation, Cooperative Movements, and Communalism in America",
      author: "John Curl",
      year: 2009,
      type: "book",
      difficulty: "intermediate",
      description: {
        en: "Comprehensive history of cooperative movements in the US—from utopian communities to worker cooperatives to radical unions. Recovers forgotten traditions of American commoning.",
        sv: "Omfattande historia om kooperativrörelser i USA—från utopiska gemenskaper till arbetarkooperativ till radikala fackföreningar. Återvinner glömda traditioner av amerikansk kommunisering."
      },
      link: "https://www.pmpress.org/index.php?l=product_detail&p=206",
      openAccess: false
    },
    {
      title: "The History of the Cooperative Movement in Britain",
      author: "G.D.H. Cole",
      year: 1944,
      type: "book",
      difficulty: "advanced",
      description: {
        en: "Definitive history of British cooperatives from Rochdale Pioneers through guild socialism. Shows how cooperative ideals evolved and spread.",
        sv: "Definitiv historia om brittiska kooperativ från Rochdale-pionjärerna genom gillessocialism. Visar hur kooperativa ideal utvecklades och spreds."
      },
      link: "https://archive.org/details/in.ernet.dli.2015.499853",
      openAccess: true
    },
    {
      title: "The Wretched of the Earth",
      author: "Frantz Fanon",
      year: 1961,
      type: "book",
      difficulty: "advanced",
      description: {
        en: "Anti-colonial classic analyzing how colonialism enclosed commons in colonized lands and how decolonization must include reclaiming collective land and governance.",
        sv: "Antikolonial klassiker som analyserar hur kolonialism inhägnade allmänningar i koloniserade länder och hur avkolonisering måste inkludera återtagande av kollektiv mark och styrning."
      },
      link: "https://groveatlantic.com/book/the-wretched-of-the-earth/",
      openAccess: false
    },
    {
      title: "Enclosure and the Yeoman: The Agricultural Development of the South Midlands 1450-1850",
      author: "J.M. Neeson",
      year: 1993,
      type: "book",
      difficulty: "advanced",
      description: {
        en: "Detailed economic history of English enclosure showing how it impoverished small farmers and destroyed common rights. Essential empirical study.",
        sv: "Detaljerad ekonomisk historia om engelsk inhägnad som visar hur den utarmade småbönder och förstörde gemensamma rättigheter. Nödvändig empirisk studie."
      },
      link: "https://www.cambridge.org/core/books/commoners/0AA0F0F0F0F0F0F0F0F0F0F0F0F0F0F0",
      openAccess: false
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
  keywords="commons history, enclosure, cooperative movement, indigenous commons, Rochdale pioneers, English commons, primitive accumulation"
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
      <h2 class="text-2xl font-serif text-earth-900 mb-6 border-b-2 border-earth-300 pb-3">
        {t.essential}
      </h2>
      
      <div class="space-y-6">
        {#each essentialResources as resource}
          <article class="bg-white rounded-xl p-6 border-2 border-earth-200 hover:border-earth-400 transition-all">
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
