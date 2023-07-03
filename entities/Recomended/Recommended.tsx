import React, {FC} from 'react';
import {IRecommended} from "@/entities/Recomended/Recomended.interface";
import st from "./Recomended.module.scss"
import Image from "next/image";
import {Rating} from "@/shared/Rating/Rating";

export const Recommended: FC<IRecommended> = (props) => {
    return (
        <>

            <div className={st.info}>
                <h2 className={st.movieName}>{props.name}</h2>
                <p className={st.movieCaption}>{props.caption}</p>
                <div className={st.timeInfo}>
                    <p>{props.year}</p>
                    <p>{props.runtime} min</p>
                    <Rating rating={props.rating}/>
                </div>
            </div>
        </>
    );
}
