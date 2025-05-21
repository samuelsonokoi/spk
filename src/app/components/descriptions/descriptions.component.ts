import { Component } from '@angular/core';
import { Remidiation } from '../../core/models/remidiation.model';
import { RemidiationCardComponent } from '../remidiation-card/remidiation-card.component';

@Component({
  selector: 'app-descriptions',
  standalone: true,
  imports: [RemidiationCardComponent],
  templateUrl: './descriptions.component.html',
  styleUrl: './descriptions.component.scss',
})
export class DescriptionsComponent {
  servers: Remidiation[] = [
    {
      title: 'Lorem P',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.',
      icon: 'images/server.svg',
      visible: false,
    },
    {
      title: 'Lorem S',
      description:
        'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
      icon: 'images/server.svg',
      visible: false,
    },
    {
      title: 'Lorem T',
      description:
        'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.',
      icon: 'images/server.svg',
      visible: false,
    },
  ];
}
