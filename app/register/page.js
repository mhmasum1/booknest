"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        if (res.ok) {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            if (result?.ok) {
                router.push("/");
            }
        } else {
            const data = await res.json();
            alert(data.error || "Registration failed");
        }
    };

    const handleGoogleLogin = async () => {
        await signIn("google", { callbackUrl: "/" });
    };

    return (
        <div className="mx-auto max-w-md px-4 py-16">
            <div className="rounded-xl border bg-white p-6 shadow">
                <h1 className="text-3xl font-bold">Register</h1>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded border px-4 py-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded border px-4 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded border px-4 py-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-6 border-t pt-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full rounded border px-4 py-2"
                    >
                        Continue with Google
                    </button>
                </div>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 underline">Login</a>
                </p>
            </div>
        </div>
    );
}