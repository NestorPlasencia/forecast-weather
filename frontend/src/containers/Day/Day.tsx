import { Card } from "../../components/Card/Card";
import { useSelection } from "../../hooks/selection";
import { useUnit } from "../../hooks/unit";
import { Daily } from "../../models/response.model";
import { formatLocalDate, formatTemperature } from "../../utils/formats";
import { capitalize, getDateFromDt, isSameDate } from "../../utils/utils";
import styles from "./day.module.css";

const Day = ({ day }: { day: Daily }) => {
  const { unit } = useUnit();
  const { selectDay, setSelectDay } = useSelection();
  const active = selectDay && isSameDate(getDateFromDt(day.dt), selectDay);
  return (
    <div
      className={[styles.container, active ? styles.active : ""].join(" ")}
      onClick={() => {
        if (setSelectDay) {
          setSelectDay(getDateFromDt(day.dt));
        }
      }}
    >
      <Card select={active} pointer={true}>
        <>
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
        </>
      </Card>
    </div>
  );
};

export { Day };
