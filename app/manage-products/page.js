"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
            alert("Failed to load books");
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
                alert("Book deleted successfully!");
                setBooks((prev) => prev.filter((book) => book._id !== id));
            } else {
                alert(data.message || "Failed to delete book");
            }
        } catch (error) {
            alert("Something went wrong");
        }
    };

    if (loading) {
        return <div className="p-10 text-center">Loading...</div>;
    }

    return (
        <div className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="text-3xl font-bold">Manage Products</h1>
            <p className="mt-2 text-gray-600">View and manage your books.</p>

            <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse border bg-white">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-3 text-left">Title</th>
                            <th className="border p-3 text-left">Price</th>
                            <th className="border p-3 text-left">Category</th>
                            <th className="border p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length > 0 ? (
                            books.map((book) => (
                                <tr key={book._id}>
                                    <td className="border p-3">{book.title}</td>
                                    <td className="border p-3">৳ {book.price}</td>
                                    <td className="border p-3">{book.category}</td>
                                    <td className="border p-3">
                                        <div className="flex gap-2">
                                            <Link
                                                href={`/books/${book._id}`}
                                                className="rounded bg-green-600 px-3 py-1 text-white"
                                            >
                                                View
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(book._id)}
                                                className="rounded bg-red-600 px-3 py-1 text-white"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="p-6 text-center text-gray-500">
                                    No books available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}