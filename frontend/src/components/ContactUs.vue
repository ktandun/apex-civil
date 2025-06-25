<template>
  <DefaultBreadcrumb title="Contact Us"></DefaultBreadcrumb>
  <div class="contact-us">
    <div class="wrapper">
      <p class="title">Let us take care of your next project!</p>
      <div class="form-input">
        <label>Name</label>
        <input type="text" v-model="name" placeholder="Name" />
        <div v-if="nameError" class="error">Name is required</div>
      </div>
      <div class="form-input">
        <label>Email</label>
        <input type="text" v-model="email" placeholder="Email" />
        <div v-if="emailError" class="error">Email is required</div>
      </div>
      <div class="form-input">
        <label>Message</label>
        <textarea v-model="message" rows="8" placeholder="Message"></textarea>
        <div v-if="messageError" class="error">Message is required</div>
      </div>

      <div>
        <button class="primary" @click="submit">Send Message</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultBreadcrumb from './DefaultBreadcrumb.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const nameError = ref(false)
const emailError = ref(false)
const messageError = ref(false)

const submit = async () => {
  const payload = {
    name: name.value,
    email: email.value,
    message: message.value,
  }

  if (!name.value) {
    nameError.value = true
  }

  if (!email.value) {
    emailError.value = true
  }

  if (!message.value) {
    messageError.value = true
  }

  if (!name || !email || !message) {
    return
  }

  console.log(payload)
}
</script>

<style scoped>
.contact-us {
  background-color: var(--light);
  padding-left: var(--default-padding);
  padding-right: var(--default-padding);
  padding-top: 170px;
  padding-bottom: 170px;

  & .wrapper {
    max-width: 760px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  & .form-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .error {
    color: red;
  }

  & p.title {
    text-align: center;
    font-size: 36px;
    font-weight: var(--font-bold);
  }

  & label {
    font-size: 16px;
    font-family: var(--font-ibm);
    display: block;
  }

  & input {
    padding: 8px;
    border-radius: 4px;
    font-family: var(--font-ibm);
    border: 1px solid var(--grey);
  }

  & textarea {
    padding: 8px;
    border-radius: 4px;
    font-family: var(--font-ibm);
    border: 1px solid var(--grey);
  }

  button {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .contact-us {
    padding-top: 165px;
    padding-bottom: 165px;

    & .wrapper {
      margin: auto;
    }
  }
}

@media only screen and (min-width: 1440px) {
  .contact-us {
    padding-top: 195px;
    padding-bottom: 195px;
  }
}

@media only screen and (min-width: 1920px) {
  .contact-us {
    padding-top: 195px;
    padding-bottom: 195px;
  }
}
</style>
