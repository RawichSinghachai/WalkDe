import { login } from "@/server/controller/UserController";

export async function POST(request: Request) {
  const { usernameOrEmail, password } = await request.json();
  return Response.json(await login(usernameOrEmail, password));
}
