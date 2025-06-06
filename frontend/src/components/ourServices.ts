import ourServicesPoint from "@/assets/our-services-point.svg";
import landDevelopment from "@/assets/land-development.jpg";
import civilConstruction from "@/assets/civil-construction.jpg"
import projectManagement from "@/assets/project-management.jpg"

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
    sloganDescription: `
     For every project we provide our clients with a comprehensive risk assessment,
     construction methodology and an inspection and testing plan.
     Whether small residential or large-scale commercial and industrial projects,
     our team has the expertise to safely construct your project with efficiency and accuracy. `,
    image: civilConstruction,
    title: 'Civil Construction',
    description: ` Our team is committed to delivering excellence with professionalism
                        and integrity at every step. We specialise in managing high-quality
                        civil projects across Taupō and surrounding areas, ensuring that
                        every client’s vision is brought to life with precision and care.  `,
    reversed: false,
    points: [
      {
        image: ourServicesPoint,
        title: 'Earthworks',
        description: `Prepare your site for success with our experienced team and modern equipment. From large-scale site leveling to detailed earth shaping, we’ll ensure your project starts on solid ground.`,
      },
      {
        image: ourServicesPoint,
        title: 'Drainage',
        description: `Keep your project running smoothly with our stormwater and wastewater systems. Whether it’s subsoil drainage or potable water reticulation, we’ll manage the entire process with precision.`,
      },
      {
        image: ourServicesPoint,
        title: 'Utility Installation',
        description: `Let us handle the complex integration of underground utilities, ensuring your project is future-ready and meets all compliance standards.`,
      },
      {
        image: ourServicesPoint,
        title: 'Pavement and Roading',
        description: `Need durable, high-performing roads or pavements? We’ll deliver surfaces that are built to handle heavy use while keeping communities connected.`,
      },
      {
        image: ourServicesPoint,
        title: 'Retaining Walls',
        description: `We design and construct retaining walls, including gravity, MSE, cantilever, and anchored systems, ensuring structural stability for even the most challenging sites.`,
      },
      {
        image: ourServicesPoint,
        title: 'Concrete and Streetscape',
        description: `Enhance your project with our concrete solutions, from foundations to polished streetscapes that add value to urban developments.`,
      },
      {
        image: ourServicesPoint,
        title: 'Health and Safety',
        description: `Your project’s safety is our top priority. We bring unmatched expertise to ensure every site operates to the highest industry standards.`,
      },
    ],
  },
  {
    html: 'land-development',
    image: landDevelopment,
    title: 'Land Development',
    description: ` We specialise in the necessary expertise for all land development
                        requirements. `,
    reversed: true,
    slogan: 'Bring your vision to life',
    sloganDescription: `
    We provide full-service land development solutions designed to deliver value at every stage. Whether it’s a small two-lot subdivision or a large-scale residential or commercial project, our team is equipped to manage the entire process from start to finish.
    We work closely with clients, consultants, and local authorities to streamline the path from concept to completion—ensuring each development runs smoothly, meets regulatory requirements, and achieves the best possible outcome, both financially and functionally.
     `,
    points: [
      {
        image: ourServicesPoint,
        title: 'Initial Due Diligence & Feasibility Analysis',
        description: `We help you understand what’s possible with your site from the outset. By identifying risks, constraints, and opportunities early on, we give you the clarity you need to make confident, informed decisions before committing to development.`,
      },
      {
        image: ourServicesPoint,
        title: 'Procurement & Delivery of Works',
        description: `From estimating construction costs to sourcing contractors, we manage the procurement process to ensure value for money and a strong delivery team. Once underway, we stay hands-on to keep everything moving.`,
      },
      {
        image: ourServicesPoint,
        title: 'Concept Planning & Detailed Design',
        description: `We take your vision and shape it into a practical, compliant development plan. From high-level concept layouts to detailed engineering design, we ensure your plans are ready for approval—and ready to build.`,
      },
      {
        image: ourServicesPoint,
        title: 'Environmental Impact Assessments',
        description: `We assess the environmental effects of your development and help minimise them with smart, practical strategies. Working alongside trusted specialists, we deliver the documentation needed to keep your project progressing smoothly.`,
      },
      {
        image: ourServicesPoint,
        title: 'Contract & Project Management',
        description: `We handle contractor agreements, variations, and day-to-day management to keep your project on track. With tight oversight and clear communication, we resolve issues quickly and avoid unnecessary delays.`,
      },
      {
        image: ourServicesPoint,
        title: 'Project Completion & Certification',
        description: `We manage the final stretch—coordinating inspections, gathering documentation, and liaising with council to ensure your project is signed off properly and ready for the next phase.`,
      },
      {
        image: ourServicesPoint,
        title: 'Resource Consent Preparation & Lodgement',
        description: `Our team prepares and submits all the necessary documentation for your resource consents, and manages the back-and-forth with council and other authorities, keeping the process as smooth and stress-free as possible.`,
      },
      {
        image: ourServicesPoint,
        title: 'Early Advice on Planning & Development Requirements',
        description: `Our team provides early-stage guidance around planning rules, zoning, and council requirements. We help you navigate the red tape and set realistic expectations, so you’re never caught off guard.`,
      },
    ],
  },
  {
    html: 'project-management',
    image: projectManagement,
    title: 'Project Management',
    description: `
    We will manage your civil project with precision.
    We have managers with decorated and board experience
    in high profile and high-risk civil infrastructure project.`,
    reversed: false,
    slogan: 'Have clarity and control',
    sloganDescription: `From feasibility to final delivery, we take a hands-on approach to managing every stage of your civil project. With robust systems and clear communication, we coordinate consultants, control budgets, and keep timelines moving—so you can be confident in the outcome.
We proudly deliver high-quality results across the Central North Island, Waikato, Bay of Plenty, Manawatū-Whanganui, and Hawke’s Bay. `,
    points: [
      {
        image: ourServicesPoint,
        title: 'Client Representation',
        subPoints: [
          'We become your voice on-site, making sure your best interests are front and centre',
          'Keep you informed at every stage, without overwhelming you with the technical stuff',
          'Provide honest, experienced advice to support confident decisions',
          'Make sure what’s promised is exactly what’s delivered',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Development Management',
        subPoints: [
          'Bring together all the moving parts of your project into one clear plan',
          'Coordinate everyone from designers to contractors so things stay on track',
          'Keep your budget and timeline in check without cutting corners',
          'Help unlock the full value of your land or site',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Feasibility & Risk Analysis',
        subPoints: [
          'Assess whether your idea stacks up before breaking ground',
          'Flag potential risks early so you can plan with confidence',
          'Offer smart, practical advice to guide your next move',
          'Help you weigh up options to get the best outcome',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Design Management',
        subPoints: [
          'Work closely with designers to make sure plans are practical and cost-effective',
          'Keep things moving so design delays don’t slow down your build',
          'Balance creativity with real-world constraints',
          'Make sure what’s designed can be built — on time and on budget',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Consent Management',
        subPoints: [
          'Handle all the paperwork and liaise with councils on your behalf',
          'Guide you through local rules so you’re never caught off guard',
          'Stay on top of consent timelines to avoid delays',
          'Make compliance feel simple, not stressful',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Consultant Selection & Engagement',
        subPoints: [
          'Help you find the right people for the job — not just the cheapest',
          'Set clear expectations from day one',
          'Take care of scopes, contracts, and negotiations',
          'Build a strong, reliable project team around your goals',
        ],
      },
      {
        image: ourServicesPoint,
        title: 'Tendering & Contract Management',
        subPoints: [
          'Run a transparent, competitive tender process to get the best value',
          'Help you choose the right contractor, not just the lowest price',
          'Manage the contract so things stay fair and on track',
          'Handle variations and claims without the headaches',
        ],
      },
    ],
  },
]
