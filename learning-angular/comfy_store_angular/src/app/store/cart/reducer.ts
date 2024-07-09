import { createReducer, on } from "@ngrx/store";
import { addToCart, loadCartProducts, loadCartProductsSuccess, removeFromCart } from "./actions";
import { cartProduct } from "../../services/models/products";

export interface cartStateInterface {
    products: cartProduct[];
}

export const initialState: cartStateInterface = {
    products: []
}

export const cartReducer = createReducer(
    initialState,
    on(loadCartProductsSuccess, (_, { products }) => (
        { products }
    )),
    on(addToCart, (state, { product }) => ({
        ...state,
        products: [...state.products, product]        
    })),
    on(removeFromCart, (state, { productId }) => ({
        ...state,
        products: state.products.filter(product => productId !== product.id)
    }))
)