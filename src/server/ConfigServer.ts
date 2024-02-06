import { MongoClient } from "mongodb";

export const client: any = new MongoClient(process.env.NEXT_PUBLIC_MONGODB!);

export const secret = process.env.NEXT_PUBLIC_SECRET;
