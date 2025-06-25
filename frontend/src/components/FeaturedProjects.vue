<template>
  <!-- featured projects -->
  <div class="featured-projects">
    <div class="image">
      <img :src="featuredProjects" />
    </div>
    <div class="text">
      <div>
        <p class="big-title">Featured Projects</p>
        <p class="description">ACACIA BAY</p>
        <div class="bullet-points">
          <ArrowLink
            text="Read more"
            :link="{ name: 'key-project-details', params: { name: 'acacia-bay' } }"
            :dark="true"
          ></ArrowLink>
          <ArrowLink
            text="See all projects"
            :link="{ name: 'key-projects' }"
            :dark="true"
          ></ArrowLink>
        </div>
      </div>
      <div class="arrows">
        <img :src="chevronLeft" />
        <img :src="chevronRight" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import featuredProjects from '@/assets/featured-projects-1.jpeg'
import chevronLeft from '@/assets/chevron-left.svg'
import chevronRight from '@/assets/chevron-right.svg'
import ArrowLink from './ArrowLink.vue'
</script>

<style lang="css" scoped>
/* Featured Projects */
.featured-projects {
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  align-items: top;

  & .image {
    flex: 1;
    & img {
      width: 100%;
      height: 330px;
      object-fit: cover;
    }
  }

  & .text {
    padding: 16px var(--default-padding);
    flex: 1;

    & .big-title {
      color: var(--orange);
      font-weight: var(--font-bold);
      font-size: var(--heading-4);
      font-family: var(--font-ibm);
    }

    & .description {
      font-weight: var(--font-bold);
      font-size: 40px;
      margin-bottom: 32px;
    }

    & .bullet-points {
      display: flex;
      flex-direction: column;
      justify-content: end;
      gap: 8px;
      margin-top: 64px;

      & span {
        font-size: var(--heading-5);
      }
    }

    & .arrows {
      display: flex;
      justify-content: end;
      gap: 8px;
      margin-top: 64px;
    }
  }
}

@media (min-width: 768px) {
  .featured-projects {
    flex-direction: row;
    & .image {
      flex: 2;
      & img {
        height: 100%;
        min-height: 700px;
      }
    }
    & .text {
      padding-top: 48px;
      padding-bottom: 48px;
      padding-left: var(--default-padding);
      padding-right: var(--default-padding);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    & .description {
      margin-bottom: 80px;
    }
  }
}

@media only screen and (min-width: 1920px) {
  .featured-projects {
    & .text {
      padding-left: max(120px, 3vw);
    }
  }
}
</style>
