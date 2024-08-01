import { createAction, props } from "@ngrx/store";
import { productInterface } from "src/app/services/products.service";

export const loadCartProducts = createAction(
    '[CART] load cart products'
)

export const loadCartPrductsSuccess = createAction(
    '[CART] load cart products success',
    props<{ products: productInterface[] }>()
)

export const loadCartProductsFailure = createAction(
    '[CART] load cart products failure',
    props<{ error: any }>()
)

export const addProductToCart = createAction(
    '[CART] add product to cart',
    props<{ product: productInterface}>()
)

export const removeProductFromCart = createAction(
    '[CART] remove product from cart',
    props<{ id: number }>()
)

export const increaseQuantity = createAction(
    '[CART] increase product quantity',
    props<{ updatedProduct: productInterface }>()
)

export const decreaseQuantity = createAction(
    '[CART] increase product quantity',
    props<{ updatedProduct: productInterface }>()
)

export const clearCart = createAction(
    '[CART] clear Cart'
)

export const clearCartState = createAction(
    '[CART] clear Cart state'
)