import { createAction, props } from "@ngrx/store";
import { productInterface } from "src/app/services/products.service";

export const loadProducts = createAction(
    '[PRODUCTS] load all products'
)

export const loadProductsByCategory = createAction(
    '[PRODUCTS] load products by category',
    props<{ category: string }>()
)

export const loadProductsSuccess = createAction(
    '[PRODUCTS] products load success',
    props<{products: productInterface[]}>()
)

export const loadProductsFailure = createAction(
    '[PRODUCTS] products load failure',
    props<{ error: string }>()
)