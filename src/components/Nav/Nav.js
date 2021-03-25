import styles from './nav.module.scss'
import { NavLink  } from 'react-router-dom'

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <NavLink className={styles.Nav__link} activeClassName={styles.Nav__linkActive} to="/home">
        Home
        <div className={styles.Nav__linkDot}></div>
      </NavLink>
      <NavLink className={styles.Nav__link} activeClassName={styles.Nav__linkActive} to="/about">
        About
        <div className={styles.Nav__linkDot}></div>
      </NavLink>
      <NavLink className={styles.Nav__link} activeClassName={styles.Nav__linkActive} to="/blog">
        Blog
        <div className={styles.Nav__linkDot}></div>
      </NavLink>
      <NavLink className={styles.Nav__link} activeClassName={styles.Nav__linkActive} to="/contact">
        Contact
        <div className={styles.Nav__linkDot}></div>
      </NavLink>
    </div>
  )
}

export default Nav
