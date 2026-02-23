import styles from './home.module.scss';
import Slider from '../../components/Slider/slider.jsx'

import Slide1 from './slides/slide1.jsx'

function Hero() {

    return (
        <section className={styles.heroBlock}>
            <Slider autoPlayInterval={3000}>
                <Slide1 />
                <Slide1 />
            </Slider>
        </section>
    )
}

export default Hero