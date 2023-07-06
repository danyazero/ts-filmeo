import {IMovieCard} from "@/entities/MovieCard/MovieCard.interface";

export function sortAndMapMovies(_data: IMovieCard[], order: string[]) {
    return _data.sort((a, b) => {
        const indexA = order.indexOf(String(a.id));
        const indexB = order.indexOf(String(b.id));
        return indexA - indexB;
    });
}