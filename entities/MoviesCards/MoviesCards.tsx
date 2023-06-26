import React, {FC} from 'react';
import {IMoviesCards} from "@/entities/MoviesCards/MoviesCards.interface";
import MovieCard from "@/entities/MovieCard/MovieCard";
import st from ".//MoviesCards.module.scss"

export const MoviesCards: FC<IMoviesCards> = (props) => {

    const movies = props.movies.map((element, index) => <MovieCard saved={index % 2 == 0} key={"Movie_Card_" + index}
                                                                   id={element.id} name={element.name}
                                                                   year={element.year}
                                                                   rating={element.rating} poster={element.poster}/>)
    return (
        <>
            <h2 className={st.header}>{props.header}</h2>
            <div className={st.moviesCards}>
                {movies}
            </div>
        </>
    );
}
