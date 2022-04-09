import styles from "./card.module.css";

const Card = ({ children }: { children: JSX.Element }) => {
  return <article className={styles.card}>{children}</article>;
};

export { Card };
