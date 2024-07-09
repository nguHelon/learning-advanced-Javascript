import { createAction, props } from "@ngrx/store";
import { cartProduct } from "../../services/models/products";

export const loadCartProducts = createAction(
    "[Cart] Load Cart Products"
)

export const loadCartProductsSuccess = createAction(
    "[Cart] Load Cart Products Success",
    props<{ products: cartProduct[]}>()
);

export const addToCart = createAction(
    "[Cart] Add To Cart",
    props<{ product: cartProduct}>()
)

export const removeFromCart = createAction(
    "[Cart] Remove From Cart",
    props<{ productId: number}>()
)