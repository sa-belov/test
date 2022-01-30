import { lazy } from 'react';
import Accounts from '../pages/Accounts/Accounts';
import Offices from '../pages/Offices/Offices';
import Tvs from '../pages/Tvs/Tvs';
import Registry from '../pages/Registry/Registry';
import Schedule from '../pages/Schedule/Schedule';

const routes = [
  { id: 'accounts', name: 'Аккаунты', path: '/accounts', component: Accounts },
  { id: 'offices', name: 'Кабинеты', path: '/offices', component: Offices },
  { id: 'schedule', name: 'Расписание', path: '/schedule', component: Schedule },
  { id: 'tvs', name: 'Телевизоры', path: '/tvs', component: Tvs },
  { id: 'registry', name: 'Регистратура', path: '/registry', component: Registry },
];

export default routes;
