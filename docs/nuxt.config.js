import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  extends: ['./node_modules/@docus/docs-theme'],

  modules: ['@docus/github'],

  github: {
    owner: 'baroshem',
    repo: 'nuxt-newsletter',
    branch: 'main'
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#FF5F00',
              50: '#FFFFFF',
              100: '#ffedd5',
              200: '#fed7aa',
              300: '#fdba74',
              400: '#fb923c',
              500: '#FF5F00',
              600: '#ea580c',
              700: '#c2410c',
              800: '#9a3412',
              900: '#7c2d12'
            }
          }
        }
      }
    }
  }
})
