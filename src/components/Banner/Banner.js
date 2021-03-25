import styles from './banner.module.scss'
import svg1 from '../../assets/images/undraw_1.svg'
import svg2 from '../../assets/images/undraw_2.svg'
import Button from '../Button/Button'

const Banner = () => {
  return (
    <div className={styles.BannerContainer}>
      <div className={styles.Banner}>
        <div className={styles.Banner__contentBox}>
          <h1>Websites that stands out from the rest</h1>
          <p>High quality websites that you will love</p>
          <Button style={{ marginTop: '15px' }}>Learn more</Button>
        </div>
        <img className={styles.Graphics1} src={svg1} alt="Graphics 1" />
        <img className={styles.Graphics2} src={svg2} alt="Graphics 2" />
      </div>
    </div>
  )
}

export default Banner
