import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DailyTable({ date }) {
  return (
    <>
      <Card className="mx-2">
        <CardHeader>
          <CardTitle>Ramassages du jour</CardTitle>
          <CardDescription>{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="my-2">
            <CardHeader>
              <CardTitle>Fraises</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parcelle</TableHead>
                    <TableHead>Variété</TableHead>
                    <TableHead>Type plateau</TableHead>
                    <TableHead className="text-right">Quantité</TableHead>
                    <TableHead className="text-right">Poids (kg)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Michel Serre</TableCell>
                    <TableCell>Murano</TableCell>
                    <TableCell>10 x 500 gr</TableCell>
                    <TableCell className="text-right">50</TableCell>
                    <TableCell className="text-right">250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Vanne 1</TableCell>
                    <TableCell>Cléry</TableCell>
                    <TableCell>10 x 500 gr</TableCell>
                    <TableCell className="text-right">100</TableCell>
                    <TableCell className="text-right">500</TableCell>
                  </TableRow>
                  <TableRow className="font-bold">
                    <TableCell>Total</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell className="text-right">150</TableCell>
                    <TableCell className="text-right">750</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="my-2">
            <CardHeader>
              <CardTitle>Framboise</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parcelle</TableHead>
                    <TableHead>Variété</TableHead>
                    <TableHead>Type plateau</TableHead>
                    <TableHead className="text-right">Quantité</TableHead>
                    <TableHead className="text-right">Poids (kg)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Gintrat</TableCell>
                    <TableCell>Mapema</TableCell>
                    <TableCell>10 x 125 gr barcaline</TableCell>
                    <TableCell className="text-right">47</TableCell>
                    <TableCell className="text-right">58.75</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gintrat</TableCell>
                    <TableCell>Mapema</TableCell>
                    <TableCell>10 x 125 gr carré</TableCell>
                    <TableCell className="text-right">102</TableCell>
                    <TableCell className="text-right">127.50</TableCell>
                  </TableRow>
                  <TableRow className="font-bold">
                    <TableCell>Total</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell className="text-right">149</TableCell>
                    <TableCell className="text-right">186.25</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
}
