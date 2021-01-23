import { NextApiRequest, NextApiResponse } from "next";
import { client } from "utils/qoreContext";

type RequestBody = {
  name: string;
  password: string;
  picture: string;
};

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "PATCH":
      try {
        await client.project.axios.patch(
          `/allMember/rows/${id}`,
          { ...req.body } as RequestBody,
          { headers: { "x-api-key": process.env.PROJECT_API_KEY } }
        );

        const response = await client.project.axios.get(
          `/allMember/rows/${id}`,
          {
            headers: { "x-api-key": process.env.PROJECT_API_KEY },
          }
        );

        return res.json({ ok: true, data: response.data });
      } catch (error) {
        return res.status(400).json({ ok: false, error: error.message });
      }
    default:
      res.setHeader("Allow", ["PATCH"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
