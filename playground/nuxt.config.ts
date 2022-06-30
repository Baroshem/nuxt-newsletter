import { defineNuxtConfig } from 'nuxt'
import NewsletterModule from '..'

export default defineNuxtConfig({
  modules: [
    NewsletterModule
  ],
  newsletter: {
    // buttondown: {
    //   apiKey: process.env.BUTTONDOWN_API_KEY,
    //   component: true
    // },
    revue: {
      apiKey: process.env.REVUE_API_KEY,
      component: true
    },
    // mailchimp: {
    //   apiKey: process.env.MAILCHIMP_API_KEY,
    //   serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX,
    //   audienceId: process.env.MAILCHIMP_AUDIENCE_ID
    //   component: true
    // }
  }
})
