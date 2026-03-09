"use client";

import Image from "next/image";
import Link from "next/link";
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
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Welcome back
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Login to continue to your BookNest account.
                    </p>
                </div>

                <form onSubmit={handleCredentialsLogin} className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4">
                    <button
                        onClick={handleDemoLogin}
                        className="w-full rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-[0.98]"
                    >
                        🎯 Demo Login (Recruiter)
                    </button>
                </div>

                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs uppercase tracking-wide text-gray-400">
                        Or continue with
                    </span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 active:scale-[0.98]"
                >
                    <Image
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    Sign in with Google
                </button>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link
                        href="/register"
                        className="font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}