import taraweraLanding from '@/assets/hero-1600w.jpg'
import taraweraLandingHero from '@/assets/tarawera-landing-hero.jpg'
import acaciaBayHero from '@/assets/acacia-bay-hero.jpg'
import acaciaBay from '@/assets/featured-projects-1.jpeg'
import acaciaBay2 from '@/assets/acacia-bay-2.jpg'
import acaciaBay3 from '@/assets/acacia-bay-3.jpg'
import marshallRoad1 from '@/assets/marshall-road-1.jpg'
import marshallRoad2 from '@/assets/marshall-road-2.jpg'
import marshallRoad3 from '@/assets/marshall-road-3.jpg'
import marshallRoad4 from '@/assets/marshall-road-4.jpg'
import taniaCrescent1 from '@/assets/tania-crescent-subdivision-1.jpg'
import taniaCrescent2 from '@/assets/tania-crescent-subdivision-2.jpg'
import taniaCrescent3 from '@/assets/tania-crescent-subdivision-3.jpg'
import taniaCrescent4 from '@/assets/tania-crescent-subdivision-4.jpg'
import carters1 from '@/assets/carters-1.jpg'
import carters2 from '@/assets/carters-2.jpg'
import carters3 from '@/assets/carters-3.jpg'
import carters4 from '@/assets/carters-4.jpg'
import carters5 from '@/assets/carters-5.jpg'

import cartersThumbnail from '@/assets/carters-2-1000w.jpg'
import taniaCrescentThumbnail from '@/assets/tania-crescent-subdivision-2-1000w.jpg'
import marshallRoadThumbnail from '@/assets/marshall-road-2-1000w.jpg'
import taraweraLandingThumbnail from '@/assets/tarawera-landing-hero-1000w.jpg'
import acaciaBayThumbnail from '@/assets/acacia-bay-hero-1000w.jpg'

export type KeyProject = {
  html: string
  heroImage: string
  thumbnailImage: string
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
    thumbnailImage: taraweraLandingThumbnail,
    image: [taraweraLanding, taraweraLanding, taraweraLanding],
    title: 'Tarawera Landing Upgrade',
    service: ['Design & Build', 'Earthworks', 'Civil Design Management'],
    location: 'Lake Tarawera, Rotorua',
    description:
      'Design and build of the Lake Tarawera jetty and reserve works, delivered with strict environmental and public access management.',
    client: `Rotorua Lakes Council`,
    more_details: `This design and build project for Rotorua Lakes Council's Parks Reserves Team involved the full replacement of the Lake Tarawera jetty and surrounding civil infrastructure throughout the reserve area. Apex Civil delivered all earthworks, drainage, roading, and concrete works, with careful management of public access and environmental controls in this high-use recreational space.

The scope also included significant sediment control measures to protect the lake edge during works near the jetty — including silt curtains, runoff control, and monitored discharge zones. Working in partnership with Blueline Consulting, we led the civil design and construction, coordinating seamlessly with council stakeholders to meet programme, quality, and environmental requirements.`,
  },
  {
    html: 'acacia-bay',
    image: [acaciaBay, acaciaBay2, acaciaBay3],
    heroImage: acaciaBayHero,
    thumbnailImage: acaciaBayThumbnail,
    title: 'Acacia Bay',
    service: ['Design & Engineering Management', 'Drainage & Water Reticulation', 'Earthworks'],
    location: 'Acacia Bay, Taupō',
    description:
      'Full design-and-build of a 15-lot Acacia Bay subdivision, including all civil works, services, and lot-specific infrastructure.',
    client: 'Private Developer',
    more_details: `This 15-lot residential subdivision in Acacia Bay was delivered as a full design-and-build package by Apex Civil. We managed the engineering design, land transfer surveying, and council approval processes, working closely with Taupō District Council and the client’s build partners to ensure a smooth and fully compliant outcome.

Our team carried out all civil construction works including bulk earthworks, three waters installation, road and pavement construction, concrete works, and utility trenching. In addition to the subdivision infrastructure, Apex also delivered residential civil works for each lot, including driveways, stormwater tank systems, and landscaping to support the on-site housing construction completed by others.

This project demonstrates Apex Civil’s ability to lead both the design and construction phases — providing a complete delivery solution for developers and end users alike.`,
  },
  {
    html: 'marshall-road',
    image: [marshallRoad1, marshallRoad3, marshallRoad4],
    heroImage: marshallRoad2,
    thumbnailImage: marshallRoadThumbnail,
    title: 'Marshall Road',
    service: ['Project management, civil engineering'],
    location: 'Marshall Road, Katikati',
    description:
      'Marshall Road urban upgrade with new road, services, and streetscape.',
    client: 'Western Bay of Plenty District Council',
    more_details: `Apex Civil was engaged by Western Bay of Plenty District Council to deliver a major urbanisation upgrade on Marshall Road, Katikati. Valued at $2.1 million, this complex civil package involved the full reconstruction of road corridors and services to support increased capacity and future development in the area.

Scope of work included bulk earthworks, full pavement reconstruction, stormwater and wastewater upgrades, and concrete works throughout. Key features included the installation of a 1.5m diameter stormwater road crossing and a 3.0m diameter manhole — both requiring deep excavation, robust traffic management, and careful planning around live services.

Retaining walls and landscaping works were also delivered as part of the finished streetscape, enhancing both function and appearance. This project reflects Apex Civil’s ability to deliver high- risk urban civil works efficiently, with precision, and to council standards.`,
  },
  {
    html: 'tania-crescent-subdivision',
    image: [taniaCrescent1, taniaCrescent3, taniaCrescent4],
    heroImage: taniaCrescent2,
    thumbnailImage: taniaCrescentThumbnail,
    title: 'Tania Crescent Subdivision',
    service: [],
    location: 'Tania Crescent, Rotorua',
    description:
      'Kāinga Ora subdivision with prefabricated homes, including earthworks, services, retaining walls, and concrete accessways.',
    client: 'Kāinga Ora',
    more_details: `This Kāinga Ora subdivision project involved the delivery and placement of relocatable prefabricated housing units, supported by full civil infrastructure construction. Apex Civil completed all earthworks, including cut-to-fill operations, platform formation, and the removal of contaminated material identified on site.

New three-water networks were installed, along with utility trenching for power and communications. Retaining walls were constructed to manage level changes across the site and maximise usable space for housing placement. The main accessway and vehicle crossings were completed in reinforced concrete, with additional footpaths, carparks, hardstand areas, and landscaping to suit the compact residential layout.

Delivered over a 4-month programme, this project reflects Apex Civil's capability to manage
complex brownfield subdivisions involving modular unit placement, environmental risk, and tight
construction footprints.`,
  },
  {
    html: 'carters-trade-centre',
    image: [carters1, carters3, carters4, carters5],
    heroImage: carters2,
    thumbnailImage: cartersThumbnail,
    title: 'Carters Trade Centre',
    service: [],
    location: 'Broadlands Road, Taupō',
    description:
      'Civil works package for Carters Trade Centre in Taupō, delivering drainage, pavements, concrete, and asphalt under a tight programme.',
    client: 'TW Construction',
    more_details: `This commercial development for TW Construction involved a full civil works package to support the new Carters Trade Centre in Taupō. Apex Civil's scope included underground drainage installation, concrete works, kerb and channel, subgrade preparation, pavement construction, and final asphalt surfacing across the accessways and circulation areas.

Delivered under a tight programme within an active construction site, the project demonstrated Apex Civil's ability to coordinate efficiently alongside other trades and deliver high-quality
finishes in a fast-paced commercial environment.`,
  },
]
