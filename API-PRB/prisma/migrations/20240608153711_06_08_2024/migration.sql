-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MttosTable" (
    "idMTTO" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idLinea" INTEGER,
    "idPlanta" INTEGER,
    "Nserie" TEXT,
    "comentarios" TEXT,
    "problemasEncontrados" TEXT,
    "cambiosRealizados" TEXT,
    "path_IMG" TEXT,
    "FechaPROG" TEXT,
    "FechaRealiz" TEXT,
    "RealizadoPor" TEXT,
    "RevisadoPor" TEXT,
    "AprobadoPor" TEXT,
    "estatus" TEXT,
    "estacion" TEXT
);
INSERT INTO "new_MttosTable" ("AprobadoPor", "FechaPROG", "FechaRealiz", "Nserie", "RealizadoPor", "RevisadoPor", "idLinea", "idMTTO", "idPlanta") SELECT "AprobadoPor", "FechaPROG", "FechaRealiz", "Nserie", "RealizadoPor", "RevisadoPor", "idLinea", "idMTTO", "idPlanta" FROM "MttosTable";
DROP TABLE "MttosTable";
ALTER TABLE "new_MttosTable" RENAME TO "MttosTable";
PRAGMA foreign_key_check("MttosTable");
PRAGMA foreign_keys=ON;
