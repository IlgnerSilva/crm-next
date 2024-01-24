/*
  Warnings:

  - Added the required column `municipio` to the `feriados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `feriados` table without a default value. This is not possible if the table is not empty.

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
    "municipio" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_feriados" ("createdAt", "data", "descricao", "id", "nome", "tipo", "updatedAt") SELECT "createdAt", "data", "descricao", "id", "nome", "tipo", "updatedAt" FROM "feriados";
DROP TABLE "feriados";
ALTER TABLE "new_feriados" RENAME TO "feriados";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
