<!-- /src/routes/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { base } from '$app/paths';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-moss-50 via-earth-50 to-clay-50 opacity-60"></div>
  
  <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
    <div class="text-center max-w-4xl mx-auto">
      <!-- Logo -->
      <div class="mb-8">
        <img 
          src="{base}/logo.svg" 
          alt="Communize Logo" 
          class="w-32 h-32 mx-auto"
        />
      </div>
      
      <h1 class="font-serif text-4xl md:text-6xl text-earth-900 mb-6 leading-tight">
        {$_('hero.title')}
      </h1>
      
      <p class="text-xl md:text-2xl text-earth-700 mb-8 leading-relaxed">
        {$_('hero.subtitle')}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href="{base}/scales"
          class="px-8 py-3 bg-moss-600 text-white rounded-lg hover:bg-moss-700 transition-colors font-medium shadow-md hover:shadow-lg"
        >
          {$_('hero.cta')}
        </a>
        <a 
          href="{base}/about"
          class="px-8 py-3 border-2 border-earth-300 text-earth-700 rounded-lg hover:border-moss-400 hover:text-moss-700 transition-colors font-medium"
        >
          {$_('nav.about')}
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Manifesto Section -->
<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="prose prose-lg mx-auto">
    <p class="text-xl text-earth-800 leading-relaxed font-serif italic border-l-4 border-moss-400 pl-6 my-8">
      {$_('manifesto.quote')}
    </p>
    
    <p class="text-earth-700 leading-relaxed">
      {$_('manifesto.body')}
    </p>
  </div>
</section>

