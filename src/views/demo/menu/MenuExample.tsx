import { SimpleDrawerMenu, SimpleMenuItemProps } from '@/libs/components/menu';
import { HiHome, HiDatabase, HiCloud, HiCollection, HiServer, HiUser, HiCog } from 'react-icons/hi';
const menus: SimpleMenuItemProps[] = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    icon: <HiHome />,
  },
  {
    title: 'User Cases',
    link: '/testcases',
    icon: <HiDatabase />,
    children: [
      {
        title: 'Cases',
        link: '/testcases/list',
      },
      {
        title: 'Reviews',
        link: '/testcases/review',
      },
      {
        title: 'Plans',
        link: '/testcases/plan',
      },
    ],
  },
  {
    title: 'API Testing',
    link: '/api-test',
    icon: <HiCloud />,
    children: [
      {
        title: 'API Scenarios',
        link: '/api-test/scenarios',
        icon: <HiCollection />,
      },
    ],
  },
  {
    title: 'Settings',
    link: '/settings',
    icon: <HiServer />,
    children: [
      {
        title: 'users',
        link: '/settings/users',
        icon: <HiUser />,
      },
      {
        title: 'systems',
        link: '/settings/systems',
        icon: <HiCog />,
      },
    ],
  },
];

export const MenuExample = () => {
  return (
    <div className="w-56 h-screen">
      <SimpleDrawerMenu dataSource={menus} className="w-64 h-full" />
    </div>
  );
};
