'use client'
import React, {FC, useState} from 'react';
import {MovieRating} from "@/entities/MovieRating";
import st from "./MovieRatingWidget.module.scss"
import {getMovieRating} from "@/widgets/MovieRatingWidget/api/getMovieRating";
import {useSession} from "next-auth/react";
import useSWR from "swr";
import {RateMovie} from "@/features/RateMovie";

enum ERateMovie{
    CLOSED,
    RATE,
    RATED
}

export const MovieRatingWidget: FC<{ movie: number, name: string }> = (props) => {
    const {data: session} = useSession()
    const {data, isLoading} = useSWR({movie: props.movie, user: session?.user?.name}, getMovieRating)
    const [show, setShow] = useState<ERateMovie>(ERateMovie.CLOSED)

    if (!isLoading && data?.data) {
        return (
            <>
                <MovieRating disabled={!session?.user?.name || show == ERateMovie.RATED} average={data.data.average} count={data.data.count} isRated={(data.data.isRated)} name={props.name} onClick={() => setShow(ERateMovie.RATE)}/>
                <div style={{display: show == ERateMovie.RATE ? 'block' : 'none'}}>
                    <RateMovie close={() => setShow(ERateMovie.RATED)} movie={props.movie}/>
                </div>
            </>
        )
    }

    return (
        <>
            <div className={st.loading}>Loading...</div>
        </>
    );
}