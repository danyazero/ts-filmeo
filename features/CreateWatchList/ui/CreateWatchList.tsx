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

export const CreateWatchList: FC = () => {
    const [name, setName] = useState("")
    const [success, setSuccess] = useState<IAdditional>()
    const {data: session} = useSession()

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (session?.user?.name){
            const response = await createWatchListReq(name, session.user.name)
            setSuccess(response.additional)
        }
    }
    
    return (
        <div className={st.createWatchListContainer}>
            <h2>Watch Lists</h2>
            <form className={st.form} onSubmit={onSubmit}>
                <Input value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} placeholder={"Enter WatchList Name"}/>
                <Button title={"Create"} disabled={!session?.user?.name}>
                    <GetEmoji unicode={"1F3AC"}/>
                </Button>
            </form>
            {success && <Message text={success.text} error={success.code != 200}/>}
        </div>
    );
}