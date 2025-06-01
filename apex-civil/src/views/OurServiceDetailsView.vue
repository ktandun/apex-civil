<template>
    <DefaultNavbar></DefaultNavbar>
    <OurServiceDetails :name="props.name"></OurServiceDetails>
    <DefaultFooter></DefaultFooter>
</template>

<script setup lang="ts">
import DefaultNavbar from '@/components/DefaultNavbar.vue';
import DefaultFooter from '@/components/DefaultFooter.vue';
import OurServiceDetails from '@/components/OurServiceDetails.vue';

const props = defineProps<{ name: string }>();
</script>

<style scoped></style>
