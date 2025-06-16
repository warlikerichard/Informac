import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === 'google') {
                try {
                    // Check if user exists
                    const existingUser = await prisma.user.findUnique({
                        where: { email: user.email! }
                    });

                    if (!existingUser) {
                        // Create new user if doesn't exist
                        await prisma.user.create({
                            data: {
                                email: user.email!,
                                name: user.name,
                                // For Google users, we'll set a random password since they won't use it
                                password: Math.random().toString(36).slice(-8),
                                role: 'USER',
                            }
                        });
                    }
                } catch (error) {
                    console.error('Error in signIn callback:', error);
                    return false;
                }
            }
            return true;
        },
        async session({ session, token }) {
            try {
                if (session.user) {
                    const user = await prisma.user.findUnique({
                        where: { email: session.user.email! }
                    });
                    if (user) {
                        session.user.role = user.role;
                    }
                }
                return session;
            } catch (error) {
                console.error('Error in session callback:', error);
                return session;
            }
        }
    },
    pages: {
        signIn: '/',
        error: '/auth/error',
    },
    debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };