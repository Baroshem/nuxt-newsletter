[![nuxt-newsletter](https://nuxt-newsletter.netlify.app/preview.png)](https://nuxt-newsletter.netlify.app)

# nuxt-newsletter

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![License][license-src]][license-href]

> Newsletter module for [Nuxt 3](https://v3.nuxtjs.org)

- [✨ &nbsp;Release Notes](https://github.com/baroshem/nuxt-newsletter/releases)
- [📖 &nbsp;Read the documentation](https://nuxt-newsletter.netlify.app)

## Features

- Nuxt 3 ready
- Easy integration with Mailchimp, Revue, Buttondown
- Useful (optional) NewletterForm.vue component
- Handy `useNewsletterSubscribe` composable
- TypeScript support

[📖 &nbsp;Read the documentation](https://nuxt-newsletter.netlify.app)

## Setup

```sh
yarn add nuxt-newsletter # yarn
npm i nuxt-newsletter # npm
```

## Basic usage

Firstly, you need to add `nuxt-newsletter` to your Nuxt config.

```javascript
// nuxt.config.js

{
    modules: [
        "nuxt-newsletter",
    ],
    newsletter: {
      // mailchimp | revue | buttondown
      <YOUR_NEWSLETTER_PROVIDER>: {
        // options like apiKey
      }
    }
}
```

Then you can start using `nuxt-newsletter` in your app!

```vue
<template>
  <div>
    <newsletter-form />
  </div>
</template>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-newsletter/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-newsletter
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-newsletter.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-newsletter
[github-actions-ci-src]: https://github.com/baroshem/nuxt-newsletter/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/baroshem/nuxt-newsletter/actions?query=workflow%3Aci
[license-src]: https://img.shields.io/npm/l/nuxt-newsletter.svg
[license-href]: https://npmjs.com/package/nuxt-newsletter
