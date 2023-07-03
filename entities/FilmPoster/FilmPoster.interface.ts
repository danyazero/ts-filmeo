import {ReactNode} from "react";

export interface IFilmPoster {
    id: number,
    name: string,
    poster: string,
    cover: string,
    children?: ReactNode
}