import {IMovieCard} from "@/entities/MovieCard/MovieCard.interface";

export interface IMoviesCards {
    header: string,
    params: string,
    pagination: {page: string, genre: string}
}