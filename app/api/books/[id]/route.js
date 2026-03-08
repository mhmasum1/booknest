import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function DELETE(_request, { params }) {
    try {
        const { id } = await params;

        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);

        const result = await db.collection("books").deleteOne({
            _id: new ObjectId(id),
        });

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { message: "Book not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Book deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to delete book", error: error.message },
            { status: 500 }
        );
    }
}