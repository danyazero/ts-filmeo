import React, {FC} from 'react';
import {AddComment} from "@/features/AddComment/AddComment";
import {Comment} from "@/entities/Comment/Comment";
import useSWR from "swr";
import {getAllComments, getComments} from "@/widgets/Comments/api/getComments";
import {IComment} from "@/entities/Comment/Comment.interface";
import st from ".//Comments.module.scss"

export const Comments: FC<{ movieId: string }> = async (props) => {

    const comments: IComment[] = await getComments(props.movieId)
    return (
        <div className={st.commentsContainer}>
            <h2>Comments {comments ? "(" + comments.length + ")" : ""}</h2>
            <AddComment movieId={props.movieId}/>
            {
                comments ? comments.map((element, index) => <Comment key={"film_comment_" + index}
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
