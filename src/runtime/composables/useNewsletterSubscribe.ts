import { useFetch } from '#app'

export async function useNewsletterSubscribe(email: string) {
  const result = await useFetch(() => '/api/newsletter/subscribe', {
    body: { email },
    method: 'POST'
  })

  return result
}
