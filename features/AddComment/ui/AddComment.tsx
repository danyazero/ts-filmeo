'use client'
import React, {FC, useState} from 'react';
import st from "./AddComment.module.scss"
import {Input} from "@/shared/Input/Input";
import {addComment} from "@/features/AddComment/api/addComment";
import {Button} from "@/shared/Button/Button";
import {useSession} from "next-auth/react";
import {IAdditional} from "@/Models/Models";
import {Message} from "@/shared/Message/Message";

export const AddComment: FC<{movieId: string}> = (props) => {
    const [comment, setComment] = useState<string>("")
    const [success, setSuccess] = useState<IAdditional>()
    const { data: session } = useSession();
    async function addCommentSubmit(event: React.FormEvent<HTMLFormElement>){
        event.isDefaultPrevented()
        event.preventDefault()

        if (session?.user?.name){
            const response = await addComment(parseInt(props.movieId), session.user.name, comment)
            setSuccess(response.additional)
        }
        setComment("")
    }

 return (
  <div className={st.addCommentContainer}>
    <form className={st.addComment} onSubmit={addCommentSubmit}>
        <Input value={comment} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setComment(event.target.value)} placeholder={"Share your opinion"}/>
        <Button disabled={!session?.user?.name} title={"Add"}/>
    </form>
      {success && <Message text={success.text} error={success.code != 200}/>}
  </div>
 );
}
