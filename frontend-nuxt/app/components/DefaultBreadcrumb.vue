<template>
  <div class="breadcrumb">
    <div class="crumb" v-if="parent">
      <NuxtLink :to="{ name: 'index' }">
        <div class="home">HOME</div>
      </NuxtLink>
      <div class="chevron"><img :src="chevronRight" /></div>
      <NuxtLink v-if="parentLink" :to="{ name: parentLink }">
        <div class="active">{{ props.parent }}</div>
      </NuxtLink>
    </div>
    <div class="title">{{ props.title }}</div>
  </div>
</template>

<script setup lang="ts">
import chevronRight from '~/assets/chevron-right.svg'

const props = defineProps<{
  parent?: string
  parentLink?: string
  title: string
}>()
</script>

<style lang="css" scoped>
.breadcrumb {
  height: 80px;
  background-color: var(--dark);
  color: var(--light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px var(--default-padding);

  & .home {
    font-weight: 400;
  }

  & .home:hover {
    text-decoration: underline;
  }

  & .active {
    font-weight: 500;
  }

  & .active:hover {
    text-decoration: underline;
  }

  & .crumb {
    font-family: var(--font-ibm);
    font-size: var(--heading-6);
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      height: 16px;
    }

    & .chevron {
      margin-top: 0.2em;
    }
  }

  & .title {
    font-weight: var(--font-bold);
    font-size: var(--heading-4);
  }
}

@media only screen and (min-width: 768px) {
  .breadcrumb {
    height: 200px;
    padding: 8px var(--default-padding);
  }
}
</style>
