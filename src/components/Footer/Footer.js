import { useState, useEffect } from 'react'
import styles from './footer.module.scss'
import Switch from "react-switch";

const Footer = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    changeTheme(theme)
    theme === 'dark' ? setChecked(true) : setChecked(false);
  }, [])

  const changeTheme = (theme) => {
    if(theme === 'dark') {
      document.documentElement.style.setProperty('--background-color', '#111');
      document.documentElement.style.setProperty('--text-color', '#fff');
    } else {
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--text-color', '#111');
    }
  }

  const handleChange = (checked) => {
    setChecked(checked);
    const theme = checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    changeTheme(theme);
  }

  return (
    <div className={styles.Footer}>
      <div className="container">
        <Switch 
          onChange={handleChange} 
          checked={checked} 
          onColor={'#8D50F0'} 
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
    </div>
  )
}

export default Footer
