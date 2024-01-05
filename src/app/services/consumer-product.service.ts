import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {
  products!: Product[];

  constructor(private http: HttpClient) {  }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProduct(id: number) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post('http://localhost:3000/products', product);
  }

  updateProduct(product: Product) {
    return this.http.put(`http://localhost:3000/products/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

}
