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
    }
})

export const selectCartItems = (state) =>state.cart.items

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer