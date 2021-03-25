import Banner from '../../components/Banner/Banner'
import Featured from '../../components/Featured/Featured'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className="container">
        <Banner />
        <Featured style={{marginTop: '40px'}} />
      </div>
    </div>
  )
}

export default Home
