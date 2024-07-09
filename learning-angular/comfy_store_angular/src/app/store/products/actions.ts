import { createAction, props } from "@ngrx/store";
import { Products } from "../../services/models/products";

export const loadProducts = createAction(
    '[Products] Load Products'    
);

export const loadProductsByCategory = createAction(
    '[Products] Load Producst By Category',
    props<{ category: string}>()
)

export const loadProductsSuccess = createAction(
    '[Products] Get Products Success',
    props<{ products: Products[]}>()
)

export const loadProductsFailure = createAction(
    '[Products] Get Products Failure',
    props<{ error: string}>()
)