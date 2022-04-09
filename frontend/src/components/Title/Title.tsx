import styles from "./title.module.css";
type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export { Title };
