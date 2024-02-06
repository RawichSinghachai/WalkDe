import { editWeight } from "@/server/controller/RedcordController";

export async function POST(request: Request) {
  const { id, weight } = await request.json();
  return Response.json(await editWeight(id, weight));
}
