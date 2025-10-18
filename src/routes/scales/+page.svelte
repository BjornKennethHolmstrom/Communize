<!-- /src/routes/scales/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "The Four Scales of Communizing",
      subtitle: "From inner integration to planetary stewardship",
      intro: "Communizing happens at every scale of existence—from the relationship we have with ourselves, to our intimate bonds, to our local communities, to our shared planet. Each scale mirrors the others, yet each has its own unique patterns and practices.",
      principle: {
        title: "The Fractal Principle",
        text: "Like a fractal, the same fundamental patterns of communizing appear at every scale: creating shared spaces, building trust, establishing agreements, navigating conflict, and evolving together. What changes is the context, complexity, and number of participants—but the core dynamics of belonging remain constant."
      },
      scales: [
        {
          id: "inner",
          title: "Inner Commons",
          icon: "🪞",
          subtitle: "The Community Within",
          description: "How do we communize our own consciousness? This scale explores the inner landscape—our relationship with our own parts, emotions, and thoughts. Drawing from Internal Family Systems, shadow work, and contemplative traditions, we investigate how integration within mirrors integration without.",
          themes: [
            "Self-compassion as self-commoning",
            "Internal parts as a community",
            "Shadow integration and wholeness",
            "The witnessing self and inner democracy"
          ],
          color: "from-moss-50 to-earth-50",
          borderColor: "border-moss-300"
        },
        {
          id: "relational",
          title: "Relational Commons",
          subtitle: "The Space Between",
          icon: "💞",
          description: "Two-person and small-group communizing—how relationships themselves become shared fields. From partnerships and families to close friendships, this scale explores how we create 'we-space' while honoring individual autonomy. It's the practice ground for all larger-scale communizing.",
          themes: [
            "Relationships as third entities to tend",
            "Shared finances and resources",
            "Non-violent communication as commoning",
            "Conflict as creative tension"
          ],
          color: "from-clay-50 to-earth-50",
          borderColor: "border-clay-300"
        },
        {
          id: "societal",
          title: "Societal Commons",
          subtitle: "Communities & Cooperatives",
          icon: "🏘️",
          description: "This is where most people think 'commons' begins—neighborhoods, co-ops, ecovillages, and local economies. Here we find concrete structures: legal agreements, decision-making processes, shared resources, and governance patterns. It's the scale of visible, tangible communizing.",
          themes: [
            "From property to stewardship",
            "Legal structures for the commons",
            "Decision-making models (consensus, sociocracy, etc.)",
            "Economies of reciprocity and care"
          ],
          color: "from-earth-50 to-moss-50",
          borderColor: "border-earth-400"
        },
        {
          id: "planetary",
          title: "Planetary Commons",
          subtitle: "Global & Digital",
          icon: "🌍",
          description: "The biosphere, the internet, the atmosphere—resources that belong to no one and everyone. This scale explores how we govern what transcends borders: climate, oceans, knowledge, and digital space. It requires new forms of coordination that honor both local autonomy and planetary interdependence.",
          themes: [
            "The biosphere as ultimate commons",
            "Digital commons and data sovereignty",
            "Cosmo-localism: global knowledge, local production",
            "Planetary governance without global government"
          ],
          color: "from-moss-50 to-clay-50",
          borderColor: "border-moss-400"
        }
      ],
      integration: {
        title: "Integration Across Scales",
        text: "These scales are not separate—they interpenetrate. How we relate to ourselves shapes how we relate to others. Local practices inform global patterns. Digital tools enable new forms of local collaboration. Understanding all four scales helps us see the complete ecology of belonging."
      },
      cta: {
        title: "Explore Each Scale",
        text: "Dive deeper into any scale to discover essays, practices, and examples of communizing in action."
      }
    },
    sv: {
      title: "De Fyra Skalorna av Kommunisering",
      subtitle: "Från inre integration till planetärt förvaltarskap",
      intro: "Kommunisering sker på varje nivå av existens—från förhållandet vi har med oss själva, till våra intima band, till våra lokala gemenskaper, till vår delade planet. Varje skala speglar de andra, men varje har sina egna unika mönster och praktiker.",
      principle: {
        title: "Den Fraktala Principen",
        text: "Som en fraktal uppträder samma grundläggande mönster av kommunisering på varje skala: skapa delade utrymmen, bygga förtroende, etablera överenskommelser, navigera konflikter och utvecklas tillsammans. Det som ändras är kontexten, komplexiteten och antalet deltagare—men kärndynamiken av tillhörighet förblir konstant."
      },
      scales: [
        {
          id: "inner",
          title: "Inre Allmänningar",
          icon: "🪞",
          subtitle: "Gemenskapen Inom",
          description: "Hur kommuniserar vi vårt eget medvetande? Denna skala utforskar det inre landskapet—vårt förhållande till våra egna delar, känslor och tankar. Med utgångspunkt i Internal Family Systems, skuggarbete och kontemplativa traditioner undersöker vi hur integration inom speglar integration utan.",
          themes: [
            "Självmedkänsla som själv-kommunisering",
            "Inre delar som en gemenskap",
            "Skuggintegration och helhet",
            "Det bevittnande självet och inre demokrati"
          ],
          color: "from-moss-50 to-earth-50",
          borderColor: "border-moss-300"
        },
        {
          id: "relational",
          title: "Relationella Allmänningar",
          subtitle: "Utrymmet Däremellan",
          icon: "💞",
          description: "Tvåpersoners- och smågruppskommunisering—hur relationer själva blir delade fält. Från partnerskap och familjer till nära vänskaper utforskar denna skala hur vi skapar 'vi-utrymme' samtidigt som vi hedrar individuell autonomi. Det är övningsplatsen för all storskalig kommunisering.",
          themes: [
            "Relationer som tredje enheter att vårda",
            "Delade finanser och resurser",
            "Ickevåldsam kommunikation som kommunisering",
            "Konflikt som kreativ spänning"
          ],
          color: "from-clay-50 to-earth-50",
          borderColor: "border-clay-300"
        },
        {
          id: "societal",
          title: "Samhälleliga Allmänningar",
          subtitle: "Gemenskaper & Kooperativ",
          icon: "🏘️",
          description: "Det är här de flesta tänker att 'allmänningar' börjar—grannskaper, kooperativ, ekobyar och lokala ekonomier. Här finner vi konkreta strukturer: juridiska avtal, beslutsprocesser, delade resurser och styrningsmodeller. Det är skalan av synlig, påtaglig kommunisering.",
          themes: [
            "Från egendom till förvaltarskap",
            "Juridiska strukturer för allmänningar",
            "Beslutsmodeller (konsensus, sociokrati, etc.)",
            "Ekonomier av ömsesidighet och omsorg"
          ],
          color: "from-earth-50 to-moss-50",
          borderColor: "border-earth-400"
        },
        {
          id: "planetary",
          title: "Planetära Allmänningar",
          subtitle: "Global & Digital",
          icon: "🌍",
          description: "Biosfären, internet, atmosfären—resurser som tillhör ingen och alla. Denna skala utforskar hur vi styr det som överskrider gränser: klimat, hav, kunskap och digitalt utrymme. Det kräver nya former av samordning som hedrar både lokal autonomi och planetärt ömsesidigt beroende.",
          themes: [
            "Biosfären som ultimat allmänning",
            "Digitala allmänningar och datasuveränitet",
            "Kosmo-lokalism: global kunskap, lokal produktion",
            "Planetär styrning utan global regering"
          ],
          color: "from-moss-50 to-clay-50",
          borderColor: "border-moss-400"
        }
      ],
      integration: {
        title: "Integration Över Skalor",
        text: "Dessa skalor är inte separata—de genomsyrar varandra. Hur vi relaterar till oss själva formar hur vi relaterar till andra. Lokala praktiker informerar globala mönster. Digitala verktyg möjliggör nya former av lokalt samarbete. Att förstå alla fyra skalor hjälper oss se den fullständiga ekologin av tillhörighet."
      },
      cta: {
        title: "Utforska Varje Skala",
        text: "Fördjupa dig i vilken skala som helst för att upptäcka essäer, praktiker och exempel på kommunisering i handling."
      }
    }
  };

  $: t = translations[$currentLanguage] || translations.en;
