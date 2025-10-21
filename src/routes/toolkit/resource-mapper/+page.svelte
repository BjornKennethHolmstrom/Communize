<!-- /src/routes/toolkit/resource-mapper/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { browser } from '$app/environment';
  import languageStore from '$lib/stores/languageStore';
  import { base } from '$app/paths';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Community Resource Mapper",
      subtitle: "Map and catalog your local shared resources",
      howToUse: "How to use:",
      instructions: "Add your community's shared resources below. Your data is automatically saved in your browser and persists between visits.",
      resourceName: "Resource Name",
      type: "Type",
      location: "Location",
      contact: "Contact",
      description: "Description",
      selectType: "Select type...",
      addResource: "Add Resource",
      yourResources: "Your resources",
      downloadCSV: "Download CSV",
      printMap: "Print map",
      clearAll: "Clear all",
      confirmClear: "Are you sure you want to clear all resources? This cannot be undone.",
      noResources: "No resources added yet. Start mapping your community's commons above!",
      required: "*",
      namePlaceholder: "e.g., Oak Street Tool Library",
      locationPlaceholder: "e.g., 123 Main St or North Side",
      contactPlaceholder: "email or phone",
      descriptionPlaceholder: "Brief description of the resource...",
      backToToolkit: "Back to toolkit",
      dataSaved: "Data automatically saved"
    },
    sv: {
      title: "Gemenskapsresurskarta",
      subtitle: "Kartlägg och katalogisera dina lokala delade resurser",
      howToUse: "Hur du använder:",
      instructions: "Lägg till dina gemenskapsresurser nedan. Din data sparas automatiskt i din webbläsare och finns kvar mellan besök.",
      resourceName: "Resursnamn",
      type: "Typ",
      location: "Plats",
      contact: "Kontakt",
      description: "Beskrivning",
      selectType: "Välj typ...",
      addResource: "Lägg till resurs",
      yourResources: "Dina resurser",
      downloadCSV: "Ladda ner CSV",
      printMap: "Skriv ut karta",
      clearAll: "Rensa allt",
      confirmClear: "Är du säker på att du vill rensa alla resurser? Detta kan inte ångras.",
      noResources: "Inga resurser tillagda än. Börja kartlägga din gemenskaps allmänningar ovan!",
      required: "*",
      namePlaceholder: "t.ex., Ekgatan verktygsbibliotek",
      locationPlaceholder: "t.ex., Ekgatan 123 eller Norra sidan",
      contactPlaceholder: "e-post eller telefon",
      descriptionPlaceholder: "Kort beskrivning av resursen...",
      backToToolkit: "Tillbaka till verktygslåda",
      dataSaved: "Data sparas automatiskt"
    }
  };

  const resourceTypes = {
    en: [
      'Tool Library',
      'Community Garden',
      'Skill Share',
      'Time Bank',
      'Food Co-op',
      'Repair Café',
      'Makerspace',
      'Free Store',
      'Community Center',
      'Other'
    ],
    sv: [
      'Verktygsbibliotek',
      'Gemenskapsträdgård',
      'Färdighetsdelning',
      'Tidsbank',
      'Matkooperativ',
      'Reparationscafé',
      'Makerspace',
      'Gratis-butik',
      'Gemenskapscenter',
      'Annat'
    ]
  };

  const t = $derived(translations[currentLanguage] || translations.en);
  const types = $derived(resourceTypes[currentLanguage] || resourceTypes.en);

  const STORAGE_KEY = 'communize_resource_mapper_data';

  // Load initial data from localStorage
  function loadFromStorage(): Array<{
    id: number;
    name: string;
    type: string;
    location: string;
    description: string;
    contact: string;
  }> {
    if (!browser) return [];
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load resources from localStorage:', e);
    }
    return [];
  }

  // Save to localStorage
  function saveToStorage(data: typeof resources) {
    if (!browser) return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save resources to localStorage:', e);
    }
  }

  let resources = $state<Array<{
    id: number;
    name: string;
    type: string;
    location: string;
    description: string;
    contact: string;
  }>>(loadFromStorage());

  let currentResource = $state({
    name: '',
    type: '',
    location: '',
    description: '',
    contact: ''
  });

  let showSavedIndicator = $state(false);

  // Watch for changes and save
  $effect(() => {
    // This effect runs whenever resources changes
    if (browser && resources.length >= 0) {
      saveToStorage(resources);
      
      // Show saved indicator briefly
      showSavedIndicator = true;
      setTimeout(() => {
        showSavedIndicator = false;
      }, 2000);
    }
  });

  function addResource() {
    if (currentResource.name && currentResource.type) {
      resources = [...resources, { ...currentResource, id: Date.now() }];
      currentResource = {
        name: '',
        type: '',
        location: '',
        description: '',
        contact: ''
      };
    }
  }

  function removeResource(id: number) {
    resources = resources.filter(r => r.id !== id);
  }

  function clearAll() {
    if (confirm(t.confirmClear)) {
      resources = [];
    }
  }

  function downloadCSV() {
    const headers = [t.resourceName, t.type, t.location, t.description, t.contact];
    const rows = resources.map(r => [
      r.name,
      r.type,
      r.location,
      r.description,
      r.contact
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'community-resources.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  function printMap() {
    window.print();
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
    <!-- Saved Indicator -->
    {#if showSavedIndicator && resources.length > 0}
      <div class="fixed top-20 right-4 bg-moss-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in-out">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-sm">{t.dataSaved}</span>
      </div>
    {/if}

    <!-- Header Card -->
    <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div class="flex items-center gap-3 mb-6">
        <svg class="w-8 h-8 text-moss-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <div>
          <h1 class="text-3xl font-serif text-earth-900">{t.title}</h1>
          <p class="text-earth-600">{t.subtitle}</p>
        </div>
      </div>

      <div class="bg-moss-50 border border-moss-200 rounded-lg p-4 mb-6">
        <p class="text-sm text-earth-700">
          <strong>{t.howToUse}</strong> {t.instructions}
        </p>
      </div>

      <!-- Add Resource Form -->
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block text-sm font-medium text-earth-700 mb-1">
            {t.resourceName} <span class="text-clay-600">{t.required}</span>
          </label>
          <input
            type="text"
            bind:value={currentResource.name}
            class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent"
            placeholder={t.namePlaceholder}
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-earth-700 mb-1">
            {t.type} <span class="text-clay-600">{t.required}</span>
          </label>
          <select
            bind:value={currentResource.type}
            class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent"
          >
            <option value="">{t.selectType}</option>
            {#each types as type}
              <option value={type}>{type}</option>
            {/each}
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-earth-700 mb-1">
            {t.location}
          </label>
          <input
            type="text"
            bind:value={currentResource.location}
            class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent"
            placeholder={t.locationPlaceholder}
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-earth-700 mb-1">
            {t.contact}
          </label>
          <input
            type="text"
            bind:value={currentResource.contact}
            class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent"
            placeholder={t.contactPlaceholder}
          />
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-earth-700 mb-1">
            {t.description}
          </label>
          <textarea
            bind:value={currentResource.description}
            class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent"
            rows="2"
            placeholder={t.descriptionPlaceholder}
          />
        </div>
      </div>

      <button
        onclick={addResource}
        class="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-moss-600 hover:bg-moss-700 text-white rounded-lg transition-colors font-medium"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        {t.addResource}
      </button>
    </div>

    <!-- Resources List -->
    {#if resources.length > 0}
      <div class="bg-white rounded-xl shadow-lg p-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 class="text-2xl font-serif text-earth-900">
            {t.yourResources} ({resources.length})
          </h2>
          <div class="flex flex-wrap gap-3">
            <button
              onclick={downloadCSV}
              class="flex items-center gap-2 px-4 py-2 bg-earth-700 hover:bg-earth-800 text-white rounded-lg transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.downloadCSV}
            </button>
            <button
              onclick={printMap}
              class="flex items-center gap-2 px-4 py-2 border-2 border-earth-300 hover:border-earth-400 text-earth-700 rounded-lg transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              {t.printMap}
            </button>
            <button
              onclick={clearAll}
              class="flex items-center gap-2 px-4 py-2 border-2 border-clay-300 hover:border-clay-400 text-clay-700 rounded-lg transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              {t.clearAll}
            </button>
          </div>
        </div>

        <div class="space-y-4">
          {#each resources as resource (resource.id)}
            <div class="border border-earth-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex flex-wrap items-center gap-3 mb-2">
                    <h3 class="text-lg font-semibold text-earth-800">
                      {resource.name}
                    </h3>
                    <span class="px-2 py-1 bg-moss-100 text-moss-800 text-xs rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  {#if resource.location}
                    <p class="text-sm text-earth-600 mb-1">
                      📍 {resource.location}
                    </p>
                  {/if}
                  {#if resource.description}
                    <p class="text-sm text-earth-700 mb-2">
                      {resource.description}
                    </p>
                  {/if}
                  {#if resource.contact}
                    <p class="text-sm text-earth-600">
                      {t.contact}: {resource.contact}
                    </p>
                  {/if}
                </div>
                <button
                  onclick={() => removeResource(resource.id)}
                  class="ml-4 p-2 text-clay-600 hover:bg-clay-50 rounded-lg transition-colors"
                  aria-label="Remove resource"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <div class="bg-white rounded-xl shadow-lg p-12 text-center">
        <svg class="w-16 h-16 text-earth-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p class="text-earth-500">
          {t.noResources}
        </p>
      </div>
    {/if}
  </div>
</div>
{/key}

<style>
  @media print {
    nav, button {
      display: none;
    }
  }

  @keyframes fade-in-out {
    0% { opacity: 0; transform: translateY(-10px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10px); }
  }

  .animate-fade-in-out {
    animation: fade-in-out 2s ease-in-out;
  }
</style>
