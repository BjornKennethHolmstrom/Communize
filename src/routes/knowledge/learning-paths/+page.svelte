<!-- /src/routes/knowledge/learning-paths/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const { language } = languageStore;
  const currentLanguage = $derived($language);
  
  const translations = {
    en: {
      title: "Learning paths",
      subtitle: "Curated journeys through the knowledge commons",
      intro: "Not sure where to start? These learning paths guide you through the knowledge commons based on your goals—whether you're a complete beginner, want to start a cooperative, understand the history, or dive into theory.",
      backToKnowledge: "Back to knowledge commons",
      pathsAvailable: "Paths available",
      selectPath: "Choose your path",
      allPaths: "All paths",
      estimatedTime: "Estimated time",
      resources: "resources",
      weeks: "weeks",
      months: "months",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      startPath: "Start this path",
      pathSteps: "Path steps"
    },
    sv: {
      title: "Lärvägar",
      subtitle: "Kurerade resor genom kunskapsallmänningen",
      intro: "Osäker på var du ska börja? Dessa lärvägar guidar dig genom kunskapsallmänningen baserat på dina mål—oavsett om du är nybörjare, vill starta ett kooperativ, förstå historien eller dyka ner i teori.",
      backToKnowledge: "Tillbaka till kunskapsallmänningen",
      pathsAvailable: "Tillgängliga vägar",
      selectPath: "Välj din väg",
      allPaths: "Alla vägar",
      estimatedTime: "Uppskattad tid",
      resources: "resurser",
      weeks: "veckor",
      months: "månader",
      beginner: "Nybörjare",
      intermediate: "Mellan",
      advanced: "Avancerad",
      startPath: "Börja denna väg",
      pathSteps: "Vägens steg"
    }
  };

  const t = $derived(translations[currentLanguage] || translations.en);
  
  // Learning paths
  const learningPaths = [
    {
      id: "beginner",
      title: {
        en: "Commons 101: Complete beginner",
        sv: "Allmänningar 101: Nybörjare"
      },
      description: {
        en: "Never heard of 'the commons' before? Start here. This path introduces core concepts through accessible readings and real-world examples.",
        sv: "Aldrig hört talas om 'allmänningar' tidigare? Börja här. Denna väg introducerar kärnbegrepp genom tillgängliga läsningar och verkliga exempel."
      },
      difficulty: "beginner",
      duration: { weeks: 4, resources: 8 },
      color: "moss",
      icon: "seedling",
      steps: [
        {
          step: 1,
          title: { en: "What are commons?", sv: "Vad är allmänningar?" },
          resources: [
            {
              title: "Think Like a Commoner",
              author: "David Bollier",
              why: { 
                en: "Best beginner-friendly overview of commons thinking",
                sv: "Bästa nybörjarvänliga översikt av allmänningstänkande"
              }
            },
            {
              title: "Commons Sense for the 21st Century",
              author: "David Bollier",
              why: { 
                en: "Free article with global examples (2 hours)",
                sv: "Gratis artikel med globala exempel (2 timmar)"
              }
            }
          ]
        },
        {
          step: 2,
          title: { en: "How do commons work?", sv: "Hur fungerar allmänningar?" },
          resources: [
            {
              title: "Governing the Commons (Introduction & Chapter 1)",
              author: "Elinor Ostrom",
              why: { 
                en: "Nobel Prize research—read just the intro to get core principles",
                sv: "Nobelprisforkning—läs bara introt för kärnprinciper"
              }
            },
            {
              title: "Braiding Sweetgrass (selected chapters)",
              author: "Robin Wall Kimmerer",
              why: { 
                en: "Beautiful introduction to Indigenous commons thinking",
                sv: "Vacker introduktion till ursprungsfolks allmänningstänkande"
              }
            }
          ]
        },
        {
          step: 3,
          title: { en: "Commons today", sv: "Allmänningar idag" },
          resources: [
            {
              title: "Doughnut Economics",
              author: "Kate Raworth",
              why: { 
                en: "How commons thinking applies to 21st century challenges",
                sv: "Hur allmänningstänkande gäller 2000-talets utmaningar"
              }
            },
            {
              title: "The Care Manifesto",
              author: "The Care Collective",
              why: { 
                en: "Short, powerful vision of care as commons (read in one sitting)",
                sv: "Kort, kraftfull vision av omsorg som allmänningar (läs i ett svep)"
              }
            }
          ]
        },
        {
          step: 4,
          title: { en: "Take action", sv: "Ta handling" },
          resources: [
            {
              title: "Community Wealth Building Resources",
              author: "Democracy Collaborative",
              why: { 
                en: "Free practical toolkits for starting local commons projects",
                sv: "Gratis praktiska verktygslådor för att starta lokala allmänningsprojekt"
              }
            },
            {
              title: "Mutual Aid",
              author: "Dean Spade",
              why: { 
                en: "Hands-on guide to organizing mutual aid networks",
                sv: "Praktisk guide för att organisera ömsesidiga hjälpnätverk"
              }
            }
          ]
        }
      ]
    },
    {
      id: "practitioner",
      title: {
        en: "The practitioner's path: Starting a commons project",
        sv: "Praktikerns väg: Starta ett allmänningsprojekt"
      },
      description: {
        en: "Ready to start a cooperative, community land trust, or mutual aid network? This path gives you the theory and practical tools you need.",
        sv: "Redo att starta ett kooperativ, gemenskapsmarkstiftelse eller ömsesidigt hjälpnätverk? Denna väg ger dig teori och praktiska verktyg du behöver."
      },
      difficulty: "intermediate",
      duration: { weeks: 8, resources: 12 },
      color: "earth",
      icon: "tools",
      steps: [
        {
          step: 1,
          title: { en: "Governance fundamentals", sv: "Styrningsgrunder" },
          resources: [
            {
              title: "Sociocracy: A Deeper Democracy",
              author: "Buck & Villines",
              why: { 
                en: "Consent-based governance framework used by cooperatives globally",
                sv: "Samtycksbaserat styrningsramverk som används av kooperativ globalt"
              }
            },
            {
              title: "Consensus Decision Making",
              author: "Seeds for Change",
              why: { 
                en: "Free facilitation guides and toolkits",
                sv: "Gratis faciliteringsguider och verktygslådor"
              }
            }
          ]
        },
        {
          step: 2,
          title: { en: "Economic models", sv: "Ekonomiska modeller" },
          resources: [
            {
              title: "Ours to Hack and to Own",
              author: "Scholz & Schneider",
              why: { 
                en: "Platform cooperativism—democratic ownership of digital platforms",
                sv: "Plattformskooperativism—demokratiskt ägande av digitala plattformar"
              }
            },
            {
              title: "Co-operatives UK Resources",
              author: "Co-operatives UK",
              why: { 
                en: "Practical guides on starting cooperatives",
                sv: "Praktiska guider om att starta kooperativ"
              }
            },
            {
              title: "Economic Democracy (selected chapters)",
              author: "J.W. Smith",
              why: { 
                en: "Theory of democratic economic structures",
                sv: "Teori om demokratiska ekonomiska strukturer"
              }
            }
          ]
        },
        {
          step: 3,
          title: { en: "Case studies", sv: "Fallstudier" },
          resources: [
            {
              title: "The Mondragon Experiment",
              author: "Greg MacLeod",
              why: { 
                en: "World's largest worker cooperative network",
                sv: "Världens största arbetarkooperativnätverk"
              }
            },
            {
              title: "The Preston Model",
              author: "CLES",
              why: { 
                en: "How one UK city built community wealth (free resources)",
                sv: "Hur en brittisk stad byggde gemenskapsrikedom (gratis resurser)"
              }
            },
            {
              title: "Building the Cooperative Commonwealth",
              author: "Jessica Gordon Nembhard",
              why: { 
                en: "African American cooperative economics",
                sv: "Afroamerikansk kooperativ ekonomi"
              }
            }
          ]
        },
        {
          step: 4,
          title: { en: "Implementation tools", sv: "Implementeringsverktyg" },
          resources: [
            {
              title: "Democracy at Work Institute",
              author: "DAWI",
              why: { 
                en: "Free legal guides, business planning templates",
                sv: "Gratis juridiska guider, affärsplaneringsmallar"
              }
            },
            {
              title: "Participatory Budgeting Project",
              author: "PB Project",
              why: { 
                en: "How-to guides for participatory democracy",
                sv: "Hur-man-gör-guider för deltagandedemokrati"
              }
            },
            {
              title: "Communize Toolkit",
              author: "Communize.org",
              why: { 
                en: "Templates and worksheets for community organizing",
                sv: "Mallar och arbetsblad för gemenskapsorganisering"
              }
            }
          ]
        }
      ]
    },
    {
      id: "historian",
      title: {
        en: "The historical path: Understanding enclosure and resistance",
        sv: "Den historiska vägen: Förstå inhägnad och motstånd"
      },
      description: {
        en: "Want to understand how we lost the commons and how people fought back? This path traces enclosure from medieval England to today's struggles.",
        sv: "Vill du förstå hur vi förlorade allmänningarna och hur människor kämpade tillbaka? Denna väg spårar inhägnad från medeltida England till dagens strider."
      },
      difficulty: "intermediate",
      duration: { weeks: 10, resources: 10 },
      color: "clay",
      icon: "scroll",
      steps: [
        {
          step: 1,
          title: { en: "Medieval commons", sv: "Medeltida allmänningar" },
          resources: [
            {
              title: "The Magna Carta Manifesto",
              author: "Peter Linebaugh",
              why: { 
                en: "Magna Carta as charter of commons, not just liberties",
                sv: "Magna Carta som stadga om allmänningar, inte bara friheter"
              }
            }
          ]
        },
        {
          step: 2,
          title: { en: "English enclosure", sv: "Engelsk inhägnad" },
          resources: [
            {
              title: "Stop, Thief!",
              author: "Peter Linebaugh",
              why: { 
                en: "Enclosure as ongoing process, not one-time event",
                sv: "Inhägnad som pågående process, inte engångshändelse"
              }
            },
            {
              title: "The Making of the English Working Class",
              author: "E.P. Thompson",
              why: { 
                en: "How enclosure created the working class",
                sv: "Hur inhägnad skapade arbetarklassen"
              }
            }
          ]
        },
        {
          step: 3,
          title: { en: "Colonial enclosure", sv: "Kolonial inhägnad" },
          resources: [
            {
              title: "The Land Is Not Empty",
              author: "Sarah Augustine",
              why: { 
                en: "Doctrine of Discovery and Indigenous land theft",
                sv: "Upptäcktsläran och ursprungsfolks markstöld"
              }
            },
            {
              title: "Caliban and the Witch",
              author: "Silvia Federici",
              why: { 
                en: "Gendered dimensions of primitive accumulation",
                sv: "Könsbaserade dimensioner av primitiv ackumulering"
              }
            }
          ]
        },
        {
          step: 4,
          title: { en: "Resistance & reclamation", sv: "Motstånd & återtagande" },
          resources: [
            {
              title: "The Rochdale Pioneers",
              author: "George Jacob Holyoake",
              why: { 
                en: "Birth of the cooperative movement (free online)",
                sv: "Födelsen av kooperativrörelsen (gratis online)"
              }
            },
            {
              title: "For All the People",
              author: "John Curl",
              why: { 
                en: "Hidden history of American cooperatives",
                sv: "Gömd historia om amerikanska kooperativ"
              }
            },
            {
              title: "Black Reconstruction in America",
              author: "W.E.B. Du Bois",
              why: { 
                en: "Freed slaves' attempts to create commons",
                sv: "Frigivna slavars försök att skapa allmänningar"
              }
            }
          ]
        },
        {
          step: 5,
          title: { en: "Contemporary struggles", sv: "Samtida strider" },
          resources: [
            {
              title: "As Long as Grass Grows",
              author: "Dina Gilio-Whitaker",
              why: { 
                en: "Indigenous environmental justice movements today",
                sv: "Ursprungsfolks miljörättvisrörelser idag"
              }
            },
            {
              title: "The Dispossessed",
              author: "Arundhati Roy",
              why: { 
                en: "Contemporary enclosure in India",
                sv: "Samtida inhägnad i Indien"
              }
            }
          ]
        }
      ]
    },
    {
      id: "theorist",
      title: {
        en: "The theoretical path: Deep political economy",
        sv: "Den teoretiska vägen: Djup politisk ekonomi"
      },
      description: {
        en: "Want the full intellectual framework? This advanced path covers political economy, feminist theory, ecology, and philosophy of the commons.",
        sv: "Vill du ha det fulla intellektuella ramverket? Denna avancerade väg täcker politisk ekonomi, feministisk teori, ekologi och allmänningarnas filosofi."
      },
      difficulty: "advanced",
      duration: { months: 6, resources: 15 },
      color: "slate",
      icon: "book-open",
      steps: [
        {
          step: 1,
          title: { en: "Foundations", sv: "Grunder" },
          resources: [
            {
              title: "Governing the Commons (complete)",
              author: "Elinor Ostrom",
              why: { 
                en: "Foundational institutional analysis",
                sv: "Grundläggande institutionell analys"
              }
            },
            {
              title: "The Invention of Capitalism",
              author: "Michael Perelman",
              why: { 
                en: "How classical economists obscured primitive accumulation",
                sv: "Hur klassiska ekonomer fördunklade primitiv ackumulering"
              }
            }
          ]
        },
        {
          step: 2,
          title: { en: "Feminist political economy", sv: "Feministisk politisk ekonomi" },
          resources: [
            {
              title: "Caliban and the Witch (complete)",
              author: "Silvia Federici",
              why: { 
                en: "Gendered primitive accumulation",
                sv: "Könsbaserad primitiv ackumulering"
              }
            },
            {
              title: "Revolution at Point Zero",
              author: "Silvia Federici",
              why: { 
                en: "Reproductive labor and the commons",
                sv: "Reproduktivt arbete och allmänningar"
              }
            }
          ]
        },
        {
          step: 3,
          title: { en: "Digital & information commons", sv: "Digital & informationsallmänningar" },
          resources: [
            {
              title: "The Wealth of Networks",
              author: "Yochai Benkler",
              why: { 
                en: "Commons-based peer production theory",
                sv: "Allmänningsbaserad jämlik produktionsteori"
              }
            },
            {
              title: "Protocol",
              author: "Alexander Galloway",
              why: { 
                en: "How control works in decentralized systems",
                sv: "Hur kontroll fungerar i decentraliserade system"
              }
            }
          ]
        },
        {
          step: 4,
          title: { en: "Ecological commons", sv: "Ekologiska allmänningar" },
          resources: [
            {
              title: "The Mushroom at the End of the World",
              author: "Anna Lowenhaupt Tsing",
              why: { 
                en: "More-than-human commons, interspecies relations",
                sv: "Mer-än-mänskliga allmänningar, interspecies-relationer"
              }
            },
            {
              title: "Half-Earth",
              author: "E.O. Wilson",
              why: { 
                en: "Planetary-scale ecological commons",
                sv: "Planetär-skala ekologiska allmänningar"
              }
            }
          ]
        },
        {
          step: 5,
          title: { en: "Philosophy & ontology", sv: "Filosofi & ontologi" },
          resources: [
            {
              title: "Ubuntu: An African Philosophy",
              author: "Mogobe Ramose",
              why: { 
                en: "Relational ontology—'I am because we are'",
                sv: "Relationell ontologi—'Jag är för att vi är'"
              }
            },
            {
              title: "The Dawn of Everything",
              author: "Graeber & Wengrow",
              why: { 
                en: "Rethinking human history and social possibility",
                sv: "Ompröva mänsklig historia och social möjlighet"
              }
            }
          ]
        },
        {
          step: 6,
          title: { en: "Synthesis", sv: "Syntes" },
          resources: [
            {
              title: "Free, Fair and Alive",
              author: "Bollier & Helfrich",
              why: { 
                en: "New language for the commons—synthesis of theory and practice",
                sv: "Nytt språk för allmänningar—syntes av teori och praktik"
              }
            },
            {
              title: "Degrowth: A Vocabulary",
              author: "D'Alisa, Demaria, Kallis",
              why: { 
                en: "50+ essays connecting commons to ecological limits",
                sv: "50+ essäer som kopplar allmänningar till ekologiska gränser"
              }
            }
          ]
        }
      ]
    }
  ];
  
  let selectedPath = $state<string | null>(null);
  
  const currentPath = $derived(
    selectedPath ? learningPaths.find(p => p.id === selectedPath) : null
  );
  
  function getPathColor(color: string): string {
    const colors = {
      moss: 'from-moss-50 to-moss-100 border-moss-300 hover:border-moss-400',
      earth: 'from-earth-50 to-earth-100 border-earth-300 hover:border-earth-400',
      clay: 'from-clay-50 to-clay-100 border-clay-300 hover:border-clay-400',
      slate: 'from-slate-50 to-slate-100 border-slate-300 hover:border-slate-400'
    };
    return colors[color] || colors.moss;
  }
  
  function getDifficultyColor(difficulty: string): string {
    const colors = {
      beginner: 'bg-moss-100 text-moss-800 border-moss-300',
      intermediate: 'bg-earth-100 text-earth-800 border-earth-300',
      advanced: 'bg-clay-100 text-clay-800 border-clay-300'
    };
    return colors[difficulty] || colors.intermediate;
  }
