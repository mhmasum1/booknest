export default function AboutPage() {
    const features = [
        {
            title: "Huge Collection",
            description:
                "Browse a wide range of books including fiction, programming, self-help, and business.",
            icon: "📚",
        },
        {
            title: "Fast Experience",
            description:
                "Built with Next.js for fast loading and smooth navigation across the website.",
            icon: "⚡",
        },
        {
            title: "Secure Access",
            description:
                "Authentication powered by NextAuth ensures protected routes for managing books.",
            icon: "🔐",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-6 md:py-14">
            <div className="mx-auto max-w-7xl">
                <section className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm md:p-12">
                    <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">
                        About BookNest
                    </span>

                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        A modern place to
                        <span className="block text-blue-600">discover great books</span>
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
                        BookNest is a modern online book catalog platform built with
                        Next.js. Our goal is to help readers easily discover,
                        explore, and manage books through a simple, clean, and
                        enjoyable user experience.
                    </p>
                </section>

                <section className="mt-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            What makes BookNest special
                        </h2>
                        <p className="mt-3 text-gray-600">
                            We focus on simplicity, speed, and a smooth browsing
                            experience so readers can find books with ease.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl">
                                    {feature.icon}
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-gray-900 transition group-hover:text-blue-600">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-14 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
                    <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-1 text-sm font-medium text-green-700">
                        Our Mission
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                        Simple, useful, and reader-friendly
                    </h2>

                    <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
                        Our mission is to create a simple and beginner-friendly
                        book management platform where users can explore books,
                        view details, and manage their own collections efficiently.
                        We want BookNest to feel fast, welcoming, and easy to use
                        for every reader.
                    </p>
                </section>
            </div>
        </main>
    );
}