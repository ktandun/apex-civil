<template>
  <div class="hero">
    <div class="hero-text-wrapper">
      <div class="hero-text-top">Building the Future Today</div>
      <div class="hero-text-bottom">
        Your experts in civil construction, land development and project management
      </div>
      <div>
        <button class="primary">Contact us</button>
      </div>
    </div>

    <DefaultNavbar></DefaultNavbar>
  </div>
</template>

<script setup lang="ts">
import DefaultNavbar from './DefaultNavbar.vue'
import heroImage from "@/assets/hero.jpg"

// preload hero image
const img = new Image()
img.src = heroImage

</script>

<style lang="css" scoped>
/* Hero */
.hero {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('@/assets/hero.jpg');

  background-position: center;
  background-size: cover;

  background-repeat: no-repeat;
  position: relative;
  height: 100vh;

  & .hero-text-wrapper {
    position: absolute;
    top: 12px;
    left: 16px;
    color: var(--light);
    top: 30%;

    & .hero-text-top {
      font-size: var(--heading-2);
      font-weight: var(--font-bold);
      max-width: 90vw;
      margin-bottom: 40px;
      font-family: var(--font-poppins);
    }

    & .hero-text-bottom {
      font-size: var(--heading-4);
      font-weight: var(--font-semibold);
      margin-bottom: 22px;
      font-family: var(--font-ibm);
    }

    & button {
      display: inline-block;
    }
  }
}

@media (min-width: 768px) {
  .hero {
    & .hero-text-wrapper {
      position: absolute;
      left: 32px;
      max-width: 1296px;
      top: 35%;
      & .hero-text {
        font-size: var(--heading-1);
      }
    }
  }
}

@media (min-width: 1440px) {
  .hero {
    & .hero-text-wrapper {
      left: max(120px, 15vw);
    }
  }
}
</style>
