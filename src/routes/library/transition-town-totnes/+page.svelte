<!-- /src/routes/library/transition-town-totnes/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const caseStudy = {
    title: 'Transition Town Totnes',
    tagline: {
      en: 'Community-led movement for local resilience and ecological regeneration',
      sv: 'Gemenskapslett rörelse för lokal motståndskraft och ekologisk regenerering'
    },
    location: 'Totnes, Devon, UK',
    founded: 2006,
    members: '2,000+',
    website: 'https://www.transitiontowntotnes.org',
    category: 'ecological',
    
    overview: {
      en: `Transition Town Totnes (TTT) is the birthplace of the global Transition Movement—a community-led response to climate change, peak oil, and ecological crisis. Founded in 2006 in a small market town in Devon, England, TTT pioneered a model of grassroots resilience-building that has since spread to over 1,000 communities worldwide. By focusing on practical projects—local food systems, renewable energy, community economics, and skills-sharing—TTT demonstrates how ordinary people can create extraordinary change from the ground up.`,
      sv: `Transition Town Totnes (TTT) är födelseplatsen för den globala omställningsrörelsen—ett gemenskapslett svar på klimatförändring, peak oil och ekologisk kris. Grundad 2006 i en liten marknadsstad i Devon, England, var TTT banbrytande för en modell av gräsrotsuppbyggnad av motståndskraft som sedan har spridit sig till över 1 000 gemenskaper världen över. Genom att fokusera på praktiska projekt—lokala matsystem, förnybar energi, gemenskapsekonomi och kompetensdelning—visar TTT hur vanliga människor kan skapa extraordinära förändringar från grunden.`
    },
    
    keyStats: [
      { 
        label: { en: 'Active participants', sv: 'Aktiva deltagare' }, 
        value: '2,000+',
        icon: 'users'
      },
      { 
        label: { en: 'Working groups', sv: 'Arbetsgrupper' }, 
        value: '20+',
        icon: 'grid'
      },
      { 
        label: { en: 'Global Transition initiatives', sv: 'Globala omställningsinitiativ' }, 
        value: '1,000+',
        icon: 'globe'
      },
      { 
        label: { en: 'Local businesses supported', sv: 'Lokala företag som stöttas' }, 
        value: '100+',
        icon: 'shop'
      }
    ],
    
    origin: {
      title: { en: 'Origin story', sv: 'Ursprungshistoria' },
      content: {
        en: `In 2005, permaculture teacher Rob Hopkins was living in Kinsale, Ireland, working with students on a practical response to peak oil—the inevitable decline in cheap fossil fuels. The question was urgent: how could communities prepare for a lower-energy future?

When Hopkins moved to Totnes in 2006, he found a town ripe for transformation. Totnes had a history of alternative thinking, a strong local food culture, and residents already concerned about sustainability. But what Hopkins proposed was different from typical environmentalism—it wasn't about sacrifice or doom, but about creating a more connected, resilient, and joyful community.

The Transition model introduced several innovations:

First, it was **inner and outer transition**—recognizing that personal resilience, hope, and community connection were as important as technical solutions. You couldn't build a sustainable future with burned-out activists.

Second, it was **solutions-focused and practical**—rather than just protesting or campaigning, Transition groups would build alternatives. Community gardens, local currencies, renewable energy cooperatives, repair cafés, and skill-sharing workshops.

Third, it was **inclusive and non-partisan**—Transition welcomed everyone from Green Party members to Conservative councillors to people who'd never been politically active. The focus on practical projects rather than ideology made it accessible.

The first public meeting in September 2006 drew over 400 people. Within months, working groups had formed around food, energy, housing, transport, and economics. The Totnes Pound—a local currency—launched in 2007. Community gardens sprouted. Energy audits began. Skills workshops filled up.

By 2008, the model had spread across the UK and internationally. Rob Hopkins' book "The Transition Handbook" became a guide for communities worldwide. What started as one town's response to peak oil became a global movement for community-led resilience.`,
        sv: `År 2005 levde permakulturläraren Rob Hopkins i Kinsale, Irland, och arbetade med studenter på ett praktiskt svar på peak oil—den oundvikliga nedgången i billiga fossila bränslen. Frågan var brådskande: hur kunde gemenskaper förbereda sig för en framtid med lägre energi?

När Hopkins flyttade till Totnes 2006 fann han en stad mogen för transformation. Totnes hade en historia av alternativt tänkande, en stark lokal matkultur och invånare som redan var oroade för hållbarhet. Men vad Hopkins föreslog skilde sig från typisk miljörörelse—det handlade inte om uppoffring eller undergång, utan om att skapa en mer sammankopplad, motståndskraftig och glädjefull gemenskap.

Omställningsmodellen introducerade flera innovationer:

För det första var det **inre och yttre omställning**—erkännande av att personlig motståndskraft, hopp och gemenskapsanknytning var lika viktiga som tekniska lösningar. Man kunde inte bygga en hållbar framtid med utbrända aktivister.

För det andra var det **lösningsfokuserat och praktiskt**—istället för att bara protestera eller kampanja skulle omställningsgrupper bygga alternativ. Gemenskapsträdgårdar, lokala valutor, förnybara energikooperativ, reparationscaféer och kompetensdelningsworkshops.

För det tredje var det **inkluderande och opartiskt**—Omställning välkomnade alla från Gröna partiet-medlemmar till konservativa rådsledamöter till människor som aldrig varit politiskt aktiva. Fokus på praktiska projekt snarare än ideologi gjorde det tillgängligt.

Det första offentliga mötet i september 2006 lockade över 400 personer. Inom månader hade arbetsgrupper bildats kring mat, energi, boende, transport och ekonomi. Totnes-pundet—en lokal valuta—lanserades 2007. Gemenskapsträdgårdar spirade. Energigranskningar började. Kompetensworkshops fylldes.

År 2008 hade modellen spridit sig över Storbritannien och internationellt. Rob Hopkins bok "The Transition Handbook" blev en guide för gemenskaper världen över. Det som började som en stads svar på peak oil blev en global rörelse för gemenskapsledd motståndskraft.`
      }
    },
    
    principles: {
      title: { en: 'Core principles & structures', sv: 'Kärnprinciper och strukturer' },
      items: [
        {
          title: { en: 'Positive visioning', sv: 'Positiv visionering' },
          description: {
            en: 'Rather than focusing on what we\'re against or what we\'re losing, Transition emphasizes the desirable future we\'re building—a world with stronger communities, meaningful work, cleaner air, and genuine connection. This attracts people who might tune out doom-and-gloom messaging.',
            sv: 'Istället för att fokusera på vad vi är emot eller vad vi förlorar, betonar omställning den önskvärda framtid vi bygger—en värld med starkare gemenskaper, meningsfullt arbete, renare luft och äkta koppling. Detta lockar människor som kanske stänger av för undergångs- och mörkermedelanden.'
          }
        },
        {
          title: { en: 'Head, heart, and hands', sv: 'Huvud, hjärta och händer' },
          description: {
            en: 'Transition works on three levels: understanding the challenges (head), building emotional resilience and community (heart), and taking practical action (hands). This integrated approach prevents burnout and creates lasting change.',
            sv: 'Omställning arbetar på tre nivåer: förstå utmaningarna (huvud), bygga emotionell motståndskraft och gemenskap (hjärta) och vidta praktiska åtgärder (händer). Detta integrerade tillvägagångssätt förhindrar utbrändhet och skapar varaktig förändring.'
          }
        },
        {
          title: { en: 'Self-organizing working groups', sv: 'Självorganiserande arbetsgrupper' },
          description: {
            en: 'TTT doesn\'t have a top-down structure. Instead, autonomous working groups form around specific projects—food, energy, housing, economics, etc. Each group has freedom to act within the shared vision. This enables rapid innovation and prevents bottlenecks.',
            sv: 'TTT har inte en top-down-struktur. Istället bildas autonoma arbetsgrupper kring specifika projekt—mat, energi, boende, ekonomi, etc. Varje grupp har frihet att agera inom den delade visionen. Detta möjliggör snabb innovation och förhindrar flaskhalsar.'
          }
        },
        {
          title: { en: 'Inclusivity and respect', sv: 'Inkludering och respekt' },
          description: {
            en: 'Transition deliberately avoids being identified with any political party or single issue campaign. It welcomes diverse perspectives and focuses on common ground—everyone wants clean air, good food, and strong communities.',
            sv: 'Omställning undviker medvetet att identifieras med något politiskt parti eller enkelfrågekampanj. Den välkomnar olika perspektiv och fokuserar på gemensam grund—alla vill ha ren luft, god mat och starka gemenskaper.'
          }
        },
        {
          title: { en: 'Rebuilding local economies', sv: 'Återuppbyggnad av lokala ekonomier' },
          description: {
            en: 'Central to Transition is relocalizing the economy—supporting local businesses, creating local currencies (Totnes Pound), establishing community-supported agriculture, and building local supply chains. This increases resilience and keeps wealth circulating locally.',
            sv: 'Centralt för omställning är att återlokalisera ekonomin—stödja lokala företag, skapa lokala valutor (Totnes-pundet), etablera gemenskapsstödd jordbruk och bygga lokala försörjningskedjor. Detta ökar motståndskraften och håller välståndet cirkulerande lokalt.'
          }
        },
        {
          title: { en: 'Learning by doing', sv: 'Lära genom att göra' },
          description: {
            en: 'Transition doesn\'t wait for perfect plans—it experiments, learns from failure, and adapts. This action-learning approach builds practical skills, creates visible change quickly, and maintains momentum.',
            sv: 'Omställning väntar inte på perfekta planer—den experimenterar, lär av misslyckanden och anpassar sig. Detta handlingslärande tillvägagångssätt bygger praktiska färdigheter, skapar synlig förändring snabbt och upprätthåller momentum.'
          }
        }
      ]
    },
    
    challenges: {
      title: { en: 'Challenges & learnings', sv: 'Utmaningar och lärdomar' },
      items: [
        {
          title: { en: 'Maintaining momentum over time', sv: 'Upprätthålla momentum över tid' },
          challenge: {
            en: 'The initial enthusiasm of Transition can be hard to sustain. Volunteers burn out, projects stall, and the urgency of daily life takes over.',
            sv: 'Den initiala entusiasmen för omställning kan vara svår att upprätthålla. Frivilliga bränner ut sig, projekt stannar av och vardagslivets brådska tar över.'
          },
          response: {
            en: 'TTT learned to pace itself, celebrate small wins, and create sustainable structures. They developed "Heart and Soul" groups focused on inner resilience, preventing burnout. They also accepted that engagement would ebb and flow—and that\'s okay.',
            sv: 'TTT lärde sig att dosera sig själv, fira små vinster och skapa hållbara strukturer. De utvecklade "Hjärta och själ"-grupper fokuserade på inre motståndskraft, förhindra utbrändhet. De accepterade också att engagemang skulle ebba och flöda—och det är okej.'
          }
        },
        {
          title: { en: 'Reaching beyond the "choir"', sv: 'Nå bortom "kören"' },
          challenge: {
            en: 'Transition can attract people already committed to sustainability, but struggle to engage the wider community, especially those facing economic hardship.',
            sv: 'Omställning kan locka människor som redan är engagerade i hållbarhet, men kämpar för att engagera den bredare gemenskapen, särskilt de som möter ekonomiska svårigheter.'
          },
          response: {
            en: 'TTT has worked to make projects accessible and economically beneficial—like bulk buying clubs that save money, repair cafés that extend the life of possessions, and skills shares that build social capital. They\'ve also partnered with schools, businesses, and local government to mainstream Transition ideas.',
            sv: 'TTT har arbetat för att göra projekt tillgängliga och ekonomiskt fördelaktiga—som bulkinköpsklubbar som sparar pengar, reparationscaféer som förlänger ägodelars livslängd och kompetensdelningar som bygger socialt kapital. De har också samarbetat med skolor, företag och lokala myndigheter för att integrera omställningsidéer.'
          }
        },
        {
          title: { en: 'Scaling impact without losing soul', sv: 'Skala påverkan utan att förlora själen' },
          challenge: {
            en: 'As Transition grew globally, there was tension between maintaining the grassroots, community-led ethos and creating larger systemic change.',
            sv: 'När omställningen växte globalt fanns det spänning mellan att upprätthålla gräsrots-, gemenskapsledda etos och skapa större systemförändring.'
          },
          response: {
            en: 'TTT and the broader Transition Network have embraced a network model rather than a franchise model. Each initiative is autonomous and adapts Transition to local context. The network shares learning but doesn\'t impose templates. This maintains authenticity while enabling scale.',
            sv: 'TTT och det bredare omställningsnätverket har omfamnat en nätverksmodell snarare än en franchisemodell. Varje initiativ är autonomt och anpassar omställning till lokal kontext. Nätverket delar lärande men påtvingar inte mallar. Detta upprätthåller autenticitet samtidigt som det möjliggör skala.'
          }
        },
        {
          title: { en: 'Measuring success', sv: 'Mäta framgång' },
          challenge: {
            en: 'How do you measure the success of something as diffuse and long-term as community resilience?',
            sv: 'Hur mäter man framgången för något så diffust och långsiktigt som gemenskapens motståndskraft?'
          },
          response: {
            en: 'TTT has developed creative metrics beyond just carbon reduction—including social capital indicators, number of people with new skills, local economic multipliers, and qualitative stories of change. They also accept that some impacts are immeasurable but still valuable.',
            sv: 'TTT har utvecklat kreativa mätvärden bortom bara koldioxidminskning—inklusive sociala kapitalindikatorer, antal människor med nya färdigheter, lokala ekonomiska multiplikatorer och kvalitativa berättelser om förändring. De accepterar också att vissa effekter är omätbara men ändå värdefulla.'
          }
        }
      ]
    },
    
    adaptation: {
      title: { en: 'How to adapt this model', sv: 'Hur man anpassar denna modell' },
      content: {
        en: `**Key principles to replicate:**
- Start with a compelling positive vision of a resilient local future
- Focus on practical, visible projects that create immediate benefits
- Build emotional resilience alongside practical action ("inner transition")
- Create space for self-organizing groups rather than top-down control
- Make it inclusive, welcoming people across the political spectrum
- Celebrate small wins and learn publicly from failures

**Consider for your context:**
- What are the specific vulnerabilities in your community? (food security, energy dependence, economic fragility, social isolation?)
- What existing assets can you build on? (community gardens, local businesses, cultural traditions, engaged residents?)
- Who are natural allies? (schools, faith communities, local businesses, existing groups?)
- What's the "gateway project"—something visible, beneficial, and achievable that can build momentum?

**Possible Transition-style projects:**
- **Food**: Community gardens, seed libraries, community-supported agriculture, bulk buying clubs, fermentation workshops
- **Energy**: Community solar/wind cooperatives, home energy audits, insulation projects, bike infrastructure
- **Economics**: Local currencies, time banks, repair cafés, tool libraries, skills exchanges
- **Waste**: Community composting, swap shops, zero waste initiatives
- **Social**: Storytelling projects, community celebrations, intergenerational skill-sharing

**Scale considerations:**
- **Neighborhood** (100-1,000 people): Great for community gardens, mutual aid, block parties
- **Town/district** (1,000-50,000 people): Ideal for Transition—large enough for diversity, small enough for connection
- **City** (50,000+ people): Multiple neighborhood Transition groups that network together
- **Rural**: Focus on bioregional cooperation, local food/energy systems

**First steps:**
1. **Gather a small initiating group** (5-15 people) committed to positive change
2. **Learn together** about local challenges and Transition principles
3. **Build awareness** through film screenings, talks, open space events
4. **Host a visioning process** - what does a thriving local future look like?
5. **Form working groups** around themes people are passionate about
6. **Start small practical projects** that create visible change
7. **Celebrate and share stories** - make success contagious
8. **Keep it joyful** - if it's not life-giving, you're doing it wrong

**Resources to explore:**
- Rob Hopkins' "The Transition Handbook" and "From What Is to What If"
- The Transition Network (transitionnetwork.org) for guides and connections
- "Doughnut Economics" by Kate Raworth for economic thinking
- Permaculture principles for ecological design`,
        sv: `**Nyckelprinciper att replikera:**
- Börja med en övertygande positiv vision om en motståndskraftig lokal framtid
- Fokusera på praktiska, synliga projekt som skapar omedelbara fördelar
- Bygg emotionell motståndskraft bredvid praktisk handling ("inre omställning")
- Skapa utrymme för självorganiserande grupper snarare än top-down-kontroll
- Gör det inkluderande, välkomna människor över det politiska spektrumet
- Fira små vinster och lär offentligt av misslyckanden

**Överväg för ditt sammanhang:**
- Vilka är de specifika sårbarheterna i din gemenskap? (matsäkerhet, energiberoende, ekonomisk bräcklighet, social isolering?)
- Vilka befintliga tillgångar kan du bygga på? (gemenskapsträdgårdar, lokala företag, kulturella traditioner, engagerade invånare?)
- Vilka är naturliga allierade? (skolor, trosgemenskaper, lokala företag, befintliga grupper?)
- Vad är "gateway-projektet"—något synligt, fördelaktigt och uppnåeligt som kan bygga momentum?

**Möjliga omställningsstilsprojekt:**
- **Mat**: Gemenskapsträdgårdar, frö-bibliotek, gemenskapsstödd jordbruk, bulkinköpsklubbar, fermenterings-workshops
- **Energi**: Gemenskaps-sol/vindkooperativ, hem-energigranskningar, isoleringsprojekt, cykelinfrastruktur
- **Ekonomi**: Lokala valutor, tidsbanker, reparationscaféer, verktygsbibliotek, kompetensutbyten
- **Avfall**: Gemenskapskompostering, bytesbutiker, noll-avfallsinitiativ
- **Socialt**: Berättelseprojekt, gemenskapsfiranden, intergenerationell kompetensdelning

**Skalavägningar:**
- **Grannskap** (100-1 000 personer): Bra för gemenskapsträdgårdar, ömsesidig hjälp, kvartersfester
- **Stad/distrikt** (1 000-50 000 personer): Idealiskt för omställning—stort nog för mångfald, litet nog för koppling
- **Storstad** (50 000+ personer): Flera grannskapsomställningsgrupper som nätverkar tillsammans
- **Landsbygd**: Fokus på bioregionalt samarbete, lokala mat-/energisystem

**Första stegen:**
1. **Samla en liten initierande grupp** (5-15 personer) engagerade i positiv förändring
2. **Lär tillsammans** om lokala utmaningar och omställningsprinciper
3. **Bygg medvetenhet** genom filmvisningar, föredrag, öppna rum-evenemang
4. **Håll en visioneringsprocess** - hur ser en blomstrande lokal framtid ut?
5. **Bilda arbetsgrupper** kring teman människor brinner för
6. **Starta små praktiska projekt** som skapar synlig förändring
7. **Fira och dela berättelser** - gör framgång smittsam
8. **Håll det glädjerik** - om det inte ger liv, gör du fel

**Resurser att utforska:**
- Rob Hopkins' "The Transition Handbook" och "From What Is to What If"
- Transition Network (transitionnetwork.org) för guider och kopplingar
- "Doughnut Economics" av Kate Raworth för ekonomiskt tänkande
- Permakulturprinciper för ekologisk design`
      }
    },
    
    resources: {
      title: { en: 'Resources & templates', sv: 'Resurser och mallar' },
      items: [
        {
          title: { en: 'Transition Town Totnes website', sv: 'Transition Town Totnes webbplats' },
          description: {
            en: 'Comprehensive resource on TTT projects, events, and learning',
            sv: 'Omfattande resurs om TTT-projekt, evenemang och lärande'
          },
          link: 'https://www.transitiontowntotnes.org'
        },
        {
          title: { en: 'Transition Network', sv: 'Omställningsnätverket' },
          description: {
            en: 'Global network connecting 1000+ Transition initiatives with guides and resources',
            sv: 'Globalt nätverk som förbinder 1000+ omställningsinitiativ med guider och resurser'
          },
          link: 'https://transitionnetwork.org'
        },
        {
          title: { en: 'Essential Guide to Doing Transition', sv: 'Essential Guide to Doing Transition' },
          description: {
            en: 'Free downloadable handbook for starting Transition in your community',
            sv: 'Gratis nedladdningsbar handbok för att starta omställning i din gemenskap'
          },
          link: 'https://transitionnetwork.org/resources/'
        },
        {
          title: { en: 'Community resilience worksheets', sv: 'Gemenskapsmotståndskrafts-arbetsblad' },
          description: {
            en: 'Adapt our planning tools for building local resilience',
            sv: 'Anpassa våra planeringsverktyg för att bygga lokal motståndskraft'
          },
          link: `${base}/toolkit/worksheets`
        }
      ]
    },
    
    sources: [
      {
        title: 'Transition Town Totnes Official Website',
        url: 'https://www.transitiontowntotnes.org'
      },
      {
        title: 'Rob Hopkins - "The Transition Handbook" (2008)',
        url: 'https://www.chelseagreen.com/product/the-transition-handbook/'
      },
      {
        title: 'Rob Hopkins - "From What Is to What If" (2019)',
        url: 'https://www.chelseagreen.com/product/from-what-is-to-what-if/'
      },
      {
        title: 'Transition Network Research & Publications',
        url: 'https://transitionnetwork.org/about-the-movement/what-is-transition/research/'
      },
      {
        title: 'Totnes Renewable Energy Society',
        url: 'https://www.tresonline.org.uk/'
      }
    ],
    
    lastUpdated: '2025-01-15'
  };
