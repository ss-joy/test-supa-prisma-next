import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ans = await prisma.joy.create({
    data: { age: req.body.age, name: req.body.name },
  });
  console.log(ans);
  return res.status(200).json("ok");
}
