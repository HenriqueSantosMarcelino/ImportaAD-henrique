/*
  Warnings:

  - You are about to drop the column `username` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `username`,
    ADD COLUMN `department` VARCHAR(191) NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `givenName` VARCHAR(191) NULL,
    ADD COLUMN `mail` VARCHAR(191) NULL,
    ADD COLUMN `mobile` VARCHAR(191) NULL,
    ADD COLUMN `nomeCompleto` VARCHAR(191) NULL,
    ADD COLUMN `title` VARCHAR(191) NULL;
