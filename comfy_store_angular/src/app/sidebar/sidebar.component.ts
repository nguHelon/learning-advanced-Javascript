import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { productInterface } from '../services/products.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCartProducts } from '../state/cart/cart.selectors';
import { clearCart, clearCartState, decreaseQuantity, increaseQuantity, loadCartProducts, removeProductFromCart } from '../state/cart/cart.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() closeSideBar: boolean = true;
  @Output() closeSideBarEvent = new EventEmitter<boolean>();
  cartProducts$: Observable<productInterface[]>;
  totalPrice: number = 0;

  constructor(private store: Store) {
    this.cartProducts$ = this.store.select(selectCartProducts)
  }

  totalPriceFunc() {
    this.cartProducts$.subscribe({
      next: (products) => {
        this.totalPrice = products.reduce((prevProduct, currentProduct) => prevProduct + (currentProduct.price * currentProduct.quantity), 0)
      }
    })
  }

  ngOnInit() {
    this.store.dispatch(loadCartProducts());
    this.cartProducts$.subscribe({
      next: (products) => console.log(products)
    })
    this.totalPriceFunc();
  }

  onCloseSideBar() {
    this.closeSideBarEvent.emit(true);
  }

  removeFromCart(id: number) {
    this.store.dispatch(removeProductFromCart({ id }));
  }

  increaseProductQuantity(cartProduct: productInterface) {
    this.store.dispatch(increaseQuantity({ updatedProduct: { ...cartProduct, quantity: cartProduct.quantity + 1 } }));
  }

  decreaseProductQuantity(cartProduct: productInterface) {
    this.store.dispatch(decreaseQuantity({ updatedProduct: { ...cartProduct, quantity: Math.max(cartProduct.quantity - 1, 1) } }));
  }

  clearCart() {
    this.store.dispatch(clearCart());
    this.store.dispatch(clearCartState());
  }

}
