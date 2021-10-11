import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsCount: 1,
    items: [
        {
            name: "Item name",
            price: 14.99,
            count: 1
        }
    ]
};

const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        add_item(state, action) {
        },
        remove_item(state, action) {
        }
    }
});

export const { add_item, remove_item } = BasketSlice.actions;

export default BasketSlice.reducer;
