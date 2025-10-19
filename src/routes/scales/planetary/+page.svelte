<!-- /src/routes/scales/planetary/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';
  import { base } from '$app/paths';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "Planetary Commons",
      subtitle: "Global & Digital",
      intro: "The biosphere, the internet, the atmosphere—resources that belong to no one and everyone. This is where communizing transcends borders and nations, requiring coordination at scales our ancestors never imagined. From climate governance to digital sovereignty, from ocean stewardship to the global knowledge commons, we explore how humanity might learn to tend what we all share.",
      essays: {
        title: "Foundational Essays",
        items: [
          {
            title: "The Biosphere as Ultimate Commons",
            description: "Earth's living systems don't recognize national borders. How do we govern what sustains all life?",
            slug: "biosphere-commons"
          },
          {
            title: "Digital Commons & Data Sovereignty",
            description: "The internet promised connection. Can we reclaim it from enclosure and extraction?",
            slug: "digital-commons"
          },
          {
            title: "Cosmo-Localism",
            description: "Global knowledge, local production—a pattern for planetary resilience without planetary homogenization.",
            slug: "cosmo-localism"
          }
        ]
      },
      practices: {
        title: "Practices & Explorations",
        comingSoon: "Coming soon",
        description: "Case studies, governance models, and practical frameworks for planetary communizing will be added in future phases."
      },
      back: "Back to all scales"
    },
    sv: {
      title: "Planetära Allmänningar",
      subtitle: "Global & Digital",
      intro: "Biosfären, internet, atmosfären—resurser som tillhör ingen och alla. Det är här kommunisering överskrider gränser och nationer, och kräver samordning på skalor våra förfäder aldrig föreställde sig. Från klimatstyrning till digital suveränitet, från havens förvaltarskap till den globala kunskapsallmänningen utforskar vi hur mänskligheten kan lära sig att vårda det vi alla delar.",
      essays: {
        title: "Grundläggande Essäer",
        items: [
          {
            title: "Biosfären som Ultimat Allmänning",
            description: "Jordens levande system känner inte till nationsgränser. Hur styr vi det som upprätthåller allt liv?",
            slug: "biosphere-commons"
          },
          {
            title: "Digitala Allmänningar & Datasuveränitet",
            description: "Internet lovade samhörighet. Kan vi återta det från inhägnad och utvinning?",
            slug: "digital-commons"
          },
          {
            title: "Kosmo-Lokalism",
            description: "Global kunskap, lokal produktion—ett mönster för planetär motståndskraft utan planetär homogenisering.",
            slug: "cosmo-localism"
          }
        ]
      },
      practices: {
        title: "Praktiker & Utforskningar",
        comingSoon: "Kommer snart",
        description: "Fallstudier, styrningsmodeller och praktiska ramverk för planetär kommunisering kommer att läggas till i framtida faser."
      },
      back: "Tillbaka till alla skalor"
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
  <div class="max-w-4xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-5xl">🌍</span>
        <div>
          <h1 class="text-4xl md:text-5xl font-serif text-earth-900">
            {t.title}
          </h1>
          <p class="text-xl text-earth-600 font-light">
            {t.subtitle}
          </p>
        </div>
      </div>
    </div>

    <!-- Introduction -->
    <div class="mb-12 p-8 bg-gradient-to-br from-moss-50 to-clay-50 rounded-xl">
      <p class="text-lg leading-relaxed text-earth-700">
        {t.intro}
      </p>
    </div>

    <!-- Essays Section -->
    <div class="mb-12">
      <h2 class="text-2xl font-serif mb-6 text-earth-900">
        {t.essays.title}
      </h2>
      <div class="space-y-4">
        {#each t.essays.items as essay}
          <a 
            href="{base}/scales/planetary/{essay.slug}"
            class="block bg-white rounded-lg p-6 border-2 border-earth-200 hover:border-earth-400 hover:shadow-md transition-all group"
          >
            <h3 class="text-xl font-serif text-earth-900 mb-2 group-hover:text-earth-700 transition-colors">
              {essay.title}
            </h3>
            <p class="text-earth-700">
              {essay.description}
            </p>
            <div class="mt-3 text-earth-600 font-medium text-sm group-hover:text-earth-700">
              Read essay →
            </div>
          </a>
        {/each}
      </div>
    </div>

    <!-- Practices Section (Coming Soon) -->
    <div class="p-8 bg-earth-50 rounded-xl border-2 border-earth-200">
      <div class="flex items-center gap-3 mb-3">
        <h2 class="text-2xl font-serif text-earth-900">
          {t.practices.title}
        </h2>
        <span class="px-3 py-1 bg-clay-100 text-clay-700 rounded-full text-xs font-medium">
          {t.practices.comingSoon}
        </span>
      </div>
      <p class="text-earth-700">
        {t.practices.description}
      </p>
    </div>

    <!-- Back Link -->
    <div class="mt-12 text-center">
      <a 
        href="{base}/scales"
        class="inline-flex items-center gap-2 text-earth-600 hover:text-moss-600 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>{t.back}</span>
      </a>
    </div>
  </div>
</div>
{/key}
