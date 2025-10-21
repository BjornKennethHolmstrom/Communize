<!-- /src/lib/components/worksheets/ProjectPlanning.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import languageStore from '$lib/stores/languageStore';

  const { language } = languageStore;
  const currentLanguage = $derived($language);

  const translations = {
    en: {
      title: "Project planning canvas",
      subtitle: "Plan community projects from vision to implementation",
      sections: {
        basic: {
          title: "Basic information",
          projectName: "Project name:",
          date: "Date:",
          facilitator: "Planning team:",
          timeframe: "Target timeframe:"
        },
        vision: {
          title: "Vision & purpose",
          description: "What are we trying to create? Why does this matter?",
          placeholder: "Describe the vision and purpose of this project..."
        },
        goals: {
          title: "Specific goals",
          description: "What concrete outcomes do we want to achieve?",
          placeholder: "List 3-5 specific, measurable goals..."
        },
        beneficiaries: {
          title: "Who benefits?",
          description: "Who will this project serve? Who are the stakeholders?",
          placeholder: "List the people and groups who will benefit or be affected..."
        },
        resources: {
          title: "Resources needed",
          description: "What do we need to make this happen?",
          categories: {
            people: "People & Skills:",
            money: "Funding:",
            materials: "Materials & Equipment:",
            space: "Space & Facilities:",
            other: "Other Resources:"
          },
          placeholder: "What's needed?"
        },
        existing: {
          title: "Existing resources",
          description: "What do we already have? What can we build on?",
          placeholder: "List existing resources, skills, relationships, or assets we can leverage..."
        },
        steps: {
          title: "Action steps",
          description: "What are the key phases or milestones?",
          phases: [
            { label: "Phase 1:", placeholder: "First steps..." },
            { label: "Phase 2:", placeholder: "Next phase..." },
            { label: "Phase 3:", placeholder: "Following that..." },
            { label: "Phase 4:", placeholder: "Final steps..." }
          ]
        },
        roles: {
          title: "Roles & responsibilities",
          description: "Who will do what?",
          placeholder: "List key roles and who might fill them (can be specific names or general roles)..."
        },
        challenges: {
          title: "Potential challenges",
          description: "What obstacles might we face? How can we address them?",
          placeholder: "List potential challenges and possible solutions or mitigation strategies..."
        },
        success: {
          title: "Success indicators",
          description: "How will we know this project is working?",
          placeholder: "What will success look and feel like? What metrics or signs will show progress..."
        },
        timeline: {
          title: "Key dates & timeline",
          description: "When will major milestones happen?",
          placeholder: "List important dates, deadlines, or time periods..."
        },
        nextSteps: {
          title: "Immediate next steps",
          description: "What are the first 3-5 actions to take?",
          placeholder: "List the very next steps to get this project started..."
        }
      }
    },
    sv: {
      title: "Projektplaneringscanvas",
      subtitle: "Planera gemenskapsprojekt från vision till genomförande",
      sections: {
        basic: {
          title: "Grundläggande information",
          projectName: "Projektnamn:",
          date: "Datum:",
          facilitator: "Planeringsteam:",
          timeframe: "Måltidsram:"
        },
        vision: {
          title: "Vision & syfte",
          description: "Vad försöker vi skapa? Varför spelar detta roll?",
          placeholder: "Beskriv visionen och syftet med detta projekt..."
        },
        goals: {
          title: "Specifika mål",
          description: "Vilka konkreta resultat vill vi uppnå?",
          placeholder: "Lista 3-5 specifika, mätbara mål..."
        },
        beneficiaries: {
          title: "Vem gynnas?",
          description: "Vem kommer detta projekt att tjäna? Vilka är intressenterna?",
          placeholder: "Lista de personer och grupper som kommer att gynnas eller påverkas..."
        },
        resources: {
          title: "Resurser som behövs",
          description: "Vad behöver vi för att göra detta möjligt?",
          categories: {
            people: "Människor & Färdigheter:",
            money: "Finansiering:",
            materials: "Material & Utrustning:",
            space: "Utrymme & Faciliteter:",
            other: "Andra resurser:"
          },
          placeholder: "Vad behövs?"
        },
        existing: {
          title: "Befintliga resurser",
          description: "Vad har vi redan? Vad kan vi bygga vidare på?",
          placeholder: "Lista befintliga resurser, färdigheter, relationer eller tillgångar vi kan utnyttja..."
        },
        steps: {
          title: "Åtgärdssteg",
          description: "Vilka är nyckelfaserna eller milstolparna?",
          phases: [
            { label: "Fas 1:", placeholder: "Första stegen..." },
            { label: "Fas 2:", placeholder: "Nästa fas..." },
            { label: "Fas 3:", placeholder: "Efter det..." },
            { label: "Fas 4:", placeholder: "Sista stegen..." }
          ]
        },
        roles: {
          title: "Roller & ansvar",
          description: "Vem ska göra vad?",
          placeholder: "Lista nyckelroller och vem som kan fylla dem (kan vara specifika namn eller allmänna roller)..."
        },
        challenges: {
          title: "Potentiella utmaningar",
          description: "Vilka hinder kan vi möta? Hur kan vi hantera dem?",
          placeholder: "Lista potentiella utmaningar och möjliga lösningar eller begränsningsstrategier..."
        },
        success: {
          title: "Framgångsindikatorer",
          description: "Hur vet vi att detta projekt fungerar?",
          placeholder: "Hur kommer framgång att se ut och kännas? Vilka mätvärden eller tecken kommer att visa framsteg..."
        },
        timeline: {
          title: "Nyckeldatum & tidslinje",
          description: "När kommer stora milstolpar att hända?",
          placeholder: "Lista viktiga datum, deadlines eller tidsperioder..."
        },
        nextSteps: {
          title: "Omedelbara nästa steg",
          description: "Vilka är de första 3-5 åtgärderna att ta?",
          placeholder: "Lista de allra närmaste stegen för att få detta projekt igång..."
        }
      }
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);

  const STORAGE_KEY = 'communize_project_planning_data';

  const initialFormData = {
    projectName: '',
    date: new Date().toISOString().split('T')[0],
    facilitator: '',
    timeframe: '',
    vision: '',
    goals: '',
    beneficiaries: '',
    peopleskills: '',
    funding: '',
    materials: '',
    space: '',
    otherResources: '',
    existing: '',
    phase1: '',
    phase2: '',
    phase3: '',
    phase4: '',
    roles: '',
    challenges: '',
    success: '',
    timeline: '',
    nextSteps: ''
  };

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

  $effect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  });

  function handleReset() {
    formData = { ...initialFormData };
    formData.date = new Date().toISOString().split('T')[0];
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
          {t.sections.basic.projectName}
        </label>
        <input
          type="text"
          bind:value={formData.projectName}
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
          {t.sections.basic.timeframe}
        </label>
        <input
          type="text"
          bind:value={formData.timeframe}
          placeholder="e.g., 6 months, Spring 2025"
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
    </div>
  </section>

  <!-- Vision & Purpose -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.vision.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.vision.description}
    </p>
    <textarea
      bind:value={formData.vision}
      rows="4"
      placeholder={t.sections.vision.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Goals -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.goals.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.goals.description}
    </p>
    <textarea
      bind:value={formData.goals}
      rows="4"
      placeholder={t.sections.goals.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Beneficiaries -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.beneficiaries.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.beneficiaries.description}
    </p>
    <textarea
      bind:value={formData.beneficiaries}
      rows="3"
      placeholder={t.sections.beneficiaries.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Resources Needed -->
  <section class="mb-6 print:mb-4">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.resources.title}
    </h2>
    <p class="text-sm text-earth-600 mb-3">
      {t.sections.resources.description}
    </p>
    <div class="grid md:grid-cols-2 gap-4 print:gap-2">
      {#each [
        { key: 'peopleskills', label: t.sections.resources.categories.people },
        { key: 'funding', label: t.sections.resources.categories.money },
        { key: 'materials', label: t.sections.resources.categories.materials },
        { key: 'space', label: t.sections.resources.categories.space },
        { key: 'otherResources', label: t.sections.resources.categories.other }
      ] as resource}
        <div class="print:break-inside-avoid">
          <label class="block text-sm font-medium text-earth-700 mb-1">
            {resource.label}
          </label>
          <textarea
            bind:value={formData[resource.key]}
            rows="2"
            placeholder={t.sections.resources.placeholder}
            class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
          ></textarea>
        </div>
      {/each}
    </div>
  </section>

  <!-- Existing Resources -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.existing.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.existing.description}
    </p>
    <textarea
      bind:value={formData.existing}
      rows="3"
      placeholder={t.sections.existing.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Action Steps -->
  <section class="mb-6 print:mb-4">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.steps.title}
    </h2>
    <p class="text-sm text-earth-600 mb-3">
      {t.sections.steps.description}
    </p>
    {#each [
      { key: 'phase1', ...t.sections.steps.phases[0] },
      { key: 'phase2', ...t.sections.steps.phases[1] },
      { key: 'phase3', ...t.sections.steps.phases[2] },
      { key: 'phase4', ...t.sections.steps.phases[3] }
    ] as phase}
      <div class="mb-3 print:break-inside-avoid">
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {phase.label}
        </label>
        <textarea
          bind:value={formData[phase.key]}
          rows="2"
          placeholder={phase.placeholder}
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
        ></textarea>
      </div>
    {/each}
  </section>

  <!-- Roles & Responsibilities -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.roles.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.roles.description}
    </p>
    <textarea
      bind:value={formData.roles}
      rows="4"
      placeholder={t.sections.roles.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Challenges -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.challenges.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.challenges.description}
    </p>
    <textarea
      bind:value={formData.challenges}
      rows="4"
      placeholder={t.sections.challenges.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Success Indicators -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.success.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.success.description}
    </p>
    <textarea
      bind:value={formData.success}
      rows="3"
      placeholder={t.sections.success.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Timeline -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.timeline.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.timeline.description}
    </p>
    <textarea
      bind:value={formData.timeline}
      rows="3"
      placeholder={t.sections.timeline.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Next Steps -->
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
      placeholder={t.sections.nextSteps.placeholder}
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
