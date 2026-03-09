"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ManageProductsPage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBooks = async () => {
        try {
            const res = await fetch("/api/books", { cache: "no-store" });
            const data = await res.json();
            setBooks(data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load books");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this book?"
        );

        if (!confirmDelete) return;

        try {
            const res = await fetch(`/api/books/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Book deleted successfully!");
                setBooks((prev) => prev.filter((book) => book._id !== id));
            } else {
                toast.error(data.message || "Failed to delete book");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-6 md:py-14">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
                        <p className="text-lg font-medium text-gray-700">Loading books...</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-6 md:py-14">
            <div className="mx-auto max-w-7xl">
                <section className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm md:p-10">
                    <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">
                        Dashboard
                    </span>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Manage Products
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
                        View, browse, and manage all books from your collection in one place.
                    </p>
                </section>

                <section className="mt-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                Book List
                            </h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Total books: {books.length}
                            </p>
                        </div>

                        <Link
                            href="/add-product"
                            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Add New Book
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[720px] border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 bg-slate-50 text-left">
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Title
                                    </th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Price
                                    </th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Category
                                    </th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {books.length > 0 ? (
                                    books.map((book) => (
                                        <tr
                                            key={book._id}
                                            className="border-b border-gray-100 transition hover:bg-slate-50"
                                        >
                                            <td className="px-6 py-4">
                                                <p className="font-medium text-gray-900">
                                                    {book.title}
                                                </p>
                                            </td>

                                            <td className="px-6 py-4 text-gray-700">
                                                ৳ {book.price}
                                            </td>

                                            <td className="px-6 py-4">
                                                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                                                    {book.category}
                                                </span>
                                            </td>

                                            <td className="px-6 py-4">
                                                <div className="flex flex-wrap gap-2">
                                                    <Link
                                                        href={`/books/${book._id}`}
                                                        className="rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                                                    >
                                                        View
                                                    </Link>

                                                    <button
                                                        onClick={() => handleDelete(book._id)}
                                                        className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="px-6 py-12 text-center"
                                        >
                                            <div className="mx-auto max-w-md">
                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    No books available
                                                </h3>
                                                <p className="mt-2 text-sm text-gray-600">
                                                    Start by adding a new book to your collection.
                                                </p>
                                                <Link
                                                    href="/add-product"
                                                    className="mt-5 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                                                >
                                                    Add Book
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}