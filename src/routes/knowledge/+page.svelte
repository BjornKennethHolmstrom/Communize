<!-- src/routes/knowledge/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "The Knowledge Commons",
      subtitle: "Curated resources for understanding and practicing communizing",
      intro: "The Knowledge Commons will be a living library of readings, research, and wisdom from diverse traditions—connecting ancient practices with contemporary innovations.",
      comingSoon: "Coming in Phase 2",
      plannedContent: {
        title: "What's Coming",
        sections: [
          {
            title: "Foundational Theory",
            icon: "📚",
            description: "Core texts on the commons, gift economies, communalism, and collective governance",
            examples: [
              "Elinor Ostrom on governing the commons",
              "David Graeber on debt and reciprocity",
              "Indigenous perspectives on communal stewardship",
              "Murray Bookchin on social ecology"
            ]
          },
          {
            title: "Historical Lineage",
            icon: "🌳",
            description: "The roots of communizing through time and culture",
            examples: [
              "English commons and the Diggers",
              "Rochdale Pioneers and cooperative movement",
              "Zapatista autonomous communities",
              "Traditional Indigenous governance",
              "Kibbutzim and intentional communities"
            ]
          },
          {
            title: "Contemporary Practice",
            icon: "🔄",
            description: "Modern movements and emerging patterns",
            examples: [
              "Platform cooperativism",
              "Peer-to-peer networks",
              "Commons-based peer production",
              "Transition towns and bioregionalism",
              "Solidarity economies"
            ]
          },
          {
            title: "Cross-Cultural Wisdom",
            icon: "🌍",
            description: "Learning from diverse traditions of communal living",
            examples: [
              "Ubuntu philosophy (Southern Africa)",
              "Buen Vivir (Latin America)",
              "Ahupua'a systems (Hawai'i)",
              "Ayllu communities (Andes)",
              "Commons traditions worldwide"
            ]
          }
        ]
      },
      features: {
        title: "Library Features",
        items: [
          {
            title: "Curated Reading Lists",
            description: "Thematically organized collections for different aspects of communizing"
          },
          {
            title: "Annotated Bibliography",
            description: "Key texts with summaries and insights on their relevance"
          },
          {
            title: "Link Library",
            description: "Carefully vetted external resources, organizations, and projects"
          },
          {
            title: "Research Archive",
            description: "Academic papers and field studies on commons governance"
          }
        ]
      },
      contribute: {
        title: "Suggest a Resource",
        text: "Know a book, article, or resource that deepens understanding of the commons? Help us grow this library by suggesting additions.",
        button: "Contribute a Resource"
      }
    },
    sv: {
      title: "Kunskapsallmänningen",
      subtitle: "Kurerade resurser för att förstå och praktisera kommunisering",
      intro: "Kunskapsallmänningen kommer att vara ett levande bibliotek av läsning, forskning och visdom från olika traditioner—som förbinder forntida praktiker med samtida innovationer.",
      comingSoon: "Kommer i Fas 2",
      plannedContent: {
        title: "Vad Som Kommer",
        sections: [
          {
            title: "Grundläggande Teori",
            icon: "📚",
            description: "Kärntexter om allmänningar, gåvoekonomi, kommunalism och kollektiv styrning",
            examples: [
              "Elinor Ostrom om styrning av allmänningar",
              "David Graeber om skuld och ömsesidighet",
              "Urfolksperspektiv på gemensamt förvaltarskap",
              "Murray Bookchin om social ekologi"
            ]
          },
          {
            title: "Historisk Härkomst",
            icon: "🌳",
            description: "Rötterna av kommunisering genom tid och kultur",
            examples: [
              "Engelska allmänningar och Grävarna",
              "Rochdale-pionjärerna och kooperativsrörelsen",
              "Zapatistiska autonoma gemenskaper",
              "Traditionell urfolksstyrning",
              "Kibbutzer och avsiktliga gemenskaper"
            ]
          },
          {
            title: "Samtida Praktik",
            icon: "🔄",
            description: "Moderna rörelser och framväxande mönster",
            examples: [
              "Plattformskooperativism",
              "Peer-to-peer nätverk",
              "Allmänningsbaserad jämlik produktion",
              "Omställningsstäder och bioregionalism",
              "Solidaritetsekonomi"
            ]
          },
          {
            title: "Interkulturell Visdom",
            icon: "🌍",
            description: "Att lära från olika traditioner av gemensamt liv",
            examples: [
              "Ubuntu-filosofi (Södra Afrika)",
              "Buen Vivir (Latinamerika)",
              "Ahupua'a-system (Hawai'i)",
              "Ayllu-gemenskaper (Anderna)",
              "Allmänningstraditioner världen över"
            ]
          }
        ]
      },
      features: {
        title: "Biblioteksfunktioner",
        items: [
          {
            title: "Kurerade Läslistor",
            description: "Tematiskt organiserade samlingar för olika aspekter av kommunisering"
          },
          {
            title: "Annoterad Bibliografi",
            description: "Nyckeltexter med sammanfattningar och insikter om deras relevans"
          },
          {
            title: "Länkbibliotek",
            description: "Noggrant granskade externa resurser, organisationer och projekt"
          },
          {
            title: "Forskningsarkiv",
            description: "Akademiska artiklar och fältstudier om allmänningsstyrning"
          }
        ]
      },
      contribute: {
        title: "Föreslå en Resurs",
        text: "Känner du till en bok, artikel eller resurs som fördjupar förståelsen av allmänningar? Hjälp oss växa detta bibliotek genom att föreslå tillägg.",
        button: "Bidra med en Resurs"
      }
    }
  };

  $: t = translations[$currentLanguage] || translations.en;
