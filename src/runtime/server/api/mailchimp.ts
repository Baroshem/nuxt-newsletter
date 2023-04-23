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

    const mailchimp = await import('@mailchimp/mailchimp_marketing').then(r => r.default || r)

    mailchimp.setConfig({
      apiKey: newsletterConfig[providerName].apiKey,
      server: newsletterConfig[providerName].serverPrefix
    });

    let result

    try {
      const response = await mailchimp.lists.addListMember(newsletterConfig[providerName].audienceId, {
        email_address: email,
        status: newsletterConfig[providerName].serverPrefix.memberStatus
      });

      result = { message: `Email ${response.email_address} subscribed to Mailchimp`, status: 200 }
    } catch (err) {
      result = { message: err.response.body.title, status: err.status }
    }

    if (result.status !== 200) throw createError({ statusCode: result.status, statusMessage: result.message })

    return result
})
