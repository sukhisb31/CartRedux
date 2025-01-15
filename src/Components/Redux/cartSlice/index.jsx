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
            // Check if the item already exists in the cart
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                // If the item exists, increase the quantity by 1
                existingItem.quantity += 1;
            } else {
                // If the item doesn't exist, add it to the cart with quantity = 1
                state.items.push({ ...newItem, quantity: 1 });
            }

            // Recalculate total and count
            recalculateCart(state);
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0; // Reset total to zero
            state.count = 0; // Reset count to zero
        },
        incrementItem: (state, action) => {
            const myItem = action.payload;
            const item = state.items.find(item => item.id === myItem.id);

            if (item) {
                item.quantity += 1;
            }

            // Recalculate total and count
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
                    // Remove the item if quantity is 1
                    state.items.splice(itemIndex, 1);
                }

                // Recalculate total and count
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
