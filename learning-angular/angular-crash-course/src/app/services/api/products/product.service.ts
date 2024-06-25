import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getAllProductsWithLimit(limit: number = 5) {
    const productsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<ProductRepresentation[]>(productsUrl)
  }

  createProduct(product: ProductRepresentation) {
    const productsUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }
}
