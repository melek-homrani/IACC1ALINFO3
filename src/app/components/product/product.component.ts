import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { PRODUCTS } from 'src/app/core/data/data';
import { ConsumerProductService } from 'src/app/services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  price!: number;

  displayedColumns: string[] = ['id','title', 'price', 'quantity', 'like', 'description', 'actions'];

  dataSource!: Product[];

  constructor(private consumerProductService: ConsumerProductService) {
    this.consumerProductService.getProducts().subscribe((data) => {
      this.dataSource = data;
    });
  }

  increment(product: Product) {
    this.dataSource.filter((item) => item.id === product.id)[0].like++;
  }
  buy(product: Product) {
    this.dataSource.filter((item) => item.id === product.id)[0].quantity--;
  }
}
