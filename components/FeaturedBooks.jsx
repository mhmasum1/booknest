import BookCard from "@/components/BookCard";
import { books } from "@/lib/books";

export default function FeaturedBooks() {
    const featured = books.slice(0, 3);

    return (
        <section className="px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold">Featured Books</h2>
                <p className="mt-2 text-gray-600">
                    Explore our most popular book collection.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featured.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </section>
    );
}