import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        setArray: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { setArray } = cartSlice.actions;
export default cartSlice.reducer;