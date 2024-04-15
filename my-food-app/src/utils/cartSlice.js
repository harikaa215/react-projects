import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const initialState = {
    noOfItems : 0,
    items: [],
    totalPrice: 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        "addItem": (state, action) => {
            const {name, price} = action.payload;
            const quantity = 1
            state.noOfItems += 1
            state.items.push({name, price, quantity})
            state.totalPrice += price
        },
        "removeItem": (state, action) => {
            const {name, price} = action.payload;
            state.items = state.items.filter((item) => item.name !== name)
            console.log(state)
            state.totalPrice -= price
        },
        "clearCart": () => {
            console.log("Cleared cart")
            return initialState
        }
    }
})

export default cartSlice.reducer;

export const {addItem, removeItem, clearCart} = cartSlice.actions