<!-- src/routes/toolkit/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "The Communize Toolkit",
      subtitle: "Practical resources for building and sustaining commons",
      intro: "Open-source tools and templates to help you start communizing in your own context—from mapping resources to creating agreements.",
      
      availableNow: "Available Now",
      comingSoon: "Coming in Future Phases",
      explore: "Explore",
      
      tools: {
        agreements: {
          title: "Agreement Templates",
          description: "Downloadable templates for resource-sharing agreements, governance documents, and conflict resolution frameworks.",
          link: "/toolkit/agreements"
        },
        resourceMapper: {
          title: "Resource Mapper",
          description: "A simple tool to catalog and map your local shared resources—tool libraries, community gardens, skill-sharing networks, and more.",
          link: "/toolkit/resource-mapper"
        },
        worksheets: {
          title: "DIY Worksheets",
          description: "Printable worksheets for community asset mapping, project planning, meeting facilitation, and decision-making processes.",
          link: "/toolkit/worksheets"
        },
        toolsDirectory: {
          title: "Tools Directory",
          description: "Curated reviews and guides for external platforms—Loomio, Cobudget, and other open-source collaboration tools.",
          link: "/toolkit/tools"
        }
      },
      
      future: {
        title: "Future Additions",
        items: [
          {
            title: "Facilitation Guides",
            description: "Step-by-step guides for running community meetings, consensus processes, and decision-making sessions."
          },
          {
            title: "Assessment Tools",
            description: "Self-assessment frameworks for measuring community health, participation, and resilience."
          },
          {
            title: "Case Study Templates",
            description: "Frameworks for documenting and sharing your community's story and learnings."
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
      title: "Communize verktygslåda",
      subtitle: "Praktiska resurser för att bygga och upprätthålla allmänningar",
      intro: "Verktyg och mallar med öppen källkod för att hjälpa dig börja kommunisera i ditt eget sammanhang—från att kartlägga resurser till att skapa avtal.",
      
      availableNow: "Tillgängligt nu",
      comingSoon: "Kommer i framtida faser",
      explore: "Utforska",
      
      tools: {
        agreements: {
          title: "Avtalsmallar",
          description: "Nedladdningsbara mallar för resursdelningsavtal, styrningsdokument och konfliktlösningsramverk.",
          link: "/toolkit/agreements"
        },
        resourceMapper: {
          title: "Resurskartläggare",
          description: "Ett enkelt verktyg för att katalogisera och kartlägga dina lokala delade resurser—verktygsbibliotek, gemenskapsodlingar, färdighetsdelningsnätverk och mer.",
          link: "/toolkit/resource-mapper"
        },
        worksheets: {
          title: "Gör-det-själv arbetsblad",
          description: "Utskrivbara arbetsblad för gemenskapstillgångskartläggning, projektplanering, mötesfacilitering och beslutsprocesser.",
          link: "/toolkit/worksheets"
        },
        toolsDirectory: {
          title: "Verktygskatalog",
          description: "Kurerade recensioner och guider för externa plattformar—Loomio, Cobudget och andra samarbetsverktyg med öppen källkod.",
          link: "/toolkit/tools"
        }
      },
      
      future: {
        title: "Framtida tillägg",
        items: [
          {
            title: "Faciliteringsguider",
            description: "Steg-för-steg guider för att hålla gemenskapsmöten, konsensusprocesser och beslutsfattande sessioner."
          },
          {
            title: "Bedömningsverktyg",
            description: "Självbedömningsramverk för att mäta gemenskapens hälsa, deltagande och motståndskraft."
          },
          {
            title: "Fallstudiemallar",
            description: "Ramverk för att dokumentera och dela din gemenskaps berättelse och lärdomar."
          }
        ]
      },
      
      contribute: {
        title: "Hjälp till att bygga detta",
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
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {t.title}
      </h1>
      <p class="text-xl text-earth-600 font-light max-w-2xl mx-auto mb-4">
        {t.subtitle}
      </p>
      <p class="text-earth-700 max-w-2xl mx-auto">
        {t.intro}
      </p>
    </div>

    <!-- Available Tools -->
    <div class="mb-12">
      <div class="flex items-center gap-2 mb-6">
        <h2 class="text-2xl font-serif text-earth-900">
          {t.availableNow}
        </h2>
        <span class="px-3 py-1 bg-moss-100 text-moss-700 rounded-full text-xs font-medium">
          Phase 1
        </span>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        {#each Object.entries(t.tools) as [key, tool]}
          <a
            href="{base}{tool.link}"
            class="bg-white rounded-lg p-6 border-2 border-earth-200 hover:border-moss-300 hover:shadow-lg transition-all group"
          >
            <div class="flex items-start gap-4">
              <div class="p-3 bg-moss-50 rounded-lg group-hover:bg-moss-100 transition-colors">
                {#if key === 'agreements'}
                  <svg class="w-6 h-6 text-moss-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                {:else if key === 'resourceMapper'}
                  <svg class="w-6 h-6 text-moss-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                {:else if key === 'worksheets'}
                  <svg class="w-6 h-6 text-moss-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                {:else if key === 'toolsDirectory'}
                  <svg class="w-6 h-6 text-moss-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                {/if}
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-earth-900 mb-2 group-hover:text-moss-700 transition-colors">
                  {tool.title}
                </h3>
                <p class="text-earth-700 text-sm mb-3">
                  {tool.description}
                </p>
                <div class="flex items-center text-moss-600 text-sm font-medium group-hover:text-moss-700">
                  <span>{t.explore}</span>
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>

    <!-- Future Additions -->
    <div class="mb-12">
      <div class="flex items-center gap-2 mb-6">
        <h2 class="text-2xl font-serif text-earth-900">
          {t.future.title}
        </h2>
        <span class="px-3 py-1 bg-clay-100 text-clay-700 rounded-full text-xs font-medium">
          {t.comingSoon}
        </span>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6">
        {#each t.future.items as item}
          <div class="bg-white/60 rounded-lg p-6 border-2 border-earth-100">
            <h3 class="text-lg font-semibold text-earth-800 mb-2">
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
      <svg class="w-12 h-12 text-moss-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
