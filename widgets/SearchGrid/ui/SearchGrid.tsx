'use client'
import React, {FC, useEffect} from 'react';
import {MovieCard} from "@/entities/MovieCard";
import {getSearchedMovies} from "./../api/getSearchedMovies";
import {Pagination} from "@/features/Pagination";
import useSWR from "swr";
import {ISearchGrid} from "@/widgets/SearchGrid/model/SearchGrid.interface";
import {GridCards} from "@/shared/GridCards/GridCards";
import {RowCards} from "@/shared/RowCards";
import {is} from "immutable";
import {element} from "prop-types";
import {ActorCard} from "@/entities/ActorCard";
import {Message} from "@/shared/Message/Message";

export const SearchGrid: FC<ISearchGrid> = (props) => {

    // const data: ISearchReq = await getSearchedMovies(props.params)
    const {data, isLoading} = useSWR(props.params, getSearchedMovies)
    console.log("grid rerendered")

    return (
        <>

            {!isLoading ? <RowCards header={"Actors"}>
                {data?.data.actors && data?.data.actors.length > 0 && !isLoading ? data.data.actors.map((element, index) => <ActorCard
                    key={"search_actor_" + index} id={element.id} photo={element.photo} name={element.name}
                    born={element.born}/>) : <Message text={"Nothing similar has been found!"} error={true}/>}
            </RowCards> : <div>Loading...</div>}

            {!isLoading ? <GridCards header={"Movies"}>
                {data?.data.movies && data.data.movies.length > 0 && !isLoading ? data.data.movies.map((element, index) => <MovieCard
                    saved={index % 2 == 0}
                    key={"Movie_Card_" + index}
                    cover={element.cover}
                    id={element.id} name={element.name}
                    year={element.year}
                    rating={element.rating}
                    poster={element.poster}/>) : <Message text={"Nothing similar has been found!"} error={true}/>}
            </GridCards> : <div>Loading...</div>}
            <Pagination params={props.pagination}/>
        </>
    );
}
