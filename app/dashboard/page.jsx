import DailyTable from "@/components/dashboard/dailyTable";
import StatCard from "@/components/dashboard/statCard";
import YearlyChart from "@/components/dashboard/yearlyGraph";
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
    <>
      {/* Cards*/}

      <div className="flex flex-col">
        <div className="flex flex-col w-[100vh] justify-between gap-3 md:flex-row md:w-auto md:m-2">
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

        {/* Table*/}
        <DailyTable />
        {/* Graph*/}
        <YearlyChart />
      </div>
    </>
  );
}
