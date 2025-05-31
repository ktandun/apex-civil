<template>
  <div class="what-we-do">
    <div class="text">
      <p class="big-title">What we do</p>
      <div class="points">
        <p class="subtitle">Civil Construction</p>
        <p class="description">
          We bring an unparalleled expertise to every project. Our construction division is built on
          a foundation of delivering quality work in high-profile.
        </p>
      </div>
      <div class="points">
        <p class="subtitle">Project Management</p>
        <p class="description">
          Our team anticipates challenges before they arise, ensuring projects are delivered on
          time, on budget, and to the highest standard with a hands-on approach, coordinating every
          aspect of your project with precision and transparency.
        </p>
      </div>
      <div class="points">
        <p class="subtitle">Land Development</p>
        <p class="description">
          We specialise in the necessary expertise for all land development requirements.
        </p>
      </div>

      <ArrowLink text="Find out more" :dark="false"></ArrowLink>
    </div>
    <div class="image">
      <img :src="whatWeDo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import whatWeDo from '../assets/what-we-do-1.jpg'
import ArrowLink from './ArrowLink.vue'
</script>

<style scoped>
.what-we-do {
  background-color: var(--dark);
  display: flex;
  flex-direction: row;
  gap: 24px;

  & .image {
    display: none;
    flex: 2;

    & img {
      width: 100%;
      height: 100%;
      min-height: 900px;
      object-fit: cover;
    }
  }

  & .text {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: var(--default-padding);
    padding-right: 16px;

    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 64px;
    justify-content: center;

    & p.big-title {
      color: var(--light);
      font-size: var(--heading-4);
      font-weight: var(--font-bold);
    }

    & div.points {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & p.subtitle {
        color: var(--orange);
        font-weight: var(--font-bold);
        font-size: var(--heading-5);
      }
      & p.description {
        color: var(--light);
        font-size: var(--heading-6);
      }
    }

    & .find-out-more span {
      font-size: var(--heading-5);
      color: var(--light);
    }
  }
}

@media only screen and (min-width: 768px) {
  .what-we-do {
    & .image {
      display: block;
    }

    & .text {
      padding-top: 64px;
      padding-bottom: 64px;
    }
  }
}

@media only screen and (min-width: 1920px) {
  .what-we-do {
    & .text {
      padding-right: max(120px, 3vw);
    }
  }
}
</style>
