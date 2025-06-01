<template>
  <div v-if="ourService">
    <DefaultBreadcrumb parent="OUR SERVICES" :title="ourService.title"></DefaultBreadcrumb>
    <div class="our-services-subsection">
      <div class="left-right reversed-tablet">
        <div class="right image">
          <img :src="ourService.image" />
        </div>
        <div class="left main-text">
          <div class="wrapper">
            <p class="title">Bring your vision to life</p>
            <p class="description">
              We provide full-service land development solutions designed to deliver value at every
              stage. Whether it's a small two-lot subdivision or a large-scale residential or
              commercial project, our team is equipped to manage the entire process from start to
              finish.
              <br />
              We work closely with clients, consultants, and local authorities to streamline the
              path from concept to completion—ensuring each development runs smoothly, meets
              regulatory requirements, and achieves the best possible outcome, both financially and
              functionally.
            </p>
          </div>
        </div>
      </div>
      <div class="section">
        <p class="subtitle">Our {{ ourService.title }} Services</p>
        <div class="points">
          <div class="point" v-for="point in ourService?.points">
            <div class="title">
              <img :src="point.image" />
              <p>{{ point.title }}</p>
            </div>
            <div class="content" v-if="point.description">
              {{ point.description }}
            </div>
            <div class="content" v-if="point.subPoints">
              <ul>
                <li v-for="subPoint in point.subPoints" :key="subPoint">
                  {{ subPoint }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="section other-services">
        <p class="title">Other Services</p>
        <div class="services">
          <div class="image-container" v-for="otherService in otherOurServices">
            <img :src="otherService.image" />
            <div class="dark-overlay"></div>
            <div class="overlay-content">
              <p>{{ otherService.title }}</p>
              <div>
                <router-link
                  :to="{ name: 'our-service-details', params: { name: otherService.html } }"
                  v-slot="{ href, route, navigate }"
                >
                  <button :href="href" @click="navigate" class="primary">View</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import ArrowLink from './ArrowLink.vue'
import DefaultBreadcrumb from './DefaultBreadcrumb.vue'
import { ourServices, type OurService } from './ourServices'

const props = defineProps<{
  name: string
}>()

let ourService = ref<OurService | undefined>()
let otherOurServices = ref<OurService[] | undefined>()

const setup = () => {
  ourService.value = ourServices.find((service) => service.html == props.name)
  otherOurServices.value = ourServices.filter((service) => service.html != props.name)
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

<style scoped>
.our-services-subsection {
  background-color: var(--light);

  & .section {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: var(--default-padding);
    padding-right: var(--default-padding);
  }

  & .image {
    & img {
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
  }

  & .left-right {
    background-color: #fafafa;
  }

  & .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
    justify-content: center;

    & p.title {
      font-weight: var(--font-bold);
      font-size: var(--heading-4);
    }

    & p.description {
      font-size: 16px;
    }
  }

  & p.subtitle {
    font-weight: var(--font-bold);
    font-size: var(--heading-4);
    margin-bottom: 64px;
  }

  & .points {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 48px;

    & .subtitle {
      font-weight: var(--font-bold);
      font-size: var(--heading-4);
    }

    & .point {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 0 0 100%;

      & .title {
        font-size: 20px;
        font-weight: var(--font-bold);

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        & img {
          max-height: 20px;
        }
      }
    }
  }

  & .other-services {
    display: flex;
    background-color: #fafafa;
    flex-direction: column;
    gap: 32px;

    & .title {
      font-weight: var(--font-bold);
      font-size: var(--heading-4);
    }

    & button.primary {
      min-width: 200px;
    }

    & .services {
      display: flex;
      flex-direction: column;
      gap: 16px;

      & .image-container {
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;

        & img {
          width: 100%;
          border-radius: var(--border-radius);
          height: 100%;
          object-fit: cover;
          display: block;
        }

        & .overlay-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
          width: 100%;

          & p {
            font-weight: var(--font-bold);
            font-size: 20px;
          }
        }
      }

      & .dark-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.45);
        z-index: 1;
        border-radius: var(--border-radius);
      }

      & .overlay-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--light);
        text-align: center;
        z-index: 2;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .our-services-subsection {
    & .section {
      padding-top: 100px;
      padding-bottom: 100px;
    }

    & .points {
      flex-direction: row;
      gap: 160px 16px;

      & .point {
        flex: 0 0 calc(50% - 8px);
      }
    }

    & p.subtitle {
      text-align: center;
      margin-bottom: 88px;
    }

    & .image {
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      height: 480px;
    }

    & .other-services {
      gap: 88px;
      & .services {
        flex-direction: row;
        justify-content: space-between;

        & .image-container {
          max-width: 50vw;
        }
      }
    }
  }
}

@media only screen and (min-width: 992px) {
  .our-services-subsection {
    & p.subtitle {
      margin-bottom: 136px;
    }

    & .image {
      height: 590px;
    }

    & .other-services {
      gap: 136px;
    }
  }
}

@media only screen and (min-width: 1440px) {
  .our-services-subsection {
    & .section {
      padding-top: 220px;
      padding-bottom: 220px;
    }

    & .main-text {
      & .wrapper {
        max-width: 670px;
      }
    }

    & .image {
      height: 785px;
    }
  }
}
</style>