</script>

{#key $language}
<SEO
  title={t.title}
  description={t.subtitle}
  keywords="commons education, learning commons, cooperative how-to, commons theory, beginner commons guide"
/>

<div class="min-h-screen" in:fade>
  <!-- Breadcrumb -->
  <nav class="max-w-6xl mx-auto px-4 pt-8 pb-4 text-sm">
    <ol class="flex items-center gap-2 text-earth-600">
      <li>
        <a href="{base}/knowledge" class="hover:text-moss-600 transition-colors">
          {t.backToKnowledge}
        </a>
      </li>
      <li class="text-earth-400">/</li>
      <li class="text-earth-900">{t.title}</li>
    </ol>
  </nav>

  <div class="max-w-6xl mx-auto px-4 py-12">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {t.title}
      </h1>
      <p class="text-xl text-earth-600 mb-6">
        {t.subtitle}
      </p>
      <p class="text-earth-700 leading-relaxed max-w-3xl">
        {t.intro}
      </p>
    </div>

    {#if !selectedPath}
      <!-- Path Selection -->
      <section>
        <h2 class="text-2xl font-serif text-earth-900 mb-6">
          {t.selectPath}
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          {#each learningPaths as path}
            <button
              onclick={() => selectedPath = path.id}
              class="text-left bg-gradient-to-br {getPathColor(path.color)} rounded-xl p-6 border-2 transition-all hover:shadow-lg"
            >
              <!-- Header -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                  <h3 class="text-xl font-serif text-earth-900 mb-2">
                    {path.title[currentLanguage]}
                  </h3>
                  <div class="flex items-center gap-2 mb-3">
                    <span class="px-2 py-1 text-xs rounded-full border {getDifficultyColor(path.difficulty)}">
                      {t[path.difficulty]}
                    </span>
                    <span class="text-xs text-earth-600">
                      {path.duration.weeks ? `${path.duration.weeks} ${t.weeks}` : `${path.duration.months} ${t.months}`}
                    </span>
                    <span class="text-xs text-earth-600">
                      • {path.duration.resources} {t.resources}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Description -->
              <p class="text-sm text-earth-700 mb-4 leading-relaxed">
                {path.description[currentLanguage]}
              </p>
              
              <!-- CTA -->
              <div class="flex items-center gap-2 text-moss-600 font-medium text-sm">
                <span>{t.startPath}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          {/each}
        </div>
      </section>
    {:else if currentPath}
      <!-- Selected Path Detail -->
      <div in:fade>
        <!-- Path Header -->
        <div class="bg-gradient-to-br {getPathColor(currentPath.color)} rounded-xl p-8 border-2 mb-8">
          <button
            onclick={() => selectedPath = null}
            class="text-sm text-earth-600 hover:text-earth-800 mb-4 flex items-center gap-1"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {t.allPaths}
          </button>
          
          <h2 class="text-3xl font-serif text-earth-900 mb-3">
            {currentPath.title[currentLanguage]}
          </h2>
          
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="px-3 py-1 text-sm rounded-full border {getDifficultyColor(currentPath.difficulty)}">
              {t[currentPath.difficulty]}
            </span>
            <span class="text-sm text-earth-700">
              {t.estimatedTime}: {currentPath.duration.weeks ? `${currentPath.duration.weeks} ${t.weeks}` : `${currentPath.duration.months} ${t.months}`}
            </span>
            <span class="text-sm text-earth-700">
              {currentPath.duration.resources} {t.resources}
            </span>
          </div>
          
          <p class="text-earth-700 leading-relaxed">
            {currentPath.description[currentLanguage]}
          </p>
        </div>
        
        <!-- Steps -->
        <div class="space-y-8">
          {#each currentPath.steps as step}
            <div class="bg-white rounded-xl p-6 border-2 border-earth-200">
              <!-- Step Header -->
              <div class="flex items-center gap-4 mb-4">
                <div class="flex-shrink-0 w-12 h-12 bg-moss-100 rounded-full flex items-center justify-center border-2 border-moss-300">
                  <span class="text-lg font-bold text-moss-700">{step.step}</span>
                </div>
                <h3 class="text-xl font-serif text-earth-900">
                  {step.title[currentLanguage]}
                </h3>
              </div>
              
              <!-- Resources -->
              <div class="space-y-4 ml-16">
                {#each step.resources as resource}
                  <div class="p-4 bg-earth-50 rounded-lg border border-earth-200">
                    <h4 class="font-semibold text-earth-900 mb-1">
                      {resource.title}
                    </h4>
                    <p class="text-sm text-earth-600 mb-2">
                      {resource.author}
                    </p>
                    <p class="text-sm text-earth-700 italic">
                      → {resource.why[currentLanguage]}
                    </p>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
        
        <!-- Back Button -->
        <div class="mt-8 text-center">
          <button
            onclick={() => selectedPath = null}
            class="px-6 py-3 border-2 border-moss-600 text-moss-600 hover:bg-moss-50 rounded-lg transition-colors font-medium"
          >
            {t.allPaths}
          </button>
        </div>
      </div>
    {/if}

    <!-- Back to Knowledge Commons -->
    <div class="text-center pt-12 mt-12 border-t border-earth-200">
      <a 
        href="{base}/knowledge"
        class="inline-flex items-center gap-2 text-moss-600 hover:text-moss-700 font-medium"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>{t.backToKnowledge}</span>
      </a>
    </div>
  </div>
</div>
{/key}
