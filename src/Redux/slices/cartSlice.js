import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {items: []},

  reducers: {
    cartItemUpdate: (state, action) => {
      state.items = action.payload;
    },
    decreaseCartItemQuantity: state => {
      if (state.items > 0) {
        state.items -= 1;
      }
    },
  },
});

export const {cartItemUpdate, decreaseCartItemQuantity, resetCartItems} =
  cartSlice.actions;

export default cartSlice.reducer;
