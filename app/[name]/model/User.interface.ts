import {z} from "zod";

export interface IWatchList{
    id: number,
    user: number,
    name: string,
    movies: string,
    views: number
}

export const WatchListSchema = z.object({
    key: z.string().max(9),
    user: z.string(),
    name: z.string(),
    movies: z.array(z.number()),
    views: z.number()
})

export interface IUser{
    id: number,
    name: string,
    email: string,
    image: string
}

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    image: z.string()
})