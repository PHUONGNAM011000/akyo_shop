import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer,
  },
});

export default store;
