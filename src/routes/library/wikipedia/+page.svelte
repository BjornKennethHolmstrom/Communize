<!-- /src/routes/library/wikipedia/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const caseStudy = {
    title: 'Wikipedia',
    tagline: {
      en: 'The free encyclopedia that anyone can edit',
      sv: 'Den fria encyklopedin som vem som helst kan redigera'
    },
    location: 'Global / Online',
    founded: 2001,
    members: '300,000+',
    website: 'https://www.wikipedia.org',
    category: 'digital',
    
    overview: {
      en: `Wikipedia is the largest and most successful example of digital commons—a freely accessible knowledge repository built entirely by volunteers. With over 60 million articles in 300+ languages, it demonstrates how collective ownership, open contribution, and transparent governance can create and maintain a global public good. Wikipedia proves that commons-based peer production can compete with—and often surpass—proprietary alternatives.`,
      sv: `Wikipedia är det största och mest framgångsrika exemplet på digitala allmänningar—en fritt tillgänglig kunskapsreservoar byggd helt av frivilliga. Med över 60 miljoner artiklar på 300+ språk visar det hur kollektivt ägande, öppna bidrag och transparent styrning kan skapa och upprätthålla ett globalt allmänt gott. Wikipedia bevisar att allmänningsbaserad jämlik produktion kan konkurrera med—och ofta överträffa—proprietära alternativ.`
    },
    
    keyStats: [
      { 
        label: { en: 'Articles', sv: 'Artiklar' }, 
        value: '60M+',
        icon: 'document'
      },
      { 
        label: { en: 'Languages', sv: 'Språk' }, 
        value: '300+',
        icon: 'globe'
      },
      { 
        label: { en: 'Active editors', sv: 'Aktiva redaktörer' }, 
        value: '300K+',
        icon: 'users'
      },
      { 
        label: { en: 'Monthly page views', sv: 'Månatliga sidvisningar' }, 
        value: '16B+',
        icon: 'chart'
      }
    ],
    
    origin: {
      title: { en: 'Origin story', sv: 'Ursprungshistoria' },
      content: {
        en: `Wikipedia began in 2001 as a side project to Nupedia, an expert-written online encyclopedia that was struggling with slow production. Jimmy Wales and Larry Sanger wondered: what if anyone could contribute?

The wiki model—allowing anyone to edit any article—was radical. Experts predicted chaos. Instead, what emerged was a self-organizing community that developed sophisticated norms, governance structures, and quality control mechanisms.

Within a year, Wikipedia had 20,000 articles. By 2003, it surpassed Encyclopaedia Britannica in size. By 2010, it had become one of the most visited websites globally, entirely volunteer-run and ad-free.

The key innovation wasn't just the technology (wikis existed before), but the social architecture: the assumption of good faith, the emphasis on neutral point of view (NPOV), the detailed governance systems that emerged organically, and most importantly—the commitment to keeping all content in the commons, freely accessible to everyone forever.

Wikipedia demonstrated that knowledge could be a commons—not a commodity—and that collective intelligence, properly structured, could create something more comprehensive and current than any expert-driven alternative.`,
        sv: `Wikipedia började 2001 som ett sidoprojekt till Nupedia, en expertskriven online-encyklopedi som kämpade med långsam produktion. Jimmy Wales och Larry Sanger undrade: tänk om vem som helst kunde bidra?

Wiki-modellen—att tillåta vem som helst att redigera vilken artikel som helst—var radikal. Experter förutspådde kaos. Istället uppstod en självorganiserande gemenskap som utvecklade sofistikerade normer, styrningsstrukturer och kvalitetskontrollmekanismer.

Inom ett år hade Wikipedia 20 000 artiklar. År 2003 överträffade det Encyclopaedia Britannica i storlek. År 2010 hade det blivit en av de mest besökta webbplatserna globalt, helt frivilligdriven och reklamfri.

Nyckelinnovationen var inte bara teknologin (wikis fanns innan), utan den sociala arkitekturen: antagandet om god tro, betoningen på neutral synvinkel (NPOV), de detaljerade styrningssystem som uppstod organiskt, och viktigast—engagemanget för att hålla allt innehåll i allmänningen, fritt tillgängligt för alla för alltid.

Wikipedia visade att kunskap kunde vara en allmänning—inte en handelsvara—och att kollektiv intelligens, rätt strukturerad, kunde skapa något mer omfattande och aktuellt än något expertdrivet alternativ.`
      }
    },
    
    principles: {
      title: { en: 'Core principles & structures', sv: 'Kärnprinciper och strukturer' },
      items: [
        {
          title: { en: 'Five pillars', sv: 'Fem pelare' },
          description: {
            en: 'Wikipedia is an encyclopedia; uses a neutral point of view; is free content that anyone can use, edit, and distribute; treats editors with respect and civility; and has no firm rules beyond these five pillars.',
            sv: 'Wikipedia är en encyklopedi; använder en neutral synvinkel; är fritt innehåll som vem som helst kan använda, redigera och distribuera; behandlar redaktörer med respekt och artighet; och har inga fasta regler bortom dessa fem pelare.'
          }
        },
        {
          title: { en: 'Assume good faith', sv: 'Antag god tro' },
          description: {
            en: 'Unless there\'s clear evidence otherwise, assume other editors are trying to help the project, not harm it. This foundational norm enables the collaborative spirit necessary for commons-based production.',
            sv: 'Om det inte finns tydliga bevis på motsatsen, anta att andra redaktörer försöker hjälpa projektet, inte skada det. Denna grundläggande norm möjliggör den samarbetsanda som är nödvändig för allmänningsbaserad produktion.'
          }
        },
        {
          title: { en: 'Consensus decision-making', sv: 'Konsensusbeslutsfattande' },
          description: {
            en: 'Major decisions are made through discussion and consensus, not voting. This creates buy-in and ensures diverse perspectives are heard. Administrators are elected by the community.',
            sv: 'Större beslut fattas genom diskussion och konsensus, inte omröstning. Detta skapar acceptans och säkerställer att olika perspektiv hörs. Administratörer väljs av gemenskapen.'
          }
        },
        {
          title: { en: 'Verifiability, not truth', sv: 'Verifierbarhet, inte sanning' },
          description: {
            en: 'Content must be verifiable through reliable sources, not just "true." This shifts debates from truth claims to source quality, making collaboration easier across worldviews.',
            sv: 'Innehåll måste vara verifierbart genom pålitliga källor, inte bara "sant." Detta flyttar debatter från sanningsanspråk till källkvalitet, vilket gör samarbete lättare över världsbilder.'
          }
        },
        {
          title: { en: 'Copyleft licensing', sv: 'Copyleft-licensiering' },
          description: {
            en: 'All content is licensed under Creative Commons (CC BY-SA), ensuring it remains in the commons forever. Anyone can use, modify, and redistribute Wikipedia content, as long as they share alike.',
            sv: 'Allt innehåll är licensierat under Creative Commons (CC BY-SA), vilket säkerställer att det förblir i allmänningen för alltid. Vem som helst kan använda, modifiera och återdistribuera Wikipedia-innehåll, så länge de delar lika.'
          }
        },
        {
          title: { en: 'No advertising', sv: 'Ingen reklam' },
          description: {
            en: 'Wikipedia is funded entirely by donations to the Wikimedia Foundation, keeping it free from commercial influence and accessible to all without extracting attention or data.',
            sv: 'Wikipedia finansieras helt av donationer till Wikimedia Foundation, vilket håller det fritt från kommersiellt inflytande och tillgängligt för alla utan att utvinna uppmärksamhet eller data.'
          }
        }
      ]
    },
    
    challenges: {
      title: { en: 'Challenges & learnings', sv: 'Utmaningar och lärdomar' },
      items: [
        {
          title: { en: 'Editor diversity and inclusion', sv: 'Redaktörsmångfald och inkludering' },
          challenge: {
            en: 'Wikipedia editors are predominantly male (90%), Western, and relatively privileged. This creates systemic biases in content and perspective.',
            sv: 'Wikipedia-redaktörer är övervägande män (90%), västerländska och relativt privilegierade. Detta skapar systemiska fördomar i innehåll och perspektiv.'
          },
          response: {
            en: 'Various initiatives like Art+Feminism edit-a-thons, WikiProject Women in Red, and regional outreach programs work to diversify contributors. The challenge remains ongoing and structural.',
            sv: 'Olika initiativ som Art+Feminism edit-a-thons, WikiProject Women in Red och regionala uppsökande program arbetar för att diversifiera bidragsgivare. Utmaningen förblir pågående och strukturell.'
          }
        },
        {
          title: { en: 'Coordinated manipulation', sv: 'Koordinerad manipulation' },
          challenge: {
            en: 'As Wikipedia\'s influence grew, so did attempts to manipulate it—from corporate PR editing to state-sponsored disinformation campaigns.',
            sv: 'När Wikipedias inflytande växte, växte också försöken att manipulera det—från företags-PR-redigering till statssponsrade desinformationskampanjer.'
          },
          response: {
            en: 'Sophisticated tools for detecting coordinated editing, semi-protection for controversial articles, strict sourcing requirements, and a dedicated community of anti-vandalism editors. The arms race continues.',
            sv: 'Sofistikerade verktyg för att upptäcka koordinerad redigering, halvskydd för kontroversiella artiklar, strikta källkrav och en dedikerad gemenskap av anti-vandaliseringsredaktörer. Kapprustningen fortsätter.'
          }
        },
        {
          title: { en: 'Decline in active editors', sv: 'Nedgång i aktiva redaktörer' },
          challenge: {
            en: 'After 2007, the number of active Wikipedia editors began declining, raising concerns about long-term sustainability.',
            sv: 'Efter 2007 började antalet aktiva Wikipedia-redaktörer minska, vilket väckte oro för långsiktig hållbarhet.'
          },
          response: {
            en: 'Research showed the decline was partly due to increased bureaucracy and the "deletionist vs. inclusionist" culture wars. Efforts to simplify editing, improve onboarding, and create more welcoming spaces (like Wikipedia Library) have helped stabilize numbers.',
            sv: 'Forskning visade att nedgången delvis berodde på ökad byråkrati och "deletionist vs. inklusionist" kulturkrig. Insatser för att förenkla redigering, förbättra onboarding och skapa mer välkomnande utrymmen (som Wikipedia Library) har hjälpt till att stabilisera siffrorna.'
          }
        },
        {
          title: { en: 'Governing at scale', sv: 'Styrning i stor skala' },
          challenge: {
            en: 'How do you maintain consensus-based governance with hundreds of thousands of editors across 300 languages?',
            sv: 'Hur upprätthåller man konsensusbaserad styrning med hundratusentals redaktörer över 300 språk?'
          },
          response: {
            en: 'Polycentric governance: each language Wikipedia has autonomy, with meta-level coordination for platform-wide issues. The Wikimedia Foundation handles infrastructure and legal issues but doesn\'t control content. Local consensus rules within bounds of global principles.',
            sv: 'Polycentrisk styrning: varje språk-Wikipedia har autonomi, med metanivåkoordination för plattformsövergripande frågor. Wikimedia Foundation hanterar infrastruktur och juridiska frågor men kontrollerar inte innehåll. Lokal konsensus styr inom gränserna för globala principer.'
          }
        }
      ]
    },
    
    adaptation: {
      title: { en: 'How to adapt this model', sv: 'Hur man anpassar denna modell' },
      content: {
        en: `**Key principles to replicate:**
- Assume good faith and create low barriers to participation
- Make all contributions visible and reversible (radical transparency)
- Develop clear guidelines (like NPOV) that enable collaboration across difference
- Keep it in the commons with copyleft licensing
- Resist monetization and advertising
- Allow governance to emerge organically from community needs

**Consider for your context:**
- What knowledge or creative work could benefit from collective curation in your community?
- Could be: local history wiki, community resource directory, skill-sharing database, neighborhood memory project, collaborative art archive
- What are your "five pillars"—the core principles that can't be compromised?
- How will you handle conflicts and ensure quality without gatekeeping?
- What tools support both ease of contribution and protection against abuse?

**Different scales to consider:**
- **Micro**: Family wiki for shared recipes and stories
- **Local**: Neighborhood wiki documenting history, resources, and knowledge
- **Thematic**: Subject-specific wiki (there are thousands of specialized wikis using MediaWiki)
- **Regional**: Language or cultural community knowledge base

**First steps:**
1. Choose wiki software (MediaWiki like Wikipedia, or simpler alternatives like DokuWiki, TiddlyWiki)
2. Define your scope and core principles clearly
3. Start with a small committed group (5-10 people) who understand the vision
4. Create initial structure and seed content
5. Make it absurdly easy for people to contribute
6. Develop norms through practice, not by writing extensive rules upfront
7. Celebrate contributions and build culture of appreciation

**Critical insight from Wikipedia:**
The technology is the easy part. The hard part is building a culture of collaboration, trust, and shared commitment to keeping knowledge in the commons. Wikipedia succeeded because of its social innovations, not just its technical ones.`,
        sv: `**Nyckelprinciper att replikera:**
- Antag god tro och skapa låga barriärer för deltagande
- Gör alla bidrag synliga och reversibla (radikal transparens)
- Utveckla tydliga riktlinjer (som NPOV) som möjliggör samarbete över skillnader
- Håll det i allmänningen med copyleft-licensiering
- Motstå monetarisering och reklam
- Låt styrning växa fram organiskt från gemenskapens behov

**Överväg för ditt sammanhang:**
- Vilken kunskap eller kreativt arbete skulle kunna dra nytta av kollektiv kurering i din gemenskap?
- Kan vara: lokal historiewiki, gemenskapsresurskatalog, kompetensdelningsdatabas, grannminnesprojekt, kollaborativt konstarkiv
- Vilka är dina "fem pelare"—de kärnprinciper som inte kan kompromissas?
- Hur hanterar du konflikter och säkerställer kvalitet utan grindvakt?
- Vilka verktyg stödjer både enkel bidragsgivning och skydd mot missbruk?

**Olika skalor att överväga:**
- **Mikro**: Familje-wiki för delade recept och berättelser
- **Lokal**: Grannskap-wiki som dokumenterar historia, resurser och kunskap
- **Tematisk**: Ämnesspecifik wiki (det finns tusentals specialiserade wikis som använder MediaWiki)
- **Regional**: Språk- eller kulturgemenskaps kunskapsbas

**Första stegen:**
1. Välj wiki-mjukvara (MediaWiki som Wikipedia, eller enklare alternativ som DokuWiki, TiddlyWiki)
2. Definiera ditt omfång och kärnprinciper tydligt
3. Börja med en liten engagerad grupp (5-10 personer) som förstår visionen
4. Skapa initial struktur och såddinnehåll
5. Gör det absurt enkelt för människor att bidra
6. Utveckla normer genom praktik, inte genom att skriva omfattande regler i förväg
7. Fira bidrag och bygg kultur av uppskattning

**Kritisk insikt från Wikipedia:**
Teknologin är den lätta delen. Den svåra delen är att bygga en kultur av samarbete, förtroende och delat engagemang för att hålla kunskap i allmänningen. Wikipedia lyckades på grund av sina sociala innovationer, inte bara sina tekniska.`
      }
    },
    
    resources: {
      title: { en: 'Resources & templates', sv: 'Resurser och mallar' },
      items: [
        {
          title: { en: 'MediaWiki software', sv: 'MediaWiki-mjukvara' },
          description: {
            en: 'The free, open-source wiki platform that powers Wikipedia—you can use it too',
            sv: 'Den fria, öppna källkods wiki-plattformen som driver Wikipedia—du kan också använda den'
          },
          link: 'https://www.mediawiki.org'
        },
        {
          title: { en: 'Wikipedia\'s Five Pillars', sv: 'Wikipedias fem pelare' },
          description: {
            en: 'Core principles that guide all Wikipedia work',
            sv: 'Kärnprinciper som vägleder allt Wikipedia-arbete'
          },
          link: 'https://en.wikipedia.org/wiki/Wikipedia:Five_pillars'
        },
        {
          title: { en: 'Commons-based peer production resources', sv: 'Allmänningsbaserad jämlik produktionsresurser' },
          description: {
            en: 'Academic research on how Wikipedia-style collaboration works',
            sv: 'Akademisk forskning om hur Wikipedia-stil samarbete fungerar'
          },
          link: 'https://p2pfoundation.net'
        },
        {
          title: { en: 'Wiki collaboration guide', sv: 'Wiki-samarbetsguide' },
          description: {
            en: 'Adapt collaborative principles for your own knowledge commons',
            sv: 'Anpassa samarbetsprinciper för din egen kunskapsallmänning'
          },
          link: `${base}/toolkit/agreements`
        }
      ]
    },
    
    sources: [
      {
        title: 'Wikipedia Official Site',
        url: 'https://www.wikipedia.org'
      },
      {
        title: 'Yochai Benkler - "The Wealth of Networks" (2006)',
        url: 'https://www.benkler.org/wealth_of_networks/'
      },
      {
        title: 'Wikipedia Research - Meta-Wiki',
        url: 'https://meta.wikimedia.org/wiki/Research:Index'
      },
      {
        title: 'Andrew Lih - "The Wikipedia Revolution" (2009)',
        url: 'https://en.wikipedia.org/wiki/The_Wikipedia_Revolution'
      }
    ],
    
    lastUpdated: '2025-01-15'
  };
