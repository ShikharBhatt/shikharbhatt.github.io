export interface RouteConfig {
  index?: boolean;
  label: string;
  path: string;
}

const routes: RouteConfig[] = [
  {
    index: true,
    label: 'Shikhar Bhatt',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;

