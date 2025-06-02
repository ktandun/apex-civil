import luke from '@/assets/luke-rainford.png'
import kurt from '@/assets/kurt-petherick.png'
import darrin from '@/assets/darrin-archer.png'
import pauline from '@/assets/pauline-harwood.png'
import clefford from '@/assets/darrin-archer.png'

export type TeamMember = {
  directors: TeamMemberProfile[]
  employees: TeamMemberProfile[]
}

export type TeamMemberProfile = {
  image: string
  name: string
  position: string
  description: string
}

export const teamMembers: TeamMember = {
  directors: [
    {
      image: luke,
      name: 'Luke Rainford',
      position: 'DIRECTOR',
      description: `
        Managing the overall operations and success of the Company.
        My role includes management of our project team to deliver high quality projects for our Clients.`,
    },
    {
      image: kurt,
      name: 'Kurt Petherick',
      position: 'DIRECTOR',
      description: `
        Managing the overall operations and success of the Company.
        My role includes management of our project team to deliver high quality projects for our Clients.`,
    },
  ],
  employees: [
    {
      image: darrin,
      name: 'Darrin Archer',
      position: 'GENERAL MANAGER',
      description: `
        Managing the overall operations and success of the Company.
        My role includes management of our project team to deliver high quality projects for our Clients.`,
    },
    {
      image: pauline,
      name: 'Pauline Harwood',
      position: 'COMPLIANCE LEAD',
      description: `
        Managing the overall operations and success of the Company.
        My role includes management of our project team to deliver high quality projects for our Clients.`,
    },
    {
      image: clefford,
      name: 'Clefford Agtang',
      position: 'COMMERCIAL LEAD',
      description: `
        Managing the overall operations and success of the Company.
        My role includes management of our project team to deliver high quality projects for our Clients.`,
    },
  ],
}
