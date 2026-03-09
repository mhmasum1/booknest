"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProductPage() {
    const [formData, setFormData] = useState({
        title: "",
        shortDescription: "",
        fullDescription: "",
        price: "",
        category: "",
        image: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Book added successfully!");
                setFormData({
                    title: "",
                    shortDescription: "",
                    fullDescription: "",
                    price: "",
                    category: "",
                    image: "",
                });
            } else {
                alert(data.message || "Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to add book");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-6 md:py-14">
            <div className="mx-auto max-w-2xl">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">

                    <h1 className="text-3xl font-bold text-gray-900">
                        Add New Book
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Fill in the form below to add a new book to the collection.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            type="text"
                            placeholder="Book Title"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            required
                        />

                        <input
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            type="text"
                            placeholder="Short Description"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            required
                        />

                        <textarea
                            name="fullDescription"
                            value={formData.fullDescription}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Full Description"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            required
                        />

                        <input
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            type="number"
                            placeholder="Price"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            required
                        />

                        {/* Category Dropdown */}
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Programming">Programming</option>
                            <option value="Self-help">Self-help</option>
                            <option value="Business">Business</option>
                        </select>

                        <input
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            type="text"
                            placeholder="Image URL"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
                        >
                            {loading ? "Submitting..." : "Add Book"}
                        </button>

                    </form>
                </div>
            </div>
        </main>
    );
}