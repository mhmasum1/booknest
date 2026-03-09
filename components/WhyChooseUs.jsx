export default function WhyChooseUs() {
    const features = [
        {
            title: "Curated Collection",
            description:
                "We carefully organize books from different categories so readers can quickly find what they need.",
            icon: "📚",
        },
        {
            title: "Affordable Price",
            description:
                "BookNest highlights budget-friendly books so users can explore quality content at reasonable prices.",
            icon: "💸",
        },
        {
            title: "Easy Browsing",
            description:
                "Simple navigation, clear book cards, and detailed pages make the whole experience smooth and beginner-friendly.",
            icon: "⚡",
        },
    ];

    return (
        <section className="bg-white px-4 py-20 md:px-6">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                        Why BookNest
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                        Why Choose Us
                    </h2>

                    <p className="mt-4 text-gray-600">
                        BookNest is designed to make book discovery simple,
                        affordable, and enjoyable for every reader.
                    </p>
                </div>

                {/* Features */}
                <div className="mt-14 grid gap-6 md:grid-cols-3">
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

                            <p className="mt-3 text-sm leading-6 text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}