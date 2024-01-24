/*
  Warnings:

  - You are about to drop the column `createdAt` on the `feriados` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `feriados` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feriados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "municipio" TEXT NOT NULL
);
INSERT INTO "new_feriados" ("data", "descricao", "id", "municipio", "nome", "tipo", "uf") SELECT "data", "descricao", "id", "municipio", "nome", "tipo", "uf" FROM "feriados";
DROP TABLE "feriados";
ALTER TABLE "new_feriados" RENAME TO "feriados";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
