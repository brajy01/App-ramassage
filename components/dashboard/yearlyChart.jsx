"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = Array.from({ length: 31 }, (_, i) => {
  const fraises = Math.floor(Math.random() * 5000);
  const framboises = Math.floor(Math.random() * 5000);
  return {
    semaine: `S${i + 12}`,
    fraises,
    framboises,
    total: fraises + framboises,
  };
});

export default function YearlyChart() {
  return (
    <Card className="m-2">
      <CardHeader>
        <CardTitle>Ramassages annuel</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          {" "}
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="semaine"
              interval={0}
              tick={{ angle: -90, textAnchor: "end" }}
            />
            <YAxis />
            <Tooltip contentStyle={{ background: "white", border: "none" }} />
            <Line
              type="monotone"
              dataKey="total"
              stroke="rgba(0, 128, 0, 0.75)"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="fraises"
              stroke="rgba(242, 39, 39, 0.75)"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="framboises"
              stroke="rgba(146, 91, 198)"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
