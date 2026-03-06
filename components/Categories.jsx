export default function Categories() {
    const categories = ["Fiction", "Programming", "Self-help", "Business"];

    return (
        <section className="px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold">Categories</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="rounded-xl border bg-white p-6 text-center shadow"
                        >
                            <h3 className="text-lg font-semibold">{category}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}