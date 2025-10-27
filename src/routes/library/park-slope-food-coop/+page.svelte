<!-- /src/routes/library/park-slope-food-coop/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const caseStudy = {
    title: 'Park Slope Food Coop',
    tagline: {
      en: 'Member-owned grocery cooperative in Brooklyn, New York',
      sv: 'Medlemsägt livsmedelkooperativ i Brooklyn, New York'
    },
    location: 'Brooklyn, New York, USA',
    founded: 1973,
    members: '17,000+',
    website: 'https://www.foodcoop.com',
    category: 'local',
    
    overview: {
      en: `Park Slope Food Coop (PSFC) is one of the oldest and largest food cooperatives in the United States. Since 1973, it has demonstrated that member labor, democratic governance, and collective ownership can create affordable, high-quality, sustainable food access in an urban environment. Every member works 2.75 hours every four weeks in exchange for access to wholesale prices on a wide selection of organic, local, and ethically sourced foods.`,
      sv: `Park Slope Food Coop (PSFC) är ett av de äldsta och största livsmedelskooperativen i USA. Sedan 1973 har det visat att medlemsarbete, demokratisk styrning och kollektivt ägande kan skapa prisvärd, högkvalitativ, hållbar mattillgång i en urban miljö. Varje medlem arbetar 2,75 timmar var fjärde vecka i utbyte mot tillgång till grossistpriser på ett brett urval av ekologiska, lokala och etiskt framställda livsmedel.`
    },
    
    keyStats: [
      { 
        label: { en: 'Active members', sv: 'Aktiva medlemmar' }, 
        value: '17,000+',
        icon: 'users'
      },
      { 
        label: { en: 'Products stocked', sv: 'Produkter i lager' }, 
        value: '7,000+',
        icon: 'package'
      },
      { 
        label: { en: 'Years in operation', sv: 'År i drift' }, 
        value: '50+',
        icon: 'calendar'
      },
      { 
        label: { en: 'Member work hours/month', sv: 'Medlemsarbetstimmar/månad' }, 
        value: '2.75',
        icon: 'clock'
      }
    ],
    
    origin: {
      title: { en: 'Origin story', sv: 'Ursprungshistoria' },
      content: {
        en: `In 1973, a small group of neighbors in Brooklyn's Park Slope neighborhood were frustrated with the rising cost and declining quality of food available in local stores. Inspired by the cooperative movement and seeking an alternative to corporate food systems, they decided to pool their resources and labor.

The original group started with about 10 families meeting in member homes, ordering food in bulk and distributing it among themselves. Within a year, membership had grown to 100 families, and they moved into a small storefront.

The key innovation was their labor requirement: every member would contribute work hours in exchange for access to wholesale prices. This wasn't just about saving money—it was about building community, taking collective responsibility for food access, and creating an alternative to both commercial supermarkets and charitable food banks.

Over five decades, PSFC has grown to over 17,000 members while maintaining its core principles of member labor, democratic governance, and commitment to sustainable, ethically sourced food.`,
        sv: `År 1973 var en liten grupp grannar i Brooklyns Park Slope-område frustrerade över stigande kostnader och sjunkande kvalitet på mat som fanns i lokala butiker. Inspirerade av kooperativsrörelsen och på jakt efter ett alternativ till företagens matsystem bestämde de sig för att slå samman sina resurser och arbetskraft.

Den ursprungliga gruppen började med cirka 10 familjer som träffades i medlemmarnas hem, beställde mat i bulk och distribuerade den sinsemellan. Inom ett år hade medlemskapet vuxit till 100 familjer, och de flyttade in i en liten butik.

Nyckelinnovationen var deras arbetskrav: varje medlem skulle bidra med arbetstimmar i utbyte mot tillgång till grossistpriser. Detta handlade inte bara om att spara pengar—det handlade om att bygga gemenskap, ta kollektivt ansvar för mattillgång och skapa ett alternativ till både kommersiella stormarknader och välgörenhetsmatbanker.

Under fem decennier har PSFC vuxit till över 17 000 medlemmar samtidigt som kooperativet behållit sina kärnprinciper om medlemsarbete, demokratisk styrning och engagemang för hållbar, etiskt framställd mat.`
      }
    },
    
    principles: {
      title: { en: 'Core principles & structures', sv: 'Kärnprinciper och strukturer' },
      items: [
        {
          title: { en: 'Member labor', sv: 'Medlemsarbete' },
          description: {
            en: 'Every member works 2.75 hours every four weeks. Work shifts include stocking shelves, cashiering, receiving deliveries, administrative tasks, and more. This keeps prices low and builds community.',
            sv: 'Varje medlem arbetar 2,75 timmar var fjärde vecka. Arbetspass inkluderar att fylla på hyllor, kassaarbete, ta emot leveranser, administrativa uppgifter och mer. Detta håller priserna låga och bygger gemenskap.'
          }
        },
        {
          title: { en: 'One member, one vote', sv: 'En medlem, en röst' },
          description: {
            en: 'PSFC is democratically governed. Major decisions are made at General Meetings where every member has equal voting power, regardless of how long they\'ve been a member or how much they spend.',
            sv: 'PSFC styrs demokratiskt. Större beslut fattas vid allmänna möten där varje medlem har lika rösträtt, oavsett hur länge de varit medlem eller hur mycket de handlar.'
          }
        },
        {
          title: { en: 'Cooperative economics', sv: 'Kooperativ ekonomi' },
          description: {
            en: 'Members pay only 21% markup over wholesale prices—compared to typical supermarket markups of 30-50%. The coop operates on a break-even basis with no shareholders to pay.',
            sv: 'Medlemmar betalar endast 21% påslag över grossistpriser—jämfört med typiska stormarknaders påslag på 30-50%. Kooperativet drivs på break-even-basis utan aktieägare att betala.'
          }
        },
        {
          title: { en: 'Environmental commitment', sv: 'Miljöengagemang' },
          description: {
            en: 'Priority given to organic, local, and sustainably produced foods. Strong emphasis on reducing packaging, supporting small producers, and ethical sourcing.',
            sv: 'Prioritet ges till ekologiska, lokala och hållbart producerade livsmedel. Stark betoning på att minska förpackningar, stödja små producenter och etisk inköp.'
          }
        },
        {
          title: { en: 'Transparency', sv: 'Transparens' },
          description: {
            en: 'All financial information, meeting minutes, and decision-making processes are open to members. Coordinators (paid staff) attend meetings and report regularly.',
            sv: 'All finansiell information, mötesprotokoll och beslutsprocesser är öppna för medlemmar. Koordinatorer (avlönad personal) deltar i möten och rapporterar regelbundet.'
          }
        }
      ]
    },
    
    challenges: {
      title: { en: 'Challenges & learnings', sv: 'Utmaningar och lärdomar' },
      items: [
        {
          title: { en: 'Maintaining democratic participation at scale', sv: 'Upprätthålla demokratiskt deltagande i stor skala' },
          challenge: {
            en: 'With 17,000+ members, ensuring meaningful democratic participation is challenging.',
            sv: 'Med 17 000+ medlemmar är det utmanande att säkerställa meningsfullt demokratiskt deltagande.'
          },
          response: {
            en: 'PSFC uses a combination of General Meetings for major decisions, working groups for specific issues, and elected coordinators for day-to-day operations. They also maintain small work squads where members build relationships.',
            sv: 'PSFC använder en kombination av allmänna möten för större beslut, arbetsgrupper för specifika frågor och valda koordinatorer för daglig drift. De upprätthåller också små arbetsgrupper där medlemmar bygger relationer.'
          }
        },
        {
          title: { en: 'Enforcement of work requirements', sv: 'Upprätthållande av arbetskrav' },
          challenge: {
            en: 'Some members miss shifts or don\'t complete their work hours.',
            sv: 'Vissa medlemmar missar pass eller fullföljer inte sina arbetstimmar.'
          },
          response: {
            en: 'Shopping privileges are suspended if members fall behind on work requirements. There\'s also a grace period and support for members facing hardship.',
            sv: 'Handlingsprivilegier stängs av om medlemmar hamnar efter med arbetskrav. Det finns också en respitperiod och stöd för medlemmar som möter svårigheter.'
          }
        },
        {
          title: { en: 'Balancing growth with community', sv: 'Balansera tillväxt med gemenskap' },
          challenge: {
            en: 'How to grow while maintaining the intimate, community-focused culture that makes the coop special.',
            sv: 'Hur man växer samtidigt som man behåller den intima, gemenskapsfokuserade kulturen som gör kooperativet speciellt.'
          },
          response: {
            en: 'PSFC has consciously chosen to limit growth and has even maintained a waiting list rather than expand beyond their ability to maintain quality and community.',
            sv: 'PSFC har medvetet valt att begränsa tillväxten och har till och med hållit en väntelista snarare än att expandera bortom deras förmåga att upprätthålla kvalitet och gemenskap.'
          }
        },
        {
          title: { en: 'Accessibility & exclusion', sv: 'Tillgänglighet och utestängning' },
          challenge: {
            en: 'The work requirement can be a barrier for people with disabilities, irregular schedules, or those working multiple jobs.',
            sv: 'Arbetskravet kan vara en barriär för personer med funktionsnedsättningar, oregelbundna scheman eller de som arbetar flera jobb.'
          },
          response: {
            en: 'PSFC offers accommodations for members with disabilities and allows some flexibility in scheduling. This remains an ongoing conversation about how to be more inclusive while maintaining the labor-contribution model.',
            sv: 'PSFC erbjuder anpassningar för medlemmar med funktionsnedsättningar och tillåter viss flexibilitet i schemaläggning. Detta förblir en pågående konversation om hur man kan vara mer inkluderande samtidigt som man behåller arbetsbidrags-modellen.'
          }
        }
      ]
    },
    
    adaptation: {
      title: { en: 'How to adapt this model', sv: 'Hur man anpassar denna modell' },
      content: {
        en: `**Key principles to replicate:**
- Member labor creates both economic sustainability and community bonds
- Democratic governance ensures collective ownership and accountability
- Start small and grow organically based on actual member needs
- Maintain transparency in all operations and decision-making
- Focus on values alignment (e.g., sustainable food) not just cost savings

**Consider for your context:**
- What resource or service does your community need that could benefit from collective ownership?
- What labor can members contribute? (It doesn't have to be stocking shelves—could be childcare hours, skill-sharing, maintenance work, etc.)
- What's the right scale for your community? PSFC is large, but many successful coops have 100-500 members.
- How will you handle conflicts and ensure inclusive participation?
- What legal structure works in your jurisdiction? (In the US, PSFC is a corporation under New York State cooperative law)

**First steps:**
1. Gather a small committed group (10-20 people)
2. Do a needs assessment—what's the gap you're filling?
3. Research similar models and visit established coops if possible
4. Draft initial governance documents and membership requirements
5. Start small with minimal infrastructure
6. Build systems as you grow based on what members actually need`,
        sv: `**Nyckelprinciper att replikera:**
- Medlemsarbete skapar både ekonomisk hållbarhet och gemenskapsband
- Demokratisk styrning säkerställer kollektivt ägande och ansvarsskyldighet
- Börja smått och väx organiskt baserat på faktiska medlemsbehov
- Upprätthåll transparens i alla operationer och beslutsfattande
- Fokusera på värderingsöverensstämmelse (t.ex. hållbar mat) inte bara kostnadsbesparingar

**Överväg för ditt sammanhang:**
- Vilken resurs eller tjänst behöver din gemenskap som skulle dra nytta av kollektivt ägande?
- Vilken arbetskraft kan medlemmar bidra med? (Det behöver inte vara att fylla hyllor—kan vara barnomsorg, kompetensdelning, underhållsarbete, etc.)
- Vad är rätt skala för din gemenskap? PSFC är stor, men många framgångsrika kooperativ har 100-500 medlemmar.
- Hur hanterar ni konflikter och säkerställer inkluderande deltagande?
- Vilken juridisk struktur fungerar i din jurisdiktion?

**Första stegen:**
1. Samla en liten engagerad grupp (10-20 personer)
2. Gör en behovsanalys—vad är gapet ni fyller?
3. Undersök liknande modeller och besök etablerade kooperativ om möjligt
4. Utkast initiala styrningsdokument och medlemskrav
5. Börja smått med minimal infrastruktur
6. Bygg system när ni växer baserat på vad medlemmar faktiskt behöver`
      }
    },
    
    resources: {
      title: { en: 'Resources & templates', sv: 'Resurser och mallar' },
      items: [
        {
          title: { en: 'PSFC Linewaiters\' Handbook', sv: 'PSFC Linewaiters\' Handbook' },
          description: {
            en: 'Comprehensive member handbook covering all policies and procedures',
            sv: 'Omfattande medlemshandbok som täcker alla policyer och procedurer'
          },
          link: 'https://www.foodcoop.com'
        },
        {
          title: { en: 'Cooperative governance template', sv: 'Mall för kooperativ styrning' },
          description: {
            en: 'Adapt our governance framework for your own food coop',
            sv: 'Anpassa vårt styrningsramverk för ditt eget livsmedelskooperativ'
          },
          link: `${base}/toolkit/agreements`
        },
        {
          title: { en: 'Food Coop Initiative', sv: 'Food Coop Initiative' },
          description: {
            en: 'National network supporting food coop development',
            sv: 'Nationellt nätverk som stödjer utveckling av livsmedelskooperativ'
          },
          link: 'https://foodcoopinitiative.coop'
        }
      ]
    },
    
    sources: [
      {
        title: 'Park Slope Food Coop Official Website',
        url: 'https://www.foodcoop.com'
      },
      {
        title: 'The Park Slope Food Coop: What It Is, How It Works (documentary)',
        url: 'https://www.youtube.com/watch?v=example'
      },
      {
        title: '"From a Handful of People" - 40th Anniversary History',
        url: 'https://www.foodcoop.com/history'
      }
    ],
    
    lastUpdated: '2025-01-15'
  };
