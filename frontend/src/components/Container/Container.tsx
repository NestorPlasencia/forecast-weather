import styles from "./container.module.css";

type Props = {
  children: JSX.Element;
};
const Container = ({ children }: Props) => {
  return <section className={styles.container}>{children}</section>;
};

export { Container };
