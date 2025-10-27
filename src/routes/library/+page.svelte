<!-- /src/routes/library/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Models & praxis library",
      subtitle: "Real-world case studies and practical guides for communizing",
      intro: "Learn from communities, cooperatives, and commons around the world that are actively building shared ownership, collective responsibility, and regenerative systems.",
      
      filters: {
        all: "All models",
        local: "Local models",
        digital: "Digital commons",
        ecological: "Ecological models",
        governance: "Governance patterns"
      },
      
      caseCount: "{count} case studies",
      readMore: "Read case study",
      location: "Location",
      founded: "Founded",
      scale: "Scale",
      type: "Type",
      
      contribute: {
        title: "Share your story",
        text: "Are you part of a thriving commons? Have you started a cooperative, community garden, or mutual aid network? We'd love to feature your story in the library.",
        button: "Submit a case study"
      },
      
      comingSoon: "More case studies coming soon"
    },
    sv: {
      title: "Modeller och praxis bibliotek",
      subtitle: "Verkliga fallstudier och praktiska guider för kommunisering",
      intro: "Lär av gemenskaper, kooperativ och allmänningar runt om i världen som aktivt bygger delat ägande, kollektivt ansvar och regenerativa system.",
      
      filters: {
        all: "Alla modeller",
        local: "Lokala modeller",
        digital: "Digitala allmänningar",
        ecological: "Ekologiska modeller",
        governance: "Styrningsmönster"
      },
      
      caseCount: "{count} fallstudier",
      readMore: "Läs fallstudie",
      location: "Plats",
      founded: "Grundad",
      scale: "Skala",
      type: "Typ",
      
      contribute: {
        title: "Dela din historia",
        text: "Är du en del av en blomstrande allmänning? Har du startat ett kooperativ, gemenskapsträdgård eller ömsesidig hjälpnätverk? Vi skulle älska att presentera din historia i biblioteket.",
        button: "Skicka in en fallstudie"
      },
      
      comingSoon: "Fler fallstudier kommer snart"
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);
  
  // Case studies data
  const caseStudies = [
    {
      id: 'park-slope-food-coop',
      title: {
        en: 'Park Slope Food Coop',
        sv: 'Park Slope Food Coop'
      },
      tagline: {
        en: 'Member-owned grocery cooperative in Brooklyn, New York',
        sv: 'Medlemsägt livsmedelkooperativ i Brooklyn, New York'
      },
      location: 'Brooklyn, New York, USA',
      founded: 1973,
      category: 'local',
      scale: {
        en: '17,000+ members',
        sv: '17 000+ medlemmar'
      },
      type: {
        en: 'Food cooperative',
        sv: 'Livsmedelskooperativ'
      },
      image: '/images/case-studies/park-slope-food-coop.jpg',
      excerpt: {
        en: 'One of the oldest and largest food cooperatives in the US, demonstrating how member labor and democratic governance can create affordable, sustainable food access.',
        sv: 'Ett av de äldsta och största livsmedelskooperativen i USA, som visar hur medlemsarbete och demokratisk styrning kan skapa prisvärd, hållbar mattillgång.'
      },
      tags: ['cooperative', 'food', 'urban', 'democratic-governance']
    },
    {
      id: 'wikipedia',
      title: {
        en: 'Wikipedia',
        sv: 'Wikipedia'
      },
      tagline: {
        en: 'The free encyclopedia that anyone can edit',
        sv: 'Den fria encyklopedin som vem som helst kan redigera'
      },
      location: 'Global / Online',
      founded: 2001,
      category: 'digital',
      scale: {
        en: '300,000+ active editors',
        sv: '300 000+ aktiva redaktörer'
      },
      type: {
        en: 'Knowledge commons',
        sv: 'Kunskapsallmänning'
      },
      image: '/images/case-studies/wikipedia.jpg',
      excerpt: {
        en: 'The largest and most successful example of digital commons—a freely accessible knowledge repository built entirely by volunteers using collective ownership and transparent governance.',
        sv: 'Det största och mest framgångsrika exemplet på digitala allmänningar—en fritt tillgänglig kunskapsreservoar byggd helt av frivilliga med kollektivt ägande och transparent styrning.'
      },
      tags: ['digital', 'knowledge', 'global', 'open-source']
    },
    {
      id: 'transition-town-totnes',
      title: {
        en: 'Transition Town Totnes',
        sv: 'Transition Town Totnes'
      },
      tagline: {
        en: 'Community-led movement for local resilience and ecological regeneration',
        sv: 'Gemenskapslett rörelse för lokal motståndskraft och ekologisk regenerering'
      },
      location: 'Totnes, Devon, UK',
      founded: 2006,
      category: 'ecological',
      scale: {
        en: '2,000+ active participants',
        sv: '2 000+ aktiva deltagare'
      },
      type: {
        en: 'Transition initiative',
        sv: 'Omställningsinitiativ'
      },
      image: '/images/case-studies/transition-totnes.jpg',
      excerpt: {
        en: 'The original Transition Town, pioneering community-led responses to climate change and peak oil through local food systems, renewable energy, and community economics.',
        sv: 'Den ursprungliga Transition Town, som pionjärar gemenskapsledda svar på klimatförändring och peak oil genom lokala matsystem, förnybar energi och gemenkapsekonomi.'
      },
      tags: ['ecological', 'resilience', 'local-economy', 'permaculture']
    },
    {
      id: 'rojava',
      title: {
        en: 'Rojava Democratic Confederalism',
        sv: 'Rojava demokratisk konfederalism'
      },
      tagline: {
        en: 'Autonomous democratic governance experiment in Northern Syria',
        sv: 'Autonomt demokratiskt styrningsexperiment i norra Syrien'
      },
      location: 'Rojava, Northern Syria',
      founded: 2012,
      category: 'governance',
      scale: {
        en: '4+ million people',
        sv: '4+ miljoner människor'
      },
      type: {
        en: 'Democratic confederalism',
        sv: 'Demokratisk konfederalism'
      },
      image: '/images/case-studies/rojava.jpg',
      excerpt: {
        en: 'A bold experiment in grassroots democracy, women\'s liberation, and ecological society—demonstrating how communities can self-organize governance at scale through bottom-up councils and consensus.',
        sv: 'Ett djärvt experiment i gräsrotsdemokrati, kvinnofrigörelse och ekologiskt samhälle—som visar hur gemenskaper kan självorganisera styrning i stor skala genom bottom-up-råd och konsensus.'
      },
      tags: ['governance', 'democracy', 'autonomy', 'feminism']
    }
    // More case studies will be added here
  ];
  
  let selectedCategory = $state<string>('all');
  
  const filteredStudies = $derived(
    selectedCategory === 'all' 
      ? caseStudies 
      : caseStudies.filter(s => s.category === selectedCategory)
  );
  
  function getCategoryColor(category: string): string {
    const colors = {
      local: 'bg-moss-100 text-moss-800 border-moss-300',
      digital: 'bg-earth-100 text-earth-800 border-earth-300',
      ecological: 'bg-clay-100 text-clay-800 border-clay-300',
      governance: 'bg-amber-100 text-amber-800 border-amber-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-300';
  }
</script>

{#key $language}
<SEO
  title={t.title}
  description={t.subtitle}
  keywords="commons case studies, cooperatives, community models, praxis library"
/>

<div class="min-h-screen" in:fade>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {t.title}
      </h1>
      <p class="text-xl text-earth-600 font-light max-w-2xl mx-auto mb-6">
        {t.subtitle}
      </p>
      <p class="text-earth-700 max-w-3xl mx-auto">
        {t.intro}
      </p>
    </div>

    <!-- Category Filter -->
    <div class="mb-8 flex flex-wrap gap-3 justify-center">
      {#each Object.entries(t.filters) as [key, label]}
        <button
          onclick={() => selectedCategory = key}
          class="px-4 py-2 rounded-lg transition-all {
            selectedCategory === key
              ? 'bg-moss-600 text-white shadow-md'
              : 'bg-white text-earth-700 hover:bg-moss-50 border border-earth-200'
          }"
        >
          {label}
        </button>
      {/each}
    </div>

    <!-- Results count -->
    <div class="text-center mb-8 text-sm text-earth-600">
      {t.caseCount.replace('{count}', filteredStudies.length.toString())}
    </div>

    <!-- Case Studies Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {#each filteredStudies as study (study.id)}
        <article class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-earth-200 hover:border-moss-300 transition-all group">
          <!-- Image placeholder -->
          <div class="h-48 bg-gradient-to-br from-moss-100 to-earth-100 flex items-center justify-center">
            <svg class="w-16 h-16 text-moss-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          
          <div class="p-6">
            <!-- Category badge -->
            <div class="mb-3">
              <span class="px-2 py-1 text-xs rounded-full border {getCategoryColor(study.category)}">
                {t.filters[study.category]}
              </span>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-serif text-earth-900 mb-2 group-hover:text-moss-700 transition-colors">
              {study.title[currentLanguage]}
            </h3>
            
            <!-- Tagline -->
            <p class="text-sm text-earth-600 mb-4">
              {study.tagline[currentLanguage]}
            </p>
            
            <!-- Meta info -->
            <div class="space-y-1 text-xs text-earth-600 mb-4">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{study.location}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{t.founded}: {study.founded}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span>{study.scale[currentLanguage]}</span>
              </div>
            </div>
            
            <!-- Excerpt -->
            <p class="text-sm text-earth-700 mb-4 line-clamp-3">
              {study.excerpt[currentLanguage]}
            </p>
            
            <!-- Read more link -->
            <a 
              href="{base}/library/{study.id}"
              class="inline-flex items-center gap-2 text-moss-600 hover:text-moss-700 font-medium text-sm group-hover:gap-3 transition-all"
            >
              <span>{t.readMore}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      {/each}
    </div>

    <!-- Coming soon message -->
    <div class="text-center py-12">
      <div class="inline-block px-6 py-3 bg-clay-100 text-clay-700 rounded-lg text-sm font-medium mb-4">
        {t.comingSoon}
      </div>
      <p class="text-earth-600 max-w-md mx-auto">
        {currentLanguage === 'en' 
          ? 'We\'re continuously researching and documenting inspiring examples of communizing in action.' 
          : 'Vi forskar kontinuerligt och dokumenterar inspirerande exempel på kommunisering i praktiken.'}
      </p>
    </div>

    <!-- Contribute Section -->
    <div class="bg-gradient-to-br from-moss-50 to-clay-50 rounded-xl p-8 text-center">
      <svg class="w-12 h-12 text-moss-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
