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
        <section className="px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold">Why Choose Us</h2>
                    <p className="mt-3 text-gray-600">
                        BookNest is designed to make book discovery simple, affordable, and enjoyable for every reader.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="text-4xl">{feature.icon}</div>
                            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
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