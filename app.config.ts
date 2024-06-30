// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Architecting Intelligence',
    description: 'Learn and create with all things tech-related.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: '',
      github: 'ramonpzg/edu_content',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'edu_content',
      owner: 'ramonpzg',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'Up4 Tech'
    },

    footer: {
      credits: {
        icon: 'ri:arrow-right-double-fill',
        text: 'With ❤️ from the DR 🇩🇴',
        href: 'ramonpzg.github.io'
      },

      fluid: true
    },

    titleTemplate: 'Architecting Intelligence'
  },

  prose: {
    h5: {
      icon: 'ri:arrow-right-wide-line'
    },

    h6: {
      icon: 'ri:arrow-right-wide-line'
    },

    h1: {
      icon: 'ri:arrow-right-s-line'
    },

    h2: {
      icon: 'ri:arrow-right-double-line'
    },

    h3: {
      icon: 'ri:arrow-right-s-fill'
    },

    h4: {
      icon: 'ri:arrow-right-wide-line'
    }
  }
})