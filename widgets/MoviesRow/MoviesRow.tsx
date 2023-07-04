import React, {FC} from 'react';
import MovieCard from "@/entities/MovieCard/MovieCard";
import st from "./MoviesRow.module.scss"
import {getSearchedMovies} from "@/Models/api/service";
import {IFilm} from "@/Models/Models";
import {IMovieRow} from "@/widgets/MoviesRow/MoviesRow.interface";
import {MoreButton} from "@/shared/moreButton/moreButton";

export const MoviesRow: FC<IMovieRow> = async (props) => {

    const data: IFilm[] = await getSearchedMovies(props.params)

    return (
        <>
            <div className={st.headerContainer}>
                <h2 className={st.header}>{props.header}</h2>
                <MoreButton category={props.category}/>
            </div>
            <div className={st.moviesCards}>
                {(data) ? data.map((element, index) => <MovieCard saved={index % 2 == 0}
                                                                                key={"Movie_Card_" + index}
                                                                                cover={element.cover}
                                                                                id={element.id} name={element.name}
                                                                                year={element.year}
                                                                                rating={element.rating}
                                                                                poster={element.poster}/>) :
                    <div>Loading...</div>}
            </div>
        </>
    );
}
