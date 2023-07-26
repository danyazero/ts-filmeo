import NextAuth, {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import crypto from "crypto"
import {openDb} from "@/app/api/database";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                    required: true
                },
                password: { label: "Password", type: "password", required: true },
            },
            async authorize(credentials) {
                const passwordHash = crypto.createHash('sha256').update(credentials!.password).digest('hex')
                const db = await openDb()
                console.log({email: credentials?.email, pass: credentials?.password})

                if (passwordHash != null && credentials?.email){
                    const user = await db.get("SELECT id, name, email FROM users WHERE email = ? AND  password = ?", credentials.email, passwordHash)
                    console.log(user)
                    return user;
                }

                return null;
            },
        }),
    ],
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }