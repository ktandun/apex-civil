<template>
  <div class="footer">
    <div class="footer-section">
      <div>
        <img :src="logo" />
      </div>
      <div class="contact">
        <div class="title">Contact</div>
        <div class="point">
          <img :src="locationMarker" />
          <p>40A Invergarry Road, Taupō 3330, New Zealand</p>
        </div>
        <div class="point">
          <img :src="mail" />
          <p>enquiries@apexcivil.co.nz</p>
        </div>
        <div class="point">
          <img :src="phone" />
          <p>0800 273 924</p>
        </div>
      </div>
    </div>
    <div class="footer-section">
      <div class="social-media">
        <img :src="fbLogo" />
        <img :src="linkedInLogo" />
      </div>
    </div>
    <div class="footer-section most-bottom">
      <div class="links">
        <router-link :to="{ name: 'our-services' }"  tag="a">Our Services</router-link>
        <router-link :to="{ name: 'key-projects' }"  tag="a">Key Projects</router-link>
        <router-link :to="{ name: 'our-team' }" tag="a" >Our Team</router-link>
        <a href="#">Contact Us</a>
      </div>
      <div class="footer-logos">
        <img :src="sitewise" />
        <img :src="prequal" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logo from '@/assets/logo.svg'
import locationMarker from '@/assets/location-marker.svg'
import mail from '@/assets/mail.svg'
import phone from '@/assets/phone.svg'
import fbLogo from '@/assets/fb-logo.svg'
import linkedInLogo from '@/assets/linkedin-logo.svg'
import sitewise from '@/assets/sitewise.png'
import prequal from '@/assets/prequal.png'
</script>

<style scoped>
.footer {
  padding: 32px var(--default-padding);
  color: var(--light);
  display: flex;
  flex-direction: column;

  & .contact {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 240px;

    & img {
      height: 24px;
    }

    & .title {
      font-weight: var(--font-bold);
    }

    & .point {
      display: flex;
      flex-direction: row;
      gap: 8px;
      font-size: 16px;

      & img {
        height: 24px;
        width: 24px;
      }
    }
  }

  & .footer-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.most-bottom {
      align-items: baseline;
    }
  }

  & .social-media {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-top: 64px;
    margin-bottom: 42px;
  }

  & .links {
    display: flex;
    flex-direction: row;
    gap: 16px;

    & a:hover {
      text-decoration: underline;
    }

    & a:not(:last-child) {
      display: none;
    }
  }

  & .footer-logos {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 16px;

    & img {
      height: 41px;
      width: auto;
    }
  }
}

@media (min-width: 768px) {
  .footer {
    padding: 100px var(--default-padding);
    flex-direction: column;

    & .footer-section {
      flex-direction: row;
      display: flex;
    }

    & .social-media {
      margin-top: 0px;
    }

    & .links {
      & a:not(:last-child) {
        display: block;
      }
    }
  }
}

@media only screen and (min-width: 992px) {
  .footer {
    & .text {
      padding-right: var(--default-padding);
    }
  }
}
</style>
