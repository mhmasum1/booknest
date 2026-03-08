"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCredentialsLogin = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        if (result?.ok) {
            router.push("/");
        } else {
            alert("Invalid email or password");
        }
    };

    const handleGoogleLogin = async () => {
        await signIn("google", { callbackUrl: "/" });
    };

    const handleDemoLogin = async () => {
        const result = await signIn("credentials", {
            email: "admin@gmail.com",
            password: "123456",
            redirect: false,
        });
        if (result?.ok) {
            router.push("/");
        } else {
            alert("Demo login failed");
        }
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

                <div className="mt-4">
                    <button
                        onClick={handleDemoLogin}
                        className="w-full rounded bg-green-600 px-4 py-2 text-white"
                    >
                        🎯 Demo Login (Recruiter)
                    </button>
                    <p className="mt-1 text-center text-xs text-gray-500">
                        Email: admin@gmail.com | Password: 123456
                    </p>
                </div>

                <div className="mt-6 border-t pt-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full rounded border px-4 py-2"
                    >
                        Continue with Google
                    </button>
                </div>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don not have an account?{" "}
                    <a href="/register" className="text-blue-600 underline">Register</a>
                </p>
            </div>
        </div>
    );
}