import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../slices/productSlice";
import Products from "../../components/Products/Products";
import Loader from "../../components/States/Loader";
import ErrorMessage from "../../components/States/ErrorMessage";
import styles from "./productPage.module.scss";
import { fetchRecommended } from '../../slices/recommendedSlice';

function ProductPage() {
  const { _id } = useParams();
  const productState = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const recommended = useSelector(state => state.recommended.items);

  useEffect(() => {
    if (!productState.product._id || productState.product._id !== _id) {
      dispatch(fetchProduct(_id));
    }
  }, [_id, dispatch, productState.product._id]);

  useEffect(() => {
    document.title = productState.product.title || "Product";
  }, [productState.product.title]);

  useEffect(() => {
    if (productState.product?._id) {
      dispatch(
        fetchRecommended({
          brand: productState.product.brand,
          gender: productState.product.gender,
          excludeId: productState.product._id,
          limit: 5,
        })
      );
    }
  }, [productState.product?._id, dispatch]);

  if (productState.error) return <ErrorMessage errorText={productState.error} />;
  if (productState.state === "loading") return <Loader />;
  if (!productState.product._id || productState.product._id !== _id) return <Loader />;

  return (
    <>
      <div className={styles.productPageBlock}>
        <div className="content">
          <div className={styles.productPageContentBlock}>
            <div className={styles.productPageContentBlock__image}>
              <img src={productState.product.image} alt={productState.product.title} />
            </div>
            <div className={styles.productPageContentBlock__info}>
              <h3 className={styles.brand}>{productState.product.brand}</h3>
              <h1 className={styles.title}>{productState.product.title}</h1>
              <button className={styles.button}>BUY NOW - ${productState.product.price}</button>
              <div className={styles.aboutProduct}>
                <h2 className={styles.aboutProduct__title}>About this product</h2>
                <p className={styles.aboutProduct__description}>{productState.product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.recommendedBlock}>
        <div className="content">
          <h1 className={styles.recommendedBlock__title}>Recommended For You</h1>
          <Products products={recommended} />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
