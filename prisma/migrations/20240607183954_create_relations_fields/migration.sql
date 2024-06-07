/*
  Warnings:

  - You are about to drop the column `authorId` on the `Recips` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Recips` DROP COLUMN `authorId`;

-- AddForeignKey
ALTER TABLE `Recips` ADD CONSTRAINT `Recips_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
