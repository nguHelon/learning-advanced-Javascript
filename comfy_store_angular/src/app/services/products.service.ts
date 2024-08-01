import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface productInterface {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number,
    rate: number
  };
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<productInterface[]> {
    console.log("fetchProducts service")
    return this.http.get<productInterface[]>(`${this.apiUrl}?limit=10`);
  }

  fetchProductsByCategory(category: string): Observable<productInterface[]> {
    return this.http.get<productInterface[]>(`${this.apiUrl}/category/${category}`);
  }

  fetchAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }
}
