import { cartStateInterface } from "./cart/reducer";
import { ProductsInterface } from "./products/reducer";

export interface storeInterface {
    products: ProductsInterface;
    cart: cartStateInterface
}