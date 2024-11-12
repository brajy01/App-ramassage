import DailyTable from "@/components/dashboard/dailyTable";
import StatCard from "@/components/dashboard/statCard";
import YearlyChart from "@/components/dashboard/yearlyChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <StatCard
            fruit="fraise"
            poids="400 000"
            pourcentage="12"
            isPositive={true}
          />
          <StatCard
            fruit="framboise"
            poids="40 000"
            pourcentage="5"
            isPositive={false}
          />
          <StatCard
            fruit="global"
            poids="440 000"
            pourcentage="3"
            isPositive={true}
          />
        </div>

        <DailyTable />
        <YearlyChart />
      </div>
    </div>
  );
}
