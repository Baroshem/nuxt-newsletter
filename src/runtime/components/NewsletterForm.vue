<template>
  <form @submit.prevent="subscribe" :class="theme.container">
    <slot name="top" />
    <h2 v-if="headerText" :class="theme.header">{{ headerText }}</h2>
    <slot name="description"/>

    <input
      id="email"
      type="email"
      name="mail"
      v-model="email"
      :class="theme.input"
      required
      :aria-label="inputPlaceholder"
      :placeholder="inputPlaceholder"
    >

    <button
      type="submit"
      :class="theme.button"
      aria-label="Subscribe to Newsletter"
      aria-pressed="false"
      :aria-describedby="buttonText"
    >
      {{ buttonText }}
      <slot name="button-icon"/>
    </button>

    <slot name="bottom"/>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNewsletterSubscribe } from '../composables/useNewsletterSubscribe'

const props = defineProps({
  theme: {
    type: Object,
    default: () => ({
      button: '',
      input: '',
      header: '',
      container: ''
    })
  },
  buttonText: {
    type: String,
    default: 'Subscribe'
  },
  headerText: {
    type: String,
    default: 'Newsletter'
  },
  inputPlaceholder: {
    type: String,
    default: 'Email address'
  }
})

const emit = defineEmits(['subscribed'])

const email = ref('')

const subscribe = async () => {
  const result = await useNewsletterSubscribe(email.value)

  emit('subscribed', result)
}
</script>
