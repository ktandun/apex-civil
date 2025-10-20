<template>
  <!-- featured projects -->
  <div class="featured-projects">
    <transition name="fade" mode="out-in">
      <div class="image" :key="currentProject.title">
        <img :src="currentProject.thumbnailImage" />
      </div>
    </transition>
    <div class="text">
      <div>
        <p class="big-title">Featured Projects</p>
        <p class="description" :key="currentProject.title">{{ currentProject.title }}</p>
        <div class="bullet-points">
          <ArrowLink
            text="Read more"
            :link="{ name: 'key-projects-name', params: { name: currentProject.html } }"
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
        <img :src="chevronLeft" @click="goPrev" />
        <img :src="chevronRight" @click="goNext" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import chevronLeft from '~/assets/chevron-left.svg'
import chevronRight from '~/assets/chevron-right.svg'

const toShow = ref(0)
let interval = ref(0)

const currentProject = computed(() => {
  return keyProjects[toShow.value % keyProjects.length]!
})

onMounted(() => {
  interval.value = setInterval(() => {
    toShow.value = toShow.value + 1
  }, 4000)

  // preload images
  keyProjects
    .map((kp) => kp.thumbnailImage)
    .forEach((img) => {
      const i = new Image()
      i.src = img
    })
})

onUnmounted(() => {
  clearInterval(interval.value)
})

const goPrev = () => {
  toShow.value = (toShow.value + keyProjects.length - 1) % keyProjects.length
  clearInterval(interval.value)
}

const goNext = () => {
  toShow.value = (toShow.value + 1) % keyProjects.length
  clearInterval(interval.value)
}
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
    min-height: 450px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
    height: 700px;
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
    height: 1000px;
    & .text {
      padding-left: max(120px, 3vw);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
