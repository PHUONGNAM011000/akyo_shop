import { createSlice } from '@reduxjs/toolkit';
import { DATA_PRODUCT } from '../Data/product';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    productHome: DATA_PRODUCT,
  },
  reducers: {},
});

export const actionsHome = homeSlice.actions;
export default homeSlice.reducer;
