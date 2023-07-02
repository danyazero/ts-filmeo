'use client'
import React, {FC} from 'react';
import {AddComment} from "@/features/AddComment/AddComment";
import {Comment} from "@/entities/Comment/Comment";
import useSWR from "swr";
import {getComments} from "@/widgets/Comments/api/getComments";
import {IComment} from "@/entities/Comment/Comment.interface";
import st from ".//Comments.module.scss"
import {usePathname} from "next/navigation";

export const Comments: FC = () => {
    const pathname = usePathname()
    const {data: comments, isLoading} = useSWR<IComment[]>({
        key: 'comments',
        movieId: parseInt(pathname.split('/')[2])
    }, getComments)
    return (
        <div className={st.commentsContainer}>
            <h2>Comments {comments ? "("+comments.length + ")" : ""}</h2>
            <AddComment/>
            {
                !isLoading && comments ? comments.map((element, index) => <Comment key={"film_comment_" + index}
                                                                                   id={element.id}
                                                                                   text={element.text}
                                                                                   username={element.username}
                                                                                   likes={element.likes}
                                                                                   dislikes={element.dislikes}/>) :
                    <p>Loading...</p>
            }
        </div>
    );
}