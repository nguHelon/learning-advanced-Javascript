import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { mergeMap, tap, withLatestFrom } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { selectCartProducts } from "./cart.selectors";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addProductToCart, clearCart, decreaseQuantity, increaseQuantity, loadCartPrductsSuccess, loadCartProducts, loadCartProductsFailure, removeProductFromCart } from "./cart.actions";

@Injectable()
export class cartEffects {

    constructor(
        private cartService: CartService, 
        private store: Store,
        private actions$: Actions
    ) {}

    loadCartProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCartProducts),
            mergeMap(() => 
                this.cartService.get('cart').then(
                    (products) => loadCartPrductsSuccess({ products: products || [] }),
                    (error) => loadCartProductsFailure({ error })
                )
            )
        )
    )

    saveCartProducts$ = createEffect(() => 
        this.actions$.pipe(
            ofType(addProductToCart, removeProductFromCart, increaseQuantity, decreaseQuantity),
            withLatestFrom(this.store.select(selectCartProducts)),
            tap(([_, products]) => {
                console.log("effect")
                this.cartService.set('cart', products)
            })
        ),
        { dispatch: false }
    )

    clearCart$ = createEffect(() => 
        this.actions$.pipe(
            ofType(clearCart),
            tap(() => {
                this.cartService.clear();
            })
        ),
        { dispatch: false}
    )
}