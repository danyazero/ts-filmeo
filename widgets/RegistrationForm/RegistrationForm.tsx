'use client'
import React, {useState} from 'react';
import {Input} from "@/shared/Input/Input";
import {Button} from "@/shared/Button/Button";
import {GetEmoji} from "@/shared/GetEmoji/GetEmoji";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import {myDirection} from "@/Models/Models";
import crypto from "crypto";

export const RegistrationForm = () => {
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirm, setConfirm] = useState<string>("")
    const [success, setSuccess] = useState<string>("")

    async function registerUser(name: string, email: string, password: string){
        const passwordHash = crypto.createHash('sha256').update(password).digest('hex')
        const response = await fetch(myDirection + '/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password: passwordHash
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        return response.json()
    }

    async function signInHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        try {
            const response = await registerUser(username, email, password)
            setSuccess(response.text)
        }catch (e) {
            console.log("Register error: " + e)
        }

        // if (authResult && !authResult.error) {
        //     push('/')
        // }
        // else console.log("Auth error" + authResult?.error)
    }
    return (
        <>
            <form onSubmit={signInHandler}>
                <Input value={username} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} type={"text"} name={"username"} placeholder={"Enter username"} required={true}/>
                <Input value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} type={"email"} name={"email"} placeholder={"Enter email"} required={true}/>
                <Input value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} type={"password"} name={"password"} placeholder={"Enter password"} required={true}/>
                <Input value={confirm} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setConfirm(event.target.value)} type={"password"} name={"password_confirm"} placeholder={"Confirm password"} required={true}/>
                <Button disabled={!(password == confirm)} title={"Register"}>
                    <GetEmoji unicode={"1F680"}/>
                </Button>
                {success.length > 0 && <p className={"bg-amber-600 rounded-2xl text-red-600 p-3"}>{success}</p>}
            </form>
        </>
    );
}