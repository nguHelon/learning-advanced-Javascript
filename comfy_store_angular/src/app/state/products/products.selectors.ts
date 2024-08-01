import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productsStateInterface } from "./products.reducers";

export const selectProductsState = createFeatureSelector<productsStateInterface>('products');

export const selectProducts = createSelector(
    selectProductsState,
    (state: productsStateInterface) => state.products
)

export const selectStateError = createSelector(
    selectProductsState,
    (state: productsStateInterface) => state.error
)