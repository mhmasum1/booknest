export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-6 md:py-14">
            <div className="mx-auto max-w-7xl">
                <section className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm md:p-12">
                    <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">
                        Contact BookNest
                    </span>

                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Let’s get in
                        <span className="block text-blue-600">touch with you</span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                        Have a question, feedback, or suggestion? Send us a message
                        and we’ll be happy to hear from you.
                    </p>
                </section>

                <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Send us a message
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Fill out the form below and share your thoughts with us.
                        </p>

                        <form className="mt-8 space-y-5">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    rows="6"
                                    placeholder="Write your message..."
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Contact Information
                            </h3>
                            <div className="mt-4 space-y-3 text-sm text-gray-600">
                                <p>
                                    <span className="font-medium text-gray-900">Email:</span>{" "}
                                    support@booknest.com
                                </p>
                                <p>
                                    <span className="font-medium text-gray-900">Location:</span>{" "}
                                    Dhaka, Bangladesh
                                </p>
                                <p>
                                    <span className="font-medium text-gray-900">Availability:</span>{" "}
                                    Sun - Thu, 9:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Why contact us?
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-gray-600">
                                <li>📚 Ask about books and categories</li>
                                <li>💬 Share feedback about the platform</li>
                                <li>⚡ Report issues or suggestions</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}