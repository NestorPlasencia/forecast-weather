import { useUnit } from "../../hooks/unit";
import { formatHours, formatTemperature } from "../../utils/formats";
import styles from "./hour.module.css";
const Hour = ({ dt, temp }: { dt: number; temp: number }) => {
  const { unit } = useUnit();
  return (
    <div className={styles.container}>
      <p className={styles.time}>{formatHours(dt)}</p>
      <small>-</small>
      <p className={styles.temperature}>
        {unit && formatTemperature(unit, temp)}
      </p>
    </div>
  );
};

export { Hour };
