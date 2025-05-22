import { Component } from '@angular/core';
import { ChartLegend } from '../../core/models/chart-lengend.model';
import { ASSET_STATUS } from '../../core/constants/asset-status.constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgClass],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  legend: ChartLegend[] = [
    {
      riskNumber: 2,
      status: ASSET_STATUS.CRITICAL,
    },
    {
      riskNumber: 0,
      status: ASSET_STATUS.HIGH,
    },
    {
      riskNumber: 0,
      status: ASSET_STATUS.MEDIUM,
    },
    {
      riskNumber: 0,
      status: ASSET_STATUS.LOW,
    },
  ];
  ASSET_STATUS = ASSET_STATUS;
}
