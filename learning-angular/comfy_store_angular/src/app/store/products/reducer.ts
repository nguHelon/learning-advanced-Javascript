import { createReducer, on } from "@ngrx/store";
import { Products } from "../../services/models/products";
import { loadProducts, loadProductsByCategory, loadProductsFailure, loadProductsSuccess } from "./actions";

export interface ProductsInterface {
    products: Products[];
    isLoading: boolean;
    error: string | null;
}

export const initialState: ProductsInterface = {
    products: [],
    isLoading: false,
    error: null
}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state) => (
        { ...state, isLoading: true}
    )),
    on(loadProductsByCategory, (state) => (
        { ...state, isLoading: true}
    )),
    on(loadProductsSuccess, (state, { products }) => ({
        ...state,
        products,
        isLoading: false
    })),
    on(loadProductsFailure, (state, { error }) => ({
        ...state,
        error
    }))
)