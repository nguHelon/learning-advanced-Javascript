import { createReducer, on } from "@ngrx/store"
import { productInterface } from "src/app/services/products.service"
import { addProductToCart, clearCartState, decreaseQuantity, increaseQuantity, loadCartPrductsSuccess, loadCartProductsFailure, removeProductFromCart } from "./cart.actions"

export interface CartInterface {
    products: productInterface[],
    error: any
}

const initialState: CartInterface = {
    products: [],
    error: null
}
export const cartReducer = createReducer(
    initialState,
    on(loadCartPrductsSuccess, (state, { products }) => ({ ...state, products })),
    on(loadCartProductsFailure, (state, { error }) => ({ ...state, error })),
    on(addProductToCart, (state, { product }) => ({
        ...state,
        products: [...state.products, product]
    })),
    on(removeProductFromCart, (state, { id }) => ({
        ...state,
        products: state.products.filter((product) => product.id !== id)
    })),
    on(increaseQuantity, (state, { updatedProduct }) => ({
        ...state,
        products: state.products.map((product) => updatedProduct.id === product.id ? updatedProduct : product)
    })),
    on(decreaseQuantity, (state, { updatedProduct }) => ({
        ...state,
        products: state.products.map((product) => product.id === updatedProduct.id ? updatedProduct : product)
    })),
    on(clearCartState, (state) => ({
        ...state,
        products: []
    }))
)