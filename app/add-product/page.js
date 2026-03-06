"use client";

import { useState } from "react";

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
                alert("Book added successfully!");
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
            alert("Failed to add book");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-2xl px-4 py-10">
            <div className="rounded-xl border bg-white p-6 shadow">
                <h1 className="text-3xl font-bold">Add Product</h1>
                <p className="mt-2 text-gray-600">
                    Fill in the form to add a new book.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        type="text"
                        placeholder="Title"
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <input
                        name="shortDescription"
                        value={formData.shortDescription}
                        onChange={handleChange}
                        type="text"
                        placeholder="Short Description"
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <textarea
                        name="fullDescription"
                        value={formData.fullDescription}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Full Description"
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <input
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        type="number"
                        placeholder="Price"
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <input
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        type="text"
                        placeholder="Category"
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <input
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        type="text"
                        placeholder="Image URL"
                        className="w-full rounded border px-4 py-2"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}