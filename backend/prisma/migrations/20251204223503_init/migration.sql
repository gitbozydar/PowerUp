/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user` to the `BusinessContact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_businessContactId_fkey";

-- AlterTable
ALTER TABLE "BusinessContact" ADD COLUMN     "user" INTEGER NOT NULL;

-- DropTable
DROP TABLE "User";
