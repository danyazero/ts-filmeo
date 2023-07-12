'use client'
import React, {FC, useState} from 'react';
import st from ".//AddComment.module.scss"
import {Input} from "@/shared/Input/Input";
import {addComment} from "@/features/AddComment/api/addComment";
import {Button} from "@/shared/Button/Button";

export const AddComment: FC<{movieId: string}> = (props) => {
    const [comment, setComment] = useState<string>("")
    async function addCommentSubmit(event: React.FormEvent<HTMLFormElement>){
        event.isDefaultPrevented()
        event.preventDefault()

        await addComment(parseInt(props.movieId), "danyazero", comment)
        setComment("")
    }

 return (
  <>
    <form className={st.addComment} onSubmit={addCommentSubmit}>
        <Input value={comment} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setComment(event.target.value)} placeholder={"Share your opinion"}/>
        <Button title={"Add"}/>
    </form>
  </>
 );
}
