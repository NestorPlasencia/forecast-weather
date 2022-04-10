import styles from "./padder.module.css";

const Padder = ({ children }: { children: JSX.Element }) => {
  return <section className={styles.padder}>{children}</section>;
};

export { Padder };
