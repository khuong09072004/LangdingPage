export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Voodoo - Entertain the World",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Voodoo - Entertain the world with iconic apps and games",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://cdn.tailwindcss.com" },
      { 
        rel: "stylesheet", 
        href: "https://fonts.cdnfonts.com/css/boldenvan"
      },
    ],
    script: [
      { src: "https://cdn.tailwindcss.com" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollSmoother.min.js",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'aos/dist/aos.css',
    '@/assets/css/global.css',
    '@/assets/styles/components.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/aos", mode: "client" },
    { src: "~/plugins/gsap", mode: "client" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  },

  ssr: false,
  target: "static",
  
  // Router configuration for static deployment
  router: {
    base: '/'
  },
};
