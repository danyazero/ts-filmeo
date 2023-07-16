'use client'
import React, {useState} from 'react';
import {Input} from "@/shared/Input/Input";
import {Button} from "@/shared/Button/Button";
import {GetEmoji} from "@/shared/GetEmoji/GetEmoji";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import crypto from "crypto";

export const AuthorizationForm = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {push} = useRouter()

    async function signInHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        const passwordHash = crypto.createHash('sha256').update(password).digest('hex')

        const authResult = await signIn("credentials", {
            email,
            password: passwordHash,
            redirect: false
        })

        if (authResult && !authResult.error) {
            push('/')
        }
        else console.log("Auth error" + authResult?.error)
    }
    return (
        <>
            <form onSubmit={signInHandler}>
                <Input value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} type={"email"} name={"email"} placeholder={"Enter email"} required={true}/>
                <Input value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} type={"password"} name={"password"} placeholder={"Enter password"} required={true}/>
                <Button title={"Sign in"}>
                    <GetEmoji unicode={"1F680"}/>
                </Button>
            </form>
        </>
    );
}