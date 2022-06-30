[![@nuxtjs/newsletter](https://newsletter.nuxtjs.org/preview.png)](https://newsletter.nuxtjs.org)

# @nuxtjs/newsletter

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Newsletter module for [Nuxt](https://v3.nuxtjs.org)

- [✨ &nbsp;Release Notes](https://github.com/nuxt-community/newsletter-module/releases)
- [📖 &nbsp;Read the documentation](https://newsletter.nuxtjs.org)

## Features

- Nuxt 3 ready
- Easy integration with Mailchimp, Revue, Buttondown
- Useful (optional) NewletterForm.vue component
- Handy useNewsletterSubscribe composable
- [Coming soon] More newsletter providers
- TypeScript support

[📖 &nbsp;Read the documentation](https://newsletter.nuxtjs.org)

## Setup

```sh
yarn add @nuxtjs/newsletter # yarn
npm i @nuxtjs/newsletter # npm
```

## Basic usage

Firstly, you need to add `@nuxtjs/newsletter` to your Nuxt config.

```javascript
// nuxt.config.js

{
    modules: [
        "@nuxtjs/newsletter",
    ],
    newsletter: {
      // mailchimp | revue | buttondown
      <YOUR_NEWSLETTER_PROVIDER>: {
        // options like apiKey
      }
    }
}
```

Then you can start using `@nuxtjs/newsletter` in your app!

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

[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/newsletter/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/newsletter
[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/newsletter.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/newsletter
[github-actions-ci-src]: https://github.com/nuxt-modules/newsletter-module/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/newsletter-module/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/newsletter-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/newsletter-module
[license-src]: https://img.shields.io/npm/l/@nuxtjs/newsletter.svg
[license-href]: https://npmjs.com/package/@nuxtjs/newsletter
