import {IComment} from "@/entities/Comment/Comment.interface";

export interface IFilm {
    id: number,
    name: string,
    year: number,
    rating: number,
    country: string,
    genre: string[],
    runtime: number,
    actors: IRole[]
    trailer: string,
    caption: string,
    cover: string,
    poster: string
}

export interface IRole {
    id: number,
    role: string
}

export const direction: string = 'http://192.168.0.229:3303'
export const myDirection: string = 'http://192.168.0.229:3000/api'