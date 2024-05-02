/*
  Warnings:

  - Added the required column `complete` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` ADD COLUMN `complete` BOOLEAN NOT NULL;
