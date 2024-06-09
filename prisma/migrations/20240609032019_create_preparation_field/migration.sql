/*
  Warnings:

  - Added the required column `preparation` to the `Recips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Recips` ADD COLUMN `preparation` VARCHAR(191) NOT NULL;
