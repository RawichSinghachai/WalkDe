import { findOne } from "@/server/controller/UserController"

export async function GET(request: Request,{ params }: { params: { id: string } }) {
    
    return  Response.json( await findOne(params.id) )
}