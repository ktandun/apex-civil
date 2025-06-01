<template>
  <div v-if="keyProject" class="key-project-details">
    <DefaultBreadcrumb parent="KEY PROJECTS" :title="keyProject.title"></DefaultBreadcrumb>

    <div class="header-img">
      <img :src="keyProject.image" />
    </div>

    <div class="content">
      <!-- location client services -->
      <div class="points">
        <div>
          <div class="point-header">LOCATION</div>
          <div class="point-details">{{ keyProject.location }}, New Zealand</div>
        </div>

        <div>
          <div class="point-header">CLIENT</div>
          <div class="point-details">{{ keyProject.client }}</div>
        </div>

        <div>
          <div class="point-header">SERVICES</div>
          <div class="point-details">{{ keyProject.service }}</div>
        </div>
      </div>

      <!-- more details -->
      <div class="more-details">
        <div>{{ keyProject.more_details }}</div>
      </div>

      <!-- image -->
      <div class="project-image">
        <img :src="keyProject.image" />
      </div>

      <!-- you might also like -->
      <div class="you-might-also-like">
        <p>You might also like...</p>
      </div>

      <div class="cards">
        <DefaultCard
          v-for="otherProject in otherProjects"
          :key="otherProject.html"
          v-bind="otherProject"
          :link="{ name: 'key-project-details', params: { name: otherProject.html } }"
        >
        </DefaultCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import DefaultBreadcrumb from './DefaultBreadcrumb.vue'
import { type KeyProject, keyProjects } from './keyProjects'
import DefaultCard from './DefaultCard.vue'

const props = defineProps<{
  name: string
}>()

let keyProject = ref<KeyProject | undefined>()
let otherProjects = ref<KeyProject[] | undefined>()

const setup = () => {
  keyProject.value = keyProjects.find((project) => project.html == props.name)
  otherProjects.value = keyProjects.filter((project) => project.html != props.name)
}

onMounted(() => {
  setup()
})

watch(
  () => props.name,
  (newName, oldName) => {
    if (newName !== oldName) {
      setup()
    }
  },
)
</script>

<style lang="css" scoped>
.key-project-details {
  background-color: var(--light);

  & .header-img {
    width: 100%;
    height: auto;
    padding-bottom: 48px;

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }

  & .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: var(--default-padding);
    padding-right: var(--default-padding);

    & .points {
      display: flex;
      flex-direction: column;
      gap: 32px;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding-top: 48px;
      padding-bottom: 48px;
      border-top: 2px solid #c8c8c8;
      border-bottom: 2px solid #c8c8c8;

      & .point-header {
        font-weight: var(--font-semibold);
        font-size: var(--heading-6);
        color: var(--orange);
      }

      & .point-details {
        font-weight: var(--font-bold);
        font-size: var(--heading-5);
        color: var(--dark);
      }
    }

    & .more-details {
      padding-top: 80px;
      padding-bottom: 48px;
    }

    & .project-image {
      width: 100%;
      padding-bottom: 30px;

      & img {
        height: auto;
        width: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
      }
    }

    & .you-might-also-like {
      text-align: center;
      font-size: var(--heading-5);
      font-weight: var(--font-bold);
      padding-top: 60px;
      padding-bottom: 30px;
      border-top: 2px solid #c8c8c8;
    }

    & .cards {
      padding-bottom: 48px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .key-project-details {
    & .header-img {
      img {
        height: 500px;
      }
    }

    & .content {
      & .points {
        flex-direction: row;
        justify-content: space-between;

        & > div {
          flex: 1;
        }
      }

      & .project-image {
        & img {
          max-height: 850px;
          object-fit: cover;
          border-radius: var(--border-radius);
        }
      }
    }
  }
}
</style>
