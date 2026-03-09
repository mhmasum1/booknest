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
        <section className="bg-white px-4 py-20 md:px-6">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                        Featured Collection
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                        Featured Books
                    </h2>

                    <p className="mt-3 text-base leading-7 text-gray-600">
                        Explore our most popular and reader-favorite books picked
                        to inspire learning, growth, and imagination.
                    </p>
                </div>

                {formattedBooks.length > 0 ? (
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {formattedBooks.map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">
                            No featured books found
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Add some books to show them here on the homepage.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}