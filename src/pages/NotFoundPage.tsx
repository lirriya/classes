import { Link } from "react-router-dom";
import { useUI } from "../hooks/useSettings";
import { NotebookIcon } from "../components/icons";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  const ui = useUI();
  return (
    <div className={styles.notFound}>
      <NotebookIcon className={styles.icon} />
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>{ui.notFoundText}</p>
      <Link to="/" className={styles.link}>
        {ui.backToIndex}
      </Link>
    </div>
  );
}
