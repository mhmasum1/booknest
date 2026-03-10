export const dynamic = "force-dynamic";

import clientPromise from "@/lib/mongodb";
import BooksClient from "@/components/BooksClient";

export default async function BooksPage({ searchParams }) {
    const resolvedSearchParams = await searchParams;

    const client = await clientPromise;
    const db = client.db("booknestDB");
    const books = await db.collection("books").find({}).toArray();

    const formattedBooks = books.map((book) => ({
        ...book,
        _id: book._id.toString(),
    }));

    const initialCategory =
        resolvedSearchParams?.category || "All Categories";

    return (
        <BooksClient
            books={formattedBooks}
            initialCategory={initialCategory}
        />
    );
}