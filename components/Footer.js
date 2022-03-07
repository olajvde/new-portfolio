import styles from "../styles/portfolio.module.css";
import { FiTwitter, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerp}>© Olajvde. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://twitter.com/olajvde" target='_blank' rel="noreferrer"><FiTwitter /> </a>
        
        <a href="https://github.com/olajvde" target='_blank' rel="noreferrer"><FiGithub /></a>
      </div>
    </div>
  );
};

export default Footer;
