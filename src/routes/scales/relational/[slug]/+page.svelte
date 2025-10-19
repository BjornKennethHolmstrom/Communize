<!-- /src/routes/scales/relational/[slug]/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';
  import { base } from '$app/paths';

  export let data;
  
  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      fallbackNotice: "Note: Swedish translation not yet available. Showing English version.",
      backToRelational: "Back to Relational Commons",
      relationalCommons: "Relational Commons"
    },
    sv: {
      fallbackNotice: "OBS: Svensk översättning inte tillgänglig ännu. Visar engelsk version.",
      backToRelational: "Tillbaka till Relationella Allmänningar",
      relationalCommons: "Relationella Allmänningar"
    }
  };
  
  $: t = translations[$currentLanguage] || translations.en;
</script>

<svelte:head>
  <title>{data.metadata.title} | {t.relationalCommons} | Communize</title>
  <meta name="description" content={data.metadata.subtitle} />
  <meta name="author" content={data.metadata.author} />
</svelte:head>

<div class="min-h-screen" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-16">
    
    {#if data.fallbackToEnglish}
      <div class="mb-6 p-4 bg-clay-50 border border-clay-200 rounded-lg text-sm text-clay-800">
        ℹ️ {t.fallbackNotice}
      </div>
    {/if}
    
    <nav class="mb-8 text-sm">
      <ol class="flex items-center gap-2 text-earth-600">
        <li>
          <a href="{base}/scales" class="hover:text-moss-600 transition-colors">Scales</a>
        </li>
        <li class="text-earth-400">/</li>
        <li>
          <a href="{base}/scales/relational" class="hover:text-moss-600 transition-colors">{t.relationalCommons}</a>
        </li>
        <li class="text-earth-400">/</li>
        <li class="text-earth-900">{data.metadata.title}</li>
      </ol>
    </nav>

    <header class="mb-12">
      <h1 class="text-4xl md:text-5xl font-serif text-earth-900 mb-3">
        {data.metadata.title}
      </h1>
      {#if data.metadata.subtitle}
        <p class="text-xl text-earth-600 font-light mb-4">
          {data.metadata.subtitle}
        </p>
      {/if}
      <div class="flex items-center gap-4 text-sm text-earth-500">
        {#if data.metadata.author}
          <span>By {data.metadata.author}</span>
        {/if}
        {#if data.metadata.date}
          <span>•</span>
          <time datetime={data.metadata.date}>
            {new Date(data.metadata.date).toLocaleDateString($currentLanguage === 'sv' ? 'sv-SE' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        {/if}
      </div>
    </header>

    <article class="prose prose-lg prose-earth max-w-none">
      <svelte:component this={data.content} />
    </article>

    <footer class="mt-16 pt-8 border-t border-earth-200">
      <a 
        href="{base}/scales/relational"
        class="inline-flex items-center gap-2 text-earth-600 hover:text-moss-600 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>{t.backToRelational}</span>
      </a>
    </footer>
  </div>
</div>

<style>
  :global(.prose-earth) {
    color: #3d3020;
  }
  
  :global(.prose-earth h1) {
    color: #221b12;
    font-family: Merriweather, Georgia, serif;
    font-weight: 700;
    margin-top: 2em;
    margin-bottom: 1em;
  }
  
  :global(.prose-earth h2) {
    color: #334a33;
    font-family: Merriweather, Georgia, serif;
    font-weight: 600;
    margin-top: 1.5em;
    margin-bottom: 0.75em;
  }
  
  :global(.prose-earth h3) {
    color: #5c4830;
    font-family: Merriweather, Georgia, serif;
    font-weight: 600;
    margin-top: 1.25em;
    margin-bottom: 0.5em;
  }
  
  :global(.prose-earth p) {
    margin-top: 1em;
    margin-bottom: 1em;
    line-height: 1.75;
  }
  
  :global(.prose-earth a) {
    color: #446344;
    text-decoration: none;
    border-bottom: 1px solid #a3c0a3;
  }
  
  :global(.prose-earth a:hover) {
    color: #334a33;
    border-bottom-color: #759e75;
  }
  
  :global(.prose-earth strong) {
    color: #221b12;
    font-weight: 600;
  }
  
  :global(.prose-earth em) {
    font-style: italic;
  }
  
  :global(.prose-earth ul) {
    margin-top: 1em;
    margin-bottom: 1em;
    list-style-type: disc;
    padding-left: 1.5em;
  }
  
  :global(.prose-earth ol) {
    margin-top: 1em;
    margin-bottom: 1em;
    list-style-type: decimal;
    padding-left: 1.5em;
  }
  
  :global(.prose-earth li) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  
  :global(.prose-earth blockquote) {
    border-left: 4px solid #759e75;
    padding-left: 1em;
    margin: 1.5em 0;
    font-style: italic;
    color: #5c4830;
  }
  
  :global(.prose-earth hr) {
    border: 0;
    border-top: 2px solid #e8dcc8;
    margin: 2em 0;
  }
  
  :global(.prose-earth code) {
    background: #f5f0e8;
    padding: 0.2em 0.4em;
    border-radius: 0.25em;
    font-size: 0.9em;
    color: #3d3020;
  }
  
  :global(.prose-earth pre) {
    background: #f5f0e8;
    padding: 1em;
    border-radius: 0.5em;
    overflow-x: auto;
    margin: 1.5em 0;
  }
  
  :global(.prose-earth pre code) {
    background: transparent;
    padding: 0;
  }
</style>
