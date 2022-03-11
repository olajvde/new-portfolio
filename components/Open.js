import styles from  '../styles/portfolio.module.css'
import {BiEnvelope} from 'react-icons/bi'

const Open = () => {
  return (
    <div className={styles.open}>
        <h3 className={styles.openh3}>Hire me</h3>
        <h1 className={styles.openh1} data-text="Open To Work"> Open To Work</h1>
        <p className={styles.openp}>I am currently a freelancer<br /> But I would love to join your team <br /> If you would have me 🙈</p>
        <button className={styles.openButton}>Email Me  <BiEnvelope /></button>
    </div>
  )
}

export default Open