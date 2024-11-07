-- CreateTable
CREATE TABLE "TypePlantation" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "TypePlantation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parcelle" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "surface" DOUBLE PRECISION NOT NULL,
    "typePlantationNom" TEXT NOT NULL,

    CONSTRAINT "Parcelle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fruit" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "Fruit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variete" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "saisonnalite" TEXT NOT NULL,
    "fruitNom" TEXT NOT NULL,

    CONSTRAINT "Variete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypePlateau" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "poids" DOUBLE PRECISION NOT NULL,
    "fruitNom" TEXT NOT NULL,

    CONSTRAINT "TypePlateau_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypePlant" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "TypePlant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fournisseur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "Fournisseur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pepinieriste" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "Pepinieriste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ramassage" (
    "id" SERIAL NOT NULL,
    "parcelleNom" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "periodeJournee" TEXT NOT NULL,
    "nombrePlateaux" INTEGER NOT NULL,
    "typePlateauNom" TEXT NOT NULL,

    CONSTRAINT "Ramassage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campagne" (
    "id" SERIAL NOT NULL,
    "annee" INTEGER NOT NULL,

    CONSTRAINT "Campagne_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plantation" (
    "id" SERIAL NOT NULL,
    "campagneAnnee" INTEGER NOT NULL,
    "etat" TEXT NOT NULL,
    "parcelleNom" TEXT NOT NULL,
    "nombrePlants" INTEGER NOT NULL,
    "varieteNom" TEXT NOT NULL,
    "typePlantNom" TEXT NOT NULL,
    "fournisseurNom" TEXT NOT NULL,
    "pepinieristeNom" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "passeportPhyto" TEXT,
    "planParcelle" TEXT,

    CONSTRAINT "Plantation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TypePlantation_nom_key" ON "TypePlantation"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Parcelle_nom_key" ON "Parcelle"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Fruit_nom_key" ON "Fruit"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Variete_nom_key" ON "Variete"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "TypePlateau_nom_key" ON "TypePlateau"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "TypePlant_nom_key" ON "TypePlant"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Fournisseur_nom_key" ON "Fournisseur"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Pepinieriste_nom_key" ON "Pepinieriste"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Campagne_annee_key" ON "Campagne"("annee");

-- AddForeignKey
ALTER TABLE "Parcelle" ADD CONSTRAINT "Parcelle_typePlantationNom_fkey" FOREIGN KEY ("typePlantationNom") REFERENCES "TypePlantation"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variete" ADD CONSTRAINT "Variete_fruitNom_fkey" FOREIGN KEY ("fruitNom") REFERENCES "Fruit"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypePlateau" ADD CONSTRAINT "TypePlateau_fruitNom_fkey" FOREIGN KEY ("fruitNom") REFERENCES "Fruit"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ramassage" ADD CONSTRAINT "Ramassage_parcelleNom_fkey" FOREIGN KEY ("parcelleNom") REFERENCES "Parcelle"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ramassage" ADD CONSTRAINT "Ramassage_typePlateauNom_fkey" FOREIGN KEY ("typePlateauNom") REFERENCES "TypePlateau"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plantation" ADD CONSTRAINT "Plantation_campagneAnnee_fkey" FOREIGN KEY ("campagneAnnee") REFERENCES "Campagne"("annee") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plantation" ADD CONSTRAINT "Plantation_parcelleNom_fkey" FOREIGN KEY ("parcelleNom") REFERENCES "Parcelle"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plantation" ADD CONSTRAINT "Plantation_varieteNom_fkey" FOREIGN KEY ("varieteNom") REFERENCES "Variete"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plantation" ADD CONSTRAINT "Plantation_typePlantNom_fkey" FOREIGN KEY ("typePlantNom") REFERENCES "TypePlant"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plantation" ADD CONSTRAINT "Plantation_fournisseurNom_fkey" FOREIGN KEY ("fournisseurNom") REFERENCES "Fournisseur"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plantation" ADD CONSTRAINT "Plantation_pepinieristeNom_fkey" FOREIGN KEY ("pepinieristeNom") REFERENCES "Pepinieriste"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;
