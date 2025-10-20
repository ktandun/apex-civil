<template>
  <NuxtLink class="arrow-link" :to="props.link">
    <p>
      <img :src="arrow" />
      <span :class="props.dark ? 'text-dark' : 'text-light'">{{ props.text }}</span>
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import arrow from '~/assets/arrow.svg'

const props = defineProps<{
  text: string
  link: any
  dark: boolean
}>()
</script>

<style scoped>
.arrow-link {
  display: flex;
  flex-direction: column;
  gap: 20px;

  & p {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  & span {
    font-size: var(--heading-5);
  }

  & span:hover {
    text-decoration: underline;
    font-size: var(--heading-5);
  }
}
</style>
