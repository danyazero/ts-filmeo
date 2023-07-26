import React, {FC} from 'react';
import {IMoviesCards} from "@/widgets/MoviesGrid/model/MoviesGrid.interface";
import {MovieCard} from "@/entities/MovieCard";
import {getSearchedMovies} from "@/Models/api/service";
import {IAdditional, IFilm} from "@/Models/Models";
import {GridCards} from "@/shared/GridCards/GridCards";

export const MoviesGrid: FC<IMoviesCards> = async (props) => {

    const data: {data: IFilm[], additional: IAdditional} = await getSearchedMovies(props.params)

    return (
        <>
            <GridCards header={props.header}>
                {data ? data.data.map((element, index) => <MovieCard saved={index % 2 == 0} key={"Movie_Card_" + index}
                                                                cover={element.cover}
                                                                id={element.id} name={element.name}
                                                                year={element.year}
                                                                rating={element.rating} poster={element.poster}/>) :
                    <div>Loading...</div>}
            </GridCards>
        </>
    );
}
