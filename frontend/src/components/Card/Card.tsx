import styles from "./card.module.css";

const Card = ({
  children,
  full = false,
  select = false,
  pointer = false,
}: {
  children: JSX.Element | undefined;
  full?: boolean;
  select?: boolean;
  pointer?: boolean;
}) => {
  let cls = [];
  cls.push(styles.card);
  if (full) cls.push(styles.full);
  if (select) cls.push(styles.select);
  if (pointer) cls.push(styles.pointer);
  return <article className={cls.join(" ")}>{children}</article>;
};

export { Card };
