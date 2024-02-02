
import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";

const data = [
  {
    name: "Понедельник",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Вторник",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Среда",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Четверг",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Пятница",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Суббота",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Воскрессенье",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const GraphicChartTwo = () => {
  return (
    <ResponsiveContainer width={"100%"} height={234} className="my-[36px]">
      <AreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id={'gradientTwo'} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={'#0E73F6'} stopOpacity={1} />
            <stop offset="95%" stopColor={'#0E73F6'} stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis className="mt-[16px]" dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke={'#0E73F6'}
          fill={`url(#gradientTwo`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GraphicChartTwo;
