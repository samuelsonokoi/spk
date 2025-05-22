import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { AssetTableComponent } from '../asset-table/asset-table.component';

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [ChartComponent, AssetTableComponent],
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.scss',
})
export class DetailCardComponent {}
