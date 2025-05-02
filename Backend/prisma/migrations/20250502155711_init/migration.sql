-- CreateTable
CREATE TABLE "UserResponse" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "skinAnswers" JSONB NOT NULL,
    "illnessAnswers" JSONB NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "riskLevel" TEXT NOT NULL,
    "location" TEXT,

    CONSTRAINT "UserResponse_pkey" PRIMARY KEY ("id")
);
