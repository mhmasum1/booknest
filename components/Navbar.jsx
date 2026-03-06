import Link from "next/link";

export default function Navbar() {
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
                    <Link
                        href="/login"
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}