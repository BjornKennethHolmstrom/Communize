<!-- /src/routes/toolkit/worksheets/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import AssetMapping from '$lib/components/worksheets/AssetMapping.svelte';
  import ProjectPlanning from '$lib/components/worksheets/ProjectPlanning.svelte';
  import MeetingAgenda from '$lib/components/worksheets/MeetingAgenda.svelte';
  import DecisionMaking from '$lib/components/worksheets/DecisionMaking.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "DIY worksheets",
      subtitle: "Interactive forms that generate printable PDFs for community planning",
      intro: "Fill out these worksheets online, then download or print them for your community meetings and planning sessions.",
      selectWorksheet: "Select a worksheet type:",
      worksheetTypes: {
        assetMapping: {
          title: "Community asset mapping",
          description: "Identify and catalog your community's resources, skills, and strengths"
        },
        projectPlanning: {
          title: "Project planning canvas",
          description: "Plan community projects from vision to implementation"
        },
        meetingAgenda: {
          title: "Meeting facilitator guide",
          description: "Structure and facilitate effective community meetings"
        },
        decisionMaking: {
          title: "Decision-making worksheet",
          description: "Guide groups through important decisions systematically"
        }
      },
      backToToolkit: "Back to toolkit",
      fillOutForm: "Fill out the form below:",
      generatePDF: "Generate PDF",
      downloadPDF: "Download PDF",
      print: "Print",
      reset: "Reset form"
    },
    sv: {
      title: "Gör-det-själv arbetsblad",
      subtitle: "Interaktiva formulär som genererar utskrivbara PDF:er för gemenskapsplanering",
      intro: "Fyll i dessa arbetsblad online och ladda sedan ner eller skriv ut dem för dina gemenskapsmöten och planeringssessioner.",
      selectWorksheet: "Välj en arbetsbladstyp:",
      worksheetTypes: {
        assetMapping: {
          title: "Gemenskapstillgångskartläggning",
          description: "Identifiera och katalogisera din gemenskaps resurser, färdigheter och styrkor"
        },
        projectPlanning: {
          title: "Projektplaneringscanvas",
          description: "Planera gemenskapsprojekt från vision till genomförande"
        },
        meetingAgenda: {
          title: "Mötesunderlättarguide",
          description: "Strukturera och underlätta effektiva gemenskapsmöten"
        },
        decisionMaking: {
          title: "Beslutsfattande arbetsblad",
          description: "Vägleda grupper genom viktiga beslut systematiskt"
        }
      },
      backToToolkit: "Tillbaka till verktygslåda",
      fillOutForm: "Fyll i formuläret nedan:",
      generatePDF: "Generera PDF",
      downloadPDF: "Ladda ner PDF",
      print: "Skriv ut",
      reset: "Återställ formulär"
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);

  let selectedWorksheet = $state<string>('');
  let showForm = $derived(selectedWorksheet !== '');

  const worksheetOptions = $derived([
    { id: 'assetMapping', ...t.worksheetTypes.assetMapping },
    { id: 'projectPlanning', ...t.worksheetTypes.projectPlanning },
    { id: 'meetingAgenda', ...t.worksheetTypes.meetingAgenda },
    { id: 'decisionMaking', ...t.worksheetTypes.decisionMaking }
  ]);

  function selectWorksheet(id: string) {
    selectedWorksheet = id;
  }

  function generatePDF() {
    window.print();
  }

  function resetForm() {
    if (confirm(currentLanguage === 'en' ? 'Reset this form? All data will be lost.' : 'Återställa detta formulär? All data kommer att förloras.')) {
      // Dispatch a custom event that the worksheet component can listen to
      window.dispatchEvent(new CustomEvent('reset-worksheet'));
    }
  }
</script>

<svelte:head>
  <title>{t.title} | Communize</title>
  <meta name="description" content={t.subtitle} />
</svelte:head>

{#key currentLanguage}
<div class="min-h-screen bg-gradient-to-br from-earth-50 to-moss-50" in:fade>
  <!-- Breadcrumb -->
  <nav class="max-w-6xl mx-auto px-4 pt-8 pb-4 text-sm no-print">
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
    {#if !showForm}
      <!-- Worksheet Selection -->
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

        <div class="bg-moss-50 border border-moss-200 rounded-lg p-4 mb-8">
          <p class="text-sm text-earth-700">
            {t.intro}
          </p>
        </div>

        <h2 class="text-xl font-serif text-earth-900 mb-4">{t.selectWorksheet}</h2>

        <div class="grid md:grid-cols-2 gap-4">
          {#each worksheetOptions as worksheet}
            <button
              onclick={() => selectWorksheet(worksheet.id)}
              class="text-left bg-gradient-to-br from-earth-50 to-moss-50 rounded-lg p-6 border-2 border-earth-200 hover:border-moss-400 hover:shadow-md transition-all group"
            >
              <h3 class="text-lg font-serif text-earth-900 mb-2 group-hover:text-moss-700 transition-colors">
                {worksheet.title}
              </h3>
              <p class="text-sm text-earth-700">
                {worksheet.description}
              </p>
              <div class="mt-3 text-moss-600 font-medium text-sm group-hover:text-moss-700">
                {currentLanguage === 'en' ? 'Get started →' : 'Kom igång →'}
              </div>
            </button>
          {/each}
        </div>
      </div>
    {:else}
      <!-- Action Buttons (No Print) -->
      <div class="bg-white rounded-xl shadow-lg p-4 mb-4 no-print flex gap-3 justify-between items-center">
        <button
          onclick={() => selectedWorksheet = ''}
          class="px-4 py-2 text-earth-700 hover:bg-earth-50 rounded-lg transition-colors"
        >
          ← {currentLanguage === 'en' ? 'Back to selection' : 'Tillbaka till val'}
        </button>
        <div class="flex gap-3">
          <button
            onclick={resetForm}
            class="px-4 py-2 border-2 border-earth-300 hover:border-earth-400 text-earth-700 rounded-lg transition-colors"
          >
            {t.reset}
          </button>
          <button
            onclick={generatePDF}
            class="flex items-center gap-2 px-6 py-2 bg-moss-600 hover:bg-moss-700 text-white rounded-lg transition-colors font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            {t.print}
          </button>
        </div>
      </div>

      <!-- Worksheet Content -->
      {#if selectedWorksheet === 'assetMapping'}
        <AssetMapping />
      {:else if selectedWorksheet === 'projectPlanning'}
        <ProjectPlanning />
      {:else if selectedWorksheet === 'meetingAgenda'}
        <MeetingAgenda />
      {:else if selectedWorksheet === 'decisionMaking'}
        <DecisionMaking />
      {/if}
    {/if}
  </div>
</div>
{/key}

<style>
  @media print {
    .no-print {
      display: none !important;
    }
    
    :global(body) {
      background: white !important;
    }
  }
</style>
