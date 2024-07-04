/*
  Warnings:

  - The primary key for the `MttosTable` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cambiosRealizados` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `comentarios` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `estacion` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `estatus` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `idLinea` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `idMTTO` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `idPlanta` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `path_IMG` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `path_excel` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `path_pdf` on the `MttosTable` table. All the data in the column will be lost.
  - You are about to drop the column `problemasEncontrados` on the `MttosTable` table. All the data in the column will be lost.
  - Added the required column `IdMTTO` to the `MttosTable` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MttosTable" (
    "IdMTTO" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "IdLinea" TEXT,
    "IdPlanta" TEXT,
    "Nserie" TEXT,
    "Comentarios" TEXT,
    "ProblemasEncontrados" TEXT,
    "CambiosRealizados" TEXT,
    "Path_IMG" TEXT,
    "FechaPROG" TEXT,
    "FechaRealiz" TEXT,
    "RealizadoPor" TEXT,
    "RevisadoPor" TEXT,
    "AprobadoPor" TEXT,
    "Estatus" TEXT,
    "Estacion" TEXT,
    "SupIs" TEXT,
    "GteIs" TEXT,
    "planta" TEXT,
    "mesName" TEXT
);
INSERT INTO "new_MttosTable" ("AprobadoPor", "FechaPROG", "FechaRealiz", "Nserie", "RealizadoPor", "RevisadoPor", "planta") SELECT "AprobadoPor", "FechaPROG", "FechaRealiz", "Nserie", "RealizadoPor", "RevisadoPor", "planta" FROM "MttosTable";
DROP TABLE "MttosTable";
ALTER TABLE "new_MttosTable" RENAME TO "MttosTable";
PRAGMA foreign_key_check("MttosTable");
PRAGMA foreign_keys=ON;
