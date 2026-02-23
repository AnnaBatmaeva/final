import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    brand: [],
    gender: [],
    priceFrom: '',
    priceTo: '',
    appliedPriceFrom: '',
    appliedPriceTo: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setBrand(state, action) {
            state.brand = action.payload;
        },
        setGender(state, action) {
            state.gender = action.payload;
        },
        resetFilters() {
            return initialState;
        },
        setPriceFrom(state, action) {
            state.priceFrom = action.payload;
        },
        setPriceTo(state, action) {
            state.priceTo = action.payload;
        },
        applyPriceFilter(state) {
            state.appliedPriceFrom = state.priceFrom;
            state.appliedPriceTo = state.priceTo;
        }
    },
});

export const {
    setBrand,
    setGender,
    resetFilters,
    setPriceFrom,
    setPriceTo,
    applyPriceFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
