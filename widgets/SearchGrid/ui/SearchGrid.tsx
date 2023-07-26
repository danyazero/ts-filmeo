'use client'
import React, {FC} from 'react';
import {MovieCard} from "@/entities/MovieCard";
import {getSearchedMovies} from "./../api/getSearchedMovies";
import {Pagination} from "@/features/Pagination";
import useSWR from "swr";
import {ISearchGrid} from "@/widgets/SearchGrid/model/SearchGrid.interface";
import {GridCards} from "@/shared/GridCards/GridCards";
import {IMovieCard} from "@/entities/MovieCard/MovieCard.interface";

export const SearchGrid: FC<ISearchGrid> = (props) => {

    let {data, isLoading} = useSWR<IMovieCard[]>({key: 'movies', params: props.params}, getSearchedMovies)

    console.log(data)
    return (
        <>
            <GridCards header={props.header}>
                {(!isLoading && data) ? data.map((element, index) => <MovieCard saved={index % 2 == 0}
                                                                                key={"Movie_Card_" + index}
                                                                                cover={element.cover}
                                                                                id={element.id} name={element.name}
                                                                                year={element.year}
                                                                                rating={element.rating}
                                                                                poster={element.poster}/>) :
                    <div>Loading...</div>}
            </GridCards>
            <Pagination params={props.pagination}/>
        </>
    );
}
