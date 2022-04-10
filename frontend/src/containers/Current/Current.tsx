import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { Switch } from "../../components/Switch/Switch";
import { Title } from "../../components/Title/Title";
import styles from "./current.module.css";
import { useUnit } from "../../hooks/unit";
import { useData } from "../../hooks/data";
import { capitalize } from "../../utils/utils";
import {
  formatLocalDateTime,
  formatTemperature,
  formatWindSpeed,
} from "../../utils/formats";

const Current = () => {
  const { unit, changeUnit } = useUnit();
  const { data } = useData();
  return (
    <Container>
      <Card>
        <>
          <Title title="Current Weather" />
          <div className={styles.container}>
            <div className={styles.column}>
              <div className={styles.temperature_container}>
                <p className={styles.temperature}>
                  {data &&
                    unit &&
                    formatTemperature(unit, data.weather.current.temp)}
                </p>
                <img
                  src={`./assets/icons/${
                    data && data.weather.current.weather[0].icon
                  }.svg`}
                  alt="icon"
                />
              </div>
              <p className={styles.weather_description}>
                {data &&
                  capitalize(data.weather.current.weather[0].description)}
              </p>
            </div>
            <div className={[styles.column, styles.grow].join(" ")}>
              <div className={styles.switch_container}>
                <Switch
                  checked={unit === "C"}
                  onChange={() => {
                    if (changeUnit !== undefined)
                      changeUnit(unit === "C" ? "F" : "C");
                  }}
                />
              </div>
            </div>
            <div className={[styles.column, styles.justify_beetween].join(" ")}>
              <dl>
                <p className={styles.location}>
                  {data &&
                    data.location.name +
                      ", " +
                      data.location.state +
                      " - " +
                      data.location.country}
                </p>
                <p className={styles.date}>
                  {data && formatLocalDateTime(data.weather.current.dt)}
                </p>
              </dl>
              <dl>
                <div className={styles.description_item}>
                  <dt>Wind:</dt>
                  <dd>
                    {data &&
                      unit &&
                      formatWindSpeed(unit, data.weather.current.wind_speed)}
                  </dd>
                </div>
                <div className={styles.description_item}>
                  <dt>Humidity:</dt>
                  <dd>{data && data.weather.current.humidity + " %"}</dd>
                </div>
                <div className={styles.description_item}>
                  <dt>Precipitation:</dt>
                  <dd>{data && data.weather.hourly[0].pop * 100 + " %"}</dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      </Card>
    </Container>
  );
};

export { Current };
