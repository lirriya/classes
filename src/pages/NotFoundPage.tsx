import { Link } from "react-router-dom";
import { NotebookIcon } from "../components/icons";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <NotebookIcon className={styles.icon} />
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>This page isn't part of the notebook.</p>
      <Link to="/" className={styles.link}>
        ← Back to the index
      </Link>
    </div>
  );
}
