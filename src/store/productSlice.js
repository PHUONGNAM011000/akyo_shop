import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    image1: true,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    imageScaled: '',
    description: true,
    info: true,
    liked: false,
  },
  reducers: {
    image1Changed(state) {
      state.image1 = true;
      state.image2 = false;
      state.image3 = false;
      state.image4 = false;
      state.image5 = false;
    },
    image2Changed(state) {
      state.image1 = false;
      state.image2 = true;
      state.image3 = false;
      state.image4 = false;
      state.image5 = false;
    },
    image3Changed(state) {
      state.image1 = false;
      state.image2 = false;
      state.image3 = true;
      state.image4 = false;
      state.image5 = false;
    },
    image4Changed(state) {
      state.image1 = false;
      state.image2 = false;
      state.image3 = false;
      state.image4 = true;
      state.image5 = false;
    },
    image5Changed(state) {
      state.image1 = false;
      state.image2 = false;
      state.image3 = false;
      state.image4 = false;
      state.image5 = true;
    },
    imageScaledChanged(state, action) {
      state.imageScaled = action.payload;
    },
    defaultProduct(state) {
      state.image1 = true;
      state.image2 = false;
      state.image3 = false;
      state.image4 = false;
      state.image5 = false;
      state.description = true;
      state.info = true;
      state.liked = false;
    },
    changedDescription(state) {
      state.description = !state.description;
    },
    changedInfo(state) {
      state.info = !state.info;
    },
    changedLiked(state) {
      state.liked = !state.liked;
    },
  },
});

export const actionsProduct = productSlice.actions;
export default productSlice.reducer;
