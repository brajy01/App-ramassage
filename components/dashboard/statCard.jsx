import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StatCard({ fruit, poids, pourcentage, isPositive }) {
  return (
    <>
      <Card className="hover:bg-gray-100">
        <CardHeader>
          <CardDescription>Tonnage annuel {fruit}</CardDescription>
          <CardTitle>{poids} kg</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <span className={isPositive ? "text-green-500" : "text-red-500"}>
              {pourcentage}%
            </span>{" "}
            {isPositive ? "supérieur" : "inférieur"} à l&apos;année précédente
          </p>
        </CardContent>
      </Card>
    </>
  );
}
