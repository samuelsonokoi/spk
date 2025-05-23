import { Component, Input } from '@angular/core';
import { ASSET_STATUS } from '../../core/constants/asset-status.constants';
import { Asset } from '../../core/models/asset.model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @Input({ required: true }) chartData!: Asset[];
  ASSET_STATUS = ASSET_STATUS;

  getTotal = (riskBadge: string) => {
    return this.chartData.filter((data) => data.riskBadge === riskBadge).length;
  };
}
