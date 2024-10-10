/*
  Warnings:

  - You are about to drop the column `numberOfPlaces` on the `Parking` table. All the data in the column will be lost.
  - Added the required column `numberOfSpots` to the `Parking` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "numberOfSpots" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "hourlyRate" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    CONSTRAINT "Parking_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Parking" ("cityId", "hourlyRate", "id", "location", "name", "opened") SELECT "cityId", "hourlyRate", "id", "location", "name", "opened" FROM "Parking";
DROP TABLE "Parking";
ALTER TABLE "new_Parking" RENAME TO "Parking";
CREATE UNIQUE INDEX "Parking_name_key" ON "Parking"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
