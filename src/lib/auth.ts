import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import type { AuthOptions, Session } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export type UserType = {
    id: string;
    parent?: boolean;
}

export type UserSessionType = Session & {
    user: UserType;
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Sign In',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });

                if (!user) {
                    return null;
                }


                const passwordValid = await bcrypt.compare(credentials.password, user.password);

                if (!passwordValid) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                } as any;
            }
        })
    ],
    callbacks: {
        session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    ...token
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                return {
                    ...token,
                    ...user,
                };
            }
            return token;
        },
    },
    pages: {
        signIn: "/auth",
    },
    debug: process.env.NODE_ENV !== "production",
    session: { strategy: "jwt" }
}
