<template>
  <div class="learn-more">
    <p>Learn more about our services</p>
    <button class="outline" @click="$router.push({name: 'contact-us'})">Get in touch</button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.learn-more {
  background-color: var(--primary);
  color: var(--light);
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  & p {
    font-size: var(--heading-4);
    font-weight: var(--font-bold);
  }
}

@media (min-width: 768px) {
  .learn-more {
    flex-direction: row;
    height: 600px;
    gap: 40px;
  }
}
</style>
