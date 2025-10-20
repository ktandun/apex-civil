<template>
  <DefaultBreadcrumb title="Key Projects"></DefaultBreadcrumb>
  <div class="key-projects">
    <div class="cards">
      <DefaultCard
        v-for="keyProject in keyProjects"
        :key="keyProject.title"
        v-bind="keyProject"
        :link="{ name: 'key-projects-name', params: { name: keyProject.html } }"
      ></DefaultCard>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: `Apex Civil - Key Projects`,
});
</script>

<style lang="css" scoped>
.key-projects {
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: var(--default-padding);
  padding-right: var(--default-padding);
  background-color: var(--light);
}

@media only screen and (min-width: 768px) {
  .key-projects {
    padding-top: 97px;
    padding-bottom: 97px;
  }
}

@media only screen and (min-width: 1440px) {
  .key-projects {
    padding-top: 129px;
    padding-bottom: 129px;
  }
}
</style>
