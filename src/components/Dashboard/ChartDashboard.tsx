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
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon";
import { useTranslation } from "react-i18next";
import Card from "@/components/global/Card";
import { salesOverview } from "@/consts/sales";

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
    <Card
      title={t("home.dashboard.cards.salesOverview.title")}
      description={t("home.dashboard.cards.salesOverview.description")}
      Icon={
        <ArrowTopRightIcon className="h-5 w-5 text-text-1 stroke-current" />
      }
    >
      <div className="w-5xl lg:w-full h-80 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={salesOverview}
            margin={{
              right: 30,
              top: 24,
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
              className="stroke-stroke-1 "
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
                fontSize: "12px",
                border: "1px solid var(--border-1)",
                borderRadius: "12px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
              }}
              labelClassName="font-medium"
              labelStyle={{
                color: "var(--text-1)",
                fontSize: "14px",
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
    </Card>
  );
};

export default ChartDashboard;
