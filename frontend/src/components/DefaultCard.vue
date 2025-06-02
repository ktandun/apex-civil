<template>
  <div class="card">
    <img class="card-image" :src="image" />
    <div class="card-body">
      <div class="card-content">
        <div class="title">{{ props.title }}</div>
        <div class="details">
          <div class="point">
            <span>Service:</span>
            <span>{{ props.service }}</span>
          </div>
          <div class="point">
            <span>Location:</span>
            <span>{{ props.location }}</span>
          </div>
        </div>
        <div class="description">
          {{ props.description }}
        </div>
      </div>
      <ArrowLink text="Read more" dark :link="link"></ArrowLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowLink from './ArrowLink.vue'

const props = defineProps<{
  image: string
  title: string
  service: string
  location: string
  description: string
  link: any
}>()
</script>

<style lang="css" scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 600px;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  & .card-image {
    width: 100%;
    height: auto;
    max-height: min(50%, 300px);
    display: block;
    object-fit: cover;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    aspect-ratio: 1/1;
  }

  & .card-body {
    padding: 16px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .card-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      font-size: var(--heading-6);
    }

    & .title {
      font-weight: var(--font-bold);
      font-size: var(--heading-5);
    }

    & .details {
      & span:first-child {
        color: var(--orange);
        font-family: var(--font-ibm);
        font-weight: var(--font-bold);
      }

      & .point {
        display: grid;
        grid-template-columns: 2fr 4fr;
      }
    }

    & .description {
        font-size: var(--heading-6);
        font-family: var(--font-ibm);
    }
  }
}

@media only screen and (min-width: 768px) {
  .card {
    height: 635px;

    & .card-body {
      padding: 24px;

      & .card-content {
        gap: 24px;

        & .details {
          & .point {
            grid-template-columns: 1fr 3fr;
          }
        }
      }
    }
  }
}
</style>
