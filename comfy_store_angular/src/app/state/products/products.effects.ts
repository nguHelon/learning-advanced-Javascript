import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "src/app/services/products.service";
import { loadProducts, loadProductsByCategory, loadProductsFailure, loadProductsSuccess } from "./products.actions";
import { catchError,  map,  mergeMap, of } from "rxjs";

@Injectable()
export class productsEffects {

    constructor(private productsService: ProductsService, private actions$: Actions) {}

    loadProductsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProducts),
            mergeMap(() => (
                this.productsService.fetchProducts().pipe(
                    map(products => loadProductsSuccess({ products })),
                    catchError(error => of(loadProductsFailure({ error })))
                )
            ))
        )
    )

    loadProductsByCategoryEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProductsByCategory),
            mergeMap((actions) => (
                this.productsService.fetchProductsByCategory(actions.category).pipe(
                    map(products => loadProductsSuccess({ products })),
                    catchError(error => of(loadProductsFailure({ error })))
                )
            ))
        )
    )
}