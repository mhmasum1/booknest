import { books } from "@/lib/books";
import Link from "next/link";

export default function ManageProductsPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-10">
            <h1 className="text-3xl font-bold">Manage Products</h1>

            <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-3 text-left">Title</th>
                            <th className="border p-3 text-left">Price</th>
                            <th className="border p-3 text-left">Category</th>
                            <th className="border p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id}>
                                <td className="border p-3">{book.title}</td>
                                <td className="border p-3">৳ {book.price}</td>
                                <td className="border p-3">{book.category}</td>
                                <td className="border p-3">
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/books/${book.id}`}
                                            className="rounded bg-green-600 px-3 py-1 text-white"
                                        >
                                            View
                                        </Link>
                                        <button className="rounded bg-red-600 px-3 py-1 text-white">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}