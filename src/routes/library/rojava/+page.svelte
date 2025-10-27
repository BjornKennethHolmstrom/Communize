<!-- /src/routes/library/rojava/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const caseStudy = {
    title: 'Rojava Democratic Confederalism',
    tagline: {
      en: 'Autonomous democratic governance experiment in Northern Syria',
      sv: 'Autonomt demokratiskt styrningsexperiment i norra Syrien'
    },
    location: 'Rojava, Northern Syria',
    founded: 2012,
    members: '4+ million',
    website: 'https://www.gov.rojava.info',
    category: 'governance',
    
    overview: {
      en: `The Autonomous Administration of North and East Syria (AANES), commonly known as Rojava, represents one of the most ambitious experiments in grassroots democracy and social transformation of the 21st century. Born amid the chaos of the Syrian Civil War in 2012, this multi-ethnic region has pioneered a system of democratic confederalism—bottom-up governance through nested councils, gender equality mandates, ecological commitments, and ethnic pluralism. With over 4 million people across diverse communities (Kurds, Arabs, Assyrians, Turkmen, Armenians), Rojava demonstrates that radical democracy, women's liberation, and peaceful coexistence are possible even in the most challenging circumstances.`,
      sv: `Den autonoma administrationen i norra och östra Syrien (AANES), allmänt känd som Rojava, representerar ett av de mest ambitiösa experimenten i gräsrotsdemokrati och social transformation på 2000-talet. Född mitt i kaoset av det syirska inbördeskriget 2012 har denna multetniska region varit banbrytande för ett system av demokratisk konfederalism—bottom-up-styrning genom inbäddade råd, jämställdhetskrav, ekologiska åtaganden och etnisk pluralism. Med över 4 miljoner människor över olika gemenskaper (kurder, araber, assyrier, turkmener, armenier) visar Rojava att radikal demokrati, kvinnofrigörelse och fredlig samexistens är möjlig även under de mest utmanande omständigheterna.`
    },
    
    keyStats: [
      { 
        label: { en: 'Population', sv: 'Befolkning' }, 
        value: '4M+',
        icon: 'users'
      },
      { 
        label: { en: 'Communes', sv: 'Kommuner' }, 
        value: '4,000+',
        icon: 'grid'
      },
      { 
        label: { en: 'Women in governance', sv: 'Kvinnor i styrning' }, 
        value: '50%',
        icon: 'balance'
      },
      { 
        label: { en: 'Ethnic groups', sv: 'Etniska grupper' }, 
        value: '5+',
        icon: 'people'
      }
    ],
    
    origin: {
      title: { en: 'Origin story', sv: 'Ursprungshistoria' },
      content: {
        en: `The story of Rojava begins not in 2012, but decades earlier with the Kurdish liberation movement and the political philosophy of Abdullah Öcalan, the imprisoned leader of the Kurdistan Workers' Party (PKK). While in prison in the early 2000s, Öcalan underwent an ideological transformation, moving away from Marxist-Leninist nationalism toward what he called "democratic confederalism"—a synthesis of anarchist, feminist, and ecological ideas inspired by thinkers like Murray Bookchin.

Democratic confederalism rejects the nation-state model entirely. Instead, it proposes: bottom-up decision-making through nested councils (communes), mandatory gender co-leadership at all levels, ecological sustainability as a core principle, and multi-ethnic cooperation rather than ethnic nationalism.

When the Syrian Civil War erupted in 2011 and Assad's government withdrew from Kurdish-majority areas in 2012, Kurdish groups (primarily the PYD—Democratic Union Party) seized the opportunity not just for autonomy, but to put these radical ideas into practice.

In January 2014, the Rojava cantons declared a "Social Contract" (their constitution), which was revolutionary in its commitments:
- Direct democracy through commune assemblies
- Mandatory 40% gender quota (later increased to 50% co-leadership)
- Protection of ethnic and religious minorities
- Abolition of the death penalty
- Commitment to ecology and sustainable development
- Decommodification of women

The system they built has three interlocking structures:

**Communes** (100-200 families): The base unit where decisions are made through direct democracy. Communes handle local disputes, organize mutual aid, manage resources, and send delegates upward.

**Councils**: District, city, and regional councils coordinate between communes. Every level requires gender co-leadership—two co-chairs, one man and one woman, with neither able to act alone.

**Autonomous Administration**: The top coordinating structure that handles defense, foreign relations, and region-wide policies. Even here, the principle of decentralization holds—the administration serves the councils, not the other way around.

Parallel to this, Rojava established **women's autonomous structures**—women's communes, women's councils, women's defense units (YPJ), and women's academies. This "jineology" (women's science) isn't just about inclusion but about fundamentally reordering society around feminist principles.

The world took notice in 2014 when Rojava's YPG and YPJ forces, especially women fighters, successfully defended the city of Kobane against ISIS in a months-long siege that became symbolic of resistance to fascism. The images of armed women fighters defeating ISIS captivated global attention, but what made Rojava truly radical was not military success—it was the social revolution happening behind the front lines.

Through all this—ongoing war, economic blockades, Turkish military incursions, and international isolation—Rojava has maintained its democratic experiment. It remains fragile and imperfect, but it demonstrates that another world is possible, even in the most hostile conditions.`,
        sv: `Berättelsen om Rojava börjar inte 2012, utan decennier tidigare med den kurdiska befrielserörelsen och den politiska filosofin hos Abdullah Öcalan, den fängslade ledaren för Kurdistans arbetarparti (PKK). I fängelse i början av 2000-talet genomgick Öcalan en ideologisk transformation, från marxistisk-leninistisk nationalism mot vad han kallade "demokratisk konfederalism"—en syntes av anarkistiska, feministiska och ekologiska idéer inspirerade av tänkare som Murray Bookchin.

Demokratisk konfederalism förkastar nationalstatsmodellen helt. Istället föreslår den: bottom-up-beslutsfattande genom inbäddade råd (kommuner), obligatoriskt könssamledarskap på alla nivåer, ekologisk hållbarhet som en kärnprincip och multetniskt samarbete snarare än etnisk nationalism.

När det syriska inbördeskriget bröt ut 2011 och Assads regering drog sig tillbaka från kurdmajoritetsområden 2012, grep kurdiska grupper (främst PYD—Demokratiska unionspartiet) möjligheten inte bara för autonomi, utan för att sätta dessa radikala idéer i praktiken.

I januari 2014 deklarerade Rojava-kantonerna ett "socialt kontrakt" (deras konstitution), som var revolutionärt i sina åtaganden:
- Direkt demokrati genom kommunförsamlingar
- Obligatorisk 40% könskvotering (senare ökad till 50% samledarskap)
- Skydd av etniska och religiösa minoriteter
- Avskaffande av dödsstraffet
- Engagemang för ekologi och hållbar utveckling
- Dekommodifiering av kvinnor

Systemet de byggde har tre sammanlänkade strukturer:

**Kommuner** (100-200 familjer): Basenheten där beslut fattas genom direkt demokrati. Kommuner hanterar lokala tvister, organiserar ömsesidig hjälp, förvaltar resurser och skickar delegater uppåt.

**Råd**: Distrikts-, stads- och regionråd koordinerar mellan kommuner. Varje nivå kräver könssamledarskap—två samordförande, en man och en kvinna, där ingen kan agera ensam.

**Autonom administration**: Den översta koordinerande strukturen som hanterar försvar, utrikesrelationer och regionövergripande politik. Även här gäller decentraliseringsprincipen—administrationen tjänar råden, inte tvärtom.

Parallellt med detta etablerade Rojava **kvinnors autonoma strukturer**—kvinnors kommuner, kvinnors råd, kvinnors försvarsenheter (YPJ) och kvinnors akademier. Denna "jineologi" (kvinnovetenskap) handlar inte bara om inkludering utan om att fundamentalt omordna samhället kring feministiska principer.

Världen uppmärksammade 2014 när Rojavas YPG- och YPJ-styrkor, särskilt kvinnliga krigare, framgångsrikt försvarade staden Kobane mot ISIS i en månader lång belägring som blev symbolisk för motstånd mot fascism. Bilderna av beväpnade kvinnliga krigare som besegrade ISIS fångade global uppmärksamhet, men vad som gjorde Rojava verkligen radikal var inte militär framgång—det var den sociala revolutionen som hände bakom frontlinjerna.

Genom allt detta—pågående krig, ekonomiska blockader, turkiska militära intrång och internationell isolering—har Rojava bibehållit sitt demokratiska experiment. Det förblir bräckligt och ofullkomligt, men det visar att en annan värld är möjlig, även under de mest fientliga förhållandena.`
      }
    },
    
    principles: {
      title: { en: 'Core principles & structures', sv: 'Kärnprinciper och strukturer' },
      items: [
        {
          title: { en: 'Democratic confederalism', sv: 'Demokratisk konfederalism' },
          description: {
            en: 'Rejects the nation-state model in favor of bottom-up governance through nested councils. Communes (100-200 families) form the base, sending delegates to district, city, and regional councils. Power flows from below, not above. No traditional president or parliament—instead, councils coordinate through voluntary federation.',
            sv: 'Förkastar nationalstatsmodellen till förmån för bottom-up-styrning genom inbäddade råd. Kommuner (100-200 familjer) bildar basen, skickar delegater till distrikts-, stads- och regionråd. Makt flödar underifrån, inte ovanifrån. Ingen traditionell president eller parlament—istället koordinerar råd genom frivillig federation.'
          }
        },
        {
          title: { en: 'Mandatory gender co-leadership', sv: 'Obligatoriskt könssamledarskap' },
          description: {
            en: 'Every governing body from commune to regional level must have gender co-chairs—one man, one woman—who share power equally. Neither can make decisions alone. This isn\'t just symbolic; it structurally prevents male domination and ensures women\'s perspectives shape all decisions. Additionally, women have autonomous organizing structures separate from mixed institutions.',
            sv: 'Varje styrande organ från kommun till regional nivå måste ha könssamordförande—en man, en kvinna—som delar makt lika. Ingen kan fatta beslut ensam. Detta är inte bara symboliskt; det förhindrar strukturellt manlig dominans och säkerställer att kvinnors perspektiv formar alla beslut. Dessutom har kvinnor autonoma organisationsstrukturer separata från blandade institutioner.'
          }
        },
        {
          title: { en: 'Multi-ethnic pluralism', sv: 'Multetnisk pluralism' },
          description: {
            en: 'Rojava explicitly rejects Kurdish nationalism in favor of multi-ethnic cooperation. Arabs, Assyrians, Turkmen, Armenians, and others are guaranteed representation and cultural autonomy. The Social Contract protects minority languages, religions, and customs. This is radical in a region torn by ethnic and sectarian violence.',
            sv: 'Rojava förkastar explicit kurdisk nationalism till förmån för multetniskt samarbete. Araber, assyrier, turkmener, armenier och andra garanteras representation och kulturell autonomi. Det sociala kontraktet skyddar minoritetsspråk, religioner och seder. Detta är radikalt i en region som slitits av etniskt och sekteristiskt våld.'
          }
        },
        {
          title: { en: 'Ecological society', sv: 'Ekologiskt samhälle' },
          description: {
            en: 'Environmental protection is written into Rojava\'s constitution. The Social Contract commits to sustainable development, opposes exploitation of nature, and promotes cooperative economics over capitalist extraction. Communes manage local resources collectively, preventing both private monopolization and state bureaucratic control.',
            sv: 'Miljöskydd är inskrivet i Rojavas konstitution. Det sociala kontraktet förbinder sig till hållbar utveckling, motsätter sig exploatering av naturen och främjar kooperativ ekonomi framför kapitalistisk utvinning. Kommuner förvaltar lokala resurser kollektivt, förhindrar både privat monopolisering och statlig byråkratisk kontroll.'
          }
        },
        {
          title: { en: 'Jineology (women\'s science)', sv: 'Jineologi (kvinnovetenskap)' },
          description: {
            en: 'A unique body of feminist theory and practice developed in Rojava that analyzes how patriarchy intersects with capitalism and the state. Jineology argues that women\'s liberation is central to all social liberation. It\'s not just academic—it informs practical organizing through women\'s communes, academies, and defense forces.',
            sv: 'En unik kropp av feministisk teori och praxis utvecklad i Rojava som analyserar hur patriarkatet korsar kapitalism och staten. Jineologi hävdar att kvinnors frigörelse är central för all social frigörelse. Det är inte bara akademiskt—det informerar praktisk organisering genom kvinnors kommuner, akademier och försvarsstyrkor.'
          }
        },
        {
          title: { en: 'Social economy', sv: 'Social ekonomi' },
          description: {
            en: 'Rojava promotes cooperatives over private enterprises and state ownership. Agricultural cooperatives, women\'s economic cooperatives, and collective workshops aim to create an economy that serves social needs rather than profit accumulation. Private property exists but is limited—large holdings were redistributed, particularly to women.',
            sv: 'Rojava främjar kooperativ framför privata företag och statligt ägande. Jordbrukskooperativ, kvinnors ekonomiska kooperativ och kollektiva verkstäder syftar till att skapa en ekonomi som tjänar sociala behov snarare än vinstackumulering. Privat egendom finns men är begränsad—stora innehav omfördelades, särskilt till kvinnor.'
          }
        }
      ]
    },
    
    challenges: {
      title: { en: 'Challenges & learnings', sv: 'Utmaningar och lärdomar' },
      items: [
        {
          title: { en: 'War and existential threats', sv: 'Krig och existentiella hot' },
          challenge: {
            en: 'Rojava has faced near-constant warfare—against ISIS, Turkish military incursions, and internal conflicts. Building democracy while defending against genocide is extraordinarily difficult. Military necessity can undermine democratic ideals.',
            sv: 'Rojava har mött nästan konstant krigföring—mot ISIS, turkiska militära intrång och interna konflikter. Att bygga demokrati samtidigt som man försvarar mot folkmord är extraordinärt svårt. Militär nödvändighet kan undergräva demokratiska ideal.'
          },
          response: {
            en: 'Rojava has tried to maintain civilian democratic structures separate from military command, though the lines blur in wartime. The YPG/YPJ defense forces operate under principles of self-defense and avoid becoming a traditional military dictatorship. Democratic education continues even during conflict.',
            sv: 'Rojava har försökt upprätthålla civila demokratiska strukturer separata från militärt kommando, även om linjerna suddas ut i krigstid. YPG/YPJ-försvarsstyrkorna verkar under principer om självförsvar och undviker att bli en traditionell militärdiktatur. Demokratisk utbildning fortsätter även under konflikt.'
          }
        },
        {
          title: { en: 'Economic blockade and poverty', sv: 'Ekonomisk blockad och fattigdom' },
          challenge: {
            en: 'Surrounded by hostile neighbors, cut off from international trade, and lacking natural resource infrastructure, Rojava faces severe economic constraints. Poverty and scarcity make governance harder.',
            sv: 'Omgiven av fientliga grannar, avskuren från internationell handel och saknar naturresursinfrastruktur, möter Rojava allvarliga ekonomiska begränsningar. Fattigdom och knapphet gör styrning svårare.'
          },
          response: {
            en: 'Focus on local production through cooperatives, collective agriculture, and mutual aid networks. The economy remains fragile but has shown remarkable resilience. International solidarity networks provide some support, though far from sufficient.',
            sv: 'Fokus på lokal produktion genom kooperativ, kollektivt jordbruk och ömsesidiga hjälpnätverk. Ekonomin förblir bräcklig men har visat anmärkningsvärd motståndskraft. Internationella solidaritetsnätverk ger visst stöd, dock långt från tillräckligt.'
          }
        },
        {
          title: { en: 'Implementing ideals at scale', sv: 'Implementera ideal i stor skala' },
          challenge: {
            en: 'It\'s one thing to have radical ideals, another to implement them across millions of people with diverse backgrounds and immediate survival needs. How do you ensure genuine bottom-up democracy rather than top-down control disguised as participation?',
            sv: 'Det är en sak att ha radikala ideal, en annan att implementera dem över miljoner människor med olika bakgrunder och omedelbara överlevnadsbehov. Hur säkerställer man äkta bottom-up-demokrati snarare än top-down-kontroll förklädnad som deltagande?'
          },
          response: {
            en: 'Massive investment in political education—thousands of communes holding regular assemblies, academies teaching democratic confederalism and jineology, rotating leadership to prevent power concentration. It\'s imperfect and ongoing, but the structures exist for genuine participation rather than just symbolic democracy.',
            sv: 'Massiva investeringar i politisk utbildning—tusentals kommuner som håller regelbundna församlingar, akademier som undervisar demokratisk konfederalism och jineologi, roterande ledarskap för att förhindra maktkoncentration. Det är ofullkomligt och pågående, men strukturerna finns för äkta deltagande snarare än bara symbolisk demokrati.'
          }
        },
        {
          title: { en: 'International recognition and legitimacy', sv: 'Internationellt erkännande och legitimitet' },
          challenge: {
            en: 'No country formally recognizes Rojava. It exists in legal limbo—not a state but governing millions. This makes international cooperation, trade, and protection difficult.',
            sv: 'Inget land erkänner formellt Rojava. Det existerar i juridiskt limbo—inte en stat men styr miljoner. Detta gör internationellt samarbete, handel och skydd svårt.'
          },
          response: {
            en: 'Rojava has chosen to pursue autonomy within Syria rather than full independence, trying to balance principles with pragmatism. They\'ve built international solidarity networks, particularly with leftist movements globally. The question of recognition remains unresolved.',
            sv: 'Rojava har valt att sträva efter autonomi inom Syrien snarare än full självständighet, försöker balansera principer med pragmatism. De har byggt internationella solidaritetsnätverk, särskilt med vänsterrörelser globalt. Frågan om erkännande förblir olöst.'
          }
        }
      ]
    },
    
    adaptation: {
      title: { en: 'How to adapt this model', sv: 'Hur man anpassar denna modell' },
      content: {
        en: `**IMPORTANT CONTEXT:**
Rojava emerged in extraordinary circumstances—civil war, the collapse of state authority, and an organized political movement with decades of experience. You cannot and should not try to replicate Rojava's exact conditions. However, its principles and structures offer valuable lessons for grassroots democracy anywhere.

**Key principles to adapt (not copy):**
- Bottom-up governance through nested councils and assemblies
- Mandatory co-leadership and gender parity at all decision-making levels
- Autonomous organizing for marginalized groups (women's councils, etc.)
- Multi-ethnic/multi-cultural cooperation rather than exclusionary identity
- Ecological commitments written into governance structures
- Cooperative economics and community control of resources
- Intensive political education and skill-building

**Scale this to your context:**
- **Neighborhood level** (100-1,000 people): Commune-style assemblies for direct democracy on local issues—community gardens, safety, shared resources. Gender co-facilitation. Regular assemblies.
- **District/town level** (1,000-50,000 people): Federated councils where neighborhood delegates coordinate. Thematic working groups (food, housing, economy, ecology). Mandatory diversity in representation.
- **City/regional level** (50,000+ people): Coordinating bodies that serve the base, not rule over it. Focus on infrastructure, inter-community support, external relations.

**Practical starting points:**
1. **Form neighborhood assemblies** - Start with 20-50 households. Meet monthly. Use consensus decision-making. Practice gender co-facilitation.
2. **Create autonomous spaces** - Women's circles, youth councils, BIPOC organizing spaces. Let marginalized groups self-organize.
3. **Build cooperatives** - Start with one: food co-op, housing co-op, worker co-op, tool library. Prove that cooperative economics works.
4. **Political education** - Study groups on democracy, feminism, ecology. Don't assume everyone knows how to do direct democracy—teach it.
5. **Connect horizontally** - Build networks with other communities doing similar work. Learn from each other. Create mutual support systems.

**What NOT to do:**
- Don't fetishize armed struggle—Rojava's military situation is specific and tragic, not aspirational
- Don't impose top-down structures while calling them bottom-up
- Don't tokenize gender/diversity requirements—they must come with power and autonomy
- Don't ignore the massive work of political education and culture change required
- Don't expect instant results—this is generational work

**Questions to guide adaptation:**
- Who is currently excluded from decision-making in your community?
- What are your community's specific needs that could be met collectively?
- How can you ensure decisions come from those most affected?
- What structures prevent domination and concentration of power?
- How do you build capacity for self-governance, not just participation?

**Rojava's deepest lesson:**
Another world is possible—not perfect, not easy, but possible. Even in the worst conditions, people can organize themselves democratically, treat each other with dignity, and build something more just than what exists. The question isn't whether radical democracy is realistic. The question is: what are you building right now?`,
        sv: `**VIKTIGT SAMMANHANG:**
Rojava uppstod under extraordinära omständigheter—inbördeskrig, statens myndighets kollaps och en organiserad politisk rörelse med decennier av erfarenhet. Du kan inte och bör inte försöka replikera Rojavas exakta förhållanden. Men dess principer och strukturer erbjuder värdefulla lärdomar för gräsrotsdemokrati var som helst.

**Nyckelprinciper att anpassa (inte kopiera):**
- Bottom-up-styrning genom inbäddade råd och församlingar
- Obligatoriskt samledarskap och könsparitet på alla beslutsfattande nivåer
- Autonom organisering för marginaliserade grupper (kvinnors råd, etc.)
- Multetniskt/multikulturellt samarbete snarare än exkluderande identitet
- Ekologiska åtaganden inskrivna i styrningsstrukturer
- Kooperativ ekonomi och gemenskapskontroll av resurser
- Intensiv politisk utbildning och kompetensbyggande

**Skala detta till ditt sammanhang:**
- **Grannskaps-nivå** (100-1 000 personer): Kommun-stil församlingar för direkt demokrati om lokala frågor—gemenskapsträdgårdar, säkerhet, delade resurser. Köns-samunderlättande. Regelbundna församlingar.
- **Distrikts-/stadsnivå** (1 000-50 000 personer): Federerade råd där grannskaps-delegater koordinerar. Tematiska arbetsgrupper (mat, boende, ekonomi, ekologi). Obligatorisk mångfald i representation.
- **Stads-/regional nivå** (50 000+ personer): Koordinerande organ som tjänar basen, inte styr över den. Fokus på infrastruktur, intergemenskap-stöd, externa relationer.

**Praktiska utgångspunkter:**
1. **Bilda grannskapsförsamlingar** - Börja med 20-50 hushåll. Träffas månadsvis. Använd konsensusbeslutsfattande. Öva köns-samunderlättande.
2. **Skapa autonoma utrymmen** - Kvinnors cirklar, ungdomsråd, BIPOC-organisationsutrymmen. Låt marginaliserade grupper självorganisera.
3. **Bygg kooperativ** - Börja med ett: mat-koop, bostads-koop, arbetar-koop, verktygsbibliotek. Bevisa att kooperativ ekonomi fungerar.
4. **Politisk utbildning** - Studiegrupper om demokrati, feminism, ekologi. Anta inte att alla vet hur man gör direkt demokrati—lär ut det.
5. **Koppla horisontellt** - Bygg nätverk med andra gemenskaper som gör liknande arbete. Lär av varandra. Skapa ömsesidiga stödsystem.

**Vad man INTE ska göra:**
- Fetischisera inte väpnad kamp—Rojavas militära situation är specifik och tragisk, inte aspirational
- Påtvinga inte top-down-strukturer medan man kallar dem bottom-up
- Tokenisera inte köns-/mångfaldskrav—de måste komma med makt och autonomi
- Ignorera inte det massiva arbetet med politisk utbildning och kulturförändring som krävs
- Förvänta dig inte omedelbara resultat—detta är generationsarbete

**Frågor för att vägleda anpassning:**
- Vem är för närvarande utesluten från beslutsfattande i din gemenskap?
- Vilka är din gemenskaps specifika behov som skulle kunna tillgodoses kollektivt?
- Hur kan du säkerställa att beslut kommer från de mest påverkade?
- Vilka strukturer förhindrar dominans och maktkoncentration?
- Hur bygger du kapacitet för självstyrelse, inte bara deltagande?

**Rojavas djupaste lärdom:**
En annan värld är möjlig—inte perfekt, inte lätt, men möjlig. Även under de värsta förhållandena kan människor organisera sig själva demokratiskt, behandla varandra med värdighet och bygga något mer rättvist än vad som finns. Frågan är inte om radikal demokrati är realistisk. Frågan är: vad bygger du just nu?`
      }
    },
    
    resources: {
      title: { en: 'Resources & templates', sv: 'Resurser och mallar' },
      items: [
        {
          title: { en: 'Rojava Information Center', sv: 'Rojava informationscenter' },
          description: {
            en: 'Independent media organization documenting developments in Rojava',
            sv: 'Oberoende medieorganisation som dokumenterar utvecklingar i Rojava'
          },
          link: 'https://rojavainformationcenter.com'
        },
        {
          title: { en: 'Democratic confederalism guide', sv: 'Demokratisk konfederalism-guide' },
          description: {
            en: 'Abdullah Öcalan\'s foundational text on the political philosophy',
            sv: 'Abdullah Öcalans grundläggande text om den politiska filosofin'
          },
          link: 'https://theanarchistlibrary.org/library/abdullah-ocalan-democratic-confederalism'
        },
        {
          title: { en: 'Jineology resources', sv: 'Jineologi-resurser' },
          description: {
            en: 'Writings and materials on women\'s science and feminist organizing',
            sv: 'Skrifter och material om kvinnovetenskap och feministisk organisering'
          },
          link: 'https://jineoloji.org'
        },
        {
          title: { en: 'Democratic governance templates', sv: 'Demokratiska styrningsmallar' },
          description: {
            en: 'Adapt consensus and council structures for your community',
            sv: 'Anpassa konsensus- och rådstrukturer för din gemenskap'
          },
          link: `${base}/toolkit/agreements`
        }
      ]
    },
    
    sources: [
      {
        title: 'Rojava Information Center',
        url: 'https://rojavainformationcenter.com'
      },
      {
        title: 'Abdullah Öcalan - "Democratic Confederalism" (2011)',
        url: 'https://theanarchistlibrary.org/library/abdullah-ocalan-democratic-confederalism'
      },
      {
        title: 'Dilar Dirik - "The Kurdish Women\'s Movement: History, Theory, Practice" (2022)',
        url: 'https://www.plutobooks.com/9780745346601/the-kurdish-womens-movement/'
      },
      {
        title: 'Michael Knapp et al. - "Revolution in Rojava" (2016)',
        url: 'https://www.plutobooks.com/9780745336596/revolution-in-rojava/'
      },
      {
        title: 'The Social Contract of Rojava',
        url: 'https://civiroglu.net/the-constitution-of-the-rojava-cantons/'
      }
    ],
    
    lastUpdated: '2025-01-15'
  };
