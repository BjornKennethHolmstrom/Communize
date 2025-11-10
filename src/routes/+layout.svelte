<!-- /src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import { waitLocale } from 'svelte-i18n';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import languageStore from '$lib/stores/languageStore';

  const { language } = languageStore;
  
  let { children } = $props();
  let isLoaded = $state(false);

  onMount(() => {
    waitLocale().then(() => {
      isLoaded = true;
    });

    // Register service worker for PWA functionality
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
        .then(registration => {
          console.log('Service Worker registered successfully:', registration.scope);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
  });

  const currentLanguage = $derived($language);
  
  const metaTitle = $derived('Communize - ' + (currentLanguage === 'en' 
    ? 'Cultivating the art and architecture of belonging'
    : 'Att odla konsten och arkitekturen av tillhÃ¶righet'));

  const metaDescription = $derived(currentLanguage === 'en'
    ? 'Exploring the process of communizingâ€”building community and creating the commons'
    : 'Att utforska processen av att kommuniseraâ€”att bygga gemenskap och skapa allmÃ¤nningar');
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDescription} />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={$page.url.href} />
  <meta property="twitter:title" content={metaTitle} />
  <meta property="twitter:description" content={metaDescription} />
</svelte:head>

{#if isLoaded}
  <div class="min-h-screen flex flex-col bg-organic">
    <!-- Skip Link -->
    <a 
      href="#main-content"
      class="skip-link"
      aria-label={currentLanguage === 'en' ? 'Skip to main content' : 'Hoppa till huvudinnehÃ¥ll'}
    >
      {currentLanguage === 'en' ? 'Skip to main content' : 'Hoppa till huvudinnehÃ¥ll'}
    </a>

    <Header />
    
    <main id="main-content" class="flex-1" tabindex="-1">
      {@render children()}
    </main>

    <Footer />
  </div>
{:else}
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-earth-600" role="status">
      {currentLanguage === 'en' ? 'Loading...' : 'Laddar...'}
    </div>
  </div>
{/if}

<style>
  .skip-link {
    position: absolute;
    top: -9999px;
    left: 50%;
    transform: translateX(-50%);
    background: #567d56;
    color: white;
    padding: 1rem 2rem;
    z-index: 100;
    text-decoration: none;
    border-radius: 0 0 0.5rem 0.5rem;
    font-weight: 500;
    transition: top 0.2s ease;
  }

  .skip-link:focus {
    top: 0;
    outline: 2px solid white;
    outline-offset: 4px;
  }

  main:focus {
    outline: none;
  }

  main:focus::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #567d56;
    animation: fadeOut 2s forwards;
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
</style>
