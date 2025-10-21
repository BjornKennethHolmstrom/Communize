<!-- /src/routes/toolkit/agreements/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';
  import { base } from '$app/paths';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Agreement templates",
      subtitle: "Ready-to-use templates for communal agreements and governance",
      intro: "These templates provide starting points for creating agreements in your community. Adapt them to your specific context, legal requirements, and values.",
      downloadMarkdown: "Download Markdown",
      downloadPDF: "Download PDF",
      preview: "Preview",
      categories: {
        resource: "Resource sharing",
        governance: "Governance & decision-making",
        financial: "Financial agreements",
        space: "Shared space",
        conflict: "Conflict resolution"
      },
      backToToolkit: "Back to toolkit",
      comingSoon: "Coming soon",
      templates: {
        toolLibrary: {
          title: "Tool library agreement",
          description: "Template for establishing and managing a community tool lending library",
          category: "resource"
        },
        sharedHousing: {
          title: "Shared housing agreement",
          description: "Framework for co-housing or intentional community living arrangements",
          category: "space"
        },
        consensusProcess: {
          title: "Consensus decision-making",
          description: "Guide for implementing consensus-based decision making in groups",
          category: "governance"
        },
        financialTransparency: {
          title: "Financial transparency agreement",
          description: "Template for shared financial management and accountability",
          category: "financial"
        },
        conflictResolution: {
          title: "Conflict resolution process",
          description: "Step-by-step framework for addressing conflicts in community",
          category: "conflict"
        },
        communityGarden: {
          title: "Community garden charter",
          description: "Agreement template for managing shared garden spaces",
          category: "resource"
        },
        timeBank: {
          title: "Time banking agreement",
          description: "Framework for establishing time-based exchange systems",
          category: "financial"
        },
        sharedWorkspace: {
          title: "Co-working space agreement",
          description: "Template for shared workspace use and maintenance",
          category: "space"
        }
      }
    },
    sv: {
      title: "Avtalsmallar",
      subtitle: "Färdiga mallar för gemensamma avtal och styrning",
      intro: "Dessa mallar ger utgångspunkter för att skapa avtal i din gemenskap. Anpassa dem till ditt specifika sammanhang, juridiska krav och värderingar.",
      downloadMarkdown: "Ladda ner Markdown",
      downloadPDF: "Ladda ner PDF",
      preview: "Förhandsgranska",
      categories: {
        resource: "Resursdelning",
        governance: "Styrning & beslutsfattande",
        financial: "Finansiella avtal",
        space: "Delat utrymme",
        conflict: "Konfliktlösning"
      },
      backToToolkit: "Tillbaka till verktygslåda",
      comingSoon: "Kommer snart",
      templates: {
        toolLibrary: {
          title: "Verktygsbiblioteksavtal",
          description: "Mall för att etablera och hantera ett gemenskapsverktygsbibliotek",
          category: "resource"
        },
        sharedHousing: {
          title: "Delat bostadsavtal",
          description: "Ramverk för samboende eller avsiktliga gemenskapsarrangemang",
          category: "space"
        },
        consensusProcess: {
          title: "Konsensusbeslutsfattande",
          description: "Guide för att implementera konsensusbaserat beslutsfattande i grupper",
          category: "governance"
        },
        financialTransparency: {
          title: "Finansiell transparensavtal",
          description: "Mall för delad finansiell förvaltning och ansvarsskyldighet",
          category: "financial"
        },
        conflictResolution: {
          title: "Konfliktlösningsprocess",
          description: "Steg-för-steg ramverk för att hantera konflikter i gemenskap",
          category: "conflict"
        },
        communityGarden: {
          title: "Gemenskapsträdgårdsstadga",
          description: "Avtalsmall för förvaltning av delade trädgårdsutrymmen",
          category: "resource"
        },
        timeBank: {
          title: "Tidsbanksavtal",
          description: "Ramverk för att etablera tidsbaserade utbytessystem",
          category: "financial"
        },
        sharedWorkspace: {
          title: "Co-working-utrymmesavtal",
          description: "Mall för användning och underhåll av delat arbetsområde",
          category: "space"
        }
      }
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);

  let selectedCategory = $state<string>('all');

  const categories = $derived([
    { id: 'all', label: currentLanguage === 'en' ? 'All templates' : 'Alla mallar' },
    { id: 'resource', label: t.categories.resource },
    { id: 'governance', label: t.categories.governance },
    { id: 'financial', label: t.categories.financial },
    { id: 'space', label: t.categories.space },
    { id: 'conflict', label: t.categories.conflict }
  ]);

  const templates = $derived(Object.entries(t.templates).map(([key, value]) => ({
    id: key,
    ...value
  })));

  const filteredTemplates = $derived(
    selectedCategory === 'all' 
      ? templates 
      : templates.filter(t => t.category === selectedCategory)
  );

  function getCategoryColor(category: string): string {
    const colors = {
      resource: 'bg-moss-100 text-moss-800 border-moss-300',
      governance: 'bg-earth-100 text-earth-800 border-earth-300',
      financial: 'bg-clay-100 text-clay-800 border-clay-300',
      space: 'bg-amber-100 text-amber-800 border-amber-300',
      conflict: 'bg-stone-100 text-stone-800 border-stone-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-300';
  }

  const templateFiles = {
    toolLibrary: 'tool-library-agreement',
    sharedHousing: 'shared-housing-agreement',
    consensusProcess: 'consensus-decision-making-guide',
    financialTransparency: 'financial-transparency-agreement',
    conflictResolution: 'conflict-resolution-process',
    communityGarden: 'community-garden-charter',
    timeBank: 'time-banking-agreement',
    sharedWorkspace: 'co-working-space-agreement'
  };

  function downloadTemplate(templateId: string, format: 'md' | 'pdf') {
    const fileName = templateFiles[templateId];
    if (!fileName) {
      console.error('Template not found:', templateId);
      return;
    }

    // Download the file
    const lang = currentLanguage === 'sv' ? 'sv' : 'en';
    const extension = format === 'pdf' ? 'pdf' : 'md';
    const url = `${base}/templates/${lang}/${fileName}.${extension}`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.${extension}`;
    a.click();
  }
</script>

<svelte:head>
  <title>{t.title} | Communize</title>
  <meta name="description" content={t.subtitle} />
</svelte:head>

{#key currentLanguage}
<div class="min-h-screen bg-gradient-to-br from-earth-50 to-moss-50" in:fade>
  <!-- Breadcrumb -->
  <nav class="max-w-6xl mx-auto px-4 pt-8 pb-4 text-sm">
    <ol class="flex items-center gap-2 text-earth-600">
      <li>
        <a href="{base}/toolkit" class="hover:text-moss-600 transition-colors">
          {t.backToToolkit}
        </a>
      </li>
      <li class="text-earth-400">/</li>
      <li class="text-earth-900">{t.title}</li>
    </ol>
  </nav>

  <div class="max-w-6xl mx-auto px-4 pb-16">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div class="flex items-center gap-3 mb-6">
        <svg class="w-8 h-8 text-moss-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <div>
          <h1 class="text-3xl font-serif text-earth-900">{t.title}</h1>
          <p class="text-earth-600">{t.subtitle}</p>
        </div>
      </div>

      <div class="bg-moss-50 border border-moss-200 rounded-lg p-4">
        <p class="text-sm text-earth-700">
          {t.intro}
        </p>
      </div>
    </div>

    <!-- Category Filter -->
    <div class="mb-6 flex flex-wrap gap-2">
      {#each categories as category}
        <button
          onclick={() => selectedCategory = category.id}
          class="px-4 py-2 rounded-lg transition-all {
            selectedCategory === category.id
              ? 'bg-moss-600 text-white shadow-md'
              : 'bg-white text-earth-700 hover:bg-moss-50 border border-earth-200'
          }"
        >
          {category.label}
        </button>
      {/each}
    </div>

    <!-- Templates Grid -->
    <div class="grid md:grid-cols-2 gap-6">
      {#each filteredTemplates as template (template.id)}
        <div class="bg-white rounded-xl shadow-lg p-6 border-2 border-earth-200 hover:border-moss-300 transition-all">
          <div class="mb-4">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-xl font-serif text-earth-900">
                {template.title}
              </h3>
              <span class="px-2 py-1 text-xs rounded-full border {getCategoryColor(template.category)}">
                {t.categories[template.category]}
              </span>
            </div>
            <p class="text-sm text-earth-700">
              {template.description}
            </p>
          </div>

          <div class="flex flex-wrap gap-2">
            <button
              onclick={() => downloadTemplate(template.id, 'md')}
              class="flex items-center gap-2 px-3 py-2 bg-earth-700 hover:bg-earth-800 text-white rounded-lg transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.downloadMarkdown}
            </button>
            <button
              onclick={() => downloadTemplate(template.id, 'pdf')}
              class="flex items-center gap-2 px-3 py-2 border-2 border-earth-300 hover:border-earth-400 text-earth-700 rounded-lg transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {t.downloadPDF}
            </button>
          </div>
        </div>
      {/each}
    </div>

    <!-- Info Box -->
    <div class="mt-8 bg-white rounded-xl shadow-lg p-6 border-2 border-moss-200">
      <h3 class="text-lg font-serif text-earth-900 mb-3">
        {currentLanguage === 'en' ? 'How to use these templates' : 'Hur du använder dessa mallar'}
      </h3>
      <ul class="space-y-2 text-sm text-earth-700">
        <li class="flex items-start gap-2">
          <span class="text-moss-600 mt-1">•</span>
          <span>{currentLanguage === 'en' 
            ? 'Download the Markdown version to edit in any text editor' 
            : 'Ladda ner Markdown-versionen för att redigera i valfri textredigerare'}</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-moss-600 mt-1">•</span>
          <span>{currentLanguage === 'en' 
            ? 'Adapt the template to your specific context and local laws' 
            : 'Anpassa mallen till ditt specifika sammanhang och lokala lagar'}</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-moss-600 mt-1">•</span>
          <span>{currentLanguage === 'en' 
            ? 'Review with all parties involved before finalizing' 
            : 'Granska med alla berörda parter innan slutförande'}</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-moss-600 mt-1">•</span>
          <span>{currentLanguage === 'en' 
            ? 'Consider consulting legal counsel for binding agreements' 
            : 'Överväg att rådfråga juridisk rådgivare för bindande avtal'}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
{/key}
