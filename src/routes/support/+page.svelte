<!-- src/routes/support/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import languageStore from '$lib/stores/languageStore';
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = languageStore.language;

  const translations = {
    en: {
      title: "Support Communize",
      subtitle: "Help tend our digital commons",
      
      currentPhase: {
        title: "🌱 Current Phase: Growing Our Roots",
        content: "Communize is nurtured as a labor of love—a digital commons where ideas about community and shared ownership can take root and flourish. The site's needs are minimal, allowing us to focus on what matters most: building resources for collective care."
      },
      
      supportWays: {
        title: "Ways to Tend This Commons",
        community: {
          title: "🤝 Community Cultivation",
          items: [
            "Share Communize with others building community",
            "Participate in discussions about commons practices",
            "Offer feedback to help grow these resources",
            "Help test tools and improve user experience"
          ]
        },
        knowledge: {
          title: "📚 Knowledge Sharing", 
          items: [
            "Share your community-building experiences",
            "Suggest improvements to guides and frameworks",
            "Contribute case studies of successful commons",
            "Help translate content into other languages"
          ]
        },
        resources: {
          title: "🛠️ Resource Building",
          items: [
            "Help expand the practical toolkit",
            "Share templates and frameworks you've developed",
            "Contribute to the curated resource library",
            "Help document community-building patterns"
          ]
        }
      },

      futureVision: {
        title: "Future Collective Support",
        content: "If collective support becomes possible in the future, it would nourish:",
        principles: [
          "Expanding our library of commons case studies",
          "Creating more accessible tools for community building",
          "Translation efforts for global accessibility",
          "Developing interactive community mapping resources",
          "Maintaining this digital commons for all"
        ]
      },

      commonsPhilosophy: {
        title: "The Commons Way",
        content: "Like any healthy commons, this project thrives through collective care. Your participation—whether through sharing, contributing, or simply engaging—helps sustain this resource for everyone.",
        signature: "In shared stewardship"
      }
    },
    sv: {
      title: "Stöd Communize",
      subtitle: "Hjälp till att vårda vår digitala allmänning",
      
      currentPhase: {
        title: "🌱 Nuvarande fas: Växer våra rötter",
        content: "Communize vårdas som en kärleksfull insats—en digital allmänning där idéer om gemenskap och delat ägande kan slå rot och blomstra. Webbplatsens behov är minimala, vilket låter oss fokusera på det som betyder mest: att bygga resurser för kollektiv omsorg."
      },
      
      supportWays: {
        title: "Sätt att vårda denna allmänning",
        community: {
          title: "🤝 Gemenskapsodling",
          items: [
            "Dela Communize med andra som bygger gemenskap",
            "Delta i diskussioner om allmänningspraxis",
            "Ge feedback för att hjälpa till att växa dessa resurser",
            "Hjälp till att testa verktyg och förbättra användarupplevelse"
          ]
        },
        knowledge: {
          title: "📚 Kunskapsdelning",
          items: [
            "Dela dina erfarenheter av att bygga gemenskap",
            "Föreslå förbättringar av guider och ramverk",
            "Bidra med fallstudier av framgångsrika allmänningar",
            "Hjälp till att översätta innehåll till andra språk"
          ]
        },
        resources: {
          title: "🛠️ Resursbyggande",
          items: [
            "Hjälp till att utöka det praktiska verktygslådan",
            "Dela mallar och ramverk du har utvecklat",
            "Bidra till det kuraterade resursbiblioteket",
            "Hjälp till att dokumentera mönster för gemenskapsbyggande"
          ]
        }
      },

      futureVision: {
        title: "Framtida kollektivt stöd",
        content: "Om kollektivt stöd blir möjligt i framtiden skulle det nära:",
        principles: [
          "Utöka vårt bibliotek med allmänningsfallstudier",
          "Skapa mer tillgängliga verktyg för gemenskapsbyggande",
          "Översättningsinsatser för global tillgänglighet",
          "Utveckla interaktiva resurser för kartläggning av gemenskap",
          "Bevara denna digitala allmänning för alla"
        ]
      },

      commonsPhilosophy: {
        title: "Allmänningsvägen",
        content: "Liksom alla friska allmänningar frodas detta projekt genom kollektiv omsorg. Ditt deltagande—oavsett om det är genom att dela, bidra eller helt enkelt engagera dig—hjälper till att upprätthålla denna resurs för alla.",
        signature: "I delat förvaltarskap"
      }
    }
  };

  // Add this safety check
  $: pageTranslations = translations[currentLanguage] || translations.en;
  
  // Add guards for nested properties
  $: supportWays = pageTranslations?.supportWays || translations.en.supportWays;
  $: currentPhase = pageTranslations?.currentPhase || translations.en.currentPhase;
  $: futureVision = pageTranslations?.futureVision || translations.en.futureVision;
  $: commonsPhilosophy = pageTranslations?.commonsPhilosophy || translations.en.commonsPhilosophy;

  $: seoTitle = currentLanguage === 'en'
    ? 'Support Communize - Tending Our Digital Commons'
    : 'Stöd Communize - Vårdar vår digitala allmänning';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Learn how to support Communize through community cultivation, knowledge sharing, and resource building. Help tend this digital commons for collective care and community building.'
    : 'Lär dig hur du kan stödja Communize genom gemenskapsodling, kunskapsdelning och resursbyggande. Hjälp till att vårda denna digitala allmänning för kollektiv omsorg och gemenskapsbyggande.';
