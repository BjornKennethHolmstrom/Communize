<!-- /src/lib/components/worksheets/AssetMapping.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import languageStore from '$lib/stores/languageStore';

  const { language } = languageStore;
  const currentLanguage = $derived($language);

  const translations = {
    en: {
      title: "Community asset mapping worksheet",
      subtitle: "Identify and catalog your community's resources, skills, and strengths",
      sections: {
        basic: {
          title: "Basic information",
          communityName: "Community/Neighborhood name:",
          date: "Date:",
          facilitator: "Facilitator(s):",
          participants: "Participants:"
        },
        physical: {
          title: "Physical assets",
          description: "Buildings, spaces, and infrastructure",
          examples: "Examples: Community centers, parks, gardens, libraries, schools, churches"
        },
        economic: {
          title: "Economic assets",
          description: "Businesses, employment, and financial resources",
          examples: "Examples: Local businesses, co-ops, credit unions, employment programs"
        },
        human: {
          title: "Human assets (skills & knowledge)",
          description: "Individual and collective talents",
          examples: "Examples: Languages spoken, professional skills, crafts, life experience"
        },
        social: {
          title: "Social assets (networks & relationships)",
          description: "Groups, organizations, and connections",
          examples: "Examples: Clubs, associations, informal networks, cultural groups"
        },
        cultural: {
          title: "Cultural assets",
          description: "Traditions, heritage, and creative expression",
          examples: "Examples: Festivals, art, music, storytelling, cultural practices"
        },
        natural: {
          title: "Natural assets",
          description: "Environmental and ecological resources",
          examples: "Examples: Water sources, forests, wildlife, clean air, green spaces"
        },
        priorities: {
          title: "Priority assets to strengthen",
          description: "Which assets should we focus on developing or protecting?"
        },
        gaps: {
          title: "Missing assets / needs",
          description: "What's lacking in our community that we wish we had?"
        },
        nextSteps: {
          title: "Next steps",
          description: "How will we use this information?"
        }
      },
      placeholder: "List assets here (one per line or separated by commas)..."
    },
    sv: {
      title: "Gemenskapstillgångskartläggning arbetsblad",
      subtitle: "Identifiera och katalogisera din gemenskaps resurser, färdigheter och styrkor",
      sections: {
        basic: {
          title: "Grundläggande information",
          communityName: "Gemenskaps-/Grannnamn:",
          date: "Datum:",
          facilitator: "Underlättare:",
          participants: "Deltagare:"
        },
        physical: {
          title: "Fysiska tillgångar",
          description: "Byggnader, utrymmen och infrastruktur",
          examples: "Exempel: Gemenskapscenter, parker, trädgårdar, bibliotek, skolor, kyrkor"
        },
        economic: {
          title: "Ekonomiska tillgångar",
          description: "Företag, sysselsättning och finansiella resurser",
          examples: "Exempel: Lokala företag, kooperativ, kreditföreningar, anställningsprogram"
        },
        human: {
          title: "Mänskliga tillgångar (färdigheter & kunskap)",
          description: "Individuella och kollektiva talanger",
          examples: "Exempel: Språk som talas, yrkeskunskaper, hantverk, livserfarenhet"
        },
        social: {
          title: "Sociala tillgångar (nätverk & relationer)",
          description: "Grupper, organisationer och kopplingar",
          examples: "Exempel: Klubbar, föreningar, informella nätverk, kulturgrupper"
        },
        cultural: {
          title: "Kulturella tillgångar",
          description: "Traditioner, arv och kreativt uttryck",
          examples: "Exempel: Festivaler, konst, musik, berättande, kulturella praktiker"
        },
        natural: {
          title: "Naturliga tillgångar",
          description: "Miljö- och ekologiska resurser",
          examples: "Exempel: Vattenkällor, skogar, djurliv, ren luft, grönområden"
        },
        priorities: {
          title: "Prioriterade tillgångar att stärka",
          description: "Vilka tillgångar bör vi fokusera på att utveckla eller skydda?"
        },
        gaps: {
          title: "Saknade tillgångar / behov",
          description: "Vad saknas i vår gemenskap som vi önskar att vi hade?"
        },
        nextSteps: {
          title: "Nästa steg",
          description: "Hur kommer vi att använda denna information?"
        }
      },
      placeholder: "Lista tillgångar här (en per rad eller separerade med kommatecken)..."
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);

  const STORAGE_KEY = 'communize_asset_mapping_data';

  const initialFormData = {
    communityName: '',
    date: new Date().toISOString().split('T')[0],
    facilitator: '',
    participants: '',
    physical: '',
    economic: '',
    human: '',
    social: '',
    cultural: '',
    natural: '',
    priorities: '',
    gaps: '',
    nextSteps: ''
  };

  // Load saved data from localStorage or use initial data
  function loadFormData() {
    if (typeof window === 'undefined') return { ...initialFormData };
    
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved form data:', e);
        return { ...initialFormData };
      }
    }
    return { ...initialFormData };
  }

  let formData = $state(loadFormData());

  // Save to localStorage whenever form data changes
  $effect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  });

  function handleReset() {
    formData = { ...initialFormData };
    formData.date = new Date().toISOString().split('T')[0]; // Reset to today
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  onMount(() => {
    window.addEventListener('reset-worksheet', handleReset);
  });

  onDestroy(() => {
    window.removeEventListener('reset-worksheet', handleReset);
  });
</script>

<div class="bg-white rounded-xl shadow-lg p-8 print:shadow-none">
  <div class="mb-8 print:mb-6">
    <h1 class="text-3xl font-serif text-earth-900 mb-2 print:text-2xl">
      {t.title}
    </h1>
    <p class="text-earth-600 print:text-sm">
      {t.subtitle}
    </p>
  </div>

  <!-- Basic Information -->
  <section class="mb-8 print:mb-6">
    <h2 class="text-xl font-serif text-earth-900 mb-4 border-b-2 border-moss-300 pb-2 print:text-lg">
      {t.sections.basic.title}
    </h2>
    <div class="grid md:grid-cols-2 gap-4 print:gap-2">
      <div>
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.basic.communityName}
        </label>
        <input
          type="text"
          bind:value={formData.communityName}
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.basic.date}
        </label>
        <input
          type="date"
          bind:value={formData.date}
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.basic.facilitator}
        </label>
        <input
          type="text"
          bind:value={formData.facilitator}
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.basic.participants}
        </label>
        <input
          type="text"
          bind:value={formData.participants}
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
    </div>
  </section>

  <!-- Asset Categories -->
  {#each [
    { key: 'physical', ...t.sections.physical },
    { key: 'economic', ...t.sections.economic },
    { key: 'human', ...t.sections.human },
    { key: 'social', ...t.sections.social },
    { key: 'cultural', ...t.sections.cultural },
    { key: 'natural', ...t.sections.natural }
  ] as section}
    <section class="mb-6 print:mb-4 print:break-inside-avoid">
      <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
        {section.title}
      </h2>
      <p class="text-sm text-earth-600 mb-1">
        {section.description}
      </p>
      <p class="text-xs text-earth-500 italic mb-2">
        {section.examples}
      </p>
      <textarea
        bind:value={formData[section.key]}
        rows="4"
        placeholder={t.placeholder}
        class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
      ></textarea>
    </section>
  {/each}

  <!-- Analysis Sections -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.priorities.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.priorities.description}
    </p>
    <textarea
      bind:value={formData.priorities}
      rows="3"
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.gaps.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.gaps.description}
    </p>
    <textarea
      bind:value={formData.gaps}
      rows="3"
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <section class="print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.nextSteps.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.nextSteps.description}
    </p>
    <textarea
      bind:value={formData.nextSteps}
      rows="4"
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <div class="mt-8 pt-6 border-t border-earth-200 text-center text-xs text-earth-500 print:mt-6 print:pt-4">
    <p>Generated by Communize.org • CC BY-SA 4.0</p>
  </div>
</div>

<style>
  @media print {
    textarea, input {
      border-color: #999 !important;
      page-break-inside: avoid;
    }
  }
</style>
