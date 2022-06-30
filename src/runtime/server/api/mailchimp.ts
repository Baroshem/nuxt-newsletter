import { useBody } from 'h3'
import { useRuntimeConfig } from '#imports'

export default async (req, res) => {
  const { email } = await useBody(req)

  if (!email) {
    console.error('`[@nuxtjs/newsletter]` Missing `email` in the subscribe body')
    return;
  }

  const newsletterConfig = useRuntimeConfig().newsletter
  const providerName = Object.keys(newsletterConfig)[0];

  try {
    const mailchimp = await import('@mailchimp/mailchimp_marketing').then(r => r.default || r)

    mailchimp.setConfig({
      apiKey: newsletterConfig[providerName].apiKey,
      server: newsletterConfig[providerName].serverPrefix
    });

    let result

    try {
      const response = await mailchimp.lists.addListMember(newsletterConfig[providerName].audienceId, {
        email_address: email,
        status: 'subscribed'
      });

      result = { message: `Email ${response.email_address} subscribed to Mailchimp`, status: 200 }
    } catch (err) {
      result = { message: err.response.body.title, status: err.status }
    }

    res.statusCode = result.status
    res.end(JSON.stringify(result.message))
  } catch (error) {
    res.statusCode = 500
    res.end('Unexpected error occured', error)
  }
}
