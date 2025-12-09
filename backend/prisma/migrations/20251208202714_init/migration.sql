/*
  Warnings:

  - Added the required column `customerCompanyName` to the `BusinessContact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BusinessContact" ADD COLUMN     "customerCompanyName" TEXT NOT NULL;
