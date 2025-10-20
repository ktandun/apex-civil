<template>
  <div class="our-valued-clients">
    <p>Our valued clients</p>
  </div>
  <div class="logos">
    <div class="logos-slide">
      <img :src="higgins" />
      <img :src="kaingaOra" />
      <img :src="nzta" />
      <img :src="westernBayOfPlenty" />
      <img :src="opotikiDistrictCouncil" />
      <img :src="veolia" />
      <img :src="rotoruaLakesCouncil" />
    </div>

    <div class="logos-slide">
      <img :src="higgins" />
      <img :src="kaingaOra" />
      <img :src="nzta" />
      <img :src="westernBayOfPlenty" />
      <img :src="opotikiDistrictCouncil" />
      <img :src="veolia" />
      <img :src="rotoruaLakesCouncil" />
    </div>
  </div>
</template>

<script setup lang="ts">
import higgins from '~/assets/higgins-logo.svg'
import kaingaOra from '~/assets/kainga-ora-logo.svg'
import nzta from '~/assets/nzta-logo.svg'
import westernBayOfPlenty from '~/assets/western-bay-of-plenty-logo.svg'
import opotikiDistrictCouncil from '~/assets/opotiki-district-council-logo.svg'
import veolia from '~/assets/veolia-logo.png'
import rotoruaLakesCouncil from '~/assets/rotorua-lakes-council-logo.svg'
</script>

<style scoped>
.our-valued-clients {
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  gap: 88px;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 90px;

  & p {
    font-size: var(--heading-4);
    font-weight: var(--font-bold);
  }
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  background-color: var(--light);
  overflow: hidden;
  padding: 60px 0;
  white-space: nowrap;
  position: relative;
  padding-bottom: 180px;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: '';
  z-index: 2;
}

.logos:before {
  left: 0;
  width: 20px;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
  right: 0;
  width: 20px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

.logos-slide {
  display: inline-block;
  animation: 12s slide infinite linear;
}

.logos-slide img {
  height: 50px;
  margin: 0 40px;
}
</style>
