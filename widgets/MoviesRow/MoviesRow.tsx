import React, {FC} from 'react';
import MovieCard from "@/entities/MovieCard/MovieCard";
import {getSearchedMovies} from "@/Models/api/service";
import {IFilm} from "@/Models/Models";
import {IMovieRow} from "@/widgets/MoviesRow/MoviesRow.interface";
import {RowCards} from "@/shared/RowCards/RowCards";

export const MoviesRow: FC<IMovieRow> = async (props) => {

    const data: IFilm[] = await getSearchedMovies(props.params)

    return (
        <>
            <RowCards link={'search/1/'+props.category} header={props.header}>
                {(data) ? data.map((element, index) => <MovieCard saved={index % 2 == 0}
                                                                                key={"Movie_Card_" + index}
                                                                                cover={element.cover}
                                                                                id={element.id} name={element.name}
                                                                                year={element.year}
                                                                                rating={element.rating}
                                                                                poster={element.poster}/>) :
                    <div>Loading...</div>}
            </RowCards>
        </>
    );
}
