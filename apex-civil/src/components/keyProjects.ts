export type KeyProject = {
  html: string
  image: string
  title: string
  service: string
  location: string
  description: string
  client: string
  more_details: string
}

export const keyProjects: KeyProject[] = [
  {
    html: 'tarawera-landing',
    image: new URL('../assets/hero.jpg', import.meta.url).href,
    title: 'Tarawera Landing',
    service: 'Project management, civil engineering',
    location: 'Hamilton',
    description:
      'Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge',
    client: 'We Build NZ',
    more_details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    html: 'acacia-bay',
    image: new URL('../assets/hero.jpg', import.meta.url).href,
    title: 'Acacia Bay',
    service: 'Project management, civil engineering',
    location: 'Hamilton',
    description:
      'Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge',
    client: 'We Build NZ',
    more_details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    html: 'marshall-road',
    image: new URL('../assets/hero.jpg', import.meta.url).href,
    title: 'Marshall Road',
    service: 'Project management, civil engineering',
    location: 'Hamilton',
    description:
      'Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge',
    client: 'We Build NZ',
    more_details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
]
