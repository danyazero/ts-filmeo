'use client'
import {signIn} from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
    return (
        <Link href={'/auth'}>Sign in</Link>
    );
};