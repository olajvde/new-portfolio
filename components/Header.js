import styles from '../styles/portfolio.module.css'
import {BiRightArrowAlt} from 'react-icons/bi'
import image from '../public/stardust.png'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.headerh3}>Full Stack Dev</h3>
        <h1 className={styles.headerh1}>Olajide</h1>
        <p className={styles.headerp}>I am a Web Developer and Programmer.<br /> I make Web applications, usually with Javascript.</p>
        <div>
            <form className={styles.headerform}>
                <input className={styles.headerform_input} placeholder='Email Address' type="email" required/>
                <button className={styles.headerform_button}>Send <BiRightArrowAlt /></button>
            </form>
        </div>
    </div>
  )
}

export default Header 