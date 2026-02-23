import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_FINISHED,
} from '../actions/productsActions.js';

const initialState = {
    products: [],
    loading: true,
    error: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload, 
            };

        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload, 
            };

        case FETCH_PRODUCTS_FINISHED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}

export default productsReducer;

