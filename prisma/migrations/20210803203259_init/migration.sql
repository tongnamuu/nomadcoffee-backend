-- CreateTable
CREATE TABLE "Coffee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "popular" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
