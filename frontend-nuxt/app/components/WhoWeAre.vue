<template>
  <div class="who-we-are">
    <div class="image">
      <img :src="whoWeAre" />
    </div>
    <div class="text">
      <p class="big-title">Who we are</p>
      <div class="points">
        <p class="subtitle">We are your dedicated, trusted, and experienced specialists</p>
        <p class="description">
          Our team is committed to delivering excellence with professionalism and integrity at every
          step. We specialise in managing high-quality civil projects across Taupō and surrounding
          areas, ensuring that every client’s vision is brought to life with precision and care.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import whoWeAre from '~/assets/who-we-are.jpg'
</script>

<style scoped>
.who-we-are {
  background-color: var(--dark);
  display: flex;
  flex-direction: column;

  & .image {
    flex: 1;
    & img {
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
  }

  & .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 64px;
    justify-content: center;
    padding: 32px var(--default-padding);

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
    & .meet-the-team span {
      font-size: var(--heading-5);
      color: var(--light);
    }
  }
}

@media (min-width: 768px) {
  .who-we-are {
    gap: 24px;
    flex-direction: row;

    & .image {
      flex: 2;

      & img {
        height: 100%;
        min-height: 900px;
      }
    }
    & .text {
      padding-left: 24px;
      padding-right: var(--default-padding);
    }
  }
}

@media only screen and (min-width: 1920px) {
  .who-we-are {
    & .text {
      padding-left: max(120px, 3vw);
    }
  }
}
</style>
