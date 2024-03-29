import { useUnit } from "../../hooks/unit";
import { formatHours, formatTemperature } from "../../utils/formats";
import { Spline } from "../../utils/spline";

const Graph = ({
  times = [],
  temps = [],
  padding = 2,
  paddingBottom = 50,
  paddingTop = 50,
  showTemperature = true,
  showHours = true,
  opacity = 0.2,
}: {
  times?: number[];
  temps?: number[];
  padding?: number;
  paddingBottom?: number;
  paddingTop?: number;
  showTemperature?: boolean;
  showHours?: boolean;
  opacity?: number;
}) => {
  const { unit } = useUnit();
  const n = times.length;
  const nSmooth = 200;
  const width = 1300;
  const height = 400;

  const innerWidth = width - padding * 2;
  const space = innerWidth / (n - 1);
  const centerLabels = 25;
  const distanceTimeLabelsFromGraph = 20;
  const distanceTempLabelsFromGraph = 25;
  const distanceFromZeroToMin = 200;
  //paddingTop + distanceFromMinToMax + distanceFromZeroToMin + paddingBottom = height;
  const distanceFromMinToMax =
    height - paddingTop - distanceFromZeroToMin - paddingBottom;

  const smoothPoints = (x: number[], y: number[], n: number) => {
    const space = (x[x.length - 1] - x[0]) / n;
    const spline = new Spline(x, y);
    const nx = [];
    const ny = [];
    for (let i = 0; i < n; i++) {
      const xi = Math.round(x[0] + i * space);
      nx.push(xi);
      ny.push(Math.round(spline.at(xi)));
    }
    nx[n - 1] = x[x.length - 1];
    return [nx, ny];
  };

  const generateTemperaturePoints = (temps: number[]) => {
    const max = Math.max(...temps);
    const min = Math.min(...temps);
    const cover = (max - min) / distanceFromMinToMax;
    const scaledTemps = temps.map(
      (e) => Math.round((e - min) / cover) + distanceFromZeroToMin
    );
    const invertedScaledTemps = scaledTemps.map(
      (e) => height - (e + paddingBottom)
    );
    const points = invertedScaledTemps.map((e, i) => [padding + i * space, e]);
    return points;
  };

  const generatePointsStr = (points: number[][]) => {
    let pointsStr = "";
    const x = points.map((e) => e[0]);
    const y = points.map((e) => e[1]);
    const [nx, ny] = smoothPoints(x, y, nSmooth);
    const smoothedPoints = nx.map((e, i) => [e, ny[i]]);
    for (let point of smoothedPoints) {
      pointsStr += `${point[0]},${point[1]} `;
    }
    return pointsStr;
  };

  const hours = times.map((e) => formatHours(e));
  const points = generateTemperaturePoints(temps);
  const pointsStr = generatePointsStr(points);

  let tLabels = [];
  if (showTemperature) {
    for (let i = 0; i < temps.length; i = i + 1) {
      const corrector = ((i - n / 2) * space) / (n * 2);
      tLabels.push(
        <text
          key={i}
          x={padding + i * space - corrector - centerLabels}
          fill="#eee"
          y={points[i][1] - distanceTempLabelsFromGraph}
        >
          {unit && formatTemperature(unit, temps[i])}
        </text>
      );
    }
  }

  let xLabels = [];
  if (showHours) {
    for (let i = 0; i < hours.length; i = i + 1) {
      const corrector = ((i - n / 2) * space) / (n * 2);
      xLabels.push(
        <text
          key={i}
          x={padding + i * space - corrector - centerLabels}
          fill="#eee"
          y={height - paddingBottom + distanceTimeLabelsFromGraph}
        >
          {hours[i]}
        </text>
      );
    }
  }

  return (
    <div className="graph">
      <svg
        version="1.2"
        viewBox={`0 0 ${width} ${height}`}
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
          <line
            x1={padding}
            x2={innerWidth + padding}
            y1={height - paddingBottom}
            y2={height - paddingBottom}
          ></line>
        </g>
        <g className="labels y-labels"></g>
        {showTemperature && (
          <polyline
            fill="none"
            stroke="#eee"
            strokeWidth="2"
            id="polyline"
            points={pointsStr}
          />
        )}

        <polygon
          fill="#eee"
          fillOpacity={opacity}
          stroke="none"
          points={`${padding},${height - paddingBottom} ${pointsStr} ${
            innerWidth + padding
          },${height - paddingBottom}`}
        ></polygon>
      </svg>
    </div>
  );
};

export { Graph };
