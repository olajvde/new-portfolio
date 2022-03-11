import styles from "../styles/portfolio.module.css";
import { DiNodejs } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb, SiPostgresql } from "react-icons/si";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.headerh3}>SKills</h3>
      <h1 className={styles.headerh1}>My Stack</h1>
      <p className={styles.headerp}>
        I currently work with the MERN & PERN STACK <br />
        I have extensive programming experience and <br />I am comfortable
        developing on the frontend or backend <br /> as well as setting up or
        managing infrastructure.
      </p>
      <br />
      <br />
      <div className={styles.skills_tabs}>
        <div className={styles.tablet}>
          <DiNodejs style={{ fontSize: "100px", color: "#8f4066" }} />
          <h3 className={styles.tableth3}>NodeJS</h3>
          <p className={styles.tabletp}>
            I work majorly with Expressjs and Nestjs frameworks
          </p>
        </div>
        <div className={styles.tablet}>
          <GrReactjs style={{ fontSize: "70px", color: "#8f4066" }} />
          <h3 className={styles.tableth3}>ReactJS</h3>
          <p className={styles.tabletp}>
            I am an intermediate frontend dev. I can also work with Nextjs
          </p>
        </div>
      </div>
      <div className={styles.skills_tabs}>
        <div className={styles.tablet}>
          <SiMongodb style={{ fontSize: "70px", color: "#8f4066" }} />
          <h3 className={styles.tableth3}>MongoDB</h3>
          <p className={styles.tabletp}>I work majorly with MongoDB</p>
        </div>
        <div className={styles.tablet}>
          <SiPostgresql style={{ fontSize: "70px", color: "#8f4066" }} />
          <h3 className={styles.tableth3}>Postgresql</h3>
          <p className={styles.tabletp}>
            I am proficient in Postgres with a couple of ORMs
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Skills;
