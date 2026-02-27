export const defaultLocale = "en";
export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];

export const dictionary = {
  en: {
    nav: {
      journal: "Blog",
      about: "About",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    about: {
      printResume: "Print Resume",
    },
    home: {
      title: "Building and evolving",
      titleHighlight: "systems in production",
      titleSuffix: ".",
      subtitle:
        "I'm a backend developer focused on building and evolving digital products. I work with modular architecture, intentional technical decisions, and systems that need to perform in production.",
      readBlog: "Read the Blog",
      getInTouch: "Get in touch",
      principlesTitle: "How I think about engineering",
      principle1: {
        title: "Engineering is about choices",
        desc: "Every architecture is a set of decisions made under constraints — deadlines, team, business context. The challenge is not applying patterns, but choosing what makes sense at that moment.",
      },
      principle2: {
        title: "Pragmatism over hype",
        desc: "Tools and patterns are means, not an identity. I prefer solutions my team can maintain and evolve with confidence.",
      },
      principle3: {
        title: "Reliability is not optional",
        desc: "Security, observability, and structural clarity are not layers added later. They start during modeling and continue through to deployment.",
      },
    },
    blog: {
      title: "Blog",
      subtitle:
        "Explorations in backend systems, database internals, and software economics.",
      backToArticles: "Back to articles",
      notFoundTitle: "Post Not Found",
      sharePost: "Share this post",
      taggedWith: "Posts tagged with",
      allTags: "All Tags",
      searchPlaceholder: "Search articles...",
      searchResults: "Search Results",
      noResults: "No articles found for",
      wroteBy: "Written by",
      authorBio:
        "Software developer focused on building and evolving systems in production.",
    },
    footer: {
      builtWith: "Built with",
      by: "by",
    },
    notFound: {
      tag: "Error 404",
      title: "Page not found",
      subtitle:
        "Even the most reliable systems have dead ends. The page you're looking for has been moved, deleted, or never existed.",
      goHome: "Return to homepage",
      reportIssue: "Report an issue",
    },
  },
  pt: {
    nav: {
      journal: "Blog",
      about: "Sobre",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    about: {
      printResume: "Imprimir Currículo",
    },
    home: {
      title: "Construindo e evoluindo",
      titleHighlight: "sistemas em produção",
      titleSuffix: ".",
      subtitle:
        "Sou um desenvolvedor backend com foco na construção e evolução de produtos digitais. Trabalho com arquitetura modular, decisões técnicas intencionais e sistemas que precisam funcionar em produção.",
      readBlog: "Ler o Blog",
      getInTouch: "Entrar em contato",
      principlesTitle: "Como eu penso engenharia",
      principle1: {
        title: "Engenharia é escolha",
        desc: "Toda arquitetura é um conjunto de decisões sob restrição — prazo, equipe, contexto de negócio. O desafio não é aplicar padrões, mas escolher o que faz sentido naquele momento.",
      },
      principle2: {
        title: "Pragmatismo acima de moda",
        desc: "Ferramentas e padrões são meios, não identidade. Prefiro soluções que minha equipe consegue manter e evoluir com segurança.",
      },
      principle3: {
        title: "Confiabilidade não é opcional",
        desc: "Segurança, observabilidade e clareza estrutural não são camadas adicionadas depois. Elas começam na modelagem e continuam até o deploy.",
      },
    },
    blog: {
      title: "Blog",
      subtitle:
        "Explorações em sistemas de backend, arquitetura de banco de dados e economia de software.",
      backToArticles: "Voltar para os artigos",
      notFoundTitle: "Post Não Encontrado",
      sharePost: "Compartilhe este artigo",
      taggedWith: "Artigos com a tag",
      allTags: "Todas as Tags",
      searchPlaceholder: "Buscar artigos...",
      searchResults: "Resultados da Busca",
      noResults: "Nenhum artigo encontrado para",
      wroteBy: "Escrito por",
      authorBio:
        "Desenvolvedor de software focado na construção e evolução de sistemas em produção.",
    },
    footer: {
      builtWith: "Construído com",
      by: "por",
    },
    notFound: {
      tag: "Erro 404",
      title: "Página não encontrada",
      subtitle:
        "Até os sistemas mais confiáveis têm becos sem saída. A página que você está procurando foi movida, excluída ou nunca existiu.",
      goHome: "Voltar ao início",
      reportIssue: "Reportar problema",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale] || dictionary[defaultLocale];
}
