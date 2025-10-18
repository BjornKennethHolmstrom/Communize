<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<footer class="bg-earth-800 text-earth-100 mt-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About section -->
      <div>
        <h3 class="font-serif text-lg mb-3 text-white">{$_('siteName')}</h3>
        <p class="text-earth-300 text-sm leading-relaxed">
          {$_('tagline')}
        </p>
      </div>
      
      <!-- Sister sites -->
      <div>
        <h3 class="font-serif text-lg mb-3 text-white">{$_('footer.sisterSites')}</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="https://nondualize.org" class="text-earth-300 hover:text-moss-300 transition-colors">
              Nondualize.org
            </a>
            <span class="text-earth-500 text-xs"> — {$_('trilogy.nondualize.subtitle')}</span>
          </li>
          <li>
            <a href="https://spiralize.org" class="text-earth-300 hover:text-moss-300 transition-colors">
              Spiralize.org
            </a>
            <span class="text-earth-500 text-xs"> — {$_('trilogy.spiralize.subtitle')}</span>
          </li>
          <li>
            <a href="https://communize.org" class="text-earth-300 hover:text-moss-300 transition-colors">
              Communize.org
            </a>
            <span class="text-earth-500 text-xs"> — {$_('trilogy.communize.subtitle')}</span>
          </li>
        </ul>
      </div>
      
      <!-- Contact and license -->
      <div>
        <h3 class="font-serif text-lg mb-3 text-white">{$_('footer.contact')}</h3>
        <p class="text-earth-300 text-sm mb-4">
          <a href="mailto:bjorn.kenneth.holmstrom@gmail.com" class="hover:text-moss-300 transition-colors">
            bjorn.kenneth.holmstrom@gmail.com
          </a>
        </p>
        <p class="text-earth-400 text-xs">
          {$_('footer.license')}
        </p>
      </div>
    </div>
    
    <div class="mt-8 pt-8 border-t border-earth-700 text-center text-earth-400 text-sm">
      <p>{$_('footer.copyright', { values: { year: new Date().getFullYear() } })}</p>
    </div>
  </div>
</footer>
