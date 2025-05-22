import { Component, Input } from '@angular/core';
import { Asset } from '../../core/models/asset.model';

@Component({
  selector: 'app-asset-table',
  standalone: true,
  imports: [],
  templateUrl: './asset-table.component.html',
  styleUrl: './asset-table.component.scss',
})
export class AssetTableComponent {
  @Input({ required: true }) tableData!: Asset[];
}
