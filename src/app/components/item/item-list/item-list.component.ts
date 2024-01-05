import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { ITEMS } from 'src/app/core/data/data';
import { Item } from 'src/app/core/models/item';

@Component({
  selector: 'app-item-list',
  template: `
    <h4>Nested component's list of items:</h4>
    <ul>
      <li *ngFor="let item of listItems">{{item.id}} {{item.name}}</li>
    </ul>

    <h4>Pass an object from parent to nested component:</h4>
    <ul>
      <li *ngFor="let item of items">{{item.id}} {{item.name}}</li>
    </ul>
  `,
})
export class ItemListComponent {
  listItems = ITEMS;
  @Input() items: Item[] = [];

}

