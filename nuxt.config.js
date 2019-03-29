import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js' //追加した
  ],

  vendor: [
    'vue-i18n'
  ],
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/about', '/en', '/en/about']
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
  ],
  workbox: {
     dev: true, //開発環境でもPWAできるようにする
  },
  manifest: {
    name: 'PWATest',
    short_name: 'PWA',
    title: 'PWATest',
    'og:title': 'PWATest',
    description: 'PWATest',
    'og:description': 'PWATest',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
