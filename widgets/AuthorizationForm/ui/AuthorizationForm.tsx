'use client'
import React, {useState} from 'react';
import {Input} from "@/shared/Input/Input";
import {Button} from "@/shared/Button/Button";
import {GetEmoji} from "@/shared/GetEmoji/GetEmoji";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import crypto from "crypto";
import {z} from "zod";
import {FormControl} from "@/entities/FormControl";
import {getHash} from "@/Models/utils/getHash";

export const AuthorizationForm = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<z.ZodFormattedError<{email: string, password: string}, string>>({_errors: []})
    const {push} = useRouter()

    const formSchema = z.object({
        email: z.string().email({message: "The mail is not entered correctly"}),
        password: z.string().min(5, {message: "Minimum password length 5 characters"}).max(16, {message: "Maximum password length 16 characters"})
    })

    async function signInHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = {
            email,
            password
        }
        console.log(data)

        const validateAuthForm = formSchema.safeParse(data)

        if (!validateAuthForm.success) {
            setError(validateAuthForm.error.format())
        } else {
            setError({_errors: []})
            const passwordHash = getHash(data.password)
            const authResult = await signIn("credentials", {
                email: data.email,
                password: passwordHash,
                redirect: false
            })

            if (authResult && !authResult.error) {
                push('/')
            }
        }
    }

    return (
        <>
            <form onSubmit={signInHandler}>
                <FormControl error={error.email?._errors}>
                    <Input value={email}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                           type={"email"} name={"email"} placeholder={"Enter email"} required={true}/>
                </FormControl>
                <FormControl error={error.password?._errors}>
                    <Input value={password}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                           type={"password"} name={"password"} placeholder={"Enter password"} required={true}/>
                </FormControl>
                <Button title={"Sign in"}>
                    <GetEmoji unicode={"1F680"}/>
                </Button>
            </form>
        </>
    );
}