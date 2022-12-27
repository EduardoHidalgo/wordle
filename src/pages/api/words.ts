import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const blacklist = body as Array<string>;

  const jsonDirectory = path.join(process.cwd(), "data");
  const data = await fs.readFile(jsonDirectory + "/words.json", "utf8");

  const list = JSON.parse(data) as Array<string>;
  const whitelist = list.filter((w) => !blacklist.includes(w));

  const index = Math.floor(Math.random() * whitelist.length);
  const word = whitelist[index];

  res.status(200).json(word);
}
