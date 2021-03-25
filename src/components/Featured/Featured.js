import styles from './featured.module.scss'
import svg3 from '../../assets/images/undraw_3.svg'
import Button from '../Button/Button'

const Featured = ({ ...props }) => {
  return (
    <div className={styles.Featured} {...props}>
      <div className={styles.Featured__image}>
        <img src={svg3} alt="Graphics 3" />
      </div>
      <div className={styles.Featured__content}>
        <div className={styles.Featured__contentContainer}>
          <div className={styles.Featured__contentTag}>FEATURED</div>
          <h2 className={styles.Featured__contentTitle}>Check out our engineering blog</h2>
          <Button>Read now</Button>
        </div>
      </div>
    </div>
  )
}

export default Featured
