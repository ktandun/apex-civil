<template>
  <div class="breadcrumb">
    <div class="crumb" v-if="parent">
      <div>HOME</div>
      <div class="chevron"><img :src="chevronRight" /></div>
      <div style="font-weight: 500">{{ props.parent }}</div>
    </div>
    <div class="title">{{ props.title }}</div>
  </div>
</template>

<script setup lang="ts">
import chevronRight from '@/assets/chevron-right.svg'

const props = defineProps<{
  parent?: string
  title: string
}>()
</script>

<style lang="css" scoped>
</style>