</script>

{#key $language}
<SEO
  title={`${caseStudy.title} - ${caseStudy.tagline[currentLanguage]}`}
  description={caseStudy.overview[currentLanguage].substring(0, 160)}
  keywords="rojava, democratic confederalism, grassroots democracy, women's liberation, autonomous governance, kurdish movement"
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
  <header class="bg-gradient-to-br from-amber-50 to-earth-50 border-b-2 border-amber-300">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="mb-4">
        <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full border border-amber-300">
          {currentLanguage === 'en' ? 'Governance patterns' : 'Styrningsmönster'}
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
          <span>{caseStudy.members} {currentLanguage === 'en' ? 'people' : 'människor'}</span>
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
          <div class="bg-white rounded-lg p-6 border-2 border-amber-200 text-center">
            <div class="text-3xl font-bold text-amber-700 mb-2">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-amber-300 pb-3">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-amber-300 pb-3">
        {caseStudy.principles.title[currentLanguage]}
      </h2>
      <div class="space-y-6">
        {#each caseStudy.principles.items as principle}
          <div class="bg-white rounded-lg p-6 border-l-4 border-amber-500">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-amber-300 pb-3">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-amber-300 pb-3">
        {caseStudy.adaptation.title[currentLanguage]}
      </h2>
      <div class="bg-gradient-to-br from-amber-50 to-earth-50 rounded-xl p-8">
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
      <h2 class="text-3xl font-serif text-earth-900 mb-6 border-b-2 border-amber-300 pb-3">
        {caseStudy.resources.title[currentLanguage]}
      </h2>
      <div class="grid md:grid-cols-2 gap-4">
        {#each caseStudy.resources.items as resource}
          <a 
            href={resource.link}
            target="_blank"
            rel="noopener"
            class="bg-white rounded-lg p-6 border-2 border-amber-200 hover:border-amber-400 transition-all group"
          >
            <h3 class="text-lg font-semibold text-earth-900 mb-2 group-hover:text-amber-700 transition-colors flex items-center gap-2">
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
