'use client'
import React, {useState} from 'react';
import {Input} from "@/shared/Input/Input";
import {Button} from "@/shared/Button/Button";
import {GetEmoji} from "@/shared/GetEmoji/GetEmoji";
import {z} from "zod";
import {FormControl} from "@/entities/FormControl";
import {Message} from "@/shared/Message/Message";
import {registerUser} from "./../api/registerUser";

interface IRegistrationForm {
    name: string,
    email: string,
    password: string,
    confirm: string
}

export const RegistrationForm = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirm, setConfirm] = useState<string>("")
    const [error, setError] = useState<z.ZodFormattedError<{email: string, password: string, name: string}, string>>({_errors: []})
    const [success, setSuccess] = useState<{text: string, code: number}>()

    const formSchema = z.object({
        name: z.string().min(4, {message: "Minimum name length 4 characters"}).max(12, {message: "Maximum name length 12 characters"}),
        email: z.string().email({message: "The mail is not entered correctly"}),
        password: z.string().min(5, {message: "Minimum password length 5 characters"}).max(16, {message: "Maximum password length 16 characters"})
    })

    async function signInHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        const data = {
            name,
            password,
            email
        }

        const validateRegistrationData = formSchema.safeParse(data)

        if (!validateRegistrationData.success){
            const errors = validateRegistrationData.error.format()
            setError(errors)
        }else {
            try {
                const response = await registerUser(data.name, data.email, data.password)
                setSuccess(response.additional)
                setError({_errors: []})
            }catch (e) {
                console.log("Register error: " + e)
            }
        }
    }

    return (
        <>
            <form onSubmit={signInHandler}>
                <FormControl error={error.name?._errors}><Input value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} type={"text"} name={"username"} placeholder={"Enter username"} required={true}/></FormControl>
                <FormControl error={error.email?._errors}><Input value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} type={"email"} name={"email"} placeholder={"Enter email"} required={true}/></FormControl>
                <FormControl error={error.password?._errors}><Input value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} type={"password"} name={"password"} placeholder={"Enter password"} required={true}/></FormControl>
                <Input value={confirm} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setConfirm(event.target.value)} type={"password"} name={"password_confirm"} placeholder={"Confirm password"} required={true}/>
                <Button disabled={!(password == confirm)} title={"Register"}>
                    <GetEmoji unicode={"1F680"}/>
                </Button>
                {success && <Message text={success.text} error={success.code != 200}/>}
            </form>
        </>
    );
}