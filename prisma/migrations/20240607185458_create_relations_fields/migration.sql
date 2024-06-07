/*
  Warnings:

  - The primary key for the `Recips` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Recips` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - The required column `idRecips` was added to the `Recips` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idUser` to the `Recips` table without a default value. This is not possible if the table is not empty.
  - The required column `idUser` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `Recips` DROP FOREIGN KEY `Recips_id_fkey`;

-- AlterTable
ALTER TABLE `Recips` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `idRecips` VARCHAR(191) NOT NULL,
    ADD COLUMN `idUser` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`idRecips`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `idUser` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`idUser`);

-- AddForeignKey
ALTER TABLE `Recips` ADD CONSTRAINT `Recips_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;
