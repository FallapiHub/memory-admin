import { Routes } from '@angular/router';
import { Players } from './admin/players/players'
import { Games } from './admin/games/games'
import { Dates } from './admin/dates/dates'
import { Home } from './admin/home/home'
import {Login} from './admin/login/login';
import {authGuard} from './auth.guard';

export const routes: Routes = [
  { path: 'admin/players', component: Players, canActivate: [authGuard] },
  { path: 'admin/games', component: Games, canActivate: [authGuard] },
  { path: 'admin/dates', component: Dates, canActivate: [authGuard] },
  { path: 'admin', component: Home, canActivate: [authGuard] },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'admin', pathMatch: 'full' }

];
