import { findAll } from "@/server/controller/UserController";

export async function GET() {
  return Response.json(await findAll());
}
