import styles from "./card.module.css";

type Props = {
  children: JSX.Element;
};

const Card = ({ children }: Props) => {
  return <article className={styles.card}>{children}</article>;
};

export { Card };
