import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

export default async function BookDetailsPage({ params }) {
    const { id } = await params;

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const book = await db.collection("books").findOne({
        _id: new ObjectId(id),
    });

    if (!book) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center px-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Book not found
                    </h2>
                    <p className="mt-3 text-gray-600">
                        The book you are looking for does not exist or may have been removed.
                    </p>
                    <Link
                        href="/books"
                        className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        Back to Books
                    </Link>
                </div>
            </div>
        );
    }

    const imageSrc =
        book.image || "https://via.placeholder.com/800x500?text=Book+Image";

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-6 md:py-14">
            <div className="mx-auto max-w-7xl">
                <Link
                    href="/books"
                    className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
                >
                    ← Back to Books
                </Link>

                <div className="mt-6 grid gap-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
                    <div className="relative h-[320px] overflow-hidden rounded-2xl bg-gray-100 md:h-[520px]">
                        <Image
                            src={imageSrc}
                            alt={book.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                                {book.category || "General"}
                            </span>

                            <span className="rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700">
                                ৳ {book.price}
                            </span>
                        </div>

                        <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                            {book.title}
                        </h1>

                        <p className="mt-5 text-base leading-8 text-gray-600">
                            {book.fullDescription || book.shortDescription}
                        </p>

                        <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Book Information
                            </h2>

                            <div className="mt-4 space-y-3 text-sm text-gray-700">
                                <p>
                                    <span className="font-semibold text-gray-900">
                                        Price:
                                    </span>{" "}
                                    ৳ {book.price}
                                </p>
                                <p>
                                    <span className="font-semibold text-gray-900">
                                        Category:
                                    </span>{" "}
                                    {book.category || "General"}
                                </p>
                                {book.author && (
                                    <p>
                                        <span className="font-semibold text-gray-900">
                                            Author:
                                        </span>{" "}
                                        {book.author}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/books"
                                className="inline-flex rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                                Browse More Books
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}