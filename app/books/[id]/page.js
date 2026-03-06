import Link from "next/link";
import { books } from "@/lib/books";

export default async function BookDetailsPage({ params }) {
    const { id } = await params;
    const book = books.find((item) => item.id === id);

    if (!book) {
        return <div className="p-10 text-center text-xl">Book not found</div>;
    }

    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <img
                src={book.image}
                alt={book.title}
                className="h-[400px] w-full rounded-xl object-cover"
            />

            <h1 className="mt-6 text-4xl font-bold">{book.title}</h1>
            <p className="mt-4 text-lg text-gray-700">{book.fullDescription}</p>

            <div className="mt-6 space-y-2 rounded-lg bg-gray-100 p-4">
                <p>
                    <strong>Price:</strong> ৳ {book.price}
                </p>
                <p>
                    <strong>Category:</strong> {book.category}
                </p>
                <p>
                    <strong>Date:</strong> {book.date}
                </p>
            </div>

            <Link
                href="/books"
                className="mt-6 inline-block rounded bg-black px-4 py-2 text-white"
            >
                Back to Books
            </Link>
        </div>
    );
}