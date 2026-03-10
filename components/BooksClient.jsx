"use client";

import { useMemo, useState } from "react";
import BookCard from "@/components/BookCard";

export default function BooksClient({ books, initialCategory = "All Categories" }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(
        initialCategory || "All Categories"
    );

    const categories = useMemo(() => {
        return [
            "All Categories",
            ...new Set(books.map((book) => book.category).filter(Boolean)),
        ];
    }, [books]);

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const title = book.title?.toLowerCase() || "";
            const shortDescription = book.shortDescription?.toLowerCase() || "";
            const fullDescription = book.fullDescription?.toLowerCase() || "";
            const bookCategory = (book.category || "").trim().toLowerCase();
            const currentCategory = selectedCategory.trim().toLowerCase();

            const matchesSearch =
                title.includes(searchTerm.toLowerCase()) ||
                shortDescription.includes(searchTerm.toLowerCase()) ||
                fullDescription.includes(searchTerm.toLowerCase());

            const matchesCategory =
                currentCategory === "all categories" ||
                bookCategory === currentCategory;

            return matchesSearch && matchesCategory;
        });
    }, [books, searchTerm, selectedCategory]);

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-6 md:py-14">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm md:p-10">
                    <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">
                        Book Collection
                    </span>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Explore All Books
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
                        Discover helpful, inspiring, and popular books from different
                        categories. Find your next read from our growing collection.
                    </p>
                </div>

                <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <input
                            type="text"
                            placeholder="Search books..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />

                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 md:min-w-56"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                        Showing{" "}
                        <span className="font-semibold text-gray-900">
                            {filteredBooks.length}
                        </span>{" "}
                        book{filteredBooks.length !== 1 ? "s" : ""}
                    </p>

                    {(searchTerm || selectedCategory !== "All Categories") && (
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("All Categories");
                            }}
                            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>

                {filteredBooks.length > 0 ? (
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {filteredBooks.map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800">
                            No books found
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Try searching with another keyword or selecting a different category.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}