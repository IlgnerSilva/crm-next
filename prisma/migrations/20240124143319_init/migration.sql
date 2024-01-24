-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "perfilId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "usuarios_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "perfis" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "perfis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
