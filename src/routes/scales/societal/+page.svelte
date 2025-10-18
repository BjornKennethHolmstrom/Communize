<!-- /src/routes/scales/societal/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "Societal Commons",
      subtitle: "Communities & Cooperatives",
      intro: "This is where communizing becomes visible and tangible—in ecovillages, housing cooperatives, tool libraries, and local economies. At the societal scale, we find concrete legal structures, decision-making processes, and governance patterns. It's the laboratory where small groups learn to manage shared resources, navigate power dynamics, and build resilience together.",
      essays: {
        title: "Foundational Essays",
        items: [
          {
            title: "From Property to Stewardship",
            description: "Exploring how we shift from ownership thinking to commons thinking—legally, practically, and philosophically.",
            slug: "property-to-stewardship"
          },
          {
            title: "Decision-Making as Commons",
            description: "How groups make decisions together—from consensus to sociocracy to consent—and what each approach reveals about power and belonging.",
            slug: "decision-making"
          },
          {
            title: "The Economics of Care",
            description: "What happens when we center reciprocity, mutual aid, and care work instead of extraction and profit?",
            slug: "economics-of-care"
          }
        ]
      },
      practices: {
        title: "Practices & Explorations",
        comingSoon: "Coming soon",
        description: "Case studies, legal templates, and practical guides for societal communizing will be added in future phases."
      },
      back: "Back to all scales"
    },
    sv: {
      title: "Samhälleliga Allmänningar",
      subtitle: "Gemenskaper & Kooperativ",
      intro: "Det är här kommunisering blir synlig och påtaglig—i ekobyar, bostadskooperativ, verktygsbibliotek och lokala ekonomier. På den samhälleliga skalan finner vi konkreta juridiska strukturer, beslutsprocesser och styrningsmodeller. Det är laboratoriet där små grupper lär sig att förvalta delade resurser, navigera maktdynamik och bygga motståndskraft tillsammans.",
      essays: {
        title: "Grundläggande Essäer",
        items: [
          {
            title: "Från Egendom till Förvaltarskap",
            description: "Att utforska hur vi skiftar från ägande-tänkande till allmännings-tänkande—juridiskt, praktiskt och filosofiskt.",
            slug: "property-to-stewardship"
          },
          {
            title: "Beslutsfattande som Allmänning",
            description: "Hur grupper fattar beslut tillsammans—från konsensus till sociokrati till samtycke—och vad varje approach avslöjar om makt och tillhörighet.",
            slug: "decision-making"
          },
          {
            title: "Omsorgens Ekonomi",
            description: "Vad händer när vi centrerar ömsesidighet, ömsesidig hjälp och omsorgsarbete istället för utvinning och profit?",
            slug: "economics-of-care"
          }
        ]
      },
      practices: {
        title: "Praktiker & Utforskningar",
        comingSoon: "Kommer snart",
        description: "Fallstudier, juridiska mallar och praktiska guider för samhällelig kommunisering kommer att läggas till i framtida faser."
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
        <span class="text-5xl">🏘️</span>
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
    <div class="mb-12 p-8 bg-gradient-to-br from-earth-50 to-moss-50 rounded-xl">
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
            href="/scales/societal/{essay.slug}"
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
        href="/scales"
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
