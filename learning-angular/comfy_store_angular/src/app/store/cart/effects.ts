import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, tap, withLatestFrom } from "rxjs/operators";
import { addToCart, loadCartProducts, loadCartProductsSuccess, removeFromCart } from "./actions";
import { Store } from "@ngrx/store";
import { cartItemsSelector } from "./selectors";

@Injectable({
    providedIn: "root"
})
export class cartEffects {

    constructor(
        private actions$: Actions,
        private store: Store
    ) {}

    loadCartProducts$ = createEffect(() => (
        this.actions$.pipe(
            ofType(loadCartProducts),
            mergeMap(() => {
                const cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
                console.log(cartProducts);
                return of(loadCartProductsSuccess({ products: cartProducts}))
            })
        )
    ))

    saveCart$ = createEffect(() =>
        this.actions$.pipe(
          ofType(addToCart, removeFromCart),
          withLatestFrom(this.store.select(cartItemsSelector)),
          tap(([action, cartItems]) => {
            localStorage.setItem('cart', JSON.stringify(cartItems));
          })
        ), { dispatch: false }
    );
}