import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-24 bg-slate-950 px-4 py-14 text-gray-300 md:px-6">
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            BookNest
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            Discover your next favorite book. Explore inspiring
                            collections for learning, growth, and imagination.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="mt-4 space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/books" className="hover:text-white">
                                    Books
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-white">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Contact
                        </h3>

                        <p className="mt-4 text-sm text-gray-400">
                            Email: support@booknest.com
                        </p>

                        <p className="mt-2 text-sm text-gray-400">
                            Dhaka, Bangladesh
                        </p>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    © 2026 BookNest. All rights reserved.
                </div>

            </div>
        </footer>
    );
}