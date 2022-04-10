import styles from "./hider.module.css";

const Hidder = ({
  children,
  base = "hide",
  size = "",
}: {
  children: JSX.Element;
  base?: string;
  size?: string;
}) => {
  return (
    <section
      className={[styles[`base_${base}`], styles[`${base}_${size}`]].join(" ")}
    >
      {children}
    </section>
  );
};

export { Hidder };
