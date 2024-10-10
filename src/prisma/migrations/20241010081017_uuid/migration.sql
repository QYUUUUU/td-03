/*
  Warnings:

  - The primary key for the `City` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Parking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Spot` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" INTEGER NOT NULL,
    "location" TEXT,
    "country" TEXT NOT NULL
);
INSERT INTO "new_City" ("country", "id", "location", "name", "slug") SELECT "country", "id", "location", "name", "slug" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");
CREATE TABLE "new_Park" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startedAt" DATETIME NOT NULL,
    "endedAt" DATETIME,
    "vehicleNumberPlate" TEXT NOT NULL,
    "spotId" TEXT NOT NULL,
    CONSTRAINT "Park_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Park" ("endedAt", "id", "spotId", "startedAt", "vehicleNumberPlate") SELECT "endedAt", "id", "spotId", "startedAt", "vehicleNumberPlate" FROM "Park";
DROP TABLE "Park";
ALTER TABLE "new_Park" RENAME TO "Park";
CREATE TABLE "new_Parking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "numberOfPlaces" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "hourlyRate" INTEGER NOT NULL,
    "cityId" TEXT NOT NULL,
    CONSTRAINT "Parking_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Parking" ("cityId", "hourlyRate", "id", "location", "name", "numberOfPlaces", "opened") SELECT "cityId", "hourlyRate", "id", "location", "name", "numberOfPlaces", "opened" FROM "Parking";
DROP TABLE "Parking";
ALTER TABLE "new_Parking" RENAME TO "Parking";
CREATE UNIQUE INDEX "Parking_name_key" ON "Parking"("name");
CREATE TABLE "new_Spot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parkingId" TEXT NOT NULL,
    CONSTRAINT "Spot_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "Parking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Spot" ("id", "parkingId") SELECT "id", "parkingId" FROM "Spot";
DROP TABLE "Spot";
ALTER TABLE "new_Spot" RENAME TO "Spot";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
