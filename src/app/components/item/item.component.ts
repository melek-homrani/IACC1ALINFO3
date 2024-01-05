import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  itemImageUrl: string = '../assets/phone.svg';
  isUnchanged: boolean = true;
  classes: string = 'special';
  parentItem: string = 'lamp';

  currentItems = [
    {
      id: 21,
      name: 'phone',
    },
  ];

  interpolationTitle: string = 'Interpolation';
  propertyTitle: string = 'Property binding';

  evilTitle: string = 'Template <script>alert("evil never sleeps")</script> Syntax';
}
