<!-- /src/routes/about/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{$_('about.title')} | Communize</title>
  <meta name="description" content={$_('about.subtitle')} />
</svelte:head>

<div class="min-h-screen" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {$_('about.title')}
      </h1>
      <p class="text-xl text-earth-600 font-light">
        {$_('about.subtitle')}
      </p>
    </div>

    <!-- Introduction -->
    <div class="prose-custom mb-12">
      {#each $_('about.intro') as paragraph}
        <p class="text-lg leading-relaxed mb-6 text-earth-700">
          {paragraph}
        </p>
      {/each}
    </div>

    <!-- Philosophy Section -->
    <div class="mb-12 p-8 bg-moss-50 rounded-xl">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {$_('about.philosophy.title')}
      </h2>
      <ul class="space-y-2">
        {#each $_('about.philosophy.points') as point}
          <li class="flex items-start text-earth-700">
            <span class="text-moss-600 mr-3 text-xl">•</span>
            <span>{point}</span>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Ecosystem Section -->
    <div class="mb-12 pt-8 border-t border-earth-200">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {$_('about.ecosystem.title')}
      </h2>
      <p class="text-earth-700 mb-8">
        {$_('about.ecosystem.description')}
      </p>
      
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Nondualize -->
        <div class="bg-white rounded-lg p-6 border-2 border-earth-200 hover:border-moss-300 transition-colors">
          <div class="flex items-center gap-3 mb-3">
            <img src="{base}/logo-nondualize.svg" alt="Nondualize logo" class="w-10 h-10" />
            <div>
              <h3 class="font-serif text-lg text-earth-900">Nondualize</h3>
              <p class="text-sm text-earth-600">{$_('about.ecosystem.nondualize.subtitle')}</p>
            </div>
          </div>
          <p class="text-earth-700 text-sm mb-4">
            {$_('about.ecosystem.nondualize.description')}
          </p>
          <a
            href="https://nondualize.org"
            target="_blank"
            rel="noopener"
            class="inline-block text-sm text-moss-600 hover:text-moss-700 font-medium border-b border-moss-300 hover:border-moss-500 transition-colors"
          >
            {$_('about.ecosystem.nondualize.link')}
          </a>
        </div>

        <!-- Spiralize -->
        <div class="bg-white rounded-lg p-6 border-2 border-earth-200 hover:border-moss-300 transition-colors">
          <div class="flex items-center gap-3 mb-3">
            <img src="{base}/logo-spiralize.svg" alt="Spiralize logo" class="w-10 h-10" />
            <div>
              <h3 class="font-serif text-lg text-earth-900">Spiralize</h3>
              <p class="text-sm text-earth-600">{$_('about.ecosystem.spiralize.subtitle')}</p>
            </div>
          </div>
          <p class="text-earth-700 text-sm mb-4">
            {$_('about.ecosystem.spiralize.description')}
          </p>
          <a
            href="https://spiralize.org"
            target="_blank"
            rel="noopener"
            class="inline-block text-sm text-moss-600 hover:text-moss-700 font-medium border-b border-moss-300 hover:border-moss-500 transition-colors"
          >
            {$_('about.ecosystem.spiralize.link')}
          </a>
        </div>

        <!-- Communize (current) -->
        <div class="bg-moss-50 rounded-lg p-6 border-2 border-moss-400">
          <div class="flex items-center gap-3 mb-3">
            <img src="{base}/logo.svg" alt="Communize logo" class="w-10 h-10" />
            <div>
              <h3 class="font-serif text-lg text-earth-900">Communize</h3>
              <p class="text-sm text-earth-600">{$_('about.ecosystem.communize.subtitle')}</p>
            </div>
          </div>
          <p class="text-earth-700 text-sm mb-4">
            {$_('about.ecosystem.communize.description')}
          </p>
          <span class="text-sm text-moss-700 font-medium">
            {$_('about.ecosystem.communize.link')}
          </span>
        </div>

        <!-- GGF -->
        <div class="bg-white rounded-lg p-6 border-2 border-earth-200 hover:border-moss-300 transition-colors">
          <div class="flex items-center gap-3 mb-3">
            <img src="{base}/logo-ggf.svg" alt="GGF logo" class="w-10 h-10" />
            <div>
              <h3 class="font-serif text-lg text-earth-900">GGF</h3>
              <p class="text-sm text-earth-600">{$_('about.ecosystem.ggf.subtitle')}</p>
            </div>
          </div>
          <p class="text-earth-700 text-sm mb-4">
            {$_('about.ecosystem.ggf.description')}
          </p>
          <a
            href="https://globalgovernanceframeworks.org"
            target="_blank"
            rel="noopener"
            class="inline-block text-sm text-moss-600 hover:text-moss-700 font-medium border-b border-moss-300 hover:border-moss-500 transition-colors"
          >
            {$_('about.ecosystem.ggf.link')}
          </a>
        </div>
      </div>
    </div>

    <!-- Author Section -->
    <div class="mb-12 pt-8 border-t border-earth-200">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {$_('about.author.title')}
      </h2>
      <p class="text-earth-700 mb-6">
        {$_('about.author.text')}
      </p>
      <a
        href="https://bjornkennethholmstrom.wordpress.com/"
        target="_blank"
        rel="noopener"
        class="inline-block px-6 py-3 bg-earth-700 hover:bg-earth-800 text-white rounded-lg transition-colors"
      >
        {$_('about.author.link')}
      </a>
    </div>

    <!-- Open Source Section -->
    <div class="pt-8 border-t border-earth-200">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {$_('about.openSource.title')}
      </h2>
      <p class="text-earth-700 mb-6">
        {$_('about.openSource.text')}
      </p>
      <a
        href="https://github.com/BjornKennethHolmstrom/communize"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 px-6 py-3 bg-earth-800 hover:bg-earth-900 text-white rounded-lg transition-colors"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
        {$_('about.openSource.github')}
      </a>
    </div>
  </div>
</div>
