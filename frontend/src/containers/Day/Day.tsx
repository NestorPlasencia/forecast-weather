import { Card } from "../../components/Card/Card";
import styles from "./day.module.css";
const Day = () => {
  return (
    <div className={styles.container}>
      <Card>
        <div>
          <h3 className={styles.title}>Today 5</h3>
          <div className={styles.body}>
            <img
              className={styles.icon}
              src="./assets/icons/03d.svg"
              alt="icon"
            />
            <div>
              <dl className={styles.weather_main}>
                <dt>Rain</dt>
                <dd>60%</dd>
              </dl>
              <div className={styles.temperatures}>
                <strong className={styles.max}>12°C</strong>
                <small className={styles.min}>7°C</small>
              </div>
              <p className={styles.description}>Heavy intensity rain</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export { Day };
