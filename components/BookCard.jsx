import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
    const imageSrc =
        book.image || "https://via.placeholder.com/400x300?text=Book+Image";

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image
                    src={imageSrc}
                    alt={book.title}
                    fill
                    className="object-cover transition duration-500 ease-in-out group-hover:scale-110"
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                />
            </div>

            {/* Content */}
            <div className="mt-4 flex flex-col gap-2">
                <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
                    {book.title}
                </h2>

                <p className="line-clamp-2 text-sm text-gray-600">
                    {book.shortDescription}
                </p>

                <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                        ৳ {book.price}
                    </span>

                    <Link
                        href={`/books/${book._id}`}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-[0.97]"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}