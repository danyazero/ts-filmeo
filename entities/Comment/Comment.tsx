import React, {FC} from 'react';
import {IComment} from "@/entities/Comment/Comment.interface";
import st from "./Comment.module.scss"

export const Comment: FC<IComment> = (props) => {
    return (
        <>
            <div className={st.comment}>
                <p className={st.username}>{props.username}</p>
                <p className={st.text}>{props.text}</p>

                <div className={st.commentRate}>
                    <p className={st.likes}>like {props.likes}</p>
                    <p className={st.dislikes}>dislike {props.dislikes}</p>
                </div>

            </div>
        </>
    );
}