</script>

{#key $language}
<SEO
  title={`${caseStudy.title} - ${caseStudy.tagline[currentLanguage]}`}
  description={caseStudy.overview[currentLanguage].substring(0, 160)}
  keywords="wikipedia, digital commons, knowledge commons, peer production, open content, copyleft"
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
  <header class="bg-gradient-to-br from-earth-50 to-moss-50 border-b-2 border-earth-300">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="mb-4">
        <span class="px-3 py-1 bg-earth-100 text-earth-800 text-sm font-medium rounded-full border border-earth-300">
          {currentLanguage === 'en' ? 'Digital commons' : 'Digitala allmänningar'}
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012-2 2 2 0 104 0 2 2 0 012 2v.5a2.5 2.5 0 002.5 2.5 2.5 2.5 0 01-2.5 2.5H19l-1 2v3" />
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
          <span>{caseStudy.members} {currentLanguage === 'en' ? 'active editors' : 'aktiva redaktörer'}</span>
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
            <div class="text-3xl font-bold text-earth-700 mb-2">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-earth-300 pb-3">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-earth-300 pb-3">
        {caseStudy.principles.title[currentLanguage]}
      </h2>
      <div class="space-y-6">
        {#each caseStudy.principles.items as principle}
          <div class="bg-white rounded-lg p-6 border-l-4 border-earth-500">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-earth-300 pb-3">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-earth-300 pb-3">
        {caseStudy.adaptation.title[currentLanguage]}
      </h2>
      <div class="bg-gradient-to-br from-earth-50 to-moss-50 rounded-xl p-8">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-earth-300 pb-3">
        {caseStudy.resources.title[currentLanguage]}
      </h2>
      <div class="grid md:grid-cols-2 gap-4">
        {#each caseStudy.resources.items as resource}
          <a 
            href={resource.link}
            target="_blank"
            rel="noopener"
            class="bg-white rounded-lg p-6 border-2 border-earth-200 hover:border-earth-400 transition-all group"
          >
            <h3 class="text-lg font-semibold text-earth-900 mb-2 group-hover:text-earth-700 transition-colors flex items-center gap-2">
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
