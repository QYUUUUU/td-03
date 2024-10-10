/*
  Warnings:

  - The primary key for the `City` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `City` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `cityId` on the `Parking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
CREATE TABLE "new_Parking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "numberOfPlaces" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "hourlyRate" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    CONSTRAINT "Parking_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Parking" ("cityId", "hourlyRate", "id", "location", "name", "numberOfPlaces", "opened") SELECT "cityId", "hourlyRate", "id", "location", "name", "numberOfPlaces", "opened" FROM "Parking";
DROP TABLE "Parking";
ALTER TABLE "new_Parking" RENAME TO "Parking";
CREATE UNIQUE INDEX "Parking_name_key" ON "Parking"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
