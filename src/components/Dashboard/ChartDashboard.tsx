import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "Enero",
    uv: 4000,
  },
  {
    name: "Febrero",
    uv: 3000,
  },

  {
    name: "Marzo",
    uv: 2000,
  },
  {
    name: "Abril",
    uv: 2780,
  },
  {
    name: "Mayo",
    uv: 1890,
  },
  {
    name: "Junio",
    uv: 2390,
  },
  {
    name: "Julio",
    uv: 3490,
  },
  {
    name: "Agosto",
    uv: 3490,
  },
  {
    name: "Septiembre",
    uv: 3490,
  },
  {
    name: "Octubre",
    uv: 4490,
  },
  {
    name: "Noviembre",
    uv: 4100,
  },
  {
    name: "Diciembre",
    uv: 1490,
  },
];

const ChartDashboard = () => {
  return (
    <div className="py-3 px-4 bg-bg-1 rounded-md">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="none" fill="url(#main)" />
          <defs>
            <linearGradient id="main" x1="0" y1="1" x2="0" y2="0">
              <stop offset="5%" stopColor="#235ef0" stopOpacity={0} />
              <stop offset="95%" stopColor="#235ef0" stopOpacity={0.8} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartDashboard;
