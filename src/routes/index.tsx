import HealthChecker from '@/views/healthchecker/HealthChecker';
import LoginPage from '../views/login/LoginPage';

export const routes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/healthchecker',
    element: <HealthChecker />,
  },
];
