import styles from "./container.module.css";

const Container = ({ children }: { children: JSX.Element }) => {
  return <section className={styles.container}>{children}</section>;
};

export { Container };
