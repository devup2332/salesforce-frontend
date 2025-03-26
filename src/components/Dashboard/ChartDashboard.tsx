import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import { Button } from "salesforce-lib";
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon";
import { useTranslation } from "react-i18next";

const data = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",
    Sales: 3000,
  },
  {
    name: "Mar",
    Sales: 2000,
  },
  {
    name: "Apr",
    Sales: 2780,
  },
  {
    name: "May",
    Sales: 1890,
  },
  {
    name: "Jun",
    Sales: 2390,
  },

  {
    name: "Jul",
    Sales: 3490,
  },
  {
    name: "Aug",
    Sales: 3490,
  },
  {
    name: "Sep",
    Sales: 6490,
  },
  {
    name: "Oct",
    Sales: 2490,
  },
  {
    name: "Nov",
    Sales: 8490,
  },
  {
    name: "Dec",
    Sales: 1490,
  },
];

type TickProps = {
  x: number;
  y: number;
  payload: any;
  className: string;
  textAnchor: string;
};

const Tick: React.FC<TickProps> = ({
  x,
  y,
  payload,
  className,
  textAnchor,
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        textAnchor={textAnchor}
        y={0}
        dy={0}
        fill="var(--text-1)"
        className={className}
      >
        {payload.value}
      </text>
    </g>
  );
};

const ChartDashboard = () => {
  const { t } = useTranslation();
  return (
    <div className="py-3 px-4 bg-bg-1 rounded-md h-fit overflow-x-auto customScroll">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-medium text-text-1">
          {t("home.dashboard.cards.salesOverview.title")}
        </h1>
        <Button variant="icon" className="hover:bg-bg-2 rounded-full">
          <ArrowTopRightIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="w-5xl lg:w-full h-96 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              right: 30,
            }}
          >
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              style={{
                textAlign: "left",
              }}
              tickSize={10}
              tickMargin={16}
              tick={({ x, y, payload }) => (
                <Tick
                  x={x}
                  y={y}
                  payload={payload}
                  className="text-sm"
                  textAnchor="start"
                />
              )}
            />
            <CartesianGrid
              vertical={false}
              strokeWidth={1}
              className="stroke-stroke-1"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload }) => (
                <Tick
                  x={x}
                  y={y}
                  payload={payload}
                  className="text-sm"
                  textAnchor="end"
                />
              )}
            />
            <Tooltip
              contentStyle={{
                background: "var(--bg-1)",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "6px",
                border: "none",
              }}
              labelStyle={{
                color: "var(--text-1)",
                fontWeight: "normal",
              }}
            />
            <Area
              type="natural"
              dataKey="Sales"
              stroke="#235ef0"
              strokeWidth={2}
              fill="url(#main)"
            />
            <defs>
              <linearGradient id="main" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#235ef0" stopOpacity={0} />
                <stop offset="100%" stopColor="#235ef0" stopOpacity={0.5} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartDashboard;
