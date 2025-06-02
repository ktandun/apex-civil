<template>
  <DefaultNavbar></DefaultNavbar>
  <OurTeamIndex></OurTeamIndex>
  <DefaultFooter></DefaultFooter>
</template>

<script setup lang="ts">
import DefaultFooter from '@/components/DefaultFooter.vue'
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import OurTeamIndex from '@/components/OurTeamIndex.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })

  console.log('test')
})
</script>

<style lang="css" scoped></style>
