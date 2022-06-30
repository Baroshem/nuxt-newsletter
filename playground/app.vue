<template>
  <div>
    <div>
      <h1>Default NewsletterForm.vue component</h1>
      <newsletter-form/>
    </div>
    <div>
      <h1>Styled NewsletterForm.vue component</h1>
      <newsletter-form :theme="{ container: 'newsletter-form', button: 'newsletter-form__button', header: 'newsletter-form__header', input: 'newsletter-form__input' }" />
    </div>
    <div>
      <h1>Customized NewsletterFrom.vue component</h1>
      <newsletter-form
        @subscribed="log"
        headerText="Cool Newsletter"
        buttonText="Join in!"
        inputPlaceholder="Your email"
      >
        <template #top>
          <img src="https://github.com/nuxt/framework/raw/main/.github/logo.svg" width="200">
        </template>
        <template #description>
          <p>My Awesome newsletter description</p>
        </template>
        <template #bottom>
          <div>
            <input type="checkbox" id="check">
            <label for="check">Check</label>
          </div>
        </template>
      </newsletter-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const log = (e) => {
  console.log(e)
}
</script>

<style>
.newsletter-form {
  font-family: sans-serif;
  background-color: #003543;
  border-radius: 4px;
  padding: 9px;
  width: fit-content;
}

.newsletter-form__button {
  background-color: #00DC82;
  color: #003543;
  border-radius: 4px;
  border: none;
  padding: 8px;
  margin: 8px;
}

.newsletter-form__header {
  color: white;
  margin: 8px;
}

.newsletter-form__input {
  border-radius: 4px;
  color: #92adad;
  padding: 8px;
  background-color: #003543;
  margin: 8px;
  border: 2px solid #00DC82;
}
</style>