</script>

{#key currentLanguage}
<SEO
  title={`${caseStudy.title} - ${caseStudy.tagline[currentLanguage]}`}
  description={caseStudy.overview[currentLanguage].substring(0, 160)}
  keywords="food cooperative, park slope, brooklyn, member labor, cooperative economics, community food"
  type="article"
  publishedTime="2025-01-15"
/>

<div class="min-h-screen" in:fade>
  <!-- Breadcrumb -->
  <nav class="max-w-6xl mx-auto px-4 pt-8 pb-4 text-sm">
    <ol class="flex items-center gap-2 text-earth-600">
      <li>
        <a href="{base}/library" class="hover:text-moss-600 transition-colors">
          {currentLanguage === 'en' ? 'Library' : 'Bibliotek'}
        </a>
      </li>
      <li class="text-earth-400">/</li>
      <li class="text-earth-900">{caseStudy.title}</li>
    </ol>
  </nav>

  <!-- Header -->
  <header class="bg-gradient-to-br from-moss-50 to-earth-50 border-b-2 border-moss-200">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="mb-4">
        <span class="px-3 py-1 bg-moss-100 text-moss-800 text-sm font-medium rounded-full border border-moss-300">
          {currentLanguage === 'en' ? 'Local Models' : 'Lokala modeller'}
        </span>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-serif text-earth-900 mb-4">
        {caseStudy.title}
      </h1>
      
      <p class="text-xl text-earth-700 mb-6">
        {caseStudy.tagline[currentLanguage]}
      </p>
      
      <div class="flex flex-wrap gap-4 text-sm text-earth-600">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <span>{caseStudy.location}</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{currentLanguage === 'en' ? 'Founded' : 'Grundad'}: {caseStudy.founded}</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>{caseStudy.members} {currentLanguage === 'en' ? 'members' : 'medlemmar'}</span>
        </div>
        <a href={caseStudy.website} target="_blank" rel="noopener" class="flex items-center gap-2 text-moss-600 hover:text-moss-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span>{currentLanguage === 'en' ? 'Visit website' : 'Besök webbplats'}</span>
        </a>
      </div>
    </div>
  </header>

  <div class="max-w-6xl mx-auto px-4 py-12">
    <!-- Overview -->
    <section class="mb-12">
      <p class="text-lg text-earth-700 leading-relaxed">
        {caseStudy.overview[currentLanguage]}
      </p>
    </section>

    <!-- Key Stats -->
    <section class="mb-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        {#each caseStudy.keyStats as stat}
          <div class="bg-white rounded-lg p-6 border-2 border-earth-200 text-center">
            <div class="text-3xl font-bold text-moss-700 mb-2">
              {stat.value}
            </div>
            <div class="text-sm text-earth-600">
              {stat.label[currentLanguage]}
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Origin Story -->
    <section class="mb-12">
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-moss-300 pb-3">
        {caseStudy.origin.title[currentLanguage]}
      </h2>
      <div class="prose prose-lg max-w-none">
        {#each caseStudy.origin.content[currentLanguage].split('\n\n') as paragraph}
          <p class="text-earth-700 leading-relaxed mb-4">{paragraph}</p>
        {/each}
      </div>
    </section>

    <!-- Principles -->
    <section class="mb-12">
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-moss-300 pb-3">
        {caseStudy.principles.title[currentLanguage]}
      </h2>
      <div class="space-y-6">
        {#each caseStudy.principles.items as principle}
          <div class="bg-white rounded-lg p-6 border-l-4 border-moss-500">
            <h3 class="text-xl font-semibold text-earth-900 mb-3">
              {principle.title[currentLanguage]}
            </h3>
            <p class="text-earth-700 leading-relaxed">
              {principle.description[currentLanguage]}
            </p>
          </div>
        {/each}
      </div>
    </section>

    <!-- Challenges -->
    <section class="mb-12">
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-moss-300 pb-3">
        {caseStudy.challenges.title[currentLanguage]}
      </h2>
      <div class="space-y-8">
        {#each caseStudy.challenges.items as item}
          <div class="bg-clay-50 rounded-lg p-6 border-2 border-clay-200">
            <h3 class="text-xl font-semibold text-earth-900 mb-4">
              {item.title[currentLanguage]}
            </h3>
            <div class="space-y-3">
              <div>
                <span class="text-sm font-medium text-clay-700 uppercase tracking-wide">
                  {currentLanguage === 'en' ? 'Challenge' : 'Utmaning'}
                </span>
                <p class="text-earth-700 mt-1">{item.challenge[currentLanguage]}</p>
              </div>
              <div>
                <span class="text-sm font-medium text-moss-700 uppercase tracking-wide">
                  {currentLanguage === 'en' ? 'Response' : 'Svar'}
                </span>
                <p class="text-earth-700 mt-1">{item.response[currentLanguage]}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- How to Adapt -->
    <section class="mb-12">
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-moss-300 pb-3">
        {caseStudy.adaptation.title[currentLanguage]}
      </h2>
      <div class="bg-gradient-to-br from-moss-50 to-earth-50 rounded-xl p-8">
        <div class="prose prose-lg max-w-none">
          {#each caseStudy.adaptation.content[currentLanguage].split('\n\n') as section}
            {#if section.startsWith('**')}
              <h3 class="font-semibold text-earth-900 text-lg mb-3">
                {section.replace(/\*\*/g, '')}
              </h3>
            {:else if section.startsWith('-')}
              <ul class="list-disc list-inside space-y-2 mb-4">
                {#each section.split('\n') as item}
                  {#if item.trim()}
                    <li class="text-earth-700">{item.replace(/^-\s*/, '')}</li>
                  {/if}
                {/each}
              </ul>
            {:else if /^\d+\./.test(section.trim())}
              <ol class="list-decimal list-inside space-y-2 mb-4">
                {#each section.split('\n') as item}
                  {#if item.trim()}
                    <li class="text-earth-700">{item.replace(/^\d+\.\s*/, '')}</li>
                  {/if}
                {/each}
              </ol>
            {:else}
              <p class="text-earth-700 leading-relaxed mb-4">{section}</p>
            {/if}
          {/each}
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="mb-12">
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-moss-300 pb-3">
        {caseStudy.resources.title[currentLanguage]}
      </h2>
      <div class="grid md:grid-cols-2 gap-4">
        {#each caseStudy.resources.items as resource}
          <a 
            href={resource.link}
            target="_blank"
            rel="noopener"
            class="bg-white rounded-lg p-6 border-2 border-earth-200 hover:border-moss-300 transition-all group"
          >
            <h3 class="text-lg font-semibold text-earth-900 mb-2 group-hover:text-moss-700 transition-colors flex items-center gap-2">
              <span>{resource.title[currentLanguage] || resource.title}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </h3>
            <p class="text-sm text-earth-600">
              {resource.description[currentLanguage] || resource.description}
            </p>
          </a>
        {/each}
      </div>
    </section>

    <!-- Sources -->
    <section class="mb-12">
      <h3 class="text-lg font-semibold text-earth-900 mb-4">
        {currentLanguage === 'en' ? 'Sources & further reading' : 'Källor och vidare läsning'}
      </h3>
      <ul class="space-y-2">
        {#each caseStudy.sources as source}
          <li>
            <a 
              href={source.url}
              target="_blank"
              rel="noopener"
              class="text-moss-600 hover:text-moss-700 text-sm flex items-center gap-2"
            >
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>{source.title}</span>
            </a>
          </li>
        {/each}
      </ul>
      <p class="text-xs text-earth-500 mt-4">
        {currentLanguage === 'en' ? 'Last updated' : 'Senast uppdaterad'}: {caseStudy.lastUpdated}
      </p>
    </section>

    <!-- Share -->
    <ShareButtons 
      title={caseStudy.title}
      description={caseStudy.tagline[currentLanguage]}
    />

    <!-- Back to library -->
    <div class="text-center mt-12 pt-8 border-t border-earth-200">
      <a 
        href="{base}/library"
        class="inline-flex items-center gap-2 text-moss-600 hover:text-moss-700 font-medium"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>{currentLanguage === 'en' ? 'Back to library' : 'Tillbaka till bibliotek'}</span>
      </a>
    </div>
  </div>
</div>
{/key}
