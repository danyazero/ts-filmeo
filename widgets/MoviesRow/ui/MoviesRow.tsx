import React, {FC} from 'react';
import {MovieCard} from "@/entities/MovieCard";
import {getSearchedMovies} from "@/Models/api/service";
import {ISearchReq} from "@/Models/Models";
import {IMovieRow} from "@/widgets/MoviesRow/model/MoviesRow.interface";
import {RowCards} from "@/shared/RowCards";

export const MoviesRow: FC<IMovieRow> = async (props) => {

    const data: ISearchReq = await getSearchedMovies(props.params)

    return (
        <>
            <RowCards link={'search/1/'+props.category} header={props.header}>
                {(data) ? data.data.movies.map((element, index) => <MovieCard saved={index % 2 == 0}
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
