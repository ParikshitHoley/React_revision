import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./cartSlice";
import ProductReducer from "./productSlice"
const store = configureStore({
    reducer:{
        cart : CartReducer,
        products: ProductReducer
    }
});

export default store;