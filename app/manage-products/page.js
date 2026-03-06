"use client";

import Link from "next/link";
import { useState } from "react";
import { books as initialBooks } from "@/lib/books";

export default function ManageProductsPage() {
    const [bookList, setBookList] = useState(initialBooks);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");

        if (!confirmDelete) return;

        const updatedBooks = bookList.filter((book) => book.id !== id);
        setBookList(updatedBooks);
        alert("Book deleted successfully!");
    };

    return (
        <div className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="text-3xl font-bold">Manage Products</h1>
            <p className="mt-2 text-gray-600">View and manage your added books.</p>

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
                        {bookList.length > 0 ? (
                            bookList.map((book) => (
                                <tr key={book.id}>
                                    <td className="border p-3">{book.title}</td>
                                    <td className="border p-3">৳ {book.price}</td>
                                    <td className="border p-3">{book.category}</td>
                                    <td className="border p-3">
                                        <div className="flex flex-wrap gap-2">
                                            <Link
                                                href={`/books/${book.id}`}
                                                className="rounded bg-green-600 px-3 py-1 text-white"
                                            >
                                                View
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(book.id)}
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