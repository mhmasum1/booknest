"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/books", label: "Books" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const linkClass = (path) =>
        `rounded-xl px-3 py-2 transition ${pathname === path
            ? "bg-blue-100 font-semibold text-blue-600"
            : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
        }`;

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight text-blue-600"
                        onClick={closeMenu}
                    >
                        BookNest
                    </Link>

                    <div className="hidden items-center gap-3 text-sm font-medium lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={linkClass(link.href)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {status === "loading" ? (
                            <span className="text-gray-500">Loading...</span>
                        ) : session ? (
                            <>
                                <Link
                                    href="/add-product"
                                    className="rounded-xl border border-gray-200 px-4 py-2 transition hover:bg-gray-100"
                                >
                                    Add Product
                                </Link>

                                <Link
                                    href="/manage-products"
                                    className="rounded-xl border border-gray-200 px-4 py-2 transition hover:bg-gray-100"
                                >
                                    Manage Products
                                </Link>

                                <button
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="rounded-xl border border-gray-200 px-4 py-2 transition hover:bg-gray-100"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="inline-flex items-center justify-center rounded-xl border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:hidden">
                        <div className="flex flex-col gap-2 text-sm font-medium">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={linkClass(link.href)}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="my-2 border-t border-gray-200" />

                            {status === "loading" ? (
                                <span className="px-3 py-2 text-gray-500">Loading...</span>
                            ) : session ? (
                                <>
                                    <Link
                                        href="/add-product"
                                        className="rounded-xl border border-gray-200 px-4 py-2 transition hover:bg-gray-100"
                                        onClick={closeMenu}
                                    >
                                        Add Product
                                    </Link>

                                    <Link
                                        href="/manage-products"
                                        className="rounded-xl border border-gray-200 px-4 py-2 transition hover:bg-gray-100"
                                        onClick={closeMenu}
                                    >
                                        Manage Products
                                    </Link>

                                    <button
                                        onClick={() => {
                                            closeMenu();
                                            signOut({ callbackUrl: "/" });
                                        }}
                                        className="rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="rounded-xl bg-blue-600 px-4 py-2 text-center text-white transition hover:bg-blue-700"
                                        onClick={closeMenu}
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/register"
                                        className="rounded-xl border border-gray-200 px-4 py-2 text-center transition hover:bg-gray-100"
                                        onClick={closeMenu}
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}