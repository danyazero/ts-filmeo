"use client"
import React, {FC} from 'react';
import useSWR from "swr/immutable";
import {IMovieCard} from "@/entities/MovieCard/MovieCard.interface";
import {MoviesCards} from "@/entities/MoviesCards/MoviesCards";
import {getMovies} from "@/Models/api/service";
import {IFilm} from "@/Models/Models";

export const DynamicMovies: FC<{page: string}> = (props) => {



 const {data, isLoading} = useSWR({url: "movies", page: props.page}, getMovies)
 return (
  <>
   {!isLoading && data ? <MoviesCards header={"Founded for you"} movies={data}/> : <p>Loading...</p>}
  </>
 );
}
