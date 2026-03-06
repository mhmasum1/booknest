export default function Testimonials() {
    const reviews = [
        {
            name: "Ayesha Rahman",
            role: "Student",
            review:
                "BookNest made it really easy for me to explore books for study and self-improvement. The design is simple and clean.",
        },
        {
            name: "Nafis Ahmed",
            role: "Web Learner",
            review:
                "I love how easy it is to browse books and view details. It feels fast, organized, and beginner-friendly.",
        },
        {
            name: "Tanmoy Hasan",
            role: "Book Lover",
            review:
                "The featured books and categories section helped me discover books quickly. The whole experience feels smooth.",
        },
    ];

    return (
        <section className="bg-gray-50 px-4 py-16">            <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold">What Readers Say</h2>
                <p className="mt-3 text-gray-600">
                    Readers appreciate BookNest for its clean interface, easy navigation, and smooth browsing experience.
                </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {reviews.map((review) => (
                    <div
                        key={review.name}
                        className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="text-yellow-500">★★★★★</div>
                        <p className="mt-4 text-sm leading-6 text-gray-600">
                            “{review.review}”
                        </p>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}