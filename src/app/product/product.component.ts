import { Component } from '@angular/core';
import { Product } from '../core/models/product';
import { MatTableDataSource } from '@angular/material/table';

const listProducts: Product[] = [
  { id: 1, title: 't-shirt 1', price: 50, quantity: 10, like: 0, description: "test" },
  { id: 2, title: 't-shirt 2', price: 30, quantity: 5, like: 0, description: "test" },
  { id: 3, title: 't-shirt 3', price: 20, quantity: 0, like: 5, description: "test" }
]

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  price!: number;

  displayedColumns: string[] = ['id','title', 'price', 'quantity', 'like'];

  dataSource = listProducts;

  increment(i: number) {
    this.dataSource[i].like++;
  }
  buy(i: number) {
    this.dataSource[i].quantity--;
  }
}
