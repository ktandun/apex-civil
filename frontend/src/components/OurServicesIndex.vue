<template>
  <DefaultBreadcrumb title="Our Services"></DefaultBreadcrumb>
  <!-- civil construction -->
  <div
    class="our-services-section"
    v-for="ourService in ourServices"
    :key="ourService.html"
    :class="{ 'dark flex-reverse': ourService.reversed }"
  >
    <div class="image">
      <img :src="ourService.image" />
    </div>
    <div class="text">
      <div class="wrapper">
        <p class="big-title">{{ ourService.title }}</p>
        <div class="points">
          <p class="description">
            {{ ourService.description }}
          </p>
        </div>
        <ArrowLink
          :link="{ name: 'our-service-details', params: { name: ourService.html } }"
          text="Read more"
          :dark="!ourService.reversed"
        ></ArrowLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowLink from './ArrowLink.vue'
import DefaultBreadcrumb from './DefaultBreadcrumb.vue';
import { ourServices } from './ourServices'
</script>

<style scoped>
.our-services-section {
  background-color: var(--light);
  display: flex;
  flex-direction: column;

  & .image {
    flex: 0 0 50%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 500px;
    }
  }

  & {
    & .wrapper {
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: var(--padding-mobile);
      padding-right: var(--padding-mobile);
    }
  }

  &.flex-reverse {
    & .text {
      & .wrapper {
        padding-left: var(--padding-mobile);
        padding-right: var(--padding-mobile);
      }
    }
  }

  & .text {
    flex: 0 0 50%;

    & .wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 64px;
    }

    & p.big-title {
      font-size: var(--heading-4);
      font-weight: var(--font-bold);
    }

    & div.points {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & p.description {
        font-size: var(--heading-6);
      }
    }

    & .read-more span {
      font-size: var(--heading-5);
    }
  }

  &.dark {
    background-color: var(--dark);

    & .text {
      & p.big-title {
        color: var(--light);
      }

      & div.points {
        & p.description {
          color: var(--light);
        }
      }

      & .read-more span {
        color: var(--light);
      }
    }
  }
}

@media (min-width: 768px) {
  .our-services-section {
    --text-padding: var(--padding-tablet);
    flex-direction: row;

    &.flex-reverse {
      flex-direction: row-reverse;
    }

    & {
      & .wrapper {
        padding-left: var(--padding-tablet);
        padding-right: var(--padding-tablet);
      }
    }

    &.flex-reverse {
      & .text {
        & .wrapper {
          padding-left: var(--padding-tablet);
          padding-right: var(--padding-tablet);
        }
      }
    }
  }
}

@media only screen and (min-width: 1440px) {
  .our-services-section {
    & {
      & .wrapper {
        padding-right: var(--padding-desktop);
      }
    }

    &.flex-reverse {
      & .text {
        & .wrapper {
          padding-left: var(--padding-desktop);
        }
      }
    }
  }
}

@media only screen and (min-width: 1920px) {
  .our-services-section {
    & {
      & .wrapper {
        padding-right: var(--padding-desktop-wide);
      }
    }

    &.flex-reverse {
      & .text {
        & .wrapper {
          padding-left: var(--padding-desktop-wide);
        }
      }
    }
  }
}
</style>
