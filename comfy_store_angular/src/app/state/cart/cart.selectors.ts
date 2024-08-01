import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartInterface } from "./cart.reducer";

export const selectCartState = createFeatureSelector<CartInterface>('cart');

export const selectCartProducts = createSelector(
    selectCartState,
    (state) => state.products
)

export const selectCartError = createSelector(
    selectCartState,
    (state) => state.error
)