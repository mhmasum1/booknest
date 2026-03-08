import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, email, password } = await req.json();

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.DB_NAME);

    const existing = await db.collection("users").findOne({ email });
    if (existing) {
        await client.close();
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    await db.collection("users").insertOne({ name, email, password, createdAt: new Date() });
    await client.close();

    return NextResponse.json({ message: "User created" });
}