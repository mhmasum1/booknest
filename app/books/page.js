export const dynamic = "force-dynamic";

import clientPromise from "@/lib/mongodb";
import BookCard from "@/components/BookCard";

export default async function BooksPage() {
    const client = await clientPromise;
    const db = client.db("booknestDB");
    const books = await db.collection("books").find({}).toArray();

    const formattedBooks = books.map((book) => ({
        ...book,
        _id: book._id.toString(),
    }));

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-6 md:py-14">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm md:p-10">
                    <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">
                        Book Collection
                    </span>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Explore All Books
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
                        Discover helpful, inspiring, and popular books from different
                        categories. Find your next read from our growing collection.
                    </p>
                </div>

                <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />

                        <select className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 md:min-w-56">
                            <option>All Categories</option>
                            <option>Programming</option>
                            <option>Fiction</option>
                            <option>Self-help</option>
                            <option>Business</option>
                        </select>
                    </div>
                </div>

                {formattedBooks.length > 0 ? (
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {formattedBooks.map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800">
                            No books found
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Books will appear here once you add them to your collection.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}