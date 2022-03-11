import styles from "../styles/portfolio.module.css";
import { BiGitRepoForked } from "react-icons/bi";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <hr />

      <br />
      <br />
      <h1 className={styles.projectsh1} data-text="My Work">My Work</h1>
      <p className={styles.projectsp}>
        Below are some projects i worked
        <br /> personally on ✌😎
      </p>
      <br />
      <br />

      <div className={styles.projects_cards}>
        <div className={styles.projects_card1}>
          <h3 className={styles.projects_cardh3}>File uploads</h3>
          <h1 className={styles.projects_cardh1}>File Share</h1>
          <h3 className={styles.projects_cardSub}>
            Share Files (Like `WeTransfer`)
          </h3>
          <p className={styles.projects_cardp}>
            Built with NextJS, Typescript, NodeJS, Cloudinary
          </p>
          <a href="https://github.com/olajvde/file_share" target='_blank' rel="noreferrer">
            <button className={styles.projects_cardButton}>
              See Repo <BiGitRepoForked />
            </button>
          </a>
        </div>
        <div className={styles.projects_card2}>
          <h3 className={styles.projects_cardh3}>CLI management System</h3>
          <h1 className={styles.projects_cardh1}>MyCLI</h1>
          <h3 className={styles.projects_cardSub}>A Staff Management System thats run in a Terminal</h3>
          <p className={styles.projects_cardp}>
            Built with Commander, MongoDB, Inquirer
          </p>
          <a href="https://github.com/olajvde/CLI-management-system" target='_blank' rel="noreferrer">
            <button className={styles.projects_cardButton}>
              See Repo <BiGitRepoForked />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
