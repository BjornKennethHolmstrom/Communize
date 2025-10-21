<!-- /src/routes/toolkit/tools/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';
  import { base } from '$app/paths';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Curated tool directory",
      subtitle: "Open-source and community-focused digital tools for collaboration",
      intro: "This directory features carefully selected tools that support community organizing, decision-making, and collaboration. We prioritize open-source, affordable, and community-owned platforms.",
      filterBy: "Filter by category:",
      allCategories: "All tools",
      search: "Search tools...",
      categories: {
        decisionMaking: "Decision-making",
        communication: "Communication",
        budgeting: "Budgeting & finance",
        project: "Project management",
        knowledge: "Knowledge sharing",
        coordination: "Coordination & scheduling"
      },
      pricing: "Pricing:",
      license: "License:",
      platforms: "Platforms:",
      website: "Visit website",
      documentation: "Documentation",
      useCase: "Best for:",
      pros: "Strengths:",
      cons: "Considerations:",
      alternatives: "Alternatives:",
      backToToolkit: "Back to toolkit"
    },
    sv: {
      title: "Kurerad verktygskatalog",
      subtitle: "Öppen källkod och gemenskapsfokuserade digitala verktyg för samarbete",
      intro: "Denna katalog innehåller noggrant utvalda verktyg som stöder gemenskapsorganisering, beslutsfattande och samarbete. Vi prioriterar öppen källkod, prisvärda och gemenskapsägda plattformar.",
      filterBy: "Filtrera efter kategori:",
      allCategories: "Alla verktyg",
      search: "Sök verktyg...",
      categories: {
        decisionMaking: "Beslutsfattande",
        communication: "Kommunikation",
        budgeting: "Budgetering & ekonomi",
        project: "Projektledning",
        knowledge: "Kunskapsdelning",
        coordination: "Koordinering & schemaläggning"
      },
      pricing: "Prissättning:",
      license: "Licens:",
      platforms: "Plattformar:",
      website: "Besök webbplats",
      documentation: "Dokumentation",
      useCase: "Bäst för:",
      pros: "Styrkor:",
      cons: "Överväganden:",
      alternatives: "Alternativ:",
      backToToolkit: "Tillbaka till verktygslåda"
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);

  const tools = [
    {
      id: 'loomio',
      name: 'Loomio',
      category: 'decisionMaking',
      description: {
        en: 'Collaborative decision-making platform that helps groups make decisions together',
        sv: 'Samarbetsbeslutsplattform som hjälper grupper att fatta beslut tillsammans'
      },
      url: 'https://www.loomio.com',
      docs: 'https://help.loomio.com',
      pricing: { en: 'Free for small groups, paid tiers for larger organizations', sv: 'Gratis för små grupper, betalda nivåer för större organisationer' },
      license: 'AGPL-3.0 (Open Source)',
      platforms: 'Web, iOS, Android',
      useCase: { en: 'Consensus-based decision making, async discussions, proposals and polls', sv: 'Konsensusbaserat beslutsfattande, asynkrona diskussioner, förslag och omröstningar' },
      pros: {
        en: ['Purpose-built for collaborative decisions', 'Supports multiple decision types (consensus, majority, etc.)', 'Thread-based discussions', 'Self-hosted option available'],
        sv: ['Specialbyggd för samarbetsbeslut', 'Stöder flera beslutstyper (konsensus, majoritet, etc.)', 'Trådbaserade diskussioner', 'Självhostningsalternativ tillgängligt']
      },
      cons: {
        en: ['Learning curve for new users', 'Paid plans can be expensive for larger groups', 'Email notifications can be overwhelming'],
        sv: ['Inlärningskurva för nya användare', 'Betalda planer kan vara dyra för större grupper', 'E-postaviseringar kan bli överväldigande']
      },
      alternatives: ['Decidim', 'Pol.is', 'Kialo']
    },
    {
      id: 'cobudget',
      name: 'Cobudget',
      category: 'budgeting',
      description: {
        en: 'Participatory budgeting tool for collaborative funding decisions',
        sv: 'Deltagarbudgetverktyg för samarbetande finansieringsbeslut'
      },
      url: 'https://cobudget.com',
      docs: 'https://guide.cobudget.com/',
      pricing: { en: 'Free for communities, custom pricing for organizations', sv: 'Gratis för gemenskaper, anpassad prissättning för organisationer' },
      license: 'Open Source',
      platforms: 'Web',
      useCase: { en: 'Participatory budgeting, funding community projects, transparent resource allocation', sv: 'Deltagarbudgetering, finansiering av gemenskapsprojekt, transparent resursallokering' },
      pros: {
        en: ['Simple, intuitive interface', 'Visual bucket funding model', 'Transparent budget tracking', 'Integrates with Loomio'],
        sv: ['Enkelt, intuitivt gränssnitt', 'Visuell bucket-finansieringsmodell', 'Transparent budgetspårning', 'Integreras med Loomio']
      },
      cons: {
        en: ['Limited features compared to full accounting software', 'Best for project-based funding rather than ongoing budgets'],
        sv: ['Begränsade funktioner jämfört med full redovisningsprogramvara', 'Bäst för projektbaserad finansiering snarare än löpande budgetar']
      },
      alternatives: ['Decidim (budgeting module)', 'Traditional spreadsheets']
    },
    {
      id: 'mattermost',
      name: 'Mattermost',
      category: 'communication',
      description: {
        en: 'Open-source team communication platform, self-hostable Slack alternative',
        sv: 'Öppen källkod teamkommunikationsplattform, självhostningsbart Slack-alternativ'
      },
      url: 'https://mattermost.com',
      docs: 'https://docs.mattermost.com',
      pricing: { en: 'Free self-hosted, cloud plans available', sv: 'Gratis självhostad, molnplaner tillgängliga' },
      license: 'MIT/Apache 2.0 (Open Source)',
      platforms: 'Web, Windows, macOS, Linux, iOS, Android',
      useCase: { en: 'Team chat, file sharing, integrations, replacing proprietary platforms', sv: 'Teamchatt, fildelning, integrationer, ersätta proprietära plattformar' },
      pros: {
        en: ['Full data ownership when self-hosted', 'Highly customizable', 'Strong security features', 'Slack-compatible'],
        sv: ['Fullt dataägarskap när självhostad', 'Mycket anpassningsbar', 'Starka säkerhetsfunktioner', 'Slack-kompatibel']
      },
      cons: {
        en: ['Requires technical knowledge to self-host', 'Some advanced features only in paid tiers', 'Smaller plugin ecosystem than Slack'],
        sv: ['Kräver teknisk kunskap för att självhosta', 'Vissa avancerade funktioner endast i betalda nivåer', 'Mindre plugin-ekosystem än Slack']
      },
      alternatives: ['Rocket.Chat', 'Zulip', 'Matrix/Element']
    },
    {
      id: 'nextcloud',
      name: 'Nextcloud',
      category: 'knowledge',
      description: {
        en: 'Self-hosted productivity platform with file storage, calendar, contacts, and collaboration tools',
        sv: 'Självhostad produktivitetsplattform med fillagring, kalender, kontakter och samarbetsverktyg'
      },
      url: 'https://nextcloud.com',
      docs: 'https://docs.nextcloud.com',
      pricing: { en: 'Free self-hosted, managed hosting available', sv: 'Gratis självhostad, hanterad hosting tillgänglig' },
      license: 'AGPL-3.0 (Open Source)',
      platforms: 'Web, Windows, macOS, Linux, iOS, Android',
      useCase: { en: 'File sharing, document collaboration, calendar/contacts sync, Google Workspace alternative', sv: 'Fildelning, dokumentsamarbete, kalender/kontaktsynkronisering, Google Workspace-alternativ' },
      pros: {
        en: ['Complete data sovereignty', 'Extensive app ecosystem', 'GDPR compliant', 'OnlyOffice/Collabora integration for docs'],
        sv: ['Komplett datasuveränitet', 'Omfattande app-ekosystem', 'GDPR-kompatibel', 'OnlyOffice/Collabora-integration för dokument']
      },
      cons: {
        en: ['Setup complexity for non-technical users', 'Performance depends on hosting', 'Some features require additional apps'],
        sv: ['Inställningskomplexitet för icke-tekniska användare', 'Prestanda beror på hosting', 'Vissa funktioner kräver ytterligare appar']
      },
      alternatives: ['ownCloud', 'Seafile', 'Syncthing']
    },
    {
      id: 'taiga',
      name: 'Taiga',
      category: 'project',
      description: {
        en: 'Open-source project management platform for agile teams',
        sv: 'Öppen källkod projektledningsplattform för agila team'
      },
      url: 'https://taiga.io',
      docs: 'https://docs.taiga.io',
      pricing: { en: 'Free for public projects, paid for private', sv: 'Gratis för publika projekt, betald för privata' },
      license: 'AGPL-3.0 (Open Source)',
      platforms: 'Web',
      useCase: { en: 'Agile project management, kanban boards, sprints, issue tracking', sv: 'Agil projektledning, kanban-tavlor, sprintar, ärendespårning' },
      pros: {
        en: ['Beautiful, modern interface', 'Supports Scrum and Kanban', 'Self-hosting available', 'Good for software and non-software projects'],
        sv: ['Vackert, modernt gränssnitt', 'Stöder Scrum och Kanban', 'Självhosting tillgänglig', 'Bra för programvaru- och icke-programvaruprojekt']
      },
      cons: {
        en: ['Primarily designed for tech/agile teams', 'Mobile app functionality limited', 'Smaller community than alternatives'],
        sv: ['Primärt designad för tech/agila team', 'Mobilappfunktionalitet begränsad', 'Mindre gemenskap än alternativ']
      },
      alternatives: ['Wekan', 'OpenProject', 'Redmine']
    },
    {
      id: 'framadate',
      name: 'Framadate',
      category: 'coordination',
      description: {
        en: 'Privacy-respecting scheduling and polling tool, Doodle alternative',
        sv: 'Integritetsrespekterande schemaläggnings- och omröstningsverktyg, Doodle-alternativ'
      },
      url: 'https://framadate.org',
      docs: 'https://docs.framasoft.org/fr/framadate',
      pricing: { en: 'Completely free', sv: 'Helt gratis' },
      license: 'CeCILL-B (Open Source)',
      platforms: 'Web',
      useCase: { en: 'Finding meeting times, event planning, simple polls', sv: 'Hitta mötestider, evenemangsplanering, enkla omröstningar' },
      pros: {
        en: ['No account required', 'Privacy-focused (no tracking)', 'Simple and fast', 'Can self-host'],
        sv: ['Inget konto krävs', 'Integritetsfokuserad (ingen spårning)', 'Enkel och snabb', 'Kan självhostas']
      },
      cons: {
        en: ['Basic features only', 'No calendar integration', 'Results page can be confusing with many participants'],
        sv: ['Endast grundläggande funktioner', 'Ingen kalenderintegration', 'Resultatsidan kan vara förvirrande med många deltagare']
      },
      alternatives: ['LettuceMeet', 'Rallly', 'Doodle']
    },
    {
      id: 'discourse',
      name: 'Discourse',
      category: 'communication',
      description: {
        en: 'Modern open-source forum platform for community discussions',
        sv: 'Modern öppen källkod forumplattform för gemenskapsdiskussioner'
      },
      url: 'https://www.discourse.org',
      docs: 'https://meta.discourse.org',
      pricing: { en: 'Free self-hosted, managed hosting from $100/month', sv: 'Gratis självhostad, hanterad hosting från $100/månad' },
      license: 'GPL-2.0 (Open Source)',
      platforms: 'Web, iOS, Android',
      useCase: { en: 'Community forums, long-form discussions, knowledge base', sv: 'Gemenskapsforum, långformsdiskussioner, kunskapsbas' },
      pros: {
        en: ['Modern, email-like interface', 'Excellent for threaded discussions', 'Strong moderation tools', 'Active development'],
        sv: ['Modernt, e-postliknande gränssnitt', 'Utmärkt för trådade diskussioner', 'Starka modereringsverktyg', 'Aktiv utveckling']
      },
      cons: {
        en: ['Resource-intensive to self-host', 'Can feel overwhelming for simple needs', 'Managed hosting is expensive'],
        sv: ['Resurskrävande att självhosta', 'Kan kännas överväldigande för enkla behov', 'Hanterad hosting är dyr']
      },
      alternatives: ['Flarum', 'NodeBB', 'phpBB']
    },
    {
      id: 'cryptpad',
      name: 'CryptPad',
      category: 'knowledge',
      description: {
        en: 'End-to-end encrypted collaborative document editing',
        sv: 'Ändpunkt-till-ändpunkt krypterad samarbetsdokumentredigering'
      },
      url: 'https://cryptpad.fr',
      docs: 'https://docs.cryptpad.fr',
      pricing: { en: 'Free tier, paid for more storage', sv: 'Gratis nivå, betald för mer lagring' },
      license: 'AGPL-3.0 (Open Source)',
      platforms: 'Web',
      useCase: { en: 'Private document collaboration, encrypted file storage, Google Docs alternative', sv: 'Privat dokumentsamarbete, krypterad fillagring, Google Docs-alternativ' },
      pros: {
        en: ['Zero-knowledge encryption', 'No account required for basic use', 'Multiple document types', 'Can self-host'],
        sv: ['Nollkunskapskryptering', 'Inget konto krävs för grundläggande användning', 'Flera dokumenttyper', 'Kan självhostas']
      },
      cons: {
        en: ['Less feature-rich than Google Docs', 'Performance can lag with large documents', 'Learning curve for encryption concepts'],
        sv: ['Mindre funktionsrik än Google Docs', 'Prestanda kan släpa med stora dokument', 'Inlärningskurva för krypteringskoncept']
      },
      alternatives: ['Etherpad', 'HedgeDoc', 'OnlyOffice']
    }
  ];

  let selectedCategory = $state<string>('all');
  let searchQuery = $state<string>('');

  const categories = $derived([
    { id: 'all', label: t.allCategories },
    { id: 'decisionMaking', label: t.categories.decisionMaking },
    { id: 'communication', label: t.categories.communication },
    { id: 'budgeting', label: t.categories.budgeting },
    { id: 'project', label: t.categories.project },
    { id: 'knowledge', label: t.categories.knowledge },
    { id: 'coordination', label: t.categories.coordination }
  ]);

  const filteredTools = $derived(
    tools.filter(tool => {
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description[currentLanguage].toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
  );

  function getCategoryColor(category: string): string {
    const colors = {
      decisionMaking: 'bg-moss-100 text-moss-800 border-moss-300',
      communication: 'bg-earth-100 text-earth-800 border-earth-300',
      budgeting: 'bg-clay-100 text-clay-800 border-clay-300',
      project: 'bg-amber-100 text-amber-800 border-amber-300',
      knowledge: 'bg-stone-100 text-stone-800 border-stone-300',
      coordination: 'bg-green-100 text-green-800 border-green-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-300';
  }
</script>

<svelte:head>
  <title>{t.title} | Communize</title>
  <meta name="description" content={t.subtitle} />
</svelte:head>

{#key currentLanguage}
<div class="min-h-screen bg-gradient-to-br from-earth-50 to-moss-50" in:fade>
  <!-- Breadcrumb -->
  <nav class="max-w-7xl mx-auto px-4 pt-8 pb-4 text-sm">
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

  <div class="max-w-7xl mx-auto px-4 pb-16">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div class="flex items-center gap-3 mb-6">
        <svg class="w-8 h-8 text-moss-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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

    <!-- Filters -->
    <div class="mb-6 flex flex-col md:flex-row gap-4">
      <!-- Category Filter -->
      <div class="flex-1">
        <label class="block text-sm font-medium text-earth-700 mb-2">
          {t.filterBy}
        </label>
        <div class="flex flex-wrap gap-2">
          {#each categories as category}
            <button
              onclick={() => selectedCategory = category.id}
              class="px-4 py-2 rounded-lg transition-all text-sm {
                selectedCategory === category.id
                  ? 'bg-moss-600 text-white shadow-md'
                  : 'bg-white text-earth-700 hover:bg-moss-50 border border-earth-200'
              }"
            >
              {category.label}
            </button>
          {/each}
        </div>
      </div>

      <!-- Search -->
      <div class="md:w-64">
        <label class="block text-sm font-medium text-earth-700 mb-2">
          {t.search}
        </label>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder={t.search}
          class="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-transparent"
        />
      </div>
    </div>

    <!-- Tools Grid -->
    <div class="space-y-6">
      {#each filteredTools as tool (tool.id)}
        <div class="bg-white rounded-xl shadow-lg p-6 border-2 border-earth-200 hover:border-moss-300 transition-all">
          <div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-2xl font-serif text-earth-900">
                  {tool.name}
                </h3>
                <span class="px-2 py-1 text-xs rounded-full border {getCategoryColor(tool.category)}">
                  {t.categories[tool.category]}
                </span>
              </div>
              <p class="text-earth-700 mb-3">
                {tool.description[currentLanguage]}
              </p>
            </div>
            <div class="flex gap-2">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 bg-moss-600 hover:bg-moss-700 text-white rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {t.website}
              </a>
              {#if tool.docs}
                <a
                  href={tool.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 px-4 py-2 border-2 border-earth-300 hover:border-earth-400 text-earth-700 rounded-lg transition-colors text-sm whitespace-nowrap"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {t.documentation}
                </a>
              {/if}
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-4 mb-4 text-sm">
            <div>
              <span class="font-medium text-earth-700">{t.pricing}</span>
              <p class="text-earth-600">{tool.pricing[currentLanguage]}</p>
            </div>
            <div>
              <span class="font-medium text-earth-700">{t.license}</span>
              <p class="text-earth-600">{tool.license}</p>
            </div>
            <div>
              <span class="font-medium text-earth-700">{t.platforms}</span>
              <p class="text-earth-600">{tool.platforms}</p>
            </div>
          </div>

          <div class="mb-4">
            <span class="text-sm font-medium text-earth-700">{t.useCase}</span>
            <p class="text-sm text-earth-600 mt-1">{tool.useCase[currentLanguage]}</p>
          </div>

          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <span class="text-sm font-medium text-moss-700">{t.pros}</span>
              <ul class="mt-1 space-y-1">
                {#each tool.pros[currentLanguage] as pro}
                  <li class="text-sm text-earth-700 flex items-start gap-2">
                    <span class="text-moss-600 mt-0.5">✓</span>
                    <span>{pro}</span>
                  </li>
                {/each}
              </ul>
            </div>
            <div>
              <span class="text-sm font-medium text-clay-700">{t.cons}</span>
              <ul class="mt-1 space-y-1">
                {#each tool.cons[currentLanguage] as con}
                  <li class="text-sm text-earth-700 flex items-start gap-2">
                    <span class="text-clay-600 mt-0.5">•</span>
                    <span>{con}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>

          {#if tool.alternatives && tool.alternatives.length > 0}
            <div class="pt-4 border-t border-earth-200">
              <span class="text-sm font-medium text-earth-700">{t.alternatives}</span>
              <p class="text-sm text-earth-600 mt-1">{tool.alternatives.join(', ')}</p>
            </div>
          {/if}
        </div>
      {/each}

      {#if filteredTools.length === 0}
        <div class="bg-white rounded-xl shadow-lg p-12 text-center">
          <svg class="w-16 h-16 text-earth-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-earth-500">
            {currentLanguage === 'en' ? 'No tools found matching your criteria.' : 'Inga verktyg hittades som matchar dina kriterier.'}
          </p>
        </div>
      {/if}
    </div>
  </div>
</div>
{/key}
