import React, {FC} from 'react';
import {IMovieCard} from "@/shared/MovieCard/MovieCard.interface";
import st from ".//MovieCard.module.scss"
import Image from "next/image";
import Link from "next/link";

const MovieCard: FC<IMovieCard> = (props) => {

    return(
        <>
            <Link href={"/" + props.id} className={st.movieCard}>
                <Image className={st.moviePoster} src={props.poster} alt={props.name} width={150} height={80}/>
                <div className={st.caption}>
                    <p className={st.movieName}>{props.name}</p>
                    <div className={st.information}>
                        <p className={st.movieYear}>{props.year}</p>
                        <div className={st.rating}>
                            <Image src={"/star.svg"} alt={"rating"} width={13} height={13}/>
                            <p className={st.ratingScore}>{props.rating}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
};

export default MovieCard;