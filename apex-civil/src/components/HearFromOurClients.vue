<template>
  <div class="hear-from-our-clients">
    <p class="section-title">Hear from our clients</p>
    <div class="clients">
      <div class="client">
        <p class="testimony">
          We have worked with Apex Civil for the past three years on a number of Design Build
          projects, involving civil and marine structures, street-scraping, recreational spaces, and
          land developments. In my dealings with Apex, they have always displayed a high level of
          integrity, reliability, and competence. In particular, Apex Civil’s overall knowledge in
          constructibility presenting practical solutions during the design phase has been key in
          achieving collaborated outcomes. Overall, I would have no apprehension working with Apex
          Civil again should the opportunity arise.
        </p>
        <div>
          <p class="name">Ben</p>
          <p class="title">Director - Blueline Consulting</p>
        </div>
      </div>
      <div class="client">
        <p class="testimony">
          The team at Apex have looked after my land development projects over the last couple of
          years and we have built a great relationship together. They have innovative ideas and
          produce cost-effective solutions during both the design and build stages. Would certainly
          recommend working with them in the future!
        </p>
        <div>
          <p class="name">David Duggan</p>
          <p class="title">Property Developer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hear-from-our-clients {
  background-color: var(--dark);
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
    & .clients {
      flex-direction: row;
      padding: 12px;
      gap: 180px;
    }
  }
}
</style>
