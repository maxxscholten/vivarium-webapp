export default {
  mode: 'universal',
  target: 'server',
  env: {
    wsUrl: process.env.WS_URL || 'ws://localhost:3001',
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  axios: {
    baseURL: process.env.BASE_URL || '/',
  },

  serverMiddleware: ['@/api/proxy.js', '@/api/websocket.js'],
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/vue-visjs.js', ssr: false },
    { src: '@/plugins/vue-apexchart.js', ssr: false },
    { src: '@/plugins/native-websocket', ssr: false },
  ],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  build: {
    transpile: [/^element-ui/],
  },
  generate: {
    fallback: true,
  },
}
