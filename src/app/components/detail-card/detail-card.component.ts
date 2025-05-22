import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { AssetTableComponent } from '../asset-table/asset-table.component';
import { Asset } from '../../core/models/asset.model';
import { ASSET_STATUS } from '../../core/constants/asset-status.constants';

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [ChartComponent, AssetTableComponent],
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
      riskBadge: ASSET_STATUS.CRITICAL,
    },
  ];
}
