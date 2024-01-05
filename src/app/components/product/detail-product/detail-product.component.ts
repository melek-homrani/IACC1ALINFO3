import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from 'src/app/core/data/data';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!: number;
  product!: Product
  constructor(private Act: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.Act.snapshot.params['id'];
    console.log(this.id);
    this.product = PRODUCTS.find((product) => product.id == this.id)!;
    console.log(this.product);
  }

  buy(product: Product): void {
    // Implement your buy logic here
  }

}
