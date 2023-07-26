import React, {FC} from 'react';
import {IMovieCard} from "@/entities/MovieCard/MovieCard.interface";
import st from "./MovieCard.module.scss"
import Image from "next/image";
import Link from "next/link";
import {Rating} from "@/shared/Rating/Rating";

export const MovieCard: FC<IMovieCard> = (props) => {

    return(
        <>
            <Link href={"/film/" + props.id} className={st.movieCard}>
                <Image className={st.moviePoster} src={props.cover} alt={props.name} width={180} height={100}/>
                <div className={st.caption}>
                    <h3 className={st.movieName}>{props.name}</h3>
                    <div className={st.information}>
                        <p className={st.movieYear}>{props.year}</p>
                        <Rating rating={props.rating}/>
                    </div>
                </div>
                {props.saved && <Image className={st.movieSaved} src={"/saved.svg"} alt={"saved"} width={15} height={15}/> }
            </Link>
        </>
    )
};