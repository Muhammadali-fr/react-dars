import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './feature/countSlice';
import cartSlice from './feature/cartSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart:cartSlice
    }
})