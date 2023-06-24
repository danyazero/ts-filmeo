import React, {FC} from 'react';
import {IRecommended} from "@/shared/Recomended/Recomended.interface";
import st from ".//Recomended.module.scss"
import Image from "next/image";
import {Rating} from "@/shared/Rating/Rating";
import Link from "next/link";

export const Recommended: FC<IRecommended> = (props) => {
    return (
        <div className={st.recommendedMovie}>
            <Link href={"/film/" + props.id}>
                <Image className={st.poster} src={props.poster} width={300} height={160} alt={props.name}/>
                <h2 className={st.movieName}>{props.name}</h2>
                <p className={st.movieCaption}>{props.caption}</p>
                <div className={st.timeInfo}>
                    <p>{props.year}</p>
                    <p>{props.runtime} min</p>
                    <Rating rating={props.rating}/>
                </div>
            </Link>
        </div>
    );
}
