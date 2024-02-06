import { editHeight } from "@/server/controller/RedcordController";

export async function POST(request: Request) {
  const { id, height } = await request.json();
  return Response.json(await editHeight(id, height));
}
