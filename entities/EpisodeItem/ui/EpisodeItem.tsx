import React, {FC} from 'react';
import {Rating} from "@/shared/Rating/Rating";
import st from "./Episode.module.scss"

export const EpisodeItem: FC<{ name: string, date: string, rating: number }> = (props) => {
    return (
        <div className={st.container}>
            <p>{props.name}</p>
            <div className={st.right}>
                <p className={st.date}> {props.date}</p>
                <Rating rating={props.rating}/>
            </div>
        </div>
    );
}