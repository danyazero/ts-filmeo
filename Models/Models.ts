import {IComment} from "@/entities/Comment/Comment.interface";
import {z} from "zod";
import {IActorCard} from "@/entities/ActorCard/ActorCard.interface";
import {IMovieCard} from "@/entities/MovieCard/MovieCard.interface";

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
    poster: string,
    views: number
}

export const MovieActorSchema = z.object({
    id: z.number(),
    role: z.string()
})

export const MovieSchema = z.object({
    id: z.number(),
    name: z.string(),
    year: z.number().min(3),
    caption: z.string().min(10),
    country: z.string(),
    genre: z.array(z.string()),
    runtime: z.number(),
    actors: z.array(MovieActorSchema),
    trailer: z.string(),
    poster: z.string(),
    cover: z.string(),
    rating: z.number(),
    views: z.number()
})

export interface IRole {
    id: number,
    role: string
}

export interface IAdditional{
    text: string,
    code: number
}

export interface IResponse{
    data?: any,
    additional: IAdditional
}

export interface ISearchReq{
    data: {movies: IMovieCard[], actors: IActorCard[]},
    additional: IAdditional
}

const host = '192.168.0.70'
export const direction: string = `http://${host}:3303`
export const myDirectionApi: string = `http://${host}:3000/api`
export const myDirection: string = `http://${host}:3000`