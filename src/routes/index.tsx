import { Avatar } from '@/libs/components/avatar/Avatar';
import { AccordionPage } from '@/views/demo/accordion/AccordionPage';
import { AlertPage } from '@/views/demo/alert/AlertPage';
import { AvatarPage } from '@/views/demo/avatar/AvatarPage';
import ButtonExamplePage from '@/views/demo/button/ButtonExamplePage';
import { DrawerExamplePage } from '@/views/demo/drawer/DrawerExamplePage';
import { MenuExample } from '@/views/demo/menu/MenuExample';
import HealthChecker from '@/views/healthchecker/HealthChecker';
import LoginPage from '@/views/login/LoginPage';

export const routes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/healthchecker',
    element: <HealthChecker />,
  },
  {
    path: '/demo',
    children: [
      {
        path: 'button',
        element: <ButtonExamplePage />,
      },
      {
        path: 'drawer',
        element: <DrawerExamplePage />,
      },
      {
        path: 'menu',
        element: <MenuExample />,
      },
      {
        path: 'accordion',
        element: <AccordionPage />,
      },
      {
        path: 'avatar',
        element: <AvatarPage />,
      },
      {
        path: 'alert',
        element: <AlertPage />,
      },
    ],
  },
];
