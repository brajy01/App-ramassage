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
          <Card className="hover:bg-gray-100">
            <CardHeader>
              <CardDescription>Total annuel fraise</CardDescription>
              <CardTitle>400 000 kg</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-green-500">12%</span> supérieur à
                l&apos;année précédente
              </p>
            </CardContent>
          </Card>
          <Card className="hover:bg-gray-100">
            <CardHeader>
              <CardDescription>Total annuel framboise</CardDescription>
              <CardTitle>40 000 kg</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-red-500">4%</span> inférieur à
                l&apos;année précédente
              </p>
            </CardContent>
          </Card>
          <Card className="hover:bg-gray-100">
            <CardHeader>
              <CardDescription>Total annuel global</CardDescription>
              <CardTitle>440 000 kg</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-green-500">3%</span> supérieur à
                l&apos;année précédente
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Table*/}
        <div>TABLE</div>

        {/* Graph*/}
        <div>GRAPH</div>
      </div>
    </>
  );
}
