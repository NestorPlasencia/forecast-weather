import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { Day } from "../Day/Day";
import styles from "./daily.module.css";

const Daily = () => {
  return (
    <Container>
      <div>
        <div className={styles.title_container}>
          <Title title="Daily Forecast" />
        </div>
        <div className={styles.day_list}>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </div>
      </div>
    </Container>
  );
};

export { Daily };
