<template>
  <div class="delivering-quality-wrapper">
    <div class="delivering-quality">
      <div class="content">
        <div class="image">
          <img :src="deliveringQuality1" />
        </div>
        <div class="description">
          <p class="title">Delivering Quality, Shaping Tomorrow’s Infrastructure</p>
          <p class="body">
            At Apex Civil, we believe that quality isn’t just a goal—it’s our standard. Our
            experienced team delivers precise, reliable, and innovative civil construction
            solutions, ensuring each project contributes to New Zealand’s infrastructure with
            integrity and excellence. <br />
            <br />
            We bring attention to detail and a practical approach to every job—big or small. From
            shaping land for future communities to delivering critical infrastructure, our focus is
            always on creating results that stand the test of time. We understand the unique demands
            of civil construction in New Zealand, and we’re proud to deliver work that’s built to
            spec and built to last.
          </p>
        </div>
      </div>
      <div class="content">
        <div class="description">
          <p class="title">True Experts. Proven Results.</p>
          <p class="body">
            With years of experience across diverse projects, our team brings a wealth of knowledge
            and skill to every job, no matter the size or complexity. We’ve honed our craft through
            real-world challenges, consistently delivering innovative, cost-effective solutions that
            meet the high standards of New Zealand’s civil construction industry. <br />
            <br />
            From land development to large-scale infrastructure, our reputation is built on trust,
            precision, and a commitment to exceeding expectations. When you work with Apex, you’re
            partnering with a team that’s seen it all, tackled it all, and delivered it all—with
            expertise at every step.
          </p>
        </div>
        <div class="image">
          <img :src="deliveringQuality2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import deliveringQuality1 from '@/assets/delivering-quality-1-1200w.jpg'
import deliveringQuality2 from '@/assets/delivering-quality-2-1200w.jpg'
</script>

<style scoped>
.delivering-quality-wrapper {
  background-color: var(--light);
}

.delivering-quality {
  padding-top: 88px;
  padding-bottom: 88px;

  padding-left: var(--default-padding);
  padding-right: var(--default-padding);

  background-color: var(--light);
  display: flex;
  flex-direction: column;
  gap: 64px;

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    &:last-child {
      flex-direction: column-reverse;
    }

    & .image {
      display: flex;
      align-items: center;

      & img {
        object-fit: cover;
        border-radius: var(--border-radius);
        width: 100%;
        height: auto;
      }
    }

    & .description {
      justify-content: center;
      display: flex;
      flex-direction: column;
      gap: 18px;
      max-width: 500px;

      & p.title {
        font-size: var(--heading-4);
        font-weight: var(--font-bold);
      }
      & p.body {
        font-size: var(--heading-6);
        font-family: var(--font-ibm);
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .delivering-quality {
    padding-top: 220px;
    padding-bottom: 220px;

    gap: 88px;

    & .content {
      flex-direction: row;

      & .image {
        flex: 1;
        & img {
          min-height: 400px;
          max-height: min(500px, 28vw);
        }
      }

      & .description {
        flex: 1;
        max-width: none;
      }

      &:last-child {
        flex-direction: row;
      }
    }
  }
}

@media only screen and (min-width: 1920px) {
  .delivering-quality {
    .content {
      gap: 5vw;
    }
  }
}
</style>
