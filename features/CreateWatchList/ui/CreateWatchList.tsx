"use client"
import React, {FC, useState} from 'react';
import {Input} from "@/shared/Input/Input";
import {Button} from "@/shared/Button/Button";
import st from "./CreateWatchList.module.scss"
import {GetEmoji} from "@/shared/GetEmoji/GetEmoji";
import {createWatchListReq} from "@/features/CreateWatchList/api/createWatchListReq";
import {useSession} from "next-auth/react";
import {IAdditional} from "@/Models/Models";
import {Message} from "@/shared/Message/Message";
import {z} from "zod";
import {FormControl} from "@/entities/FormControl";

export const CreateWatchList: FC<{id: string}> = (props) => {
    const [name, setName] = useState("")
    const [success, setSuccess] = useState<IAdditional>()
    const [error, setError] = useState<z.ZodFormattedError<{ name: string }, string>>({_errors: []})
    const {data: session} = useSession()

    const formSchema = z.object({
        name: z.string().max(9, {message: "Maximum len 9"}).min(4,{message: "Minimum len 4"})
    })

    async function createWatchListHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        const data = {
            name
        }

        const validateNameData = formSchema.safeParse(data)

        if (!validateNameData.success) {
            const errors = validateNameData.error.format()
            setError(errors)
        } else {
            if (session?.user?.name) {
                const response = await createWatchListReq(parseInt(props.id), name, session.user.name)
                setSuccess(response.additional)
                setError({_errors: []})
            }else setSuccess({text: "Not authorized", code: 500})
        }
    }

    return (
        <div className={st.createWatchListContainer}>
            <form className={st.form} onSubmit={createWatchListHandler}>
                <FormControl error={error.name?._errors}>
                    <Input value={name} type={"text"}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                           placeholder={"Enter Name"} required={true}/>
                </FormControl>
                <Button title={"Create"}>
                    <GetEmoji unicode={"1F3AC"}/>
                </Button>
            </form>
            {success && <Message text={success.text} error={success.code != 200}/>}
        </div>
    );
}