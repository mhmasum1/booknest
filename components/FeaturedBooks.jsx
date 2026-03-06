import clientPromise from "@/lib/mongodb";
import BookCard from "@/components/BookCard";

export default async function FeaturedBooks() {
    const client = await clientPromise;
    const db = client.db("booknestDB");

    const books = await db
        .collection("books")
        .find({})
        .limit(3)
        .toArray();

    const formattedBooks = books.map((book) => ({
        ...book,
        _id: book._id.toString(),
    }));

    return (
        <section className="px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold">Featured Books</h2>
                <p className="mt-2 text-gray-600">
                    Explore our most popular book collection.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {formattedBooks.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            </div>
        </section>
    );
}