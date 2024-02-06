import { addHeartRate } from "@/server/controller/RedcordController";

export async function POST(request: Request) {
  const { id, heartRate } = await request.json();
  return Response.json(await addHeartRate(id, heartRate));
}
