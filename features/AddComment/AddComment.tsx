'use client'
import React, {FC, useState} from 'react';
import st from ".//AddComment.module.scss"
import {Input} from "@/shared/Input/Input";
import {addComment} from "@/features/AddComment/api/addComment";
import {usePathname} from "next/navigation";

export const AddComment: FC = () => {
    const [comment, setComment] = useState<string>("")
    const pathname = usePathname()
    async function addCommentSubmit(event: React.FormEvent<HTMLFormElement>){
        event.isDefaultPrevented()
        event.preventDefault()

        await addComment(parseInt(pathname.split('/')[2]), "danyazero", comment)
        //movieId: useMovieId, id: 4, username: "danyazero", text: comment
    }

 return (
  <div className={st.addComment}>
    <form onSubmit={addCommentSubmit}>
        <Input value={comment} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setComment(event.target.value)} placeholder={"Share your opinion"}/>
        <button type={"submit"}>Add</button>
    </form>
  </div>
 );
}
