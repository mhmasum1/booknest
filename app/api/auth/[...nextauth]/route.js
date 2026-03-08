import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        const books = await db.collection("books").find({}).toArray();

        return NextResponse.json(books, { status: 200 });
    } catch (error) {
        console.error("GET /api/books error:", error);
        return NextResponse.json(
            { message: "Failed to fetch books", error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const body = await request.json();

        const newBook = {
            title: body.title,
            shortDescription: body.shortDescription,
            fullDescription: body.fullDescription,
            price: Number(body.price),
            category: body.category,
            image: body.image || "",
            createdAt: new Date(),
        };

        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        const result = await db.collection("books").insertOne(newBook);

        return NextResponse.json(
            {
                message: "Book added successfully",
                insertedId: result.insertedId,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("POST /api/books error:", error);
        return NextResponse.json(
            { message: "Failed to add book", error: error.message },
            { status: 500 }
        );
    }
}