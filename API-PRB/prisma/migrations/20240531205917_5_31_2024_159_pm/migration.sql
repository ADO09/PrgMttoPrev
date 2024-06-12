-- CreateTable
CREATE TABLE "MttosTable" (
    "idMTTO" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idLinea" INTEGER NOT NULL,
    "idPlanta" INTEGER NOT NULL,
    "Nserie" TEXT NOT NULL,
    "FechaPROG" DATETIME NOT NULL,
    "FechaRealiz" DATETIME NOT NULL,
    "RealizadoPor" TEXT NOT NULL,
    "RevisadoPor" TEXT NOT NULL,
    "AprobadoPor" TEXT NOT NULL
);
