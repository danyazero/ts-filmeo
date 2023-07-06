'use client'
import React, {FC, useEffect, useState} from 'react';
import useSWR from "swr";
import {IMovieCard} from "@/entities/MovieCard/MovieCard.interface";
import {getMovieById} from "@/app/history/api/getMovieById";
import MovieCard from "@/entities/MovieCard/MovieCard";
import {sortAndMapMovies} from "@/features/RenderHistory/model/sortInArrayOrder";

export const RenderHistory: FC = () => {

    const [history, setHistory] = useState<string[]>([])
    useEffect(() => {
        console.log(localStorage.getItem("history"))
        if (localStorage.getItem("history")) setHistory(JSON.parse(localStorage.getItem("history") || ""))
    }, [])

    const {data, isLoading} = useSWR<IMovieCard[]>({key: 'history', movies: history}, getMovieById)

 return (
  <>
      {history.length > 0 ? (!isLoading && data ? sortAndMapMovies(data, history).reverse().map((element, index) =>
              <MovieCard cover={element.cover} key={"history_movie_" + index}
                         id={element.id}
                         name={element.name}
                         year={element.year}
                         poster={element.poster}
                         rating={element.rating}/>) :
          <p>Loading...</p>) : <p>Empty :(</p>}
  </>
 );
}
