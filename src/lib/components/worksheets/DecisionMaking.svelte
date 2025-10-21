<!-- /src/lib/components/worksheets/DecisionMaking.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import languageStore from '$lib/stores/languageStore';

  const { language } = languageStore;
  const currentLanguage = $derived($language);

  const translations = {
    en: {
      title: "Decision-making worksheet",
      subtitle: "Guide groups through important decisions systematically",
      sections: {
        basic: {
          title: "Decision information",
          decisionName: "Decision to be made:",
          date: "Date:",
          participants: "Participants:",
          method: "Decision method:",
          methodPlaceholder: "e.g., Consensus, 75% majority, consent"
        },
        context: {
          title: "Context & background",
          description: "What's the situation? Why is this decision needed now?",
          placeholder: "Describe the context and urgency..."
        },
        options: {
          title: "Options being considered",
          description: "What are the possible choices?",
          items: [
            { label: "Option A:", desc: "Description:" },
            { label: "Option B:", desc: "Description:" },
            { label: "Option C:", desc: "Description:" },
            { label: "Option D:", desc: "Description:" }
          ]
        },
        criteria: {
          title: "Decision criteria",
          description: "What factors matter most? How will we evaluate options?",
          placeholder: "E.g., Cost, time, impact on community, alignment with values, feasibility..."
        },
        concerns: {
          title: "Concerns & questions",
          description: "What worries or uncertainties do we have?",
          placeholder: "List concerns that need to be addressed before deciding..."
        },
        pros: {
          title: "Pros & cons",
          description: "For each option, what are the advantages and disadvantages?"
        },
        voices: {
          title: "Stakeholder input",
          description: "Who should be consulted? What do they think?",
          placeholder: "List key stakeholders and summarize their input..."
        },
        decision: {
          title: "The decision",
          description: "What did we decide?",
          placeholder: "Clearly state the decision made..."
        },
        rationale: {
          title: "Rationale",
          description: "Why did we make this choice?",
          placeholder: "Explain the reasoning behind the decision..."
        },
        implementation: {
          title: "Implementation plan",
          description: "How will this decision be carried out?",
          steps: "Action steps:",
          timeline: "Timeline:",
          responsible: "Who's responsible:"
        },
        review: {
          title: "Review & evaluation",
          reviewDate: "Review date:",
          criteria: "How will we evaluate if this was a good decision:",
          placeholder: "What will we look for? When will we reassess?"
        }
      }
    },
    sv: {
      title: "Beslutsfattande arbetsblad",
      subtitle: "Vägleda grupper genom viktiga beslut systematiskt",
      sections: {
        basic: {
          title: "Beslutsinformation",
          decisionName: "Beslut som ska fattas:",
          date: "Datum:",
          participants: "Deltagare:",
          method: "Beslutsmetod:",
          methodPlaceholder: "t.ex., Konsensus, 75% majoritet, samtycke"
        },
        context: {
          title: "Kontext & bakgrund",
          description: "Vad är situationen? Varför behövs detta beslut nu?",
          placeholder: "Beskriv kontexten och brådskandet..."
        },
        options: {
          title: "Alternativ som övervägs",
          description: "Vilka är de möjliga valen?",
          items: [
            { label: "Alternativ A:", desc: "Beskrivning:" },
            { label: "Alternativ B:", desc: "Beskrivning:" },
            { label: "Alternativ C:", desc: "Beskrivning:" },
            { label: "Alternativ D:", desc: "Beskrivning:" }
          ]
        },
        criteria: {
          title: "Beslutskriterier",
          description: "Vilka faktorer är viktigast? Hur kommer vi att utvärdera alternativ?",
          placeholder: "T.ex., Kostnad, tid, påverkan på gemenskapen, anpassning till värderingar, genomförbarhet..."
        },
        concerns: {
          title: "Oro & frågor",
          description: "Vilka bekymmer eller osäkerheter har vi?",
          placeholder: "Lista oro som behöver åtgärdas innan beslut..."
        },
        pros: {
          title: "För & emot",
          description: "För varje alternativ, vilka är fördelarna och nackdelarna?"
        },
        voices: {
          title: "Intressenters input",
          description: "Vem bör konsulteras? Vad tycker de?",
          placeholder: "Lista nyckelintressenter och sammanfatta deras input..."
        },
        decision: {
          title: "Beslutet",
          description: "Vad beslutade vi?",
          placeholder: "Ange tydligt det beslut som fattats..."
        },
        rationale: {
          title: "Motivering",
          description: "Varför gjorde vi detta val?",
          placeholder: "Förklara resonemang bakom beslutet..."
        },
        implementation: {
          title: "Genomförandeplan",
          description: "Hur kommer detta beslut att genomföras?",
          steps: "Åtgärdssteg:",
          timeline: "Tidslinje:",
          responsible: "Vem är ansvarig:"
        },
        review: {
          title: "Granskning & utvärdering",
          reviewDate: "Granskningsdatum:",
          criteria: "Hur kommer vi att utvärdera om detta var ett bra beslut:",
          placeholder: "Vad kommer vi att leta efter? När kommer vi att omvärdera?"
        }
      }
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);

  const STORAGE_KEY = 'communize_decision_making_data';

  const initialFormData = {
    decisionName: '',
    date: new Date().toISOString().split('T')[0],
    participants: '',
    method: '',
    context: '',
    optionA: '',
    descA: '',
    optionB: '',
    descB: '',
    optionC: '',
    descC: '',
    optionD: '',
    descD: '',
    criteria: '',
    concerns: '',
    prosA: '',
    consA: '',
    prosB: '',
    consB: '',
    prosC: '',
    consC: '',
    prosD: '',
    consD: '',
    voices: '',
    decision: '',
    rationale: '',
    steps: '',
    timeline: '',
    responsible: '',
    reviewDate: '',
    reviewCriteria: ''
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
      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.basic.decisionName}
        </label>
        <input
          type="text"
          bind:value={formData.decisionName}
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
          {t.sections.basic.participants}
        </label>
        <input
          type="text"
          bind:value={formData.participants}
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.basic.method}
        </label>
        <input
          type="text"
          bind:value={formData.method}
          placeholder={t.sections.basic.methodPlaceholder}
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
    </div>
  </section>

  <!-- Context -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.context.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.context.description}
    </p>
    <textarea
      bind:value={formData.context}
      rows="3"
      placeholder={t.sections.context.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Options -->
  <section class="mb-6 print:mb-4">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.options.title}
    </h2>
    <p class="text-sm text-earth-600 mb-3">
      {t.sections.options.description}
    </p>
    {#each t.sections.options.items as option, index}
      <div class="mb-3 print:break-inside-avoid">
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {option.label}
        </label>
        <input
          type="text"
          bind:value={formData[`option${String.fromCharCode(65 + index)}`]}
          class="w-full px-3 py-2 mb-1 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-1 text-sm"
        />
        <label class="block text-xs text-earth-600 mb-1">
          {option.desc}
        </label>
        <textarea
          bind:value={formData[`desc${String.fromCharCode(65 + index)}`]}
          rows="2"
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
        ></textarea>
      </div>
    {/each}
  </section>

  <!-- Criteria -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.criteria.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.criteria.description}
    </p>
    <textarea
      bind:value={formData.criteria}
      rows="3"
      placeholder={t.sections.criteria.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Concerns -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.concerns.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.concerns.description}
    </p>
    <textarea
      bind:value={formData.concerns}
      rows="3"
      placeholder={t.sections.concerns.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Pros & Cons -->
  <section class="mb-6 print:mb-4">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.pros.title}
    </h2>
    <p class="text-sm text-earth-600 mb-3">
      {t.sections.pros.description}
    </p>
    {#each ['A', 'B', 'C', 'D'] as letter}
      {#if formData[`option${letter}`]}
        <div class="mb-4 p-3 bg-earth-50 rounded-lg print:break-inside-avoid">
          <h3 class="text-sm font-semibold text-earth-800 mb-2">
            {currentLanguage === 'en' ? 'Option' : 'Alternativ'} {letter}: {formData[`option${letter}`]}
          </h3>
          <div class="grid md:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-medium text-earth-700 mb-1">
                {currentLanguage === 'en' ? 'Pros:' : 'För:'}
              </label>
              <textarea
                bind:value={formData[`pros${letter}`]}
                rows="2"
                class="w-full px-2 py-1 border border-earth-300 rounded focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none text-sm"
              ></textarea>
            </div>
            <div>
              <label class="block text-xs font-medium text-earth-700 mb-1">
                {currentLanguage === 'en' ? 'Cons:' : 'Emot:'}
              </label>
              <textarea
                bind:value={formData[`cons${letter}`]}
                rows="2"
                class="w-full px-2 py-1 border border-earth-300 rounded focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none text-sm"
              ></textarea>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </section>

  <!-- Stakeholder Input -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.voices.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.voices.description}
    </p>
    <textarea
      bind:value={formData.voices}
      rows="3"
      placeholder={t.sections.voices.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- The Decision -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid bg-moss-50 p-4 rounded-lg print:bg-transparent">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.decision.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.decision.description}
    </p>
    <textarea
      bind:value={formData.decision}
      rows="3"
      placeholder={t.sections.decision.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Rationale -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.rationale.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.rationale.description}
    </p>
    <textarea
      bind:value={formData.rationale}
      rows="3"
      placeholder={t.sections.rationale.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Implementation -->
  <section class="mb-6 print:mb-4">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.implementation.title}
    </h2>
    <p class="text-sm text-earth-600 mb-3">
      {t.sections.implementation.description}
    </p>
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.implementation.steps}
        </label>
        <textarea
          bind:value={formData.steps}
          rows="3"
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
        ></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.implementation.timeline}
        </label>
        <textarea
          bind:value={formData.timeline}
          rows="2"
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
        ></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.implementation.responsible}
        </label>
        <input
          type="text"
          bind:value={formData.responsible}
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
    </div>
  </section>

  <!-- Review & Evaluation -->
  <section class="print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.review.title}
    </h2>
    <div class="mb-3">
      <label class="block text-sm font-medium text-earth-700 mb-1">
        {t.sections.review.reviewDate}
      </label>
      <input
        type="date"
        bind:value={formData.reviewDate}
        class="w-full md:w-1/2 px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-earth-700 mb-1">
        {t.sections.review.criteria}
      </label>
      <textarea
        bind:value={formData.reviewCriteria}
        rows="3"
        placeholder={t.sections.review.placeholder}
        class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
      ></textarea>
    </div>
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
