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
    image: [taraweraLanding, taraweraLanding, taraweraLanding],
    title: 'Tarawera Landing',
    service: ['Design & Build', 'Earthworks', 'Civil Design Management'],
    location: 'Lake Tarawera, Rotorua',
    description:
      'Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge',
    client: `Rotorua Lakes Council
    (Parks & Reserves Team)`,
    more_details: `This design and build project for Rotorua Lakes Council’s Parks &amp; Reserves Team involved the full replacement of the Lake Tarawera jetty and surrounding civil infrastructure throughout the reserve area. Apex Civil delivered all earthworks, drainage, roading, and concrete works, with careful management of public access and environmental controls in this high-use recreational space.

The scope also included significant sediment control measures to protect the lake edge during works near the jetty — including silt curtains, runoff control, and monitored discharge zones. Working in partnership with Blueline Consulting, we led the civil design and construction, coordinating seamlessly with council stakeholders to meet programme, quality, and environmental requirements.`,
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
    more_details: `This 15-lot residential subdivision in Acacia Bay was delivered as a full design-and-build package by Apex Civil. We managed the engineering design, land transfer surveying, and council approval processes, working closely with Taupō District Council and the client’s build partners to ensure a smooth and fully compliant outcome.

Our team carried out all civil construction works including bulk earthworks, three waters installation, road and pavement construction, concrete works, and utility trenching. In addition to the subdivision infrastructure, Apex also delivered residential civil works for each lot, including driveways, stormwater tank systems, and landscaping to support the on-site housing construction completed by others.

This project demonstrates Apex Civil’s ability to lead both the design and construction phases — providing a complete delivery solution for developers and end users alike.`,
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
