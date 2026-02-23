import styles from './slide1.module.scss'
import sneakers from '../../../assets/slide1/PNG.png'
import shape from '../../../assets/slide1/Shape.png'

function Slide1() {
    return (
        <div className={styles.heroContentBlock}>
            <div className={styles.heroContentBlock__left}>
                <h1 className={styles['heroContentBlock__title--left']}>New Collection</h1>
                <img className={styles.heroContentBlock__imgShape} src={shape}></img>
                <img className={styles.heroContentBlock__imgSneakers} src={sneakers}></img>

            </div>
            <div className={styles.heroContentBlock__right}>
                <h1 className={styles['heroContentBlock__title--right']}>New Season</h1>
                <p className={styles['heroContentBlock__text--right']}>New collection Inspired by New Lifestyle <span className={styles['heroContentBlock__textMonth--right']}>mar</span> <span className={styles['heroContentBlock__textYear--right']}>2026</span></p>
                <h1 className={styles['heroContentBlock__titleBottom--right']}>Sneakers</h1>



            </div>
            <button className={styles.heroContentBlock__button}>See more</button>

            
        </div>

    )
}

export default Slide1
