"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCredentialsLogin = async (e) => {
        e.preventDefault();

        const result = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/",
        });

        console.log(result);
    };

    const handleGoogleLogin = async () => {
        await signIn("google", { callbackUrl: "/" });
    };

    return (
        <div className="mx-auto max-w-md px-4 py-16">
            <div className="rounded-xl border bg-white p-6 shadow">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="mt-2 text-sm text-gray-600">
                    Login to access protected pages.
                </p>

                <form onSubmit={handleCredentialsLogin} className="mt-6 space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded border px-4 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded border px-4 py-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        Login
                    </button>
                </form>

                <button
                    onClick={handleGoogleLogin}
                    className="mt-4 w-full rounded border px-4 py-2"
                >
                    Continue with Google
                </button>
            </div>
        </div>
    );
}