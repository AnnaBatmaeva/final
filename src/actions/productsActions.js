export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_PRODUCTS_FINISHED = 'FETCH_PRODUCTS_FINISHED';

export function fetchProductsStart() { return { type: FETCH_PRODUCTS_START } };
export function fetchProductsSuccess(products) { return { type: FETCH_PRODUCTS_SUCCESS, payload: products } };
export function fetchProductsError(error) { return { type: FETCH_PRODUCTS_ERROR, payload: error } };
export function fetchProductsFinished() { return { type: FETCH_PRODUCTS_FINISHED } };