import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRecommendedProducts } from '../../backend/requests';

export const fetchRecommended = createAsyncThunk(
  'recommended/fetch',
  async (params) => {
    return await getRecommendedProducts(params);
  }
);

const recommendedSlice = createSlice({
  name: 'recommended',
  initialState: {
    items: [],
    state: 'idle',
  },
  reducers: {
    clearRecommended(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommended.pending, (state) => {
        state.state = 'loading';
      })
      .addCase(fetchRecommended.fulfilled, (state, action) => {
        state.state = 'done';
        state.items = action.payload;
      });
  },
});

export const { clearRecommended } = recommendedSlice.actions;
export default recommendedSlice.reducer;