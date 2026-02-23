import { Link } from "react-router-dom";

import styles from "./productCard.module.scss";

function ProductCard({ title, price, image, brand, _id }) {
  return (
    <div className={styles.card}>
      <Link to={`/catalog/${_id}`}>
        <img className={styles.image} src={image} alt={title}></img>
        <div className={styles.card__info}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.price}>${price}</span>
          <div className={styles.block}>
            <p className={styles.brand}>{brand}</p>
            <button className={styles.button}>add to card</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;