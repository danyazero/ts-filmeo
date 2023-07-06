'use client'
import React, {FC} from 'react';
import MovieCard from "@/entities/MovieCard/MovieCard";
import st from "./SearchGrid.module.scss"
import {getSearchedMovies} from "./../api/getSearchedMovies";
import {IFilm} from "@/Models/Models";
import {Pagination} from "@/features/Pagination/Pagination";
import useSWR from "swr";
import {ISearchGrid} from "@/widgets/SearchGrid/ui/SearchGrid.interface";

export const SearchGrid: FC<ISearchGrid> = (props) => {

    let {data, isLoading} = useSWR<IFilm[]>({key: 'movies', params: props.params}, getSearchedMovies)

    return (
        <>
            <h2 className={st.header}>{props.header}</h2>
            <div className={st.moviesCards}>
                {(!isLoading && data) ? data.map((element, index) => <MovieCard saved={index % 2 == 0}
                                                                                key={"Movie_Card_" + index}
                                                                                cover={element.cover}
                                                                                id={element.id} name={element.name}
                                                                                year={element.year}
                                                                                rating={element.rating}
                                                                                poster={element.poster}/>) :
                    <div>Loading...</div>}
            </div>
            <Pagination params={props.pagination}/>
        </>
    );
}