</script>

<svelte:head>
  <title>{t.title} | Communize</title>
  <meta name="description" content={t.subtitle} />
</svelte:head>

{#key $currentLanguage}
<div class="min-h-screen" in:fade>
  <div class="max-w-6xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <div class="inline-block px-4 py-2 bg-clay-100 text-clay-700 rounded-full text-sm font-medium mb-4">
        {t.comingSoon}
      </div>
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {t.title}
      </h1>
      <p class="text-xl text-earth-600 font-light max-w-2xl mx-auto">
        {t.subtitle}
      </p>
    </div>

    <!-- Introduction -->
    <div class="mb-12 p-8 bg-moss-50 rounded-xl">
      <p class="text-lg leading-relaxed text-earth-700">
        {t.intro}
      </p>
    </div>

    <!-- Content Sections -->
    <div class="mb-12">
      <h2 class="text-2xl font-serif mb-6 text-earth-900">
        {t.plannedContent.title}
      </h2>
      <div class="space-y-6">
        {#each t.plannedContent.sections as section}
          <div class="bg-white rounded-lg p-6 border-2 border-earth-200">
            <div class="flex items-start gap-4">
              <span class="text-4xl flex-shrink-0">{section.icon}</span>
              <div class="flex-1">
                <h3 class="text-xl font-serif text-earth-900 mb-2">
                  {section.title}
                </h3>
                <p class="text-earth-700 mb-4">
                  {section.description}
                </p>
                <ul class="space-y-1.5">
                  {#each section.examples as example}
                    <li class="flex items-start text-earth-600 text-sm">
                      <span class="text-moss-600 mr-2">•</span>
                      <span>{example}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Features Grid -->
    <div class="mb-12">
      <h2 class="text-2xl font-serif mb-6 text-earth-900">
        {t.features.title}
      </h2>
      <div class="grid md:grid-cols-2 gap-6">
        {#each t.features.items as feature}
          <div class="bg-earth-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-earth-900 mb-2">
              {feature.title}
            </h3>
            <p class="text-earth-700 text-sm">
              {feature.description}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Contribute Section -->
    <div class="bg-gradient-to-br from-moss-50 to-clay-50 rounded-xl p-8 text-center">
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
