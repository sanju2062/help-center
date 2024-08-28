import styles from "./card.module.css";
export default function Card({ title, description }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>{title}</div>

      <div className={styles.description}>{description}</div>
    </div>
  );
}
