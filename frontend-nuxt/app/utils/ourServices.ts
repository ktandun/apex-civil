import ourServicesPoint from '~/assets/our-services-point.svg'
import landDevelopment from '~/assets/land-development-1200w.jpg'
import civilConstruction from '~/assets/civil-construction-1200w.jpg'
import projectManagement from '~/assets/project-management-1200w.jpg'

export type OurService = {
  html: string
  image: string
  title: string
  description: string
  points: OurServicePoint[]
  reversed: boolean
  slogan: string
  sloganDescription: string
}

export type OurServicePoint = {
  image: string
  title: string
  description?: string
  subPoints?: string[]
}

export const ourServices: OurService[] = [
  {
    html: 'civil-construction',
    slogan: 'Where construction meets innovation',
    sloganDescription: `We deliver technically sound civil construction with precision, structure, and professionalism. Every project is backed by detailed methodology, a clear risk management approach, and tailored inspection and testing processes. From residential and commercial sites to large-scale infrastructure upgrades, we build with care, capability, and control — every time.`,
    image: civilConstruction,
    title: 'Civil Construction',
    description: `We execute high-quality civil works — from earthworks and drainage to roads and concrete — with the skill, care, and technical detail that set great projects apart.`,
    reversed: false,
    points: [
      {
        image: ourServicesPoint,
        title: 'Site Works, Earthworks & Remediation',
        description: `Site clearance, bulk excavation, demolition, and remediation — including cut-to-fill, trimming, stabilisation, and safe handling of contaminated materials.`,
      },
      {
        image: ourServicesPoint,
        title: 'Stormwater Systems & Structures',
        description: `Soakage pits, rain gardens, detention tanks, manholes, culverts and chambers — installed to council standards with precision, function, and environmental
performance in mind.`,
      },
      {
        image: ourServicesPoint,
        title: 'Drainage Installation',
        description: `Stormwater & wastewater systems — installed to spec and tested for performance across private developments and public networks.`,
      },
      {
        image: ourServicesPoint,
        title: 'Erosion & Sediment Control',
        description: `Silt fences, DEBs, and stabilisation measures — full environmental compliance from pre-start through to final reinstatement.`,
      },
      {
        image: ourServicesPoint,
        title: 'Concrete & Kerbing Works',
        description: `House pads, commercial and industrial slabs, kerb & channel, and streetscape finishes — built for strength, accuracy, and long-term performance.`,
      },
      {
        image: ourServicesPoint,
        title: 'Retaining Walls',
        description: `Gravity, MSE, cantilevered, and anchored systems — engineered for stability and constructed with precision.`,
      },
      {
        image: ourServicesPoint,
        title: 'Utility Trenching & Installation',
        description: `Water, gas, power, fibre, and comms — safely installed, and reinstated to the highest standards.`,
      },
      {
        image: ourServicesPoint,
        title: 'Landscaping & Finishing Works',
        description: `Decks, fencing, patios, and soft landscaping — clean, consistent finishes that complete the build and elevate presentation.`,
      },
      {
        image: ourServicesPoint,
        title: 'Pavement & Roading',
        description: `Full roading packages, pavement formation, basecourse, surfacing, and tie-ins — durable, high-performing, and built to last.`,
      },
      {
        image: ourServicesPoint,
        title: 'Traffic Management',
        description:
          'Temporary traffic control designed and delivered to maintain public safety, minimise disruption, and support efficient site access.',
      },
      {
        image: ourServicesPoint,
        title: 'Stormwater Management Systems',
        description:
          'Soakage pits, rain gardens, detention tanks, and overland flow controls — smart systems that meet hydraulic and environmental demands.',
      },
      {
        image: ourServicesPoint,
        title: 'Horizontal Directional Drilling (HDD)',
        description:
          'Trenchless installation of water, power, fibre, and telco — from small to large diameters, ideal for road crossings and sensitive sites, delivered in-house.',
      },
    ],
  },
  {
    html: 'project-management',
    image: projectManagement,
    title: 'Project Management',
    description: `We lead complex projects with clarity, structure, and confidence — aligning teams and timelines to ensure nothing gets missed, and everything gets done right.`,
    reversed: true,
    slogan: 'Have clarity and control',
    sloganDescription: `We manage civil projects with structure, foresight, and confidence — taking responsibility for every stage, from feasibility through to handover. Our team brings the systems, experience, and technical capability to coordinate consultants, contractors, and compliance requirements across even the most complex builds.


Whether you’re delivering a subdivision, commercial site, or infrastructure package, we lead the process with full transparency and practical insight. With Apex Civil managing your project, you get clear communication, tighter cost control, and reliable outcomes — no matter the scale or complexity.`,
    points: [
      {
        image: ourServicesPoint,
        title: 'Client Representation',
        subPoints: [
          'We act as your voice across the entire delivery process — ensuring that your priorities are front and centre',
          'From early decisions to final outcomes, we protect your interests, provide honest guidance, and ensure what’s promised is what’s delivered',
          'You’ll be kept fully informed, without being overwhelmed by technical details',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Development Management',
        subPoints: [
          'We bring structure to complex development projects by uniting all disciplines — designers, planners, engineers, and contractors — under one cohesive programme',
          'We manage the day-to-day delivery and strategic decisions that keep your project progressing efficiently, safely, and in line with expectations',
          'Includes active cost control, sequencing, staging, and coordination of site activities',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Feasibility & Risk Analysis',
        subPoints: [
          'Before any investment is made, we assess whether your project stacks up — commercially and practically',
          'We identify potential risks, constraints, and opportunities, then offer smart, experience-based advice to support confident decision-making',
          'From land use limitations to construction cost variables, we help you weigh up options and define a clear, realistic path forward',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Design Management',
        subPoints: [
          'Designs need to do more than look good — they need to work on-site, meet budget constraints, and support timely delivery. We manage the entire design process to ensure plans are practical, buildable, and aligned with consent requirements',
          'Our team keeps momentum high, avoids unnecessary drift, and ensures constructibility is considered from the outset',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Consent Management',
        subPoints: [
          'We handle the entire resource and building consent process, preparing documentation, managing council liaison, and tracking approval timeframes',
          'We guide you through local requirements so you’re never caught off guard, and ensure compliance is integrated — not an afterthought. Our focus is on getting the green light without delays or red tape',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Consultant Selection & Engagement',
        subPoints: [
          'The right consultants make all the difference. We help you engage trusted professionals — surveyors, planners, engineers, architects, or environmental specialists',
          'We manage scope, performance, and integration into the wider project. From tender to final delivery, we make sure everyone is working in sync and to the same standard',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Tendering & Contract Management',
        subPoints: [
          'We run a clear and competitive tendering process to help you appoint the best-fit contractor — not just the lowest price',
          'We draft and negotiate fair, robust contracts, then manage them day-to-day to ensure delivery stays aligned with scope and cost',
          'Our team handles variations, claims, and performance issues early — so they don’t become problems later',
        ],
      },
    ],
  },
  {
    html: 'land-development',
    image: landDevelopment,
    title: 'Land Development',
    description: `We manage every phase of land development with clarity and control, delivering
smart, compliant outcomes across residential, commercial, and industrial projects.`,
    reversed: false,
    slogan: 'Bring your vision to life',
    sloganDescription: `We deliver end-to-end land development with structure, clarity, and confidence. From site feasibility and planning through to construction, compliance, and title certification, we manage the entire process with precision.

Whether it’s a two-lot subdivision or a large-scale residential, commercial, or industrial project, we align consultants, contractors, and councils to achieve smooth delivery, regulatory certainty, and long-term value.`,
    points: [
      {
        image: ourServicesPoint,
        title: 'Feasibility & Due Diligence',
        description:
          'Early-stage site assessments to identify risks, constraints, and opportunities — helping you make informed, confident decisions.',
      },
      {
        image: ourServicesPoint,
        title: 'Concept Planning & Design Coordination',
        description:
          'Practical layouts and design coordination — from initial concepts through to detailed engineering ready for consent and construction.',
      },
      {
        image: ourServicesPoint,
        title: 'Procurement & Delivery Management',
        description:
          'Cost estimating, contractor engagement, and construction oversight — ensuring value, capability, and consistent progress from day one.',
      },
      {
        image: ourServicesPoint,
        title: 'Resource Consent Preparation & Lodgement',
        description:
          'Preparation and submission of all required documentation — with clear communication and proactive coordination with councils and stakeholders.',
      },
      {
        image: ourServicesPoint,
        title: 'Environmental & Planning Compliance',
        description:
          'Coordination of environmental impact assessments and planning approvals — supporting smooth consents and future-proofed outcomes.',
      },
      {
        image: ourServicesPoint,
        title: 'Contract & Project Management',
        description:
          'Full oversight of construction contracts, variations, and delivery teams — ensuring the project stays aligned, on time, and on budget.',
      },
      {
        image: ourServicesPoint,
        title: 'Completion & Title Certification',
        description:
          'Final inspections, council approvals, and title documentation — including 223 and 224c certification to enable new titles and complete the development process.',
      },
      {
        image: ourServicesPoint,
        title: 'Early Planning Strategy & Advice',
        description:
          'Upfront guidance on zoning, planning rules, and infrastructure requirements — helping you set a clear, achievable development pathway from the start.',
      },
    ],
  },
]
