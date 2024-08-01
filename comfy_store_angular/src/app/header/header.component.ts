import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { productInterface } from '../services/products.service';
import { selectCartProducts } from '../state/cart/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() closeSideBarEvent = new EventEmitter<boolean>();
  public cartProducts$: Observable<productInterface[]>;
  public cartProductsQuantity: number = 0

  constructor(private store: Store) {
    this.cartProducts$ = this.store.select(selectCartProducts);
  }

  onCloseSideBar() {
    this.closeSideBarEvent.emit(false);
  }

  ngOnInit() {
    this.cartProducts$.subscribe({
      next: (products) => {
        this.cartProductsQuantity = products.reduce((prevProduct, currentProduct) => prevProduct + currentProduct.quantity, 0);
      }
    })
  }

}
