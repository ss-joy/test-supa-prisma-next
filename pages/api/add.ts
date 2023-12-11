import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { generate } from "randomstring";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const ans = await prisma.users.create({
    data: {
      name: generate(),
    },
  });

  return res.status(200).json(ans);
}
