import styles from  '../styles/portfolio.module.css'
import {GiQuickMan} from 'react-icons/gi'


const Profile = () => {
  return (
    <div className={styles.profile}>
        <div className={styles.profileCard}>
        <GiQuickMan style={{fontSize: '100px', color:'white'}} />
        <h3 className={styles.profileCardh3}>Backend Man</h3>
        <h2 className={styles.profileCardh2}>Olajvde</h2>
        <p className={styles.profileCardp}>NodeJS Enthusiast<br /> Finisher of Oha Soup <br /> Persecutor of Semo Lovers</p>
        </div>
        
    </div>
  )
}

export default Profile