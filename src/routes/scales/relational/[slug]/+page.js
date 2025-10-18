import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import languageStore from '$lib/stores/languageStore.js';

export async function load({ params }) {
  const { slug } = params;
  
  // FIX: The store value IS the language string directly
  const currentLanguage = get(languageStore);
  
  console.log('🔍 Loading page with params:', { slug, currentLanguage });
  
  // Try Swedish first if current language is Swedish
  if (currentLanguage === 'sv') {
    try {
      console.log('🔄 Trying Swedish version...');
      const post = await import(`../../../../lib/content/scales/relational/sv/${slug}.md`);
      console.log('✅ Swedish version loaded successfully');
      return {
        content: post.default,
        metadata: post.metadata,
        slug,
        fallbackToEnglish: false
      };
    } catch (svError) {
      console.log('❌ Swedish version not found:', svError);
      console.log('🔄 Falling back to English...');
      // If Swedish not found, try English with fallback notice
      try {
        const post = await import(`../../../../lib/content/scales/relational/en/${slug}.md`);
        console.log('✅ English fallback loaded successfully');
        return {
          content: post.default,
          metadata: post.metadata,
          slug,
          fallbackToEnglish: true
        };
      } catch (enError) {
        console.log('❌ English fallback also failed:', enError);
        throw error(404, `Essay not found: ${slug}`);
      }
    }
  } else {
    // Default to English
    try {
      console.log('🔄 Loading English version...');
      const post = await import(`../../../../lib/content/scales/relational/en/${slug}.md`);
      console.log('✅ English version loaded successfully');
      return {
        content: post.default,
        metadata: post.metadata,
        slug,
        fallbackToEnglish: false
      };
    } catch (e) {
      console.log('❌ English version failed:', e);
      throw error(404, `Essay not found: ${slug}`);
    }
  }
}

export const prerender = true;
