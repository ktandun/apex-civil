import taraweraLanding from '@/assets/hero.jpg'
import taraweraLandingHero from '@/assets/tarawera-landing-hero.jpg'
import acaciaBayHero from '@/assets/acacia-bay-hero.jpg'
import acaciaBay from '@/assets/featured-projects-1.jpeg'
import acaciaBay2 from '@/assets/acacia-bay-2.jpg'
import acaciaBay3 from '@/assets/acacia-bay-3.jpg'
import marshallRoad from '@/assets/land-development.jpg'

export type KeyProject = {
  html: string
  heroImage: string
  image: string[]
  title: string
  service: string[]
  location: string
  description: string
  client: string
  more_details: string
}

export const keyProjects: KeyProject[] = [
  {
    html: 'tarawera-landing',
    heroImage: taraweraLandingHero,
    image: [taraweraLanding],
    title: 'Tarawera Landing',
    service: ['Project management, civil engineering'],
    location: 'Hamilton',
    description:
      'Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge',
    client: 'We Build NZ',
    more_details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    html: 'acacia-bay',
    image: [acaciaBay, acaciaBay2, acaciaBay3],
    heroImage: acaciaBayHero,
    title: 'Acacia Bay',
    service: ['Design & Engineering Management', 'Drainage & Water Reticulation', 'Earthworks'],
    location: 'Acacia Bay, Taupō',
    description:
      'Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge',
    client: 'Private Developer',
    more_details: `Apex Civil delivered this 15-lot residential subdivision in Acacia Bay as a comprehensive design-and-build solution. Our scope included engineering design, land transfer surveying, and management of all council approval processes in close collaboration with Taupō District Council and the client’s build partners to ensure a seamless, compliant outcome.

Our team completed all civil construction works, including bulk earthworks, three waters installation, road and pavement construction, concrete works, and utility trenching. Beyond the core subdivision infrastructure, we also provided residential civil services for each lot—completing driveways, stormwater tank systems, and landscaping to support the housing development.

This project highlights Apex Civil’s capability to lead both design and construction phases, delivering an end-to-end solution for developers and project stakeholders.`,
  },
  {
    html: 'marshall-road',
    image: [marshallRoad],
    heroImage: marshallRoad,
    title: 'Marshall Road',
    service: ['Project management, civil engineering'],
    location: 'Hamilton',
    description:
      'Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge',
    client: 'We Build NZ',
    more_details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
]
