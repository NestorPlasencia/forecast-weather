import styles from "./card.module.css";

const Card = ({
  children,
  full = false,
}: {
  children: JSX.Element | undefined;
  full?: boolean;
}) => {
  let cls = [];
  cls.push(styles.card);
  if (full) cls.push(styles.full);
  return <article className={cls.join(" ")}>{children}</article>;
};

export { Card };
