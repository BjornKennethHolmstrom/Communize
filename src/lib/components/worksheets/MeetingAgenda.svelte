<!-- /src/lib/components/worksheets/MeetingAgenda.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import languageStore from '$lib/stores/languageStore';

  const { language } = languageStore;
  const currentLanguage = $derived($language);

  const translations = {
    en: {
      title: "Meeting facilitator guide",
      subtitle: "Structure and facilitate effective community meetings",
      sections: {
        basic: {
          title: "Meeting information",
          meetingName: "Meeting name/topic:",
          date: "Date:",
          time: "Time:",
          location: "Location:",
          facilitator: "Facilitator:",
          notetaker: "Notetaker:",
          participants: "Expected participants:"
        },
        purpose: {
          title: "Meeting purpose",
          description: "Why are we meeting? What do we hope to accomplish?",
          placeholder: "Clearly state the purpose and desired outcomes..."
        },
        agenda: {
          title: "Agenda items",
          description: "List topics in order, with time allocations",
          items: [
            { label: "Opening/Check-in", time: "Time:" },
            { label: "Agenda Item 1", time: "Time:" },
            { label: "Agenda Item 2", time: "Time:" },
            { label: "Agenda Item 3", time: "Time:" },
            { label: "Agenda Item 4", time: "Time:" },
            { label: "Closing/Next steps", time: "Time:" }
          ]
        },
        decisions: {
          title: "Decisions needed",
          description: "What decisions need to be made during this meeting?",
          placeholder: "List decisions and decision-making method (consensus, vote, etc.)..."
        },
        preparation: {
          title: "Preparation needed",
          description: "What should people read/do before the meeting?",
          placeholder: "List any pre-reading, tasks, or materials to bring..."
        },
        groundRules: {
          title: "Ground rules / Agreements",
          description: "How will we work together?",
          placeholder: "E.g., Listen actively, one speaker at a time, step up/step back..."
        },
        notes: {
          title: "Meeting notes / Key points",
          description: "Record important discussion points, decisions, and commitments",
          placeholder: "Use this space during the meeting to capture key information..."
        },
        actionItems: {
          title: "Action items / Follow-up",
          description: "Who will do what by when?",
          columns: ["Action", "Person", "Deadline"]
        },
        nextMeeting: {
          title: "Next meeting",
          date: "Date:",
          topics: "Topics to address:"
        }
      }
    },
    sv: {
      title: "Mötesunderlättarguide",
      subtitle: "Strukturera och underlätta effektiva gemenskapsmöten",
      sections: {
        basic: {
          title: "Mötesinformation",
          meetingName: "Mötesnamn/ämne:",
          date: "Datum:",
          time: "Tid:",
          location: "Plats:",
          facilitator: "Underlättare:",
          notetaker: "Anteckningsförare:",
          participants: "Förväntade deltagare:"
        },
        purpose: {
          title: "Mötessyfte",
          description: "Varför möts vi? Vad hoppas vi uppnå?",
          placeholder: "Ange tydligt syftet och önskade resultat..."
        },
        agenda: {
          title: "Dagordningspunkter",
          description: "Lista ämnen i ordning, med tidsfördelning",
          items: [
            { label: "Öppning/Check-in", time: "Tid:" },
            { label: "Dagordningspunkt 1", time: "Tid:" },
            { label: "Dagordningspunkt 2", time: "Tid:" },
            { label: "Dagordningspunkt 3", time: "Tid:" },
            { label: "Dagordningspunkt 4", time: "Tid:" },
            { label: "Avslutning/Nästa steg", time: "Tid:" }
          ]
        },
        decisions: {
          title: "Beslut som behövs",
          description: "Vilka beslut behöver fattas under detta möte?",
          placeholder: "Lista beslut och beslutsmetod (konsensus, röstning, etc.)..."
        },
        preparation: {
          title: "Förberedelse som behövs",
          description: "Vad ska folk läsa/göra före mötet?",
          placeholder: "Lista förläsning, uppgifter eller material att ta med..."
        },
        groundRules: {
          title: "Grundregler / Överenskommelser",
          description: "Hur kommer vi att arbeta tillsammans?",
          placeholder: "T.ex., Lyssna aktivt, en talare i taget, kliv fram/kliv tillbaka..."
        },
        notes: {
          title: "Mötesanteckningar / Nyckelpunkter",
          description: "Registrera viktiga diskussionspunkter, beslut och åtaganden",
          placeholder: "Använd detta utrymme under mötet för att fånga nyckelinformation..."
        },
        actionItems: {
          title: "Åtgärdspunkter / Uppföljning",
          description: "Vem ska göra vad senast när?",
          columns: ["Åtgärd", "Person", "Deadline"]
        },
        nextMeeting: {
          title: "Nästa möte",
          date: "Datum:",
          topics: "Ämnen att ta upp:"
        }
      }
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);

  const STORAGE_KEY = 'communize_meeting_agenda_data';

  const initialFormData = {
    meetingName: '',
    date: new Date().toISOString().split('T')[0],
    time: '',
    location: '',
    facilitator: '',
    notetaker: '',
    participants: '',
    purpose: '',
    agendaItem0: 'Opening/Check-in',
    agendaTime0: '10 min',
    agendaItem1: '',
    agendaTime1: '',
    agendaItem2: '',
    agendaTime2: '',
    agendaItem3: '',
    agendaTime3: '',
    agendaItem4: '',
    agendaTime4: '',
    agendaItem5: 'Closing/Next steps',
    agendaTime5: '10 min',
    decisions: '',
    preparation: '',
    groundRules: '',
    notes: '',
    action1: '',
    person1: '',
    deadline1: '',
    action2: '',
    person2: '',
    deadline2: '',
    action3: '',
    person3: '',
    deadline3: '',
    action4: '',
    person4: '',
    deadline4: '',
    nextMeetingDate: '',
    nextMeetingTopics: ''
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

  <!-- Meeting Information -->
  <section class="mb-8 print:mb-6">
    <h2 class="text-xl font-serif text-earth-900 mb-4 border-b-2 border-moss-300 pb-2 print:text-lg">
      {t.sections.basic.title}
    </h2>
    <div class="grid md:grid-cols-2 gap-4 print:gap-2">
      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.basic.meetingName}
        </label>
        <input
          type="text"
          bind:value={formData.meetingName}
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
          {t.sections.basic.time}
        </label>
        <input
          type="text"
          bind:value={formData.time}
          placeholder="e.g., 7:00 PM - 9:00 PM"
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-earth-700 mb-1">
          {t.sections.basic.location}
        </label>
        <input
          type="text"
          bind:value={formData.location}
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
          {t.sections.basic.notetaker}
        </label>
        <input
          type="text"
          bind:value={formData.notetaker}
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
          placeholder="Number or names"
          class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
        />
      </div>
    </div>
  </section>

  <!-- Purpose -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.purpose.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.purpose.description}
    </p>
    <textarea
      bind:value={formData.purpose}
      rows="3"
      placeholder={t.sections.purpose.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Agenda Items -->
  <section class="mb-6 print:mb-4">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.agenda.title}
    </h2>
    <p class="text-sm text-earth-600 mb-3">
      {t.sections.agenda.description}
    </p>
    {#each t.sections.agenda.items as item, index}
      <div class="grid grid-cols-4 gap-2 mb-2 print:break-inside-avoid">
        <div class="col-span-3">
          <input
            type="text"
            bind:value={formData[`agendaItem${index}`]}
            placeholder={item.label}
            class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-1 text-sm"
          />
        </div>
        <div>
          <input
            type="text"
            bind:value={formData[`agendaTime${index}`]}
            placeholder={item.time}
            class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-1 text-sm"
          />
        </div>
      </div>
    {/each}
  </section>

  <!-- Decisions -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.decisions.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.decisions.description}
    </p>
    <textarea
      bind:value={formData.decisions}
      rows="3"
      placeholder={t.sections.decisions.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Preparation -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.preparation.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.preparation.description}
    </p>
    <textarea
      bind:value={formData.preparation}
      rows="2"
      placeholder={t.sections.preparation.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Ground Rules -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.groundRules.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.groundRules.description}
    </p>
    <textarea
      bind:value={formData.groundRules}
      rows="3"
      placeholder={t.sections.groundRules.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Notes -->
  <section class="mb-6 print:mb-4 print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.notes.title}
    </h2>
    <p class="text-sm text-earth-600 mb-2">
      {t.sections.notes.description}
    </p>
    <textarea
      bind:value={formData.notes}
      rows="6"
      placeholder={t.sections.notes.placeholder}
      class="w-full px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border print:rounded-none print:px-2 print:py-1 text-sm"
    ></textarea>
  </section>

  <!-- Action Items -->
  <section class="mb-6 print:mb-4">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.actionItems.title}
    </h2>
    <p class="text-sm text-earth-600 mb-3">
      {t.sections.actionItems.description}
    </p>
    <div class="grid grid-cols-12 gap-2 mb-2 text-xs font-medium text-earth-700">
      <div class="col-span-6">{t.sections.actionItems.columns[0]}</div>
      <div class="col-span-4">{t.sections.actionItems.columns[1]}</div>
      <div class="col-span-2">{t.sections.actionItems.columns[2]}</div>
    </div>
    {#each [1, 2, 3, 4] as num}
      <div class="grid grid-cols-12 gap-2 mb-2 print:break-inside-avoid">
        <div class="col-span-6">
          <input
            type="text"
            bind:value={formData[`action${num}`]}
            class="w-full px-2 py-1 border border-earth-300 rounded focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none text-sm"
          />
        </div>
        <div class="col-span-4">
          <input
            type="text"
            bind:value={formData[`person${num}`]}
            class="w-full px-2 py-1 border border-earth-300 rounded focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none text-sm"
          />
        </div>
        <div class="col-span-2">
          <input
            type="text"
            bind:value={formData[`deadline${num}`]}
            placeholder="Date"
            class="w-full px-2 py-1 border border-earth-300 rounded focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none text-sm"
          />
        </div>
      </div>
    {/each}
  </section>

  <!-- Next Meeting -->
  <section class="print:break-inside-avoid">
    <h2 class="text-lg font-serif text-earth-900 mb-2 print:text-base">
      {t.sections.nextMeeting.title}
    </h2>
    <div class="mb-2">
      <label class="block text-sm font-medium text-earth-700 mb-1">
        {t.sections.nextMeeting.date}
      </label>
      <input
        type="date"
        bind:value={formData.nextMeetingDate}
        class="w-full md:w-1/2 px-3 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent print:border-b print:border-t-0 print:border-l-0 print:border-r-0 print:rounded-none print:px-0"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-earth-700 mb-1">
        {t.sections.nextMeeting.topics}
      </label>
      <textarea
        bind:value={formData.nextMeetingTopics}
        rows="2"
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
