import {getSearchedMovies} from "@/widgets/SearchGrid/api/getSearchedMovies";

export interface ISearchGrid {
    header: string,
    params: string,
    pagination: {page: string, genre: string}
}