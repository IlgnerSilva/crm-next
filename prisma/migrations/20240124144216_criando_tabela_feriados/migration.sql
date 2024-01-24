-- CreateTable
CREATE TABLE "feriados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
