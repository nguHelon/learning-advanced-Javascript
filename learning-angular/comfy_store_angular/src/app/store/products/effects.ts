import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsApiService } from "../../services/products-api.service";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { loadProducts, loadProductsByCategory, loadProductsFailure, loadProductsSuccess } from "./actions";

@Injectable({
    providedIn: "root"
})
export class ProductsEffects {
    constructor(
        private actions$: Actions,
        private productsService: ProductsApiService
    ) {}

    loadProducts$ = createEffect(() => (
        this.actions$.pipe(
            ofType(loadProducts),
            mergeMap(() => (
                this.productsService.fetchProducts().pipe(
                    map(products => loadProductsSuccess({ products })),
                    catchError(error => of(loadProductsFailure(error)))
                )
            ))
        )
    ));

    loadByProductsByCategory$ = createEffect(() => (
        this.actions$.pipe(
            ofType(loadProductsByCategory),
            mergeMap(action => (
                this.productsService.fetchProductsByCategory(action.category).pipe(
                    map(products => loadProductsSuccess({ products })),
                    catchError(error => of(loadProductsFailure(error)))
                )
            ))
        )
    ))
}