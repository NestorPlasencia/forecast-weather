import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { Graph } from "../../components/Graph/Graph";
import { Title } from "../../components/Title/Title";
import { useData } from "../../hooks/data";
import { addDays, getDateFromDt, isSameDate } from "../../utils/utils";

const Hourly = () => {
  const { data } = useData();

  let hourly = data?.weather.hourly;
  let temps = hourly?.map((e) => e.temp).filter((e, i) => i % 2 === 0);
  let dts = hourly?.map((e) => e.dt).filter((e, i) => i % 2 === 0);

  const today = new Date();
  const tomorrow = addDays(today, 1);

  // if (data?.forecast?.list) {
  //   const dataTomorrow = data?.forecast?.list?.filter((e) =>
  //     isSameDate(getDateFromDt(e.dt), tomorrow)
  //   );
  //   temps = dataTomorrow?.map((e) => e.main.temp);
  //   dts = dataTomorrow?.map((e) => e.dt);
  // }

  return (
    <Container>
      <Card full={true}>
        {data?.weather.hourly && (
          <>
            <Title title="Next 24 hours" padding={true} />
            <Graph times={dts} temps={temps} />
          </>
        )}
      </Card>
    </Container>
  );
};

export { Hourly };
