/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Account";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Session";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "VerificationToken";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "conta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_usuario" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "provedor" TEXT NOT NULL,
    "id_conta_provedor" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expira_em" INTEGER,
    "tipo_token" TEXT,
    "escopo" TEXT,
    "id_token" TEXT,
    "estado_sessao" TEXT,
    "segredo_token_oauth" TEXT,
    "token_oauth" TEXT,
    CONSTRAINT "conta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sessao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token_sessao" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "expira" DATETIME NOT NULL,
    CONSTRAINT "sessao_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "email" TEXT,
    "email_verificado" DATETIME,
    "imagem" TEXT
);

-- CreateTable
CREATE TABLE "token_verificacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "identificador" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expira" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "conta_provedor_id_conta_provedor_key" ON "conta"("provedor", "id_conta_provedor");

-- CreateIndex
CREATE UNIQUE INDEX "sessao_token_sessao_key" ON "sessao"("token_sessao");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "token_verificacao_token_key" ON "token_verificacao"("token");

-- CreateIndex
CREATE UNIQUE INDEX "token_verificacao_identificador_token_key" ON "token_verificacao"("identificador", "token");
