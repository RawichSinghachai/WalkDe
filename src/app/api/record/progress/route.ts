import { addProgress } from "@/server/controller/RedcordController";

export async function POST(request: Request) {
  const { id, progress } = await request.json();
  return Response.json(await addProgress(id, progress));
}
