import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { AssetTableComponent } from '../asset-table/asset-table.component';
import { Asset } from '../../core/models/asset.model';
import { ASSET_STATUS } from '../../core/constants/asset-status.constants';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [ChartComponent, AssetTableComponent, SidebarModule],
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.scss',
})
export class DetailCardComponent {
  tableData: Asset[] = [
    {
      image: 'images/server-ip.svg',
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.1',
      riskBadge: ASSET_STATUS.CRITICAL,
    },
    {
      image: 'images/server-ip.svg',
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      riskBadge: ASSET_STATUS.LOW,
    },
    {
      image: 'images/server-ip.svg',
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      riskBadge: ASSET_STATUS.HIGH,
    },
    {
      image: 'images/server-ip.svg',
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      riskBadge: ASSET_STATUS.MEDIUM,
    },
    {
      image: 'images/server-ip.svg',
      name: 'Loremipsumdolorsit003',
      ipAddress: '192.168.1.3',
      riskBadge: ASSET_STATUS.LOW,
    },
    {
      image: 'images/server-ip.svg',
      name: 'Loremipsumdolorsit004',
      ipAddress: '192.168.1.4',
      riskBadge: ASSET_STATUS.LOW,
    },
    {
      image: 'images/server-ip.svg',
      name: 'Loremipsumdolorsit004',
      ipAddress: '192.168.1.4',
      riskBadge: ASSET_STATUS.MEDIUM,
    },
  ];
  drawerVisible = false;

  toggleDrawer = () => (this.drawerVisible = !this.drawerVisible);
}
