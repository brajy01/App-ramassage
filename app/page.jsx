import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Connection au compte</CardTitle>
          <CardDescription>
            Entrer votre e-mail et votre mot de passe pour accéder à votre
            compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            placeholder="Saisissez votre e-mail..."
          ></Input>

          <Label htmlFor="email">Mot de passe</Label>
          <Input
            type="password"
            id="password"
            placeholder="Saisissez votre mot de passe..."
          ></Input>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/dashboard">Valider</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
