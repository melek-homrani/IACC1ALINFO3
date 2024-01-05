import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from 'src/app/core/data/data';
import { Product } from 'src/app/core/models/product';
import { ConsumerProductService } from 'src/app/services/consumer-product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!: number;
  product!: Product
  constructor(private Act: ActivatedRoute, private consumerProduct: ConsumerProductService) { }

  ngOnInit() {
    this.id = this.Act.snapshot.params['id'];
    console.log(this.id);
    this.consumerProduct.getProduct(this.id).subscribe((data) => {
      this.product = data;
    });
    console.log(this.product);
  }

  buy(product: Product): void {
    // Implement your buy logic here
  }

}
