import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="absolute inset-0 opacity-40">
                <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-blue-200 blur-3xl" />
                <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-indigo-200 blur-3xl" />
                <div className="absolute bottom-10 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-cyan-200 blur-3xl" />
            </div>

            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center md:px-6 md:py-28">
                <span className="rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                    📚 Your smart online bookstore
                </span>

                <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
                    Discover Your Next
                    <span className="block text-blue-600">Favorite Book</span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                    Explore inspiring books for learning, growth, imagination, and
                    self-improvement — all in one beautiful place.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                    <Link
                        href="/books"
                        className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]"
                    >
                        Browse Books
                    </Link>

                    <Link
                        href="/about"
                        className="rounded-xl border border-gray-200 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-white hover:shadow-md active:scale-[0.98]"
                    >
                        Learn More
                    </Link>
                </div>

                <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur">
                        <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
                        <p className="mt-1 text-sm text-gray-600">Books Available</p>
                    </div>

                    <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur">
                        <h3 className="text-2xl font-bold text-gray-900">20+</h3>
                        <p className="mt-1 text-sm text-gray-600">Popular Categories</p>
                    </div>

                    <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur">
                        <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                        <p className="mt-1 text-sm text-gray-600">Happy Readers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}