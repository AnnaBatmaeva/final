import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../../slices/productsSlice';

import Loader from "../States/Loader";
import ErrorMessage from "../States/ErrorMessage";

import ProductCard from "../ProductCard/ProductCard";

import styles from './products.module.scss'



function Products({ products: externalProducts }) {
  const productsState = useSelector(state => state.products);
  const dispatch = useDispatch();

  const products = externalProducts ?? productsState.products ?? [];

  useEffect(() => {
    if (!externalProducts && !productsState.products.length) {
      dispatch(fetchProducts());
    }
  }, [externalProducts, productsState.products.length, dispatch]);

  return (
    <div className={styles.productsGrid}>
      {products.map(item => (
        <ProductCard key={item._id} {...item} />
      ))}
    </div>
  );
}

export default Products;