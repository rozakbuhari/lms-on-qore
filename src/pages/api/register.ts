import { NextApiRequest, NextApiResponse } from "next";
import { client } from "utils/qoreContext";

type RequestBody = {
  name: string;
  email: string;
  password: string;
  role: "teacher" | "student";
};

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, password, role } = req.body as RequestBody;

  const apiRes = await client.project.axios.post(
    "/allMember/rows",
    {
      name,
      email,
      password,
      role: [
        role === "teacher"
          ? process.env.TEACHER_ROLE_ID
          : process.env.STUDENT_ROLE_ID,
      ],
    },
    { headers: { "x-api-key": process.env.PROJECT_API_KEY } }
  );

  return res.json({ ok: true, data: apiRes.data });
}
