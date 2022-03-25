const { NODE_ENV = 'production' } = process.env
const isDev = NODE_ENV === 'development'
import shrinkRay from 'shrink-ray-current'
import en from 'vuetify/lib/locale/en'
import ar from 'vuetify/lib/locale/ar'
import he from 'vuetify/lib/locale/he'
import ru from 'vuetify/lib/locale/ru'
const webSiteDomain = 'http://MeirCohen.surge.sh'
export default {
  ssr: false,
  target: 'static',
  // modern: true,
  server: {
    port: 6060, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  head: {
    titleTemplate: '%s | MeirCohen',
    title: 'MeirCohen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;500;700&display=swap' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap' }
    ],
    script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js' }]
  },
  css: ['~/style/main.scss'],
  plugins: [
    { src: '~/mixin/index' },
    { src: '~/plugins/notify', ssr: false },
    { src: '~/plugins/axios' },
    { src: '~plugins/Photoswipe', mode: 'client' }
  ],
  components: ['@/components', '@/components/utils', '@/components/custome', '@/components/layout'],
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/tailwindcss' /*, 'nuxt-purgecss'*/, 'nuxt-delay-hydration', '@nuxt/image'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/i18n', /* '@nuxtjs/robots', '@nuxtjs/sitemap',*/ '@nuxtjs/auth-next'],
  /*robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${webSiteDomain}/sitemap.xml`
  },
  sitemap: {
    hostname: webSiteDomain,
    gzip: true,
    cach: true
  },*/
  delayHydration: {
    mode: 'init'
  },
  router: {
    middleware: ['local-guard']
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: false
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: '/my-account'
    }
  },
  i18n: {
    baseUrl: webSiteDomain,
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.js',
        iso: 'en-US'
      },
      {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.js',
        iso: 'ar-AR'
      },
      {
        code: 'he',
        name: 'Hebrew',
        file: 'he.js',
        iso: 'he-IL',
        isCatchallLocale: true
      },
      {
        code: 'ru',
        name: 'Russian',
        file: 'ru.js',
        iso: 'ru-RU'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'he',
    vueI18n: {
      fallbackLocale: 'he',
      silentTranslationWarn: true
    },
    loadLanguagesAsync: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'redirected',
      alwaysRedirect: true,
      fallbackLocale: 'he'
    },
    vueI18nLoader: true
  },
  axios: {
    baseURL: 'http://147.234.90.41/api/v1/'
  },
  pwa: {
    manifest: {
      lang: 'he'
    }
  },
  tailwindcss: {
    cssPath: '~/style/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  },
  router: {
    prefetchLinks: false
  },
  vuetify: {
    defaultAssets: false,
    lang: {
      locales: { ar, en, he, ru },
      current: 'en'
    },
    icons: {
      iconfont: 'mdiSvg'
    },
    customVariables: ['~/style/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true
      },
      dark: false,
      themes: {
        light: {
          primary: '#090909'
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
        }
      }
    }
  },
  // purgeCSS: {
  //   mode: 'webpack',
  //   whitelist: ['container', 'row', 'spacer', 'aos-animate', 'col', '[type=button]', 'v-application p', 'disclaimer'],
  //   whitelistPatterns: [/^notification-.*/, /^vue-.*/, /^v-.*/, /^col-.*/, /^theme-.*/, /^rounded-.*/, /^data-aos-.*/, /^(red|grey)--text$/, /^text--darken-[1-4]$/, /^text--lighten-[1-4]$/],
  //   whitelistPatternsChildren: [/^post-content/, /^v-input/, /^swiper-.*/, /^pswp.*/, /^v-text-field.*/, /^v-progress-linear/]
  // },
  build: {
    extractCSS: {
      ignoreOrder: true
    },
    postcss: {
      // disable postcss plugins in development
      plugins: isDev
        ? {}
        : {
            '@fullhuman/postcss-purgecss': {
              content: [
                'components/**/*.vue',
                'layouts/**/*.vue',
                'pages/**/*.vue',
                'plugins/**/*.js',
                'node_modules/vuetify/src/**/*.ts'
              ],
              styleExtensions: ['.css'],
              safelist: {
                standard: ['body', 'html', 'nuxt-progress', /col-*/, /scroll-*/],
                deep: [/page-enter/, /page-leave/, /dialog-transition/, /tab-transition/, /tab-reversetransition/]
              }
            },
            'css-byebye': {
              rulesToRemove: [/.*\.theme--dark.*/, /.*\.elevation*/, /^elevation*/]
            }
          }
    }
  }
  // render: {
  //   compressor: shrinkRay()
  // }
}
