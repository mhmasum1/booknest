export default function LoginPage() {
    return (
        <div className="mx-auto max-w-md px-4 py-16">
            <div className="rounded-xl border bg-white p-6 shadow">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="mt-2 text-sm text-gray-600">
                    Login to access protected pages.
                </p>

                <form className="mt-6 space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded border px-4 py-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded border px-4 py-2"
                    />
                    <button className="w-full rounded bg-blue-600 px-4 py-2 text-white">
                        Login
                    </button>
                </form>

                <button className="mt-4 w-full rounded border px-4 py-2">
                    Continue with Google
                </button>
            </div>
        </div>
    );
}