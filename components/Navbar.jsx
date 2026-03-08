"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session, status } = useSession();

    return (
        <nav className="sticky top-0 z-50 bg-white shadow">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    BookNest
                </Link>

                <div className="flex items-center gap-4 text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/books">Books</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>

                    {status === "loading" ? (
                        <span className="text-gray-500">Loading...</span>
                    ) : session ? (
                        <>
                            <Link
                                href="/add-product"
                                className="rounded border px-4 py-2"
                            >
                                Add Product
                            </Link>

                            <Link
                                href="/manage-products"
                                className="rounded border px-4 py-2"
                            >
                                Manage Products
                            </Link>

                            <button
                                onClick={() => signOut({ callbackUrl: "/" })}
                                className="rounded bg-red-600 px-4 py-2 text-white"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="rounded bg-blue-600 px-4 py-2 text-white"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="rounded border px-4 py-2"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}