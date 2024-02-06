import { findRecord } from "@/server/controller/RedcordController"

export async function GET(request: Request,{ params }: { params: { id: string } }) {
    
    return  Response.json( await findRecord(params.id) )
}