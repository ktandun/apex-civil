<template>
  <div class="hear-from-our-clients">
    <p class="section-title">Hear from our clients</p>
    <div class="clients">
      <transition name="fade" mode="out-in">
        <div class="client" :key="currentTestimonies.name">
          <p class="testimony">
            {{ currentTestimonies.text }}
          </p>
          <div>
            <p class="name">{{ currentTestimonies.name }}</p>
            <p class="title">{{ currentTestimonies.position }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const testimonies = [
  {
    name: 'Ben',
    position: 'Director - Blueline Consulting',
    text: 'We have worked with Apex Civil for the past three years on a number of Design Build projects, involving civil and marine structures, street-scraping, recreational spaces, and land developments. In my dealings with Apex, they have always displayed a high level of integrity, reliability, and competence. In particular, Apex Civil’s overall knowledge in constructibility presenting practical solutions during the design phase has been key in achieving collaborated outcomes. Overall, I would have no apprehension working with Apex Civil again should the opportunity arise.',
  },
  {
    name: 'David Duggan',
    position: 'Property Developer',
    text: 'The team at Apex have looked after my land development projects over the last couple of years and we have built a great relationship together. They have innovative ideas and produce cost-effective solutions during both the design and build stages. Would certainly recommend working with them in the future!',
  },
  {
    name: 'Jason Nolan',
    position: 'Director - Nolan Drainage',
    text: 'We have worked with Apex on several civil construction projects over the past few years. Time and time again they have helped with planning and executing a wide range of projects both on time and to a high level of quality. The professionalism and experience shown by their team is second to none which really helps us deliver for our clients. I would highly recommend Apex to anyone in the civil industry with any project they are working on.',
  },
]

const toShow = ref(0)
let interval = ref(0)

const currentTestimonies = computed(() => {
  return testimonies[toShow.value % testimonies.length]!
})

onMounted(() => {
  interval.value = setInterval(() => {
    toShow.value = toShow.value + 1
  }, 7000)
})

onUnmounted(() => {
  clearInterval(interval.value)
})
</script>

<style scoped>
.hear-from-our-clients {
  background-color: var(--dark);
  min-height: 510px;
  color: var(--light);
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 32px var(--default-padding);

  & .clients {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 64px;
    font-size: var(--heading-6);

    & .client {
      display: flex;
      flex-direction: column;
      gap: 36px;
      flex: 1;

      &.hide {
        display: none;
      }

      & p.name {
        font-weight: var(--font-bold);
      }
    }
  }

  & .section-title {
    font-size: var(--heading-4);
    font-weight: var(--font-bold);
  }
}

@media only screen and (min-width: 768px) {
  .hear-from-our-clients {
    padding: 120px var(--default-padding);
    min-height: 350px;
    & .clients {
      flex-direction: row;
      padding: 12px;
      gap: 180px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
