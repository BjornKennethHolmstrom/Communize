<!-- /src/routes/scales/relational/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';
  import { base } from '$app/paths';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "Relational Commons",
      subtitle: "The Space Between",
      intro: "Before there can be communities, there must be relationships. The relational scale is where we learn the fundamental practices of communizing: how to create shared space, navigate difference, transform conflict, and build trust. It's the laboratory where two or more people discover what it means to tend something together.",
      essays: {
        title: "Foundational Essays",
        items: [
          {
            title: "The Relationship as Third Entity",
            description: "Exploring how healthy relationships exist not as two individuals, but as three: you, me, and us—the shared field we co-create.",
            slug: "relationship-as-third-entity"
          },
          {
            title: "Conflict as Commons",
            description: "How disagreement becomes a shared resource to be tended, not a problem to be solved or avoided.",
            slug: "conflict-as-commons"
          },
          {
            title: "Shared Resources, Shared Lives",
            description: "The practical realities of communizing in intimate relationships—from finances to household labor to emotional care.",
            slug: "shared-resources"
          }
        ]
      },
      practices: {
        title: "Practices & Explorations",
        comingSoon: "Coming soon",
        description: "Practical exercises for relational communizing will be added in future phases."
      },
     back: "Back to all scales"
    },
    sv: {
      title: "Relationella Allmänningar",
      subtitle: "Utrymmet Däremellan",
      intro: "Innan det kan finnas gemenskaper måste det finnas relationer. Den relationella skalan är där vi lär oss de grundläggande praktikerna för kommunisering: hur man skapar delat utrymme, navigerar skillnader, transformerar konflikter och bygger förtroende. Det är laboratoriet där två eller fler människor upptäcker vad det betyder att vårda något tillsammans.",
      essays: {
        title: "Grundläggande Essäer",
        items: [
          {
            title: "Relationen som Tredje Enhet",
            description: "Att utforska hur hälsosamma relationer inte existerar som två individer, utan som tre: du, jag och vi—det delade fält vi samskapar.",
            slug: "relationship-as-third-entity"
          },
          {
            title: "Konflikt som Allmänning",
            description: "Hur oenighet blir en delad resurs att vårda, inte ett problem att lösa eller undvika.",
            slug: "conflict-as-commons"
          },
          {
            title: "Delade Resurser, Delade Liv",
            description: "De praktiska realiteterna av kommunisering i intima relationer—från ekonomi till hushållsarbete till emotionell omsorg.",
            slug: "shared-resources"
          }
        ]
      },
      practices: {
        title: "Praktiker & Utforskningar",
        comingSoon: "Kommer snart",
        description: "Praktiska övningar för relationell kommunisering kommer att läggas till i framtida faser."
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
        <span class="text-5xl">💞</span>
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
    <div class="mb-12 p-8 bg-gradient-to-br from-clay-50 to-earth-50 rounded-xl">
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
            href="{base}/scales/relational/{essay.slug}"
            class="block bg-white rounded-lg p-6 border-2 border-earth-200 hover:border-clay-300 hover:shadow-md transition-all group"
          >
            <h3 class="text-xl font-serif text-earth-900 mb-2 group-hover:text-clay-600 transition-colors">
              {essay.title}
            </h3>
            <p class="text-earth-700">
              {essay.description}
            </p>
            <div class="mt-3 text-clay-600 font-medium text-sm group-hover:text-clay-700">
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
