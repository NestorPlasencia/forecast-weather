import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { Graph } from "../../components/Graph/Graph";
import { Title } from "../../components/Title/Title";
import { useData } from "../../hooks/data";
import { useSelection } from "../../hooks/selection";
import { formatLocalDateLong } from "../../utils/formats";
import { getDateFromDt, isSameDate } from "../../utils/utils";

const Hourly = () => {
  const { data } = useData();
  const { selectDay } = useSelection();
  let hourly = data?.weather.hourly;
  let temps: number[] = [];
  let dts: number[] = [];
  let title: string = "Next 24 hours";
  const today = new Date();
  if (selectDay && hourly && isSameDate(today, selectDay)) {
    temps = hourly?.map((e) => e.temp).filter((e, i) => i % 2 === 0);
    dts = hourly?.map((e) => e.dt).filter((e, i) => i % 2 === 0);
  } else {
    if (data?.forecast?.list && selectDay) {
      const dataTomorrow = data?.forecast?.list?.filter((e) =>
        isSameDate(getDateFromDt(e.dt), selectDay)
      );
      temps = dataTomorrow?.map((e) => e.main.temp);
      dts = dataTomorrow?.map((e) => e.dt);
      title = formatLocalDateLong(dts[0]);
    }
  }

  return (
    <Container>
      <Card full={true}>
        {data?.weather.hourly && selectDay && (
          <>
            <Title title={title} padding={true} />
            <Graph times={dts} temps={temps} />
          </>
        )}
      </Card>
    </Container>
  );
};

export { Hourly };
