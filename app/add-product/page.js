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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Product:", formData);
        alert("Product added successfully!");

        setFormData({
            title: "",
            shortDescription: "",
            fullDescription: "",
            price: "",
            category: "",
            image: "",
        });
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
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        name="shortDescription"
                        placeholder="Short Description"
                        value={formData.shortDescription}
                        onChange={handleChange}
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <textarea
                        name="fullDescription"
                        placeholder="Full Description"
                        rows="5"
                        value={formData.fullDescription}
                        onChange={handleChange}
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category / Date / Priority"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded border px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL (optional)"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full rounded border px-4 py-2"
                    />
                    <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}