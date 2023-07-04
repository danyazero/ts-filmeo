import React, {FC} from 'react';
import {IMoviesCards} from "@/widgets/MoviesGrid/MoviesGrid.interface";
import MovieCard from "@/entities/MovieCard/MovieCard";
import st from "./MoviesGrid.module.scss"
import {getSearchedMovies} from "@/Models/api/service";
import {IFilm} from "@/Models/Models";
import {Pagination} from "@/features/Pagination/Pagination";

export const MoviesGrid: FC<IMoviesCards> = async (props) => {

    const data: IFilm[] = await getSearchedMovies(props.params)

    return (
        <>
            <h2 className={st.header}>{props.header}</h2>
            <div className={st.moviesCards}>
                {(data) ? data.map((element, index) => <MovieCard saved={index % 2 == 0} key={"Movie_Card_" + index}
                                                                                cover={element.cover}
                                                                                id={element.id} name={element.name}
                                                                                year={element.year}
                                                                                rating={element.rating} poster={element.poster}/>) : <div>Loading...</div>}
            </div>
            {props.pagination && <Pagination params={props.pagination}/>}
        </>
    );
}
