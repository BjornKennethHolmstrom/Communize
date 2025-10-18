<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import languageStore from '$lib/stores/languageStore';
  
  const { language, toggleLanguage } = languageStore;
  
  let mobileMenuOpen = $state(false);
  
  const currentLanguage = $derived($language);
  const altLang = $derived(currentLanguage === 'sv' ? 'EN' : 'SV');
</script>

<header class="bg-white/80 backdrop-blur-sm border-b border-earth-200 sticky top-0 z-50">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo and site name -->
      <div class="flex items-center">
        <a href="/" class="flex items-center gap-3 group">
          <img src="/logo.svg" alt="Communize logo" class="w-10 h-10" />
          <div>
            <div class="font-serif text-xl text-earth-900 group-hover:text-moss-700 transition-colors">
              {$_('siteName')}
            </div>
            <div class="text-xs text-earth-600 hidden sm:block">
              {$_('tagline')}
            </div>
          </div>
        </a>
      </div>

      <!-- Desktop navigation -->
      <div class="hidden md:flex items-center gap-6">
        <a href="/scales" class="text-earth-700 hover:text-moss-600 font-medium">
          {$_('nav.scales')}
        </a>
        <a href="/toolkit" class="text-earth-700 hover:text-moss-600 font-medium">
          {$_('nav.toolkit')}
        </a>
        <a href="/library" class="text-earth-700 hover:text-moss-600 font-medium">
          {$_('nav.library')}
        </a>
        <a href="/knowledge" class="text-earth-700 hover:text-moss-600 font-medium">
          {$_('nav.knowledge')}
        </a>
        <a href="/about" class="text-earth-700 hover:text-moss-600 font-medium">
          {$_('nav.about')}
        </a>
        
        <!-- Language switcher -->
        <button
          onclick={toggleLanguage}
          class="px-3 py-1 text-sm border border-earth-300 rounded hover:bg-earth-100 text-earth-700 transition-colors"
          aria-label="Switch language"
        >
          {altLang}
        </button>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden p-2 text-earth-700 hover:text-moss-600"
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 border-t border-earth-200">
        <div class="flex flex-col gap-3">
          <a href="/scales" class="text-earth-700 hover:text-moss-600 font-medium py-2">
            {$_('nav.scales')}
          </a>
          <a href="/toolkit" class="text-earth-700 hover:text-moss-600 font-medium py-2">
            {$_('nav.toolkit')}
          </a>
          <a href="/library" class="text-earth-700 hover:text-moss-600 font-medium py-2">
            {$_('nav.library')}
          </a>
          <a href="/knowledge" class="text-earth-700 hover:text-moss-600 font-medium py-2">
            {$_('nav.knowledge')}
          </a>
          <a href="/about" class="text-earth-700 hover:text-moss-600 font-medium py-2">
            {$_('nav.about')}
          </a>
          <button
            onclick={toggleLanguage}
            class="text-left text-earth-700 hover:text-moss-600 font-medium py-2"
          >
            {altLang}
          </button>
        </div>
      </div>
    {/if}
  </nav>
</header>
