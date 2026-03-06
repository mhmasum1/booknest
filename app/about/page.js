export default function AboutPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-16">

            <h1 className="text-4xl font-bold">About BookNest</h1>

            <p className="mt-4 max-w-3xl text-gray-600">
                BookNest is a modern online book catalog platform built with Next.js.
                Our goal is to help readers easily discover, explore, and manage books
                through a simple and clean user experience.
            </p>


            {/* features */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">

                <div className="rounded-xl border bg-white p-6 shadow">
                    <h2 className="text-xl font-semibold">📚 Huge Collection</h2>
                    <p className="mt-2 text-gray-600">
                        Browse a wide range of books including fiction, programming,
                        self-help, and business.
                    </p>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow">
                    <h2 className="text-xl font-semibold">⚡ Fast Experience</h2>
                    <p className="mt-2 text-gray-600">
                        Built with Next.js for fast loading and smooth navigation
                        across the website.
                    </p>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow">
                    <h2 className="text-xl font-semibold">🔐 Secure Access</h2>
                    <p className="mt-2 text-gray-600">
                        Authentication powered by NextAuth ensures protected routes
                        for managing books.
                    </p>
                </div>

            </div>


            {/* mission */}
            <div className="mt-16 rounded-xl border bg-gray-50 p-8">
                <h2 className="text-2xl font-semibold">Our Mission</h2>

                <p className="mt-3 max-w-3xl text-gray-600">
                    Our mission is to create a simple and beginner-friendly book
                    management platform where users can explore books, view details,
                    and manage their own collections efficiently.
                </p>
            </div>

        </div>
    );
}