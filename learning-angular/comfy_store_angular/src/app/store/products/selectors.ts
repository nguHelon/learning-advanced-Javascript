import { createFeatureSelector, createSelector } from "@ngrx/store";
import { storeInterface } from "../storeModel";
import { ProductsInterface } from "./reducer";

// export const selectFeature = (state: storeInterface) => state.products;

export const selectFeature = createFeatureSelector<ProductsInterface>('products');

export const productsSelector = createSelector(
    selectFeature,
    (state: ProductsInterface) => state.products
)

export const isLoadingSelector = createSelector(
    selectFeature,
    (state: ProductsInterface) => state.isLoading
)

export const errorSelector = createSelector(
    selectFeature,
    (state: ProductsInterface) => state.error
)