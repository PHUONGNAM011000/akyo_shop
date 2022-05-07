import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
