import Hero from './hero'
import NewCollection from '../../components/NewColection/NewColection'

import styles from './home.module.scss'

import sneakersImg from '../../assets/nike-air-max.png';
import instagramIcon from '../../assets/icons/socialMedia/Instagram.png';
import twitterIcon from '../../assets/icons/socialMedia/Twitter.png';
import whatsAppIcon from '../../assets/icons/socialMedia/WhatsApp.png';
import facebookIcon from '../../assets/icons/socialMedia/Facebook.png';



function Home() {
  return (
    <>
      <Hero />
      <NewCollection />

      <div className={styles.joinClubBlock}>
        <div className="content">
          <div className={styles.joinClubContentBlock}>
            <img src={sneakersImg} className={styles.sneakersImg}></img>
            <div className={styles.joinClubContentBlock__info}>
              <div className={styles.titles}>
                <h2>Get a 10% discount</h2>
                <h3>by joining our club</h3>
              </div>
              <div className={styles.socialMedia}>
                <h2>our official pages</h2>
                <img className={styles.icons} src={instagramIcon} alt="Instagram" />
                <img className={styles.icons} src={twitterIcon} alt="Twitter" />
                <img className={styles.icons} src={whatsAppIcon} alt="WhatsApp" />
                <img className={styles.icons} src={facebookIcon} alt="Facebook" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home