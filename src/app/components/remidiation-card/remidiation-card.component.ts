import { Component, Input } from '@angular/core';
import { Remidiation } from '../../core/models/remidiation.model';

@Component({
  selector: 'app-remidiation-card',
  standalone: true,
  imports: [],
  templateUrl: './remidiation-card.component.html',
  styleUrl: './remidiation-card.component.scss',
})
export class RemidiationCardComponent {
  @Input({ required: true }) server!: Remidiation;

  toggleDescriptionVisibility = () => {
    this.server.visible = !this.server.visible;
  };
}
