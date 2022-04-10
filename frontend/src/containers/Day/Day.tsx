import { Card } from "../../components/Card/Card";
import styles from "./day.module.css";
import { Daily } from "../../models/response.model";
import { capitalize } from "../../utils/utils";
import { formatTemperature, formatLocalDate } from "../../utils/utils";
import { useUnit } from "../../hooks/unit";

const Day = ({ day }: { day: Daily }) => {
  const { unit } = useUnit();
  return (
    <div className={styles.container}>
      <Card>
        <div>
          <h3 className={styles.title}>{formatLocalDate(day.dt)}</h3>
          <div className={styles.body}>
            <img
              className={styles.icon}
              src={`./assets/icons/${day.weather[0].icon}.svg`}
              alt="icon"
            />
            <div>
              <dl className={styles.weather_main}>
                <dt>{day.weather[0].main}</dt>
                {day.weather[0].main === "Rain" && (
                  <dd>{(day.pop * 100).toFixed(0) + " %"}</dd>
                )}
              </dl>
              <div className={styles.temperatures}>
                <strong className={styles.max}>
                  {unit && formatTemperature(unit, day.temp.max)}
                </strong>
                <small className={styles.min}>
                  {unit && formatTemperature(unit, day.temp.min)}
                </small>
              </div>
              <p className={styles.description}>
                {capitalize(day.weather[0].description)}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export { Day };
