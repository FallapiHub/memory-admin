import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import {MenuItem} from '../../interfaces/menu-item';


@Component({
  selector: 'app-menu-bar',
  imports: [MenubarModule],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css'
})
export class MenuBar {
  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: [''],
      icon: 'pi pi-home',
    },
    {
      label: 'Players',
      routerLink: ['/admin/players'],
      icon: 'pi pi-address-book'
    },
    {
      label:'Games',
      routerLink: ['/admin/games'],
      icon: 'pi pi-gauge'
    },
    {
      label: 'Dates',
      routerLink: ['/admin/dates'],
      icon: 'pi pi-calendar-clock'
    }
  ]
}
