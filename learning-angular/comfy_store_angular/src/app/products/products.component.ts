import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Products, cartProduct } from '../services/models/products';
import { productsSelector } from '../store/products/selectors';
import { loadProducts } from '../store/products/actions';
import { addToCart, loadCartProducts } from '../store/cart/actions';
import { cartItemsSelector } from '../store/cart/selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products$: Observable<Products[]>;
  cartProducts$: Observable<cartProduct[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select(productsSelector);
    this.cartProducts$ = this.store.select(cartItemsSelector);
  }

  ngOnInit(): void {
    this.loadProducts();
    this.products$.subscribe({
      next: (data) => console.log(data)
    })
    this.cartProducts$.subscribe({
      next: (cartProducts) => console.log(cartProducts)
    })
  }

  loadProducts() {
    this.store.dispatch(loadProducts());
    this.store.dispatch(loadCartProducts());
    this.store.dispatch(addToCart({ product: {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
          rate: 4.6,
          count: 400
      },
      quantity: 1
  }}))
  }

}
