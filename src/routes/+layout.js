export const prerender = true;

export const load = ({ url }) => {
  // Extract language from URL path (e.g., /sv/about or /about)
  const pathSegments = url.pathname.split('/').filter(Boolean);
  const lang = pathSegments[0] === 'sv' ? 'sv' : 'en';
  
  return {
    lang,
    translations: {
      en: {
        siteName: 'Communize',
        tagline: 'Cultivating the art and architecture of belonging',
        nav: {
          home: 'Home',
          scales: 'Scales',
          toolkit: 'Toolkit',
          library: 'Library',
          knowledge: 'Knowledge',
          about: 'About'
        },
        scales: {
          inner: 'Inner Commons',
          relational: 'Relational Commons',
          societal: 'Societal Commons',
          planetary: 'Planetary Commons'
        },
        hero: {
          title: 'From Isolation to Communion',
          subtitle: 'Exploring the process of communizing—building community and creating the commons',
          cta: 'Begin Exploring'
        },
        footer: {
          license: 'Content shared under CC BY-SA 4.0',
          sisterSites: 'Sister Sites',
          contact: 'Contact'
        }
      },
      sv: {
        siteName: 'Communize',
        tagline: 'Att odla konsten och arkitekturen av tillhörighet',
        nav: {
          home: 'Hem',
          scales: 'Skalor',
          toolkit: 'Verktygslåda',
          library: 'Bibliotek',
          knowledge: 'Kunskap',
          about: 'Om'
        },
        scales: {
          inner: 'Inre Allmänningar',
          relational: 'Relationella Allmänningar',
          societal: 'Samhälleliga Allmänningar',
          planetary: 'Planetära Allmänningar'
        },
        hero: {
          title: 'Från Isolering till Gemenskap',
          subtitle: 'Att utforska processen av att kommunisera—att bygga gemenskap och skapa allmänningar',
          cta: 'Börja Utforska'
        },
        footer: {
          license: 'Innehåll delat under CC BY-SA 4.0',
          sisterSites: 'Systersidor',
          contact: 'Kontakt'
        }
      }
    }
  };
};
