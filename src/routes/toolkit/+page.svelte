<!-- src/routes/toolkit/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "The Communize Toolkit",
      subtitle: "Practical resources for building and sustaining commons",
      intro: "The toolkit will provide practical, downloadable resources to help you start communizing in your own context—from worksheets and templates to guides and assessment tools.",
      comingSoon: "Coming in Phase 2",
      plannedContent: {
        title: "What's Coming",
        items: [
          {
            title: "Resource Mapper",
            description: "A simple HTML tool to help you catalog and map your local shared resources—tool libraries, community gardens, skill-sharing networks, and more."
          },
          {
            title: "DIY Worksheets",
            description: "Printable PDF generators for community asset mapping, project planning, meeting facilitation, and decision-making processes."
          },
          {
            title: "Agreement Templates",
            description: "Downloadable templates for resource-sharing agreements, governance documents, and conflict resolution frameworks."
          },
          {
            title: "Curated Tool Directory",
            description: "Reviews and guides for external platforms like Loomio (decision-making), Cobudget (participatory budgeting), and other open-source collaboration tools."
          }
        ]
      },
      contribute: {
        title: "Help Build This",
        text: "Have a template, tool, or worksheet that's worked well for your community? We'd love to include it in the toolkit.",
        button: "Contribute on GitHub"
      }
    },
    sv: {
      title: "Communize Verktygslåda",
      subtitle: "Praktiska resurser för att bygga och upprätthålla allmänningar",
      intro: "Verktygslådan kommer att erbjuda praktiska, nedladdningsbara resurser för att hjälpa dig börja kommunisera i ditt eget sammanhang—från arbetsblad och mallar till guider och bedömningsverktyg.",
      comingSoon: "Kommer i Fas 2",
      plannedContent: {
        title: "Vad Som Kommer",
        items: [
          {
            title: "Resurskartläggare",
            description: "Ett enkelt HTML-verktyg för att hjälpa dig katalogisera och kartlägga dina lokala delade resurser—verktygsbibliotek, gemenskapsodlingar, färdighetsdelningsnätverk och mer."
          },
          {
            title: "Gör-Det-Själv Arbetsblad",
            description: "Utskrivbara PDF-generatorer för gemenskapstillgångskartläggning, projektplanering, mötesunderlättande och beslutsprocesser."
          },
          {
            title: "Avtalsmallar",
            description: "Nedladdningsbara mallar för resursdelningsavtal, styrningsdokument och konfliktlösningsramverk."
          },
          {
            title: "Kurerad Verktygskatalog",
            description: "Recensioner och guider för externa plattformar som Loomio (beslutsfattande), Cobudget (deltagande budgetering) och andra samarbetsverktyg med öppen källkod."
          }
        ]
      },
      contribute: {
        title: "Hjälp Till Att Bygga Detta",
        text: "Har du en mall, verktyg eller arbetsblad som fungerat bra för din gemenskap? Vi skulle älska att inkludera det i verktygslådan.",
        button: "Bidra på GitHub"
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
  <div class="max-w-5xl mx-auto px-4 py-16">
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

    <!-- Planned Content -->
    <div class="mb-12">
      <h2 class="text-2xl font-serif mb-6 text-earth-900">
        {t.plannedContent.title}
      </h2>
      <div class="grid md:grid-cols-2 gap-6">
        {#each t.plannedContent.items as item}
          <div class="bg-white rounded-lg p-6 border-2 border-earth-200">
            <h3 class="text-lg font-semibold text-earth-900 mb-2">
              {item.title}
            </h3>
            <p class="text-earth-700 text-sm">
              {item.description}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Contribute Section -->
    <div class="bg-gradient-to-br from-earth-50 to-moss-50 rounded-xl p-8 text-center">
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
