import React from "react";
import { Graph } from "../../components/Graph/Graph";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
const Hourly = () => {
  const hourly = [
    { dt: 1649527200, temp: 12.56, pop: 0.55 },
    { dt: 1649530800, temp: 12.83, pop: 0.45 },
    { dt: 1649534400, temp: 12.58, pop: 0.44 },
    { dt: 1649538000, temp: 12.31, pop: 0.45 },
    { dt: 1649541600, temp: 11.65, pop: 0.41 },
    { dt: 1649545200, temp: 10.74, pop: 0.37 },
    { dt: 1649548800, temp: 8.42, pop: 0.29 },
    { dt: 1649552400, temp: 7.93, pop: 0 },
    { dt: 1649556000, temp: 7.6, pop: 0 },
    { dt: 1649559600, temp: 6.95, pop: 0 },
    { dt: 1649563200, temp: 6.05, pop: 0 },
    { dt: 1649566800, temp: 5.43, pop: 0 },
    { dt: 1649570400, temp: 4.98, pop: 0 },
    { dt: 1649574000, temp: 4.56, pop: 0 },
    { dt: 1649577600, temp: 4.6, pop: 0 },
    { dt: 1649581200, temp: 4.48, pop: 0 },
    { dt: 1649584800, temp: 4.04, pop: 0 },
    { dt: 1649588400, temp: 3.75, pop: 0 },
    { dt: 1649592000, temp: 4.95, pop: 0 },
    { dt: 1649595600, temp: 6.35, pop: 0 },
    { dt: 1649599200, temp: 7.73, pop: 0 },
    { dt: 1649602800, temp: 8.7, pop: 0 },
    { dt: 1649606400, temp: 9.3, pop: 0 },
    { dt: 1649610000, temp: 9.95, pop: 0 },
    { dt: 1649613600, temp: 10.23, pop: 0 },
  ];

  const temps = hourly.map((e) => e.temp);
  const dts = hourly.map((e) => e.dt);

  return (
    <Container>
      <Card>
        <div>
          <Title title="Hourly" />
          <Graph times={dts} temps={temps} />
        </div>
      </Card>
    </Container>
  );
};

export { Hourly };
