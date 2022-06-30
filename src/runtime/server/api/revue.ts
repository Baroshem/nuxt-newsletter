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

    const message = jsonResponse.error ? jsonResponse : `Email ${jsonResponse.email} subscribed to ReVue`

    res.statusCode = result.status
    res.end(JSON.stringify(message))
  } catch (error) {
    res.statusCode = 500
    res.end('Unexpected error occured', error)
  }
}

const subscribeToNewsletter = async (email: string, options: any) => {
  const result = await fetch(
    `https://www.getrevue.co/api/v2/subscribers`,
    {
      body: JSON.stringify({ email }),
      headers: {
        Authorization: `Token ${options.apiKey}`,
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }
  );

  const jsonResponse = await result.json()

  return { message: jsonResponse.error ? jsonResponse : `Email ${jsonResponse.email} subscribed to ReVue`, status: result.status }
}
