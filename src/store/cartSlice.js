import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productCart: [],
    totalAmount: 0,
  },
  reducers: {
    addCart(state, action) {
      const newProduct = action.payload;
      const ixdExistingCart = state.productCart.findIndex(
        (item) => item.id === newProduct.id
      );

      if (ixdExistingCart !== -1) {
        state.productCart[ixdExistingCart].quality++;
      } else {
        state.productCart.push({
          ...newProduct,
          quality: 1,
        });
      }
      state.totalAmount += newProduct.price;
    },
    deleteCart(state, action) {
      const idRemoveProduct = state.productCart.findIndex(
        (item) => item.id === action.payload
      );

      state.totalAmount -=
        state.productCart[idRemoveProduct].price *
        state.productCart[idRemoveProduct].quality;

      state.productCart = state.productCart.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const actionsCart = cartSlice.actions;
export default cartSlice.reducer;
