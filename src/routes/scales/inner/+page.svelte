<!-- /src/routes/scales/inner/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "Inner Commons",
      subtitle: "The Community Within",
      intro: "Before we can commune with others, we must learn to commune with ourselves. The Inner Commons explores how we create shared space within—integrating our parts, embracing our shadows, and cultivating self-compassion as the foundation for all other forms of communizing.",
      essays: {
        title: "Foundational Essays",
        items: [
          {
            title: "The Community of Self",
            description: "An introduction to viewing the psyche as an internal community, drawing from Internal Family Systems and parts work.",
            slug: "community-of-self"
          },
          {
            title: "Shadow as Exile",
            description: "How the parts of ourselves we reject become exiled—and how welcoming them back is an act of inner communizing.",
            slug: "shadow-as-exile"
          },
          {
            title: "Self-Compassion as Commoning",
            description: "Exploring how treating ourselves with kindness mirrors the principles of creating and sustaining commons.",
            slug: "self-compassion"
          }
        ]
      },
      practices: {
        title: "Practices & Explorations",
        comingSoon: "Coming soon",
        description: "Practical exercises for inner integration and self-commoning will be added in future phases."
      },
      back: "Back to all scales",
      share: {
        title: "Inner Commons - The Community Within | Communize",
        description: "Explore how we create shared space within—integrating our parts, embracing our shadows, and cultivating self-compassion."
      }
    },
    sv: {
      title: "Inre allmänningar",
      subtitle: "Gemenskapen inom",
      intro: "Innan vi kan kommunicera med andra måste vi lära oss att kommunicera med oss själva. De Inre Allmänningarna utforskar hur vi skapar delat utrymme inom—integrera våra delar, omfamna våra skuggor och odla självmedkänsla som grund för alla andra former av kommunisering.",
      essays: {
        title: "Grundläggande essäer",
        items: [
          {
            title: "Självets gemenskap",
            description: "En introduktion till att se psyket som en intern gemenskap, med utgångspunkt i Internal Family Systems och delsarbete.",
            slug: "community-of-self"
          },
          {
            title: "Skuggan som exil",
            description: "Hur de delar av oss själva vi förkastar blir förvisade—och hur välkomnandet av dem tillbaka är en handling av inre kommunisering.",
            slug: "shadow-as-exile"
          },
          {
            title: "Självmedkänsla som kommunisering",
            description: "Att utforska hur vi behandlar oss själva med vänlighet speglar principerna för att skapa och upprätthålla allmänningar.",
            slug: "self-compassion"
          }
        ]
      },
      practices: {
        title: "Praktiker och utforskningar",
        comingSoon: "Kommer snart",
        description: "Praktiska övningar för inre integration och själv-kommunisering kommer att läggas till i framtida faser."
      },
      back: "Tillbaka till alla skalor",
      share: {
        title: "Inre allmänningar - Gemenskapen inom | Communize",
        description: "Utforska hur vi skapar delat utrymme inom—integrera våra delar, omfamna våra skuggor och odla självmedkänsla."
      }
    }
  };

  $: t = translations[$currentLanguage] || translations.en;
</script>

{#key $currentLanguage}
<SEO
  title={t.title}
  description={t.intro}
  keywords="inner commons, self-compassion, shadow work, internal family systems, self-integration"
  section={currentLanguage === 'en' ? 'Inner Commons' : 'Inre Allmänningar'}
/>
<div class="min-h-screen" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-5xl">🪞</span>
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
    <div class="mb-12 p-8 bg-gradient-to-br from-moss-50 to-earth-50 rounded-xl">
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
            href="{base}/scales/inner/{essay.slug}"
            class="block bg-white rounded-lg p-6 border-2 border-earth-200 hover:border-moss-300 hover:shadow-md transition-all group"
          >
            <h3 class="text-xl font-serif text-earth-900 mb-2 group-hover:text-moss-700 transition-colors">
              {essay.title}
            </h3>
            <p class="text-earth-700">
              {essay.description}
            </p>
            <div class="mt-3 text-moss-600 font-medium text-sm group-hover:text-moss-700">
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

<ShareButtons 
  title={t.share.title}
  description={t.share.description}
/>
