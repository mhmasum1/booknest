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
        <div className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="text-3xl font-bold">All Books</h1>
            <p className="mt-2 text-gray-600">
                Explore our collection of helpful and inspiring books.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <input
                    type="text"
                    placeholder="Search books..."
                    className="w-full rounded border px-4 py-2"
                />
                <select className="rounded border px-4 py-2">
                    <option>All</option>
                    <option>Programming</option>
                    <option>Fiction</option>
                    <option>Self-help</option>
                </select>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {formattedBooks.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
}