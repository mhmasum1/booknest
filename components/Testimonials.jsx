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
        <section className="bg-slate-50 px-4 py-20 md:px-6">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                        Reader Reviews
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                        What Readers Say
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Readers appreciate BookNest for its clean interface,
                        easy navigation, and smooth browsing experience.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="text-base tracking-[0.2em] text-yellow-500">
                                ★★★★★
                            </div>

                            <p className="mt-5 text-sm leading-7 text-gray-600">
                                “{review.review}”
                            </p>

                            <div className="mt-6 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                                    {review.name
                                        .split(" ")
                                        .map((part) => part[0])
                                        .slice(0, 2)
                                        .join("")}
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {review.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}