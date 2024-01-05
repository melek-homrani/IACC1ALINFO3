import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList!: Product[];

  constructor() { }

}
