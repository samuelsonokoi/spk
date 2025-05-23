import { Component, Input } from '@angular/core';
import { SidebarLinks } from '../../core/models/sidebar-links.model';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input({ required: true }) topSidebarMenuItems!: SidebarLinks[];
  @Input({ required: true }) bottomSidebarMenuItems!: SidebarLinks[];
  sidebarCollapsed = false;

  toggleSidebarCollapse = () =>
    (this.sidebarCollapsed = !this.sidebarCollapsed);

  showSideBar = () => {
    const sidebar = document.getElementById('sidebar') as HTMLElement;
    sidebar.classList.toggle('block');
  };
}
