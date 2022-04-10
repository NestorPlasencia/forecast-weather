import styles from "./title.module.css";

const Title = ({
  title,
  padding = false,
}: {
  title: string;
  padding?: boolean;
}) => {
  let cls = [];
  cls.push(styles.title);
  if (padding) cls.push(styles.padding);
  return <h2 className={cls.join(" ")}>{title}</h2>;
};

export { Title };
