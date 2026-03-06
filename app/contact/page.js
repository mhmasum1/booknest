export default function ContactPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-16">
            <div className="rounded-xl border bg-white p-6 shadow">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-3 text-gray-600">
                    Have a question or feedback? Send us a message.
                </p>

                <form className="mt-8 space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded border px-4 py-2"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full rounded border px-4 py-2"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full rounded border px-4 py-2"
                    ></textarea>
                    <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}