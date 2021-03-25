import styles from './button.module.scss'

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  )
}

export default Button
