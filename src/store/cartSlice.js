import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // [{ id, name, price, itemCount }]
  },
  reducers: {
    addItems: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.itemCount += 1;
      } else {
        state.items.push({
          ...item,
          itemCount: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find((i) => i.id === item.id);

      if (!existingItem) return;

      if (existingItem.itemCount === 1) {
        state.items = state.items.filter((i) => i.id !== item.id);
      } else {
        existingItem.itemCount -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
