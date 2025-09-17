import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice.ts'
import wishlistReducer from "./slices/wishlistSlice.ts";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        wishlist: wishlistReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;

export default store;