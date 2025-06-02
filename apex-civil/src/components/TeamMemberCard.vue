<template>
  <div class="team-card">
    <div class="image">
      <img :src="props.image" />
    </div>
    <div class="title">
      <p class="name">{{ props.name }}</p>
      <p class="position">{{ props.position }}</p>
    </div>
    <div class="description">
      {{ props.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  name: string
  position: string
  description: string
}>()
</script>

<style lang="css" scoped>
.team-card {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 490px;
  max-width: 350px;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  text-align: center;

  & .image {
    background-color: #3a434a;
    border-radius: var(--border-radius);
    height: 50%;

    & img {
      width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center 30%;
      border-radius: var(--border-radius);
    }
  }

  & .title {
    & .name {
      font-weight: var(--font-bold);
      font-size: var(--heading-5);
    }

    & .position {
      font-weight: var(--font-bold);
      font-size: var(--heading-6);
      color: var(--orange);
      font-family: var(--font-ibm);
    }
  }

  & .description {
    font-size: var(--heading-6);
    font-family: var(--font-ibm);
  }
}
</style>
