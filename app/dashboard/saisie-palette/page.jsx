import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectSaisie from "@/components/dashboard/saisie-palette/select-saisie";

export default function Page() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Saisie de palette</CardTitle>
        </CardHeader>
        <CardContent>
          {/*Date de récolte*/}
          <div className="grid w-full max-w-sm items-center mb-3 gap-1.5">
            <Label className="font-bold" htmlFor="date">
              Date de récolte
            </Label>
            <Input type="date" id="date" placeholder="Sélectionner la date" />
          </div>

          {/*Moment de récolte*/}
          <SelectSaisie
            label="Moment de la récolte"
            id="moment"
            placeholder="Sélectionner le moment de la journée"
            options={[
              { value: "matin", label: "Matin" },
              { value: "apres-midi", label: "Après-midi" },
            ]}
          />

          {/*Fruit */}
          <SelectSaisie
            label="Fruit"
            id="fruit"
            placeholder="Sélectionner un fruit"
            options={[
              { value: "fraise", label: "Fraise" },
              { value: "framboise", label: "Framboise" },
            ]}
          />

          {/*Parcelle*/}
          <SelectSaisie
            label="Parcelle"
            id="parcelle"
            placeholder="Sélectionner une parcelle"
            options={[
              { value: "michel", label: "Michel" },
              { value: "vanne 1", label: "Vanne 1" },
              { value: "piquet", label: "Piquet" },
              { value: "serre 1", label: "Serre 1" },
              { value: "serre eric", label: "Serre Eric" },
            ]}
          />

          {/*Variété*/}
          <SelectSaisie
            label="Variété"
            id="variete"
            placeholder="Sélectionner une variété"
            options={[
              { value: "murano", label: "Murano" },
              { value: "magnum", label: "Magnum" },
              { value: "clery", label: "Cléry" },
              { value: "cirafine", label: "Cirafine" },
            ]}
          />

          {/*Nombre plateaux*/}
          <div className="grid w-full max-w-sm items-center mb-3 gap-1.5">
            <Label className="font-bold" htmlFor="number">
              Nombre de plateaux
            </Label>
            <Input
              type="number"
              id="number"
              placeholder="Saisir le nombre de plateaux"
            />
          </div>

          {/*Type plateaux*/}
          <SelectSaisie
            label="Type de plateaux"
            id="type_plateau"
            placeholder="Sélectionner un type de plateau"
            options={[
              { value: "10x500", label: "10 x 500 gr" },
              { value: "10x400", label: "10 x 400 gr - vague" },
              { value: "10x250", label: "10 x 250 gr" },
              { value: "16x250", label: "16 x 250 gr" },
            ]}
          />

          {/*Poids*/}
          <div className="grid w-full max-w-sm items-center mb-3 gap-1.5">
            <Label className="font-bold" htmlFor="email">
              Poids total
            </Label>
            <Input type="email" id="email" disabled placeholder="250 kg" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Valider</Button>
        </CardFooter>
      </Card>
    </>
  );
}
