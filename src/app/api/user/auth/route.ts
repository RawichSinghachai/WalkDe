import { auth } from "@/server/controller/UserController";
import { headers } from "next/headers";

export async function POST() {
  const authorization = headers().get("authorization");
  return Response.json(await auth(authorization));
}
