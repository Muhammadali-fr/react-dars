import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        qoshish: (state) => {
            state.value += 1
        },
        ayirish: (state) => {
            if (state.value <= 0) {
                state.value = 0
            } else {
                state.value -= 1
            }
        }
    }
})

export const { ayirish, qoshish } = counterSlice.actions;
export default counterSlice.reducer;