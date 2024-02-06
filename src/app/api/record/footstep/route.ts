import { editFootStep } from "@/server/controller/RedcordController";

export async function POST(request: Request) {
  const { id, footStep } = await request.json();
  return Response.json(await editFootStep(id, footStep));
}
