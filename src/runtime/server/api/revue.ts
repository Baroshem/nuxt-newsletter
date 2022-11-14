import { defineEventHandler, createError, readBody } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event)

  if (!email) {
    console.error('`[@nuxtjs/newsletter]` Missing `email` in the subscribe body')
    return;
  }

  const newsletterConfig = useRuntimeConfig().newsletter
  const providerName = Object.keys(newsletterConfig)[0];

    const result = await fetch(
      `https://www.getrevue.co/api/v2/subscribers`,
      {
        body: JSON.stringify({ email }),
        headers: {
          Authorization: `Token ${newsletterConfig[providerName].apiKey}`,
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );

    const jsonResponse = await result.json()

    if (result.status !== 200) throw createError({ statusCode: result.status, statusMessage: result.statusText })

    const message = jsonResponse.error ? jsonResponse : { message: `Email ${jsonResponse.email} subscribed to ReVue`, status: 200 }

    return message
})
