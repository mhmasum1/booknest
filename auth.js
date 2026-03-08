import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from "mongodb";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Demo login
                if (
                    credentials?.email === "admin@gmail.com" &&
                    credentials?.password === "123456"
                ) {
                    return { id: "demo", name: "Admin", email: "admin@gmail.com" };
                }

                // MongoDB user login
                const client = await MongoClient.connect(process.env.MONGODB_URI);
                const db = client.db(process.env.DB_NAME);
                const user = await db.collection("users").findOne({
                    email: credentials.email,
                    password: credentials.password,
                });
                await client.close();

                if (user) {
                    return { id: user._id.toString(), name: user.name, email: user.email };
                }
                return null;
            },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: { signIn: "/login" },
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    trustHost: true,
};

export default NextAuth(authOptions);