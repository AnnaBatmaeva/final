import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import productReducer from './slices/productSlice';
import filtersSlice from './slices/filtersSlice';
import recommendedSlice from './slices/recommendedSlice';
import newSlice from './slices/newSlice';
import userSlice from './slices/userSlice';



const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    filters: filtersSlice,
    recommended: recommendedSlice,
    newColectionBlock: newSlice,
    user: userSlice,
  },
});

export default store;