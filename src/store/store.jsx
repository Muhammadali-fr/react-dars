import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './feature/countSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})