<!-- Four Scales Section -->
<section class="bg-white py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-serif text-3xl md:text-4xl text-center text-earth-900 mb-4">
      {$_('scalesSection.title')}
    </h2>
    <p class="text-center text-earth-600 mb-12 max-w-2xl mx-auto">
      {$_('scalesSection.subtitle')}
    </p>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Inner Commons -->
      <a href="{base}/scales/inner" class="group">
        <div class="bg-gradient-to-br from-moss-50 to-earth-50 rounded-xl p-8 hover:shadow-lg transition-all border border-earth-200 hover:border-moss-300">
          <div class="w-12 h-12 bg-moss-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="font-serif text-2xl text-earth-900 mb-2 group-hover:text-moss-700 transition-colors">
            {$_('scales.inner')}
          </h3>
          <p class="text-earth-700">
            {$_('scalesSection.inner.description')}
          </p>
        </div>
      </a>
      
      <!-- Relational Commons -->
      <a href="{base}/scales/relational" class="group">
        <div class="bg-gradient-to-br from-clay-50 to-earth-50 rounded-xl p-8 hover:shadow-lg transition-all border border-earth-200 hover:border-moss-300">
          <div class="w-12 h-12 bg-clay-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 class="font-serif text-2xl text-earth-900 mb-2 group-hover:text-moss-700 transition-colors">
            {$_('scales.relational')}
          </h3>
          <p class="text-earth-700">
            {$_('scalesSection.relational.description')}
          </p>
        </div>
      </a>
      
      <!-- Societal Commons -->
      <a href="{base}/scales/societal" class="group">
        <div class="bg-gradient-to-br from-earth-50 to-moss-50 rounded-xl p-8 hover:shadow-lg transition-all border border-earth-200 hover:border-moss-300">
          <div class="w-12 h-12 bg-earth-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="font-serif text-2xl text-earth-900 mb-2 group-hover:text-moss-700 transition-colors">
            {$_('scales.societal')}
          </h3>
          <p class="text-earth-700">
            {$_('scalesSection.societal.description')}
          </p>
        </div>
      </a>
      
      <!-- Planetary Commons -->
      <a href="{base}/scales/planetary" class="group">
        <div class="bg-gradient-to-br from-moss-50 to-clay-50 rounded-xl p-8 hover:shadow-lg transition-all border border-earth-200 hover:border-moss-300">
          <div class="w-12 h-12 bg-moss-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012-2 2 2 0 104 0 2 2 0 012 2v.5a2.5 2.5 0 002.5 2.5 2.5 2.5 0 01-2.5 2.5H19l-1 2v3" />
            </svg>
          </div>
          <h3 class="font-serif text-2xl text-earth-900 mb-2 group-hover:text-moss-700 transition-colors">
            {$_('scales.planetary')}
          </h3>
          <p class="text-earth-700">
            {$_('scalesSection.planetary.description')}
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- The Trilogy Section -->
<section class="py-20 bg-gradient-to-br from-earth-50 to-moss-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-serif text-3xl md:text-4xl text-center text-earth-900 mb-4">
      {$_('trilogy.title')}
    </h2>
    <p class="text-center text-earth-600 mb-12 max-w-3xl mx-auto">
      {$_('trilogy.subtitle')}
    </p>
    
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Nondualize -->
      <div class="bg-white rounded-lg p-6 shadow-md border border-earth-200">
        <div class="flex items-center gap-3 mb-3">
          <img src="{base}/logo-nondualize.svg" alt="Nondualize logo" class="w-10 h-10" />
          <h3 class="font-serif text-xl text-earth-900">Nondualize</h3>
        </div>
        <p class="text-sm text-earth-600 mb-2 font-medium">
          {$_('trilogy.nondualize.subtitle')}
        </p>
        <p class="text-earth-700 text-sm leading-relaxed mb-4">
          {$_('trilogy.nondualize.description')}
        </p>
        <a href="https://nondualize.org" class="text-sm text-moss-600 hover:text-moss-700 font-medium border-b border-moss-300 hover:border-moss-500 transition-colors">
          {$_('trilogy.nondualize.cta')}
        </a>
      </div>
      
      <!-- Spiralize -->
      <div class="bg-white rounded-lg p-6 shadow-md border border-earth-200">
        <div class="flex items-center gap-3 mb-3">
          <img src="{base}/logo-spiralize.svg" alt="Spiralize logo" class="w-10 h-10" />
          <h3 class="font-serif text-xl text-earth-900">Spiralize</h3>
        </div>
        <p class="text-sm text-earth-600 mb-2 font-medium">
          {$_('trilogy.spiralize.subtitle')}
        </p>
        <p class="text-earth-700 text-sm leading-relaxed mb-4">
          {$_('trilogy.spiralize.description')}
        </p>
        <a href="https://spiralize.org" class="text-sm text-moss-600 hover:text-moss-700 font-medium border-b border-moss-300 hover:border-moss-500 transition-colors">
          {$_('trilogy.spiralize.cta')}
        </a>
      </div>
      
      <!-- Communize -->
      <div class="bg-white rounded-lg p-6 shadow-md border-2 border-moss-400">
        <div class="flex items-center gap-3 mb-3">
          <img src="{base}/logo.svg" alt="Communize logo" class="w-10 h-10" />
          <h3 class="font-serif text-xl text-earth-900">Communize</h3>
        </div>
        <p class="text-sm text-earth-600 mb-2 font-medium">
          {$_('trilogy.communize.subtitle')}
        </p>
        <p class="text-earth-700 text-sm leading-relaxed mb-4">
          {$_('trilogy.communize.description')}
        </p>
        <span class="text-sm text-moss-700 font-medium">
          {$_('trilogy.communize.youAreHere')}
        </span>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Section -->
<section class="py-20">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="font-serif text-3xl md:text-4xl text-earth-900 mb-6">
      {$_('cta.title')}
    </h2>
    <p class="text-lg text-earth-700 mb-8 leading-relaxed">
      {$_('cta.description')}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="https://github.com/BjornKennethHolmstrom/Communize"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3 bg-earth-800 text-white rounded-lg hover:bg-earth-900 transition-colors font-medium"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
        {$_('cta.github')}
      </a>
      <a 
        href="mailto:bjorn.kenneth.holmstrom@gmail.com"
        class="inline-flex items-center gap-2 px-6 py-3 border-2 border-earth-300 text-earth-700 rounded-lg hover:border-moss-400 hover:text-moss-700 transition-colors font-medium"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {$_('cta.contact')}
      </a>
    </div>
  </div>
  <br>
  <ShareButtons />
</section>
