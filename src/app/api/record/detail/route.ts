import { editDetail } from "@/server/controller/RedcordController";

export async function POST(request: Request) {
  const { id, footStep , progress} = await request.json();
  return Response.json(await editDetail(id, footStep,progress));
}
