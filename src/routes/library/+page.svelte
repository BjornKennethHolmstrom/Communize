<!-- /src/routes/library/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "Models & Praxis Library",
      subtitle: "Case studies and practical guides for communizing",
      intro: "The library will be a curated collection of real-world examples—from thriving ecovillages to worker cooperatives, from neighborhood tool libraries to digital commons platforms.",
      comingSoon: "Coming in Phase 2",
      plannedContent: {
        title: "What's Coming",
        categories: [
          {
            title: "Local Models",
            icon: "🏘️",
            examples: [
              "Housing cooperatives",
              "Community land trusts",
              "Tool libraries and repair cafés",
              "Time banking systems",
              "Neighborhood mutual aid networks"
            ]
          },
          {
            title: "Digital Commons",
            icon: "💻",
            examples: [
              "Open-source software collectives",
              "Platform cooperatives",
              "Federated social networks",
              "Community data trusts",
              "Wikipedia and knowledge commons"
            ]
          },
          {
            title: "Ecological Models",
            icon: "🌱",
            examples: [
              "Community gardens and food forests",
              "Watershed councils",
              "Bioregional governance",
              "Community-supported agriculture",
              "Rewilding collectives"
            ]
          },
          {
            title: "Governance Patterns",
            icon: "⚖️",
            examples: [
              "Sociocracy and consent-based decision making",
              "Participatory budgeting",
              "Rotating leadership models",
              "Indigenous governance structures",
              "Conflict transformation practices"
            ]
          }
        ]
      },
      practicalGuides: {
        title: "Step-by-Step Guides",
        description: "Each case study will include practical guidance:",
        items: [
          "How it started and evolved",
          "Key principles and structures",
          "What worked and what didn't",
          "Resources and templates used",
          "How to adapt it to your context"
        ]
      },
      contribute: {
        title: "Share Your Story",
        text: "Are you part of a thriving commons? Have you started a cooperative, community garden, or mutual aid network? We'd love to feature your story in the library.",
        button: "Submit a Case Study"
      }
    },
    sv: {
      title: "Modeller & Praxis Bibliotek",
      subtitle: "Fallstudier och praktiska guider för kommunisering",
      intro: "Biblioteket kommer att vara en kurerad samling av verkliga exempel—från blomstrande ekobyar till arbetarkooperativ, från grannverktygsbibliotek till digitala allmänningsplattformar.",
      comingSoon: "Kommer i Fas 2",
      plannedContent: {
        title: "Vad Som Kommer",
        categories: [
          {
            title: "Lokala Modeller",
            icon: "🏘️",
            examples: [
              "Bostadskooperativ",
              "Samhällsmarkstiftelser",
              "Verktygsbibliotek och reparationscaféer",
              "Tidsbankssystem",
              "Grannskap ömsesidig hjälpnätverk"
            ]
          },
          {
            title: "Digitala Allmänningar",
            icon: "💻",
            examples: [
              "Öppen källkod-kollektiv",
              "Plattformskooperativ",
              "Federerade sociala nätverk",
              "Gemenskapsdatastiftelser",
              "Wikipedia och kunskapsallmänningar"
            ]
          },
          {
            title: "Ekologiska Modeller",
            icon: "🌱",
            examples: [
              "Gemenskapsträdgårdar och matskogar",
              "Vattendelarråd",
              "Bioregional styrning",
              "Gemenskapsstödd jordbruk",
              "Återvildningskollektiv"
            ]
          },
          {
            title: "Styrningsmönster",
            icon: "⚖️",
            examples: [
              "Sociokrati och samtycksbaserat beslutsfattande",
              "Deltagande budgetering",
              "Roterande ledarskapsmodeller",
              "Urfolksstyrningsstrukturer",
              "Konflikttransformationspraxis"
            ]
          }
        ]
      },
      practicalGuides: {
        title: "Steg-för-Steg Guider",
        description: "Varje fallstudie kommer att innehålla praktisk vägledning:",
        items: [
          "Hur det började och utvecklades",
          "Nyckelprinciper och strukturer",
          "Vad som fungerade och inte fungerade",
          "Resurser och mallar som användes",
          "Hur man anpassar det till ditt sammanhang"
        ]
      },
      contribute: {
        title: "Dela Din Historia",
        text: "Är du en del av en blomstrande allmänning? Har du startat ett kooperativ, gemenskapsträdgård eller ömsesidig hjälpnätverk? Vi skulle älska att presentera din historia i biblioteket.",
        button: "Skicka in en Fallstudie"
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

    <!-- Categories Grid -->
    <div class="mb-12">
      <h2 class="text-2xl font-serif mb-6 text-earth-900">
        {t.plannedContent.title}
      </h2>
      <div class="grid md:grid-cols-2 gap-6">
        {#each t.plannedContent.categories as category}
          <div class="bg-white rounded-lg p-6 border-2 border-earth-200">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">{category.icon}</span>
              <h3 class="text-xl font-serif text-earth-900">
                {category.title}
              </h3>
            </div>
            <ul class="space-y-2">
              {#each category.examples as example}
                <li class="flex items-start text-earth-700 text-sm">
                  <span class="text-moss-600 mr-2">•</span>
                  <span>{example}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <!-- Practical Guides Section -->
    <div class="mb-12 bg-earth-50 rounded-xl p-8">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {t.practicalGuides.title}
      </h2>
      <p class="text-earth-700 mb-4">
        {t.practicalGuides.description}
      </p>
      <ul class="space-y-2">
        {#each t.practicalGuides.items as item}
          <li class="flex items-start text-earth-700">
            <span class="text-moss-600 mr-3">✓</span>
            <span>{item}</span>
          </li>
        {/each}
      </ul>
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
