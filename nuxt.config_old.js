export default {
  debug: false,
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  // titleTemplate: '%s | Master Leather BD',
  server: {
    port: 5000
  },
  head: {
    title: 'Master Leather BD',
    titleTemplate: '%s | Master Leather BD',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'google-site-verification', content: 'YL7QL5jrsqT_8Fm1EO98aeJx98AlgUg_l7gjgPMltsw'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap'
      },
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'},
      // { rel: 'stylesheet', href: 'https://ecom-admin.asoftwareltd.com/public/nuxt/assets/css/all.min.css' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '@/assets/css/bootstrap.min.css',
    '@/assets/css/style.css',
    '@/assets/css/responsive.css',
    '@/assets/icon/css/icon.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/eventBus',
    '~/plugins/mixin',
    '~/plugins/disableLogs',
    '~/plugins/lazysizes.client',
    {src: '~/plugins/product-image-zoom.js', mode: 'client'},
    {src: '~/plugins/drift.js', mode: 'client'},
    // { src: '~/plugins/circlr.min.js', mode: 'client' },
    {src: '~/plugins/view360.js', mode: 'client'},
    '~/plugins/axios',
    {src: '~/plugins/html2pdf', mode: 'client'},
    //{ src: '~/plugins/live_chat.js', mode: 'client' },
    // { src: '~/plugins/google_tag.js', mode: 'client' }
    {src: '~/helpers/common.js', ssr: false}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    //'@nuxtjs/google-analytics',
    '@nuxt/components',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // '@nuxt/image',

    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/content
    // '@nuxt/content',

    'nuxt-ssr-cache',

    ['@nuxtjs/component-cache', {maxAge: 1000 * 84600 * 60}],
    '@nuxtjs/proxy',
    '@nuxtjs/gtm',
    ''
  ],
  gtm: {
    scriptDefer: true,
    // enabled: process.env.APP_ENV === 'production' ? true : false,
    enabled: true,
    // id: 'GTM-TNSXJ44',
    id: 'GTM-TJ55V2F',
    pageTracking: false,
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },


  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/',
      //   '/page2',

      //   // you can also pass a regular expression to test a path
      //   /^\/page3\/\d+$/,

      //   // to cache only root route, use a regular expression
      //   /^\/$/
    ],

    // key(route, context) {
    //   // custom function to return cache key, when used previous
    //   // properties (useHostPrefix, pages) are ignored. return
    //   // falsy value to bypass the cache
    // },

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 84600,
    },
  },
  // image: {

  //     providers: {
  //         selfCDN: '~/providers/selfCDN'
  //       },
  //       lazy: false
  //   },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    //baseURL: 'https://admin.masterleatherbd.com/',
    baseURL: 'http://127.0.0.1:8000',
    credentials: true,
    proxy: process.env.NODE_ENV === 'production',
  },

  proxy: {
    //"/api/": "https://admin.masterleatherbd.com/"
    "/api/": "http://127.0.0.1:8000"
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    extend(config, {isDev, isClient}) {

      config: {
        node: {
          fs: 'empty'
        }
      }

      // ....
    },

    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }

  },

  // loading: '~/components/common/loading.vue',

  auth: {
    strategies: {
      local: {
        // scheme: 'refresh',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 72000
        },
        // refreshToken: {
        //     property: 'refresh_token',
        //     data: 'refresh_token',
        //     maxAge: 60
        // },

        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: {url: '/api/auth/login', method: 'post'},
          logout: {url: '/api/auth/logout', method: 'post'},
          user: {url: '/api/auth/user', method: 'get'}
        }
      },


      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
        },
        clientId: '466616710853490',
        scope: ['public_profile', 'email']
      },

      google: {
        clientId: '141120010085-cq7ojb55brbp9639v6sa6k6omksh3a16.apps.googleusercontent.com'
      },

    },

    redirect: {
      login: '/user/login',
      logout: '/',
      callback: '/user/login',
      home: '/'
    },

    localStorage: {
      prefix: 'auth.'
    }


  },

  router: {
    middleware: ['auth']
  },

  googleAnalytics: {
    //id: 'UA-88955483-1'
  }

}

