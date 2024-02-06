import { addTimeDuration } from "@/server/controller/RedcordController";

export async function POST(request: Request) {
  const { id, time } = await request.json();
  return Response.json(await addTimeDuration(id, time));
}
