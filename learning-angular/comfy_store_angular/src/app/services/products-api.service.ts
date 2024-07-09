import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private apiUrl = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl)
  }

  fetchProductsByCategory(category: string): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/category/${category}`)
  }
}
