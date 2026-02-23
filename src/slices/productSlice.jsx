import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProduct } from '../../backend/requests';

const initialState = {
    product: [],
    state: 'idle',
    error: null,
};

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (id) => {
    const response = await getProduct(id);
    console.log(response)

    return response;
});


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.state = 'loading';
                state.error = null; 
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.state = 'done';
                state.product =
                    action.payload; 
                state.error = null; 
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.state = 'done';
                state.error = action.error.message; 
            })
    }
});

export default productSlice.reducer;