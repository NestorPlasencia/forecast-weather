import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { Switch } from "../../components/Switch/Switch";
import { Title } from "../../components/Title/Title";
import styles from "./current.module.css";

const Current = () => {
  return (
    <Container>
      <Card>
        <div className={styles.container}>
          <div className={styles.column}>
            <Title title="Current Weather" />
            <div className={styles.temperature_container}>
              <p className={styles.temperature}>20°C</p>
              <img src="./assets/icons/01d.svg" alt="icon" />
            </div>
            <p className={styles.weather_description}>
              Light intensity drizzle
            </p>
          </div>
          <div className={[styles.column, styles.grow].join(" ")}>
            <div className={styles.switch_container}>
              <Switch />
            </div>
          </div>
          <div className={[styles.column, styles.justify_beetween].join(" ")}>
            <dl>
              <p className={styles.location}>Washington D.C.</p>
              <p className={styles.date}>Tuesday, April 5 6:51 AM</p>
            </dl>
            <dl>
              <div className={styles.description_item}>
                <dt>Wind:</dt>
                <dd>9 km/h</dd>
              </div>
              <div className={styles.description_item}>
                <dt>Humidity:</dt>
                <dd>82%</dd>
              </div>
              <div className={styles.description_item}>
                <dt>Precipitation:</dt>
                <dd>0%</dd>
              </div>
            </dl>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export { Current };
