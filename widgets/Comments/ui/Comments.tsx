import React, {FC} from 'react';
import {AddComment} from "@/features/AddComment";
import {Comment} from "@/entities/Comment";
import {getComments} from "@/widgets/Comments/api/getComments";
import {IComment} from "@/entities/Comment/Comment.interface";
import st from "./Comments.module.scss"

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
                                                                     name={element.name}
                                                                     likes={element.likes}
                                                                     dislikes={element.dislikes}/>) :
                    <p>Loading...</p>
            }
        </div>
    );
}
