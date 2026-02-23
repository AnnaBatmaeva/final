import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNewProducts } from '../../backend/requests';

export const fetchNew = createAsyncThunk(
  'newColectionBlock/fetch',
  async (params) => {
    return await getNewProducts(params);
  }
);

const newSlice = createSlice({
  name: 'newColectionBlock',
  initialState: {
    items: [],
    state: 'idle',
  },
  reducers: {
    clearNew(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNew.pending, (state) => {
        state.state = 'loading';
      })
      .addCase(fetchNew.fulfilled, (state, action) => {
        state.state = 'done';
        state.items = action.payload;
      });
  },
});

export const { clearNew } = newSlice.actions;
export default newSlice.reducer;