</script>

{#key $language}
<SEO
  title={`${caseStudy.title} - ${caseStudy.tagline[currentLanguage]}`}
  description={caseStudy.overview[currentLanguage].substring(0, 160)}
  keywords="transition towns, community resilience, ecological regeneration, local economy, permaculture, climate action"
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
  <header class="bg-gradient-to-br from-clay-50 to-moss-50 border-b-2 border-clay-300">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="mb-4">
        <span class="px-3 py-1 bg-clay-100 text-clay-800 text-sm font-medium rounded-full border border-clay-300">
          {currentLanguage === 'en' ? 'Ecological models' : 'Ekologiska modeller'}
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
          <span>{caseStudy.members} {currentLanguage === 'en' ? 'participants' : 'deltagare'}</span>
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
          <div class="bg-white rounded-lg p-6 border-2 border-clay-200 text-center">
            <div class="text-3xl font-bold text-clay-700 mb-2">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-clay-300 pb-3">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-clay-300 pb-3">
        {caseStudy.principles.title[currentLanguage]}
      </h2>
      <div class="space-y-6">
        {#each caseStudy.principles.items as principle}
          <div class="bg-white rounded-lg p-6 border-l-4 border-clay-500">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-clay-300 pb-3">
        {caseStudy.challenges.title[currentLanguage]}
      </h2>
      <div class="space-y-8">
        {#each caseStudy.challenges.items as item}
          <div class="bg-moss-50 rounded-lg p-6 border-2 border-moss-200">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-clay-300 pb-3">
        {caseStudy.adaptation.title[currentLanguage]}
      </h2>
      <div class="bg-gradient-to-br from-clay-50 to-moss-50 rounded-xl p-8">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-clay-300 pb-3">
        {caseStudy.resources.title[currentLanguage]}
      </h2>
      <div class="grid md:grid-cols-2 gap-4">
        {#each caseStudy.resources.items as resource}
          <a 
            href={resource.link}
            target="_blank"
            rel="noopener"
            class="bg-white rounded-lg p-6 border-2 border-clay-200 hover:border-clay-400 transition-all group"
          >
            <h3 class="text-lg font-semibold text-earth-900 mb-2 group-hover:text-clay-700 transition-colors flex items-center gap-2">
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
