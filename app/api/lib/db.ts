import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();
// we should intro singleton here 