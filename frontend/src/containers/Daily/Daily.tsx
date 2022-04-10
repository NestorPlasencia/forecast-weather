import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { useData } from "../../hooks/data";
import { Day } from "../Day/Day";
import styles from "./daily.module.css";

const Daily = () => {
  const { data } = useData();
  return (
    <Container>
      <>
        <Title title="Daily Forecast" padding={true} />
        <div className={styles.day_list}>
          {data?.weather.daily?.map((day, i) => (
            <Day day={day} key={i} />
          ))}
        </div>
      </>
    </Container>
  );
};

export { Daily };
