import { Component, Input, OnInit } from '@angular/core';
import { productInterface } from '../services/products.service';
import { Store } from '@ngrx/store';
import { addProductToCart, increaseQuantity, removeProductFromCart } from '../state/cart/cart.actions';
import { Observable } from 'rxjs';
import { selectCartProducts } from '../state/cart/cart.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  cartProductsObservable$: Observable<productInterface[]>
  cartProducts: productInterface[] = [];
  isIncart: boolean = false;

  @Input() product: productInterface = {    
    category: "men's clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: {rate: 3.9, count: 120},
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    quantity: 0
  }

  constructor(private store: Store) {
    this.cartProductsObservable$ = this.store.select(selectCartProducts);
  }

  ngOnInit() {
    this.isIncart = this.cartProducts.some((cartProduct) => this.product.id === cartProduct.id);
    this.cartProductsObservable$.subscribe({
      next: (products) => this.cartProducts = products,
    })
  }

  addProductToCart(cartProduct: productInterface) {    
    if(!this.isIncart) {
      this.store.dispatch(addProductToCart({ product: { ...cartProduct, quantity: 1 } }));
      this.isIncart = true;    
    }
  }

  removeFromCart(id: number) {
    console.log("removing from cart");
    this.store.dispatch(removeProductFromCart({ id }));
    this.isIncart = false;
  }
}
