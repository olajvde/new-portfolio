import styles from "../styles/portfolio.module.css";
import image from "../public/image01.svg";
import Image from "next/image";
import {BiRightArrowAlt} from 'react-icons/bi'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_info}>
        <h3 className={styles.headerh3}>Bio</h3>
        <h1 className={styles.abouth1} data-text="Education">Education</h1>
        <p className={styles.aboutp}>
          I have a diploma in Computer Science.
          <br />and a Bsc. in Information Technology
        </p>
        <button className={styles.about_button}>Contact me <BiRightArrowAlt /> </button>
      </div>
      <div
        style={{ borderRadius: "20px", overflow: "hidden" }}
        className={styles.about_img}
      >
        <Image src={image} alt="hmm" height={600} objectFit="cover" />
      </div>
    </div>
  );
};

export default About;
