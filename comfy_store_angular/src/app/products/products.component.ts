import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, delay, Observable } from 'rxjs';
import { productInterface, ProductsService } from '../services/products.service';
import { selectProducts } from '../state/products/products.selectors';
import { loadProducts, loadProductsByCategory } from '../state/products/products.actions';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  productsObservable$: Observable<productInterface[]>
  products: productInterface[] = [];
  allCategories$: Observable<string[]>

  constructor(private store: Store, private productService: ProductsService) {
    this.productsObservable$ = this.store.select(selectProducts);
    this.allCategories$ = this.productService.fetchAllCategories();
  }

  ngOnInit(): void {
    this.loadProducts();
    this.productsObservable$.subscribe({
      next: (products) => this.products = products
    });    
  }

  onSearch(searchInput: NgModel) {
    console.log("hello")
    this.productsObservable$.subscribe({
      next: (products) => this.products = products.filter((product) => product.title.toLowerCase().includes(searchInput.value.toLowerCase()))
    })
  }

  loadProducts() {
    this.store.dispatch(loadProducts());
  }

  loadProductsByCategory(category: string) {
    if (category === 'All') this.store.dispatch(loadProducts());
    else this.store.dispatch(loadProductsByCategory({ category }));
  }

}
