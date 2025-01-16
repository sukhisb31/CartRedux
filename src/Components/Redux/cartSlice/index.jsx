import { createSlice } from "@reduxjs/toolkit";

const recalculateCart = (state) => {
    state.total = state.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
            recalculateCart(state);
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0; 
            state.count = 0;
        },
        incrementItem: (state, action) => {
            const myItem = action.payload;
            const item = state.items.find(item => item.id === myItem.id);

            if (item) {
                item.quantity += 1;
            }
            recalculateCart(state);
        },
        decrementItem: (state, action) => {
            const myItem = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === myItem.id);

            if (itemIndex !== -1) {
                const item = state.items[itemIndex];

                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items.splice(itemIndex, 1);
                }
                recalculateCart(state);
            }
        },
    },
});

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartCount = (state) => state.cart.count;

export const { addToCart, clearCart, incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;
