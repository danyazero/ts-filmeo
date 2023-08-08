'use client'
import React, {FC, useState} from 'react';
import {MovieRating} from "@/entities/MovieRating";
import {getMovieRating} from "@/widgets/MovieRatingWidget/api/getMovieRating";
import {useSession} from "next-auth/react";
import useSWR from "swr";
import {RateMovie} from "@/features/RateMovie";

export const MovieRatingWidget: FC<{ movie: number, name: string }> = (props) => {
    const {data: session} = useSession()
    const {data, isLoading} = useSWR({movie: props.movie, user: session?.user?.name}, getMovieRating)
    const [show, setShow] = useState<boolean>(false)

    if (!isLoading && data?.data) {
        return (
            <>
                <MovieRating average={data.data.average} count={data.data.count} isRated={data.data.isRated} name={props.name} onClick={() => setShow(true)}/>
                <div style={{display: show ? 'block' : 'none'}}>
                    <RateMovie close={() => setShow(false)} movie={props.movie}/>
                </div>
            </>
        )
    }

    return (
        <>
        </>
    );
}