<template>
  <div v-if="keyProject" class="key-project-details">
    <DefaultBreadcrumb parent="KEY PROJECTS" :title="keyProject.title"></DefaultBreadcrumb>

    <div class="header-img">
      <img :src="keyProject.heroImage" />
    </div>

    <div class="content">
      <!-- location client services -->
      <div class="points">
        <div>
          <div class="point-header">LOCATION</div>
          <div class="point-details">{{ keyProject.location }}</div>
        </div>

        <div>
          <div class="point-header">CLIENT</div>
          <div class="point-details">{{ keyProject.client }}</div>
        </div>

        <div>
          <div class="point-header">SERVICES</div>
          <div class="point-details" v-for="service in keyProject.service" :key="service">
            {{ service }}
          </div>
        </div>
      </div>

      <!-- more details -->
      <div class="more-details" style="white-space: pre-wrap">
        <div>{{ keyProject.more_details }}</div>
      </div>

      <!-- image -->
      <div class="project-image" v-for="img in keyProject.image" :key="img">
        <img :src="img" />
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
    padding-bottom: 64px;

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }

  & .content {
    display: flex;
    flex-direction: column;
    gap: 64px;
    padding-left: var(--default-padding);
    padding-right: var(--default-padding);

    & .points {
      display: flex;
      flex-direction: column;
      gap: 32px;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding-top: 32px;
      padding-bottom: 32px;
      border-top: 2px solid #c8c8c8;
      border-bottom: 2px solid #c8c8c8;

      & .point-header {
        font-weight: var(--font-semibold);
        font-size: var(--heading-6);
        color: var(--orange);
        font-family: var(--font-ibm);
      }

      & .point-details {
        font-weight: var(--font-bold);
        font-size: var(--heading-5);
        color: var(--dark);
      }
    }

    & .more-details {
      font-family: var(--font-ibm);
      font-size: var(--heading-6);
      margin: auto;
      text-align: center;
    }

    & .project-image {
      width: 100%;

      & img {
        height: auto;
        width: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
      }
    }

    & .you-might-also-like {
      text-align: center;
      font-size: var(--heading-4);
      font-weight: var(--font-bold);
      padding-top: 64px;
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
      padding-bottom: 128px;

      img {
        height: 546px;
      }
    }

    & .content {
      gap: 128px;

      & .points {
        flex-direction: row;
        justify-content: space-between;

        & > div {
          flex: 1;
        }
      }

      & .more-details {
        max-width: 80%;
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
