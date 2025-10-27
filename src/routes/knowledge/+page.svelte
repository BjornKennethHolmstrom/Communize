<!-- /src/routes/knowledge/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "The knowledge commons",
      subtitle: "Curated resources for understanding and practicing communizing",
      intro: "A living library of theory, history, and wisdom—connecting ancient practices with contemporary innovations. These carefully selected resources offer diverse perspectives on building and sustaining commons.",
      
      sections: {
        foundational: "Foundational theory",
        historical: "Historical lineages",
        contemporary: "Contemporary practice",
        thematic: "Thematic collections",
        crossCultural: "Cross-cultural wisdom",
        learningPaths: "Learning paths"
      },
      
      viewAll: "View all resources",
      explore: "Explore",
      essential: "Essential resources",
      difficulty: {
        beginner: "Beginner",
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
      
      contribute: {
        title: "Suggest a resource",
        text: "Know a book, article, or resource that deepens understanding of the commons? Help us grow this library.",
        button: "Contribute on GitHub"
      }
    },
    sv: {
      title: "Kunskapsallmänningen",
      subtitle: "Kurerade resurser för att förstå och praktisera kommunisering",
      intro: "Ett levande bibliotek av teori, historia och visdom—som förbinder forntida praktiker med samtida innovationer. Dessa noggrant utvalda resurser erbjuder olika perspektiv på att bygga och upprätthålla allmänningar.",
      
      sections: {
        foundational: "Grundläggande teori",
        historical: "Historiska linjer",
        contemporary: "Samtida praktik",
        thematic: "Tematiska samlingar",
        crossCultural: "Interkulturell visdom",
        learningPaths: "Lärvägar"
      },
      
      viewAll: "Visa alla resurser",
      explore: "Utforska",
      essential: "Viktiga resurser",
      difficulty: {
        beginner: "Nybörjare",
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
      
      contribute: {
        title: "Föreslå en resurs",
        text: "Känner du till en bok, artikel eller resurs som fördjupar förståelsen av allmänningar? Hjälp oss växa detta bibliotek.",
        button: "Bidra på GitHub"
      }
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);
  
  // Knowledge sections with their key themes
  const knowledgeSections = [
    {
      id: 'foundational',
      title: t.sections.foundational,
      description: {
        en: 'Core texts on the commons, gift economies, communalism, and collective governance',
        sv: 'Kärntexter om allmänningar, gåvoekonomi, kommunalism och kollektiv styrning'
      },
      icon: 'book',
      color: 'moss',
      link: `${base}/knowledge/foundational`,
      resourceCount: 12
    },
    {
      id: 'historical',
      title: t.sections.historical,
      description: {
        en: 'The roots of communizing through time and culture—from English commons to cooperative movements',
        sv: 'Rötterna av kommunisering genom tid och kultur—från engelska allmänningar till kooperativa rörelser'
      },
      icon: 'tree',
      color: 'earth',
      link: `${base}/knowledge/historical`,
      resourceCount: 15
    },
    {
      id: 'contemporary',
      title: t.sections.contemporary,
      description: {
        en: 'Modern movements and emerging patterns—platform cooperativism, degrowth, solidarity economics',
        sv: 'Moderna rörelser och framväxande mönster—plattformskooperativism, tillväxtkritik, solidaritetsekonomi'
      },
      icon: 'trending',
      color: 'clay',
      link: `${base}/knowledge/contemporary`,
      resourceCount: 18
    },
    {
      id: 'thematic',
      title: t.sections.thematic,
      description: {
        en: 'Deep dives into governance, economics, feminism, ecology, and digital commons',
        sv: 'Djupdykningar i styrning, ekonomi, feminism, ekologi och digitala allmänningar'
      },
      icon: 'layers',
      color: 'moss',
      link: `${base}/knowledge/thematic`,
      resourceCount: 25
    },
    {
      id: 'crossCultural',
      title: t.sections.crossCultural,
      description: {
        en: 'Learning from diverse traditions—Ubuntu, Buen Vivir, Indigenous wisdom, commons worldwide',
        sv: 'Att lära från olika traditioner—Ubuntu, Buen Vivir, ursprungsfolks visdom, allmänningar världen över'
      },
      icon: 'globe',
      color: 'earth',
      link: `${base}/knowledge/cross-cultural`,
      resourceCount: 10
    },
    {
      id: 'learningPaths',
      title: t.sections.learningPaths,
      description: {
        en: 'Curated journeys for structured learning—from beginner introductions to advanced theory',
        sv: 'Kurerade resor för strukturerat lärande—från nybörjarintroduktioner till avancerad teori'
      },
      icon: 'path',
      color: 'clay',
      link: `${base}/knowledge/learning-paths`,
      resourceCount: 8
    }
  ];
  
  function getSectionColor(color: string): string {
    const colors = {
      moss: 'from-moss-50 to-moss-100 border-moss-300 hover:border-moss-400',
      earth: 'from-earth-50 to-earth-100 border-earth-300 hover:border-earth-400',
      clay: 'from-clay-50 to-clay-100 border-clay-300 hover:border-clay-400'
    };
    return colors[color] || colors.moss;
  }
  
  function getIconColor(color: string): string {
    const colors = {
      moss: 'text-moss-600',
      earth: 'text-earth-600',
      clay: 'text-clay-600'
    };
    return colors[color] || colors.moss;
  }
</script>

{#key $language}
<SEO
  title={t.title}
  description={t.subtitle}
  keywords="commons knowledge, commons theory, gift economy, communalism, commons research, cooperative economics"
/>

<div class="min-h-screen" in:fade>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {t.title}
      </h1>
      <p class="text-xl text-earth-600 font-light max-w-2xl mx-auto mb-6">
        {t.subtitle}
      </p>
      <p class="text-earth-700 max-w-3xl mx-auto leading-relaxed">
        {t.intro}
      </p>
    </div>

    <!-- Knowledge Sections Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {#each knowledgeSections as section}
        <a 
          href={section.link}
          class="group bg-gradient-to-br {getSectionColor(section.color)} rounded-xl p-6 border-2 transition-all shadow-sm hover:shadow-md"
        >
          <div class="flex items-start gap-4 mb-4">
            <!-- Icon -->
            <div class="p-3 bg-white rounded-lg {getIconColor(section.color)} group-hover:scale-110 transition-transform">
              {#if section.icon === 'book'}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              {:else if section.icon === 'tree'}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              {:else if section.icon === 'trending'}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              {:else if section.icon === 'layers'}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              {:else if section.icon === 'globe'}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012-2 2 2 0 104 0 2 2 0 012 2v.5a2.5 2.5 0 002.5 2.5 2.5 2.5 0 01-2.5 2.5H19l-1 2v3" />
                </svg>
              {:else if section.icon === 'path'}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              {/if}
            </div>
            
            <div class="flex-1">
              <h3 class="text-xl font-serif text-earth-900 mb-2 group-hover:text-moss-700 transition-colors">
                {section.title}
              </h3>
              <p class="text-sm text-earth-700 mb-3">
                {section.description[currentLanguage]}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-xs text-earth-600">
                  {section.resourceCount} {currentLanguage === 'en' ? 'resources' : 'resurser'}
                </span>
                <span class="text-sm text-moss-600 group-hover:text-moss-700 font-medium flex items-center gap-1">
                  {t.explore}
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- Featured Resources Section -->
    <section class="mb-12">
      <div class="bg-white rounded-xl p-8 border-2 border-earth-200">
        <h2 class="text-2xl font-serif text-earth-900 mb-6">
          {currentLanguage === 'en' ? 'Start here: Essential readings' : 'Börja här: Viktiga läsningar'}
        </h2>
        <p class="text-earth-700 mb-6">
          {currentLanguage === 'en' 
            ? 'New to the commons? Start with these foundational texts that provide a solid introduction to communizing.'
            : 'Ny till allmänningar? Börja med dessa grundläggande texter som ger en solid introduktion till kommunisering.'}
        </p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Ostrom -->
          <div class="p-4 bg-moss-50 rounded-lg border border-moss-200">
            <div class="flex items-start gap-3 mb-2">
              <span class="px-2 py-1 bg-moss-100 text-moss-800 text-xs rounded-full border border-moss-300">
                {t.type.book}
              </span>
              <span class="px-2 py-1 bg-earth-100 text-earth-800 text-xs rounded-full border border-earth-300">
                {t.difficulty.intermediate}
              </span>
            </div>
            <h3 class="font-semibold text-earth-900 mb-2">
              Governing the Commons
            </h3>
            <p class="text-sm text-earth-700 mb-2">
              Elinor Ostrom (1990)
            </p>
            <p class="text-sm text-earth-600 mb-3">
              {currentLanguage === 'en'
                ? 'Nobel Prize-winning research demonstrating how communities successfully manage shared resources without privatization or state control.'
                : 'Nobelprisvinnande forskning som visar hur gemenskaper framgångsrikt förvaltar delade resurser utan privatisering eller statlig kontroll.'}
            </p>
            <a href="https://www.cambridge.org/core/books/governing-the-commons/A8BB63BC4A1433A50A3FB92EDBBB97D5" 
               target="_blank" 
               rel="noopener"
               class="text-sm text-moss-600 hover:text-moss-700 font-medium">
              {currentLanguage === 'en' ? 'Learn more →' : 'Läs mer →'}
            </a>
          </div>

          <!-- Graeber -->
          <div class="p-4 bg-clay-50 rounded-lg border border-clay-200">
            <div class="flex items-start gap-3 mb-2">
              <span class="px-2 py-1 bg-clay-100 text-clay-800 text-xs rounded-full border border-clay-300">
                {t.type.book}
              </span>
              <span class="px-2 py-1 bg-earth-100 text-earth-800 text-xs rounded-full border border-earth-300">
                {t.difficulty.beginner}
              </span>
            </div>
            <h3 class="font-semibold text-earth-900 mb-2">
              Debt: The First 5,000 Years
            </h3>
            <p class="text-sm text-earth-700 mb-2">
              David Graeber (2011)
            </p>
            <p class="text-sm text-earth-600 mb-3">
              {currentLanguage === 'en'
                ? 'A revolutionary anthropological history showing that gift economies and mutual aid predate market exchange.'
                : 'En revolutionerande antropologisk historia som visar att gåvoekonomier och ömsesidig hjälp föregår marknadsutbyte.'}
            </p>
            <a href="https://www.mhpbooks.com/books/debt/" 
               target="_blank" 
               rel="noopener"
               class="text-sm text-clay-600 hover:text-clay-700 font-medium">
              {currentLanguage === 'en' ? 'Learn more →' : 'Läs mer →'}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contribute Section -->
    <div class="bg-gradient-to-br from-moss-50 to-earth-50 rounded-xl p-8 text-center border-2 border-moss-200">
      <svg class="w-12 h-12 text-moss-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {t.contribute.title}
      </h2>
      <p class="text-earth-700 mb-6 max-w-2xl mx-auto">
        {t.contribute.text}
      </p>
      <a
        href="https://github.com/BjornKennethHolmstrom/communize"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 px-6 py-3 bg-moss-600 hover:bg-moss-700 text-white rounded-lg transition-colors font-medium"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
        {t.contribute.button}
      </a>
    </div>
  </div>
</div>
{/key}
