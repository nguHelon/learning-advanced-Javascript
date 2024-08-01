import { createReducer, on } from "@ngrx/store";
import { productInterface } from "src/app/services/products.service";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./products.actions";

export interface productsStateInterface {
    products: productInterface[],
    loading: boolean,
    error: any
}

const initialState: productsStateInterface = {
    products: [],
    loading: false,
    error: null
}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state) => ({ ...state, loading: true})),
    on(loadProductsSuccess, (state, { products }) => ({
        ...state,
        products: [...products]
    })),
    on(loadProductsFailure, (state, { error }) => ({
        ...state,
        error
    }))
)