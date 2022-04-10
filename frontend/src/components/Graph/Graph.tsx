import { useUnit } from "../../hooks/unit";
import { formatTemperature } from "../../utils/formats";

const Graph = ({ times, temps }: { times: number[]; temps: number[] }) => {
  const { unit } = useUnit();

  const formatHours = (dt: number): string => {
    const date = new Date(dt * 1000);
    let hours = date.getHours();
    var amOrPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    return hours + " " + amOrPm;
  };

  const generateTemperaturePoints = (temps: number[]) => {
    const max = Math.max(...temps);
    const min = Math.min(...temps);
    const cover = (max - min) / 100;
    const scaledTemps = temps.map((e) => Math.round((e - min) / cover) + 200);
    const invertedScaledTemps = scaledTemps.map((e) => 500 - (e + 50));
    const points = invertedScaledTemps.map((e, i) => [(i + 1) * 50, e]);
    return points;
  };

  const generatePointsStr = (points: number[][]) => {
    let pointsStr = "";
    for (let point of points) {
      pointsStr += `${point[0]},${point[1]} `;
    }
    return pointsStr;
  };

  const hours = times.map((e) => formatHours(e));
  const points = generateTemperaturePoints(temps);
  const pointsStr = generatePointsStr(points);

  let tLabels = [];
  for (let i = 0; i < temps.length; i = i + 2) {
    tLabels.push(
      <text key={i} x={(i + 1) * 50 - 20} fill="#eee" y={points[i][1] - 20}>
        {unit && formatTemperature(unit, temps[i])}
      </text>
    );
  }

  let xLabels = [];
  for (let i = 0; i < hours.length; i = i + 2) {
    xLabels.push(
      <text key={i} x={(i + 1) * 50 - 20} fill="#eee" y="470">
        {hours[i]}
      </text>
    );
  }

  return (
    <div className="graph">
      <svg
        version="1.2"
        viewBox="0 0 1300 500"
        xmlns="http://www.w3.org/2000/svg"
        className="graph"
        id="graph"
      >
        <title id="title">Hourly Temperature</title>
        <g className="labels x-labels" id="x-labels">
          {xLabels}
        </g>
        <g className="labels t-labels" id="t-labels">
          {tLabels}
        </g>
        <g className="grid y-grid" id="y-grid">
          <line x1="50" x2="1250" y1="450" y2="450"></line>
        </g>
        <g className="labels y-labels"></g>
        <polyline
          fill="none"
          stroke="#eee"
          strokeWidth="2"
          id="polyline"
          points={pointsStr}
        />
        <polygon
          fill="#eee"
          fillOpacity="0.2"
          stroke="none"
          points={`50,450 ${pointsStr} 1250,450`}
        ></polygon>
      </svg>
    </div>
  );
};

export { Graph };
