-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MttosTable" (
    "idMTTO" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idLinea" INTEGER NOT NULL,
    "idPlanta" INTEGER NOT NULL,
    "Nserie" TEXT NOT NULL,
    "FechaPROG" TEXT NOT NULL,
    "FechaRealiz" TEXT NOT NULL,
    "RealizadoPor" TEXT NOT NULL,
    "RevisadoPor" TEXT NOT NULL,
    "AprobadoPor" TEXT NOT NULL
);
INSERT INTO "new_MttosTable" ("AprobadoPor", "FechaPROG", "FechaRealiz", "Nserie", "RealizadoPor", "RevisadoPor", "idLinea", "idMTTO", "idPlanta") SELECT "AprobadoPor", "FechaPROG", "FechaRealiz", "Nserie", "RealizadoPor", "RevisadoPor", "idLinea", "idMTTO", "idPlanta" FROM "MttosTable";
DROP TABLE "MttosTable";
ALTER TABLE "new_MttosTable" RENAME TO "MttosTable";
PRAGMA foreign_key_check("MttosTable");
PRAGMA foreign_keys=ON;
