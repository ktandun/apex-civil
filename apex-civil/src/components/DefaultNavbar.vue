<template>
  <div class="navbar-wrapper" id="navbar">
    <div class="navbar">
      <router-link :to="{ name: 'home' }">
        <picture>
          <img :src="logo" alt="logo" />
        </picture>
      </router-link>
      <div class="flex nav-links">
        <router-link :to="{ name: 'our-services' }" class="nav-link">Our Services</router-link>
        <router-link :to="{ name: 'key-projects' }" class="nav-link">Key Projects</router-link>
        <router-link :to="{ name: 'our-team' }" class="nav-link">Our Team</router-link>
        <a href="#" class="nav-link">Contact Us</a>
        <a @click="toggleNav" class="hamburger-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            style="width: 24px; height: 24px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="nav-links-mobile">
      <router-link :to="{ name: 'our-services' }">Our Services</router-link>
      <router-link :to="{ name: 'key-projects' }">Key Projects</router-link>
      <router-link :to="{ name: 'our-team' }">Our Team</router-link>
      <a href="#">Contact Us</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logo from '@/assets/logo.svg'
const toggleNav = () => {
  const navLinksMobile = document.querySelector('.nav-links-mobile')
  navLinksMobile?.classList.toggle('open')

  const topNav = document.querySelector('.navbar')
  topNav?.classList.toggle('open')
}
</script>

<style scoped>
/* Navbar */
.navbar-wrapper {
  font-size: var(--heading-6);
  width: 100%;

  .navbar {
    background-color: var(--dark);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s ease;
    padding: 16px;

    & a {
      color: var(--light);
      text-decoration: none;
    }

    & img {
      height: 45px;
    }
  }

  .nav-links-mobile {
    display: flex;
    flex-direction: column;
    height: 0;
    background-color: var(--dark);
    text-align: right;
    gap: 16px;
    transform: scale(1, 0);
    transition: 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
    transform-origin: top;
  }

  .nav-links-mobile a {
    text-align: left;
    color: var(--light);
    text-decoration: none;
    font-size: var(--heading-6);
    padding-left: 16px;
  }

  & .nav-links {
    gap: 16px;
  }

  & .hamburger-menu {
    display: flex;
    align-content: center;
  }

  & picture {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  & .nav-link {
    display: none;
  }
}

@media (max-width: 767px) {
  .navbar-wrapper {
    .navbar {
      flex-direction: row-reverse;
    }
  }

  .nav-links-mobile.open {
    transform: scale(1, 1);
    height: auto;
    padding-bottom: 16px;
  }
}

@media only screen and (min-width: 768px) {
  .navbar-wrapper .navbar {
    padding: 24px var(--default-padding);
  }

  .navbar .nav-links {
    gap: 24px;
  }

  .navbar .nav-link {
    display: inline;
  }

  .navbar .hamburger-menu {
    display: none;
  }
}

@media only screen and (min-width: 1920px) {
  .navbar .nav-links {
    gap: calc(1vw + 40px);
  }
}
</style>
