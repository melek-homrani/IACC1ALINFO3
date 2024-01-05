import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  template: `<p>Your item is: {{ childItem }} </p>`,
})
export class ItemDetailComponent {
  @Input() childItem = '';


  currentItem = 'bananas in boxes';
}
