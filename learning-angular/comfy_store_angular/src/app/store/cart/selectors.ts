import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cartStateInterface } from "./reducer";

export const selectCartFeature = createFeatureSelector<cartStateInterface>("cart");

export const cartItemsSelector = createSelector(selectCartFeature, (state: cartStateInterface) => state.products);

export const cartTotalPriceSelector = createSelector(selectCartFeature, (state: cartStateInterface) => (
    state.products.reduce((total, item) => total + item.price, 0)
))