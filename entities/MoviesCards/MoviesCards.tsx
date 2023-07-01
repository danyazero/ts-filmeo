'use client'
import React, {FC, useState} from 'react';
import {IMoviesCards} from "@/entities/MoviesCards/MoviesCards.interface";
import MovieCard from "@/entities/MovieCard/MovieCard";
import st from ".//MoviesCards.module.scss"
import useSWR from "swr";
import {getMovies, getSearchedMovies} from "@/Models/api/service";
import {IFilm} from "@/Models/Models";
import {Pagination} from "@/features/Pagination/Pagination";

export const MoviesCards: FC<IMoviesCards> = (props) => {

    const {data, isLoading} = useSWR<IFilm[]>({url: "movies", params: props.params}, getSearchedMovies)

    return (
        <>
            {props.params}
            <h2 className={st.header}>{props.header}</h2>
            <div className={st.moviesCards}>
                {(!isLoading && data) ? data.map((element, index) => <MovieCard saved={index % 2 == 0} key={"Movie_Card_" + index}
                                                                                id={element.id} name={element.name}
                                                                                year={element.year}
                                                                                rating={element.rating} poster={element.poster}/>) : <div>Loading...</div>}
            </div>
            {props.pagination && <Pagination params={props.pagination}/>}
        </>
    );
}
