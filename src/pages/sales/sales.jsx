import { Link } from "react-router-dom";

import styles from "./sales.module.scss"

import sneakersTitle from '../../assets/sneakers.png';


function Sales() {

  return (
    <>
      <div className={styles.introBlock}>
        <img className={styles.introBlock__sneakersLeft} src={sneakersTitle} alt="Sneakers left" />
        <h1>Big sale every day</h1>
        <img className={styles.introBlock__sneakersRight} src={sneakersTitle} alt="Sneakers right" />
      </div>
      <div className={styles.salesBlock}>
        <div className="content">
          <div className={styles.grid}>
            <div className={`${styles.grid__item} ${styles.grid__big} ${styles.club}`}>
              <div className={styles.content}>
                <h2 className={styles.title}>10% discount</h2>
                <Link to="/account">
                  <button className={styles.button}>Registration</button>
                </Link>
                <p className={styles.subtitle}>by joining our club</p>
              </div>
            </div>
            <Link to="/catalog?collection=sport">
              <div className={`${styles.grid__item} ${styles.sport}`}>
                <span>Sport sale</span>
              </div>
            </Link>
            <Link to="/catalog?collection=winter">
              <div className={`${styles.grid__item} ${styles.winter}`}>
                <span>Winter sale</span>
              </div>
            </Link>
            <Link to="/catalog?collection=summer">
              <div className={`${styles.grid__item} ${styles.summer}`}>
                <span>Summer sale</span>
              </div>
            </Link>
            <Link to="/catalog?collection=brand">
              <div className={`${styles.grid__item} ${styles.brand}`}>
                <span>Brand sale</span>
              </div>
            </Link>
          </div>
        </div>
      </div >
    </>
  )
}

export default Sales