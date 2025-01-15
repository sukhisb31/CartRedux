import { createSlice } from "@reduxjs/toolkit";

export const  cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload;
            state.items.push(newItem)
        },
        clearCart:(state)=>{
            state.items = [];
        }
    }
})

export const selectCartItems = (state) =>state.cart.items

export const { addToCart, clearCart } = cartSlice.actions

export default cartSlice.reducer