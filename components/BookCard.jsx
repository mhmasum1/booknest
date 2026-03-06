import Link from "next/link";

export default function BookCard({ book }) {
    return (
        <div className="overflow-hidden rounded-xl border bg-white shadow transition hover:-translate-y-1 hover:shadow-lg">
            <img
                src={book.image || "https://via.placeholder.com/400x300?text=Book+Image"}
                alt={book.title}
                className="h-56 w-full object-cover"
            />

            <div className="p-4">
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{book.shortDescription}</p>
                <p className="mt-3 font-bold text-blue-600">৳ {book.price}</p>

                <Link
                    href={`/books/${book._id}`}
                    className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white"
                >
                    Details
                </Link>
            </div>
        </div>
    );
}