import { Routes } from '@angular/router';
import { Players } from './admin/players/players'
import { Games } from './admin/games/games'
import { Dates } from './admin/dates/dates'
import { Home } from './admin/home/home'
import {Login} from './admin/login/login';

export const routes: Routes = [
  { path: 'admin/players', component: Players },
  { path: 'admin/games', component: Games },
  { path: 'admin/dates', component: Dates },
  { path: 'admin', component: Home },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'admin', pathMatch: 'full' }

];
