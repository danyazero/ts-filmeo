import {IComment} from "@/entities/Comment/Comment.interface";

export interface IFilm{
    id: number,
    name: string,
    year: number,
    rating: number,
    country: string,
    genre: string[],
    runtime: number,
    trailer: string,
    caption: string,
    cover: string,
    poster: string
}

export const direction: string = 'http://192.168.0.229:3303'