export default function Categories() {
    const categories = [
        { name: "Fiction", icon: "📖" },
        { name: "Programming", icon: "💻" },
        { name: "Self-help", icon: "🌱" },
        { name: "Business", icon: "📈" },
    ];

    return (
        <section className="bg-slate-50 px-4 py-20 md:px-6">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                        Browse Categories
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Find books from your favorite topics and interests.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                        >
                            <div className="text-4xl">{category.icon}</div>

                            <h3 className="mt-4 text-lg font-semibold text-gray-900 transition group-hover:text-blue-600">
                                {category.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}