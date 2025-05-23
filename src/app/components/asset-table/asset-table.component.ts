import { Component, Input } from '@angular/core';
import { Asset } from '../../core/models/asset.model';
import { NgClass } from '@angular/common';
import { ASSET_STATUS } from '../../core/constants/asset-status.constants';

@Component({
  selector: 'app-asset-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './asset-table.component.html',
  styleUrl: './asset-table.component.scss',
})
export class AssetTableComponent {
  @Input({ required: true }) tableData!: Asset[];
  ASSET_STATUS = ASSET_STATUS;
}
