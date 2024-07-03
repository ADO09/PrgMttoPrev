-- CreateTable
CREATE TABLE "MttosTable" (
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
    "estacion" TEXT,
    "planta" TEXT,
    "path_excel" TEXT,
    "path_pdf" TEXT
);
