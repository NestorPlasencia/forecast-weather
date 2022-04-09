import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { Graph } from "../../components/Graph/Graph";
import { Title } from "../../components/Title/Title";
import { useData } from "../../hooks/data";

const Hourly = () => {
  const { data } = useData();
  let hourly = [];
  let temps: number[] = [];
  let dts: number[] = [];
  if (data?.weather.hourly) {
    hourly = data.weather.hourly;
    temps = hourly.map((e) => e.temp);
    dts = hourly.map((e) => e.dt);
  }

  return (
    <Container>
      <Card>
        {data?.weather.hourly ? (
          <>
            <Title title="Hourly" />
            <Graph times={dts} temps={temps} />
          </>
        ) : (
          <></>
        )}
      </Card>
    </Container>
  );
};

export { Hourly };
