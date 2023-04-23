import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addComponentsDir, addServerHandler, addImportsDir } from '@nuxt/kit'
import defu from 'defu'

type Provider = 'buttondown' | 'mailchimp' | 'revue' | string;
type McMemberStatus = 'pending' | 'subscribed' | 'unsubscribed' | 'cleaned' | 'transactional' | string;

export type ModuleOptions = {
  [key in Provider]: {
    apiKey: string;
    component?: boolean;
    serverPrefix?: string; // Mailchimp only
    audienceId?: string; // Mailchimp only
    memberStatus?: McMemberStatus; // Mailchimp only
  };
};

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    newsletter: ModuleOptions;
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-newsletter',
    configKey: 'newsletter',
    compatibility: {
      nuxt: '3',
    },
  },
  setup(options, nuxt) {
    if (Object.keys(options).length > 1) {
      throw new Error('`[nuxt-newsletter]` More than one newsletter provider registered. Please choose only one')
    }

    const provider = Object.keys(options)[0];

    if (!options[provider]?.apiKey) {
      throw new Error('`[nuxt-newsletter]` Missing `apiKey` value in module configuration')
    }

    if (options.mailchimp && !options.mailchimp.audienceId) {
      throw new Error('`[nuxt-newsletter]` Missing `mailchimp.audienceId` value in module configuration')
    }

    if (options.mailchimp && !options.mailchimp.serverPrefix) {
      throw new Error('`[nuxt-newsletter]` Missing `mailchimp.server` value in module configuration')
    }

    // Setting 'subscribed' for new member subscribing with Mailchimp
    if (options.mailchimp && !options.mailchimp.memberStatus) {
      options.mailchimp.memberStatus = 'subscribed'
    }

    nuxt.options.runtimeConfig.newsletter = defu(nuxt.options.runtimeConfig.newsletter, {
      ...options
    })

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    addImportsDir(resolve(runtimeDir, 'composables'))

    if (options[Object.keys(options)[0]].component) {
      addComponentsDir({
        path: resolve(runtimeDir, 'components'),
        pathPrefix: false,
        prefix: '',
        level: 999,
        global: true
      })
    }

    addServerHandler({
      route: '/api/newsletter/subscribe',
      handler: resolve(runtimeDir, `server/api/${provider}`),
    })
  }
})
