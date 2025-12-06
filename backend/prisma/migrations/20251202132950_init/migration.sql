-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "provider" TEXT,
    "providerId" TEXT,
    "businessContactId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessContact" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "agentEmail" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessContact_uuid_key" ON "BusinessContact"("uuid");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_businessContactId_fkey" FOREIGN KEY ("businessContactId") REFERENCES "BusinessContact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
