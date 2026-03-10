"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const { data: session, status } = useSession();
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

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

    const closeMenu = () => {
        setMenuOpen(false);
        setUserDropdownOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setUserDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                                    Add Book
                                </Link>

                                <Link
                                    href="/manage-products"
                                    className="rounded-xl border border-gray-200 px-4 py-2 transition hover:bg-gray-100"
                                >
                                    Manage Books
                                </Link>

                                <div className="relative ml-2" ref={dropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setUserDropdownOpen((prev) => !prev)
                                        }
                                        className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                                    >
                                        <span>{session.user?.name || "User"}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-4 w-4 transition ${userDropdownOpen ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {userDropdownOpen && (
                                        <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
                                            <Link
                                                href="/add-product"
                                                className="block rounded-xl px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
                                                onClick={() =>
                                                    setUserDropdownOpen(false)
                                                }
                                            >
                                                Add Book
                                            </Link>

                                            <Link
                                                href="/manage-products"
                                                className="block rounded-xl px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
                                                onClick={() =>
                                                    setUserDropdownOpen(false)
                                                }
                                            >
                                                Manage Books
                                            </Link>

                                            <button
                                                onClick={() => {
                                                    setUserDropdownOpen(false);
                                                    signOut({ callbackUrl: "/" });
                                                }}
                                                className="mt-1 block w-full rounded-xl bg-red-500 px-4 py-2 text-left text-sm text-white transition hover:bg-red-600"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
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
                                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                                        <p className="text-sm font-semibold text-blue-700">
                                            {session.user?.name || "User"}
                                        </p>
                                    </div>

                                    <Link
                                        href="/add-product"
                                        className="rounded-xl border border-gray-200 px-4 py-2 transition hover:bg-gray-100"
                                        onClick={closeMenu}
                                    >
                                        Add Book
                                    </Link>

                                    <Link
                                        href="/manage-products"
                                        className="rounded-xl border border-gray-200 px-4 py-2 transition hover:bg-gray-100"
                                        onClick={closeMenu}
                                    >
                                        Manage Books
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