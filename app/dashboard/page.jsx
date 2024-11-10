import StatCard from "@/components/dashboard/statCard";
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
        <div className="flex flex-col w-screen justify-between gap-3 md:flex-row md:w-auto md:m-2">
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
        <div>TABLE</div>

        {/* Graph*/}
        <div>GRAPH</div>
      </div>
    </>
  );
}