</script>

<svelte:head>
  <title>{t.title} | Communize</title>
  <meta name="description" content={t.subtitle} />
</svelte:head>

{#key $currentLanguage}
<div class="min-h-screen" in:fade>
  <div class="max-w-6xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {t.title}
      </h1>
      <p class="text-xl text-earth-600 font-light max-w-3xl mx-auto">
        {t.subtitle}
      </p>
    </div>

    <!-- Introduction -->
    <div class="mb-12 max-w-4xl mx-auto">
      <p class="text-lg leading-relaxed text-earth-700">
        {t.intro}
      </p>
    </div>

    <!-- Fractal Principle -->
    <div class="mb-16 p-8 bg-gradient-to-br from-moss-50 to-earth-50 rounded-xl max-w-4xl mx-auto">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {t.principle.title}
      </h2>
      <p class="text-earth-700 leading-relaxed">
        {t.principle.text}
      </p>
    </div>

    <!-- The Four Scales -->
    <div class="space-y-8 mb-16">
      {#each t.scales as scale}
        <a 
          href="/scales/{scale.id}"
          class="block group"
        >
          <div class="bg-gradient-to-br {scale.color} rounded-xl p-8 border-2 {scale.borderColor} hover:shadow-lg transition-all">
            <div class="flex items-start gap-6">
              <div class="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {scale.icon}
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-serif text-earth-900 mb-1 group-hover:text-moss-700 transition-colors">
                  {scale.title}
                </h3>
                <p class="text-sm text-earth-600 mb-3 font-medium">
                  {scale.subtitle}
                </p>
                <p class="text-earth-700 mb-4 leading-relaxed">
                  {scale.description}
                </p>
                <div class="space-y-1.5">
                  <p class="text-sm font-medium text-earth-600 mb-2">Key Themes:</p>
                  {#each scale.themes as theme}
                    <div class="flex items-start text-earth-700 text-sm">
                      <span class="text-moss-600 mr-2">•</span>
                      <span>{theme}</span>
                    </div>
                  {/each}
                </div>
                <div class="mt-4 flex items-center text-moss-600 font-medium text-sm group-hover:text-moss-700">
                  <span>Explore this scale →</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- Integration Note -->
    <div class="mb-12 p-8 bg-earth-50 rounded-xl max-w-4xl mx-auto border-2 border-earth-200">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {t.integration.title}
      </h2>
      <p class="text-earth-700 leading-relaxed">
        {t.integration.text}
      </p>
    </div>

    <!-- CTA -->
    <div class="text-center">
      <h2 class="text-2xl font-serif mb-3 text-earth-900">
        {t.cta.title}
      </h2>
      <p class="text-earth-600">
        {t.cta.text}
      </p>
    </div>
  </div>
</div>
{/key}
