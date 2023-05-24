import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content, published } = req.body;
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: published,
    },
  });
  res.json(result);
}
