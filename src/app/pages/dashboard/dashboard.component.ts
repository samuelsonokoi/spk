import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SidebarLinks } from '../../core/models/sidebar-links.model';
import { DescriptionsComponent } from '../../components/descriptions/descriptions.component';
import { DetailCardComponent } from '../../components/detail-card/detail-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, DescriptionsComponent, DetailCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  topMenuItems: SidebarLinks[] = [
    {
      label: 'Lorem',
      icon: 'images/MENU.svg',
    },
    {
      label: 'Lorem',
      icon: 'images/MENU1.svg',
    },
    {
      label: 'Lorem',
      icon: 'images/MENU2.svg',
    },
    {
      label: 'Lorem',
      icon: 'images/MENU3.svg',
      active: true,
    },
    {
      label: 'Lorem',
      icon: 'images/MENU4.svg',
    },
    {
      label: 'Lorem',
      icon: 'images/MENU5.svg',
    },
    {
      label: 'Lorem',
      icon: 'images/MENU6.svg',
    },
  ];

  bottomMenuItems: SidebarLinks[] = [
    {
      label: 'Lorem',
      icon: 'images/MENU7.svg',
    },
    {
      label: 'Lorem',
      icon: 'images/MENU8.svg',
    },
  ];
}
