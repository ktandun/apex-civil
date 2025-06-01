<template>
    <DefaultNavbar></DefaultNavbar>
    <KeyProjectDetails :name="props.name"></KeyProjectDetails>
    <DefaultFooter></DefaultFooter>
</template>

<script setup lang="ts">
import DefaultNavbar from '@/components/DefaultNavbar.vue';
import DefaultFooter from '@/components/DefaultFooter.vue';
import KeyProjectDetails from '@/components/KeyProjectDetails.vue';

const props = defineProps<{ name: string }>();
</script>

<style scoped></style>