</script>

<SEO
  title={seoTitle}
  description={seoDescription}
  keywords="support communize, digital commons, community building, collective care, open source resources"
/>

<div class="min-h-screen bg-earth-50" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-16">
    
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {pageTranslations.title}
      </h1>
      <p class="text-xl text-earth-600 font-light">
        {pageTranslations.subtitle}
      </p>
    </div>

    <!-- Current Phase -->
    <div class="bg-moss-50 rounded-xl p-8 mb-12 border-l-4 border-moss-500">
      <h2 class="text-2xl font-serif text-earth-900 mb-4">
        {pageTranslations.currentPhase.title}
      </h2>
      <p class="text-earth-700 leading-relaxed text-lg">
        {pageTranslations.currentPhase.content}
      </p>
    </div>

    <!-- Support Ways -->
    <div class="bg-white rounded-xl shadow-sm p-8 mb-12">
      <h2 class="text-2xl font-serif text-earth-900 mb-8 text-center">
        {pageTranslations.supportWays.title}
      </h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Community Support -->
        <div class="space-y-4">
          <h3 class="text-lg font-serif text-earth-800">
            {pageTranslations.supportWays.community.title}
          </h3>
          <ul class="space-y-3">
            {#each pageTranslations.supportWays.community.items as item}
              <li class="flex items-start text-earth-700">
                <span class="text-moss-600 mr-3 mt-1 flex-shrink-0 text-xl">•</span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Knowledge Support -->
        <div class="space-y-4">
          <h3 class="text-lg font-serif text-earth-800">
            {pageTranslations.supportWays.knowledge.title}
          </h3>
          <ul class="space-y-3">
            {#each pageTranslations.supportWays.knowledge.items as item}
              <li class="flex items-start text-earth-700">
                <span class="text-earth-600 mr-3 mt-1 flex-shrink-0 text-xl">•</span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Resource Support -->
      <div class="mt-8 pt-6 border-t border-earth-200">
        <h3 class="text-lg font-serif text-earth-800 mb-4">
          {pageTranslations.supportWays.resources.title}
        </h3>
        <ul class="grid md:grid-cols-2 gap-4">
          {#each pageTranslations.supportWays.resources.items as item}
            <li class="flex items-start text-earth-700">
              <span class="text-clay-600 mr-3 mt-1 flex-shrink-0 text-xl">•</span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Future Vision -->
    <div class="bg-gradient-to-br from-moss-600 to-earth-700 rounded-xl text-white p-8 mb-12">
      <h2 class="text-2xl font-serif mb-6">
        {pageTranslations.futureVision.title}
      </h2>
      <p class="text-moss-100 mb-6 leading-relaxed text-lg">
        {pageTranslations.futureVision.content}
      </p>
      <ul class="space-y-3">
        {#each pageTranslations.futureVision.principles as principle}
          <li class="flex items-start text-moss-50">
            <span class="text-earth-200 mr-3 mt-1 flex-shrink-0 text-xl">•</span>
            <span>{principle}</span>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Commons Philosophy -->
    <div class="text-center bg-moss-50 rounded-xl p-8">
      <h2 class="text-2xl font-serif text-earth-900 mb-4">
        {pageTranslations.commonsPhilosophy.title}
      </h2>
      <p class="text-earth-700 text-lg mb-6 max-w-2xl mx-auto leading-relaxed italic">
        {pageTranslations.commonsPhilosophy.content}
      </p>
      <p class="text-earth-600 font-medium">
        {pageTranslations.commonsPhilosophy.signature}
      </p>
    </div>

  </div>
</div>
