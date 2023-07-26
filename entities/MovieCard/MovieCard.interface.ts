import {z} from "zod";

export interface IMovieCard {
    id: number,
    name: string,
    year: number,
    poster: string,
    cover: string,
    rating: number,
    saved?: boolean
}

export const MovieCardSchema = z.object({
    id: z.number(),
    name: z.string(),
    year: z.number().min(3),
    poster: z.string(),
    cover: z.string(),
    rating: z.number(),
    saved: z.boolean().optional()
})

export const AdditionalSchema = z.object({
    text: z.string(),
    code: z.number()
})



// id: number,
//     photo: string,
//     name: string,
//     surname: string,
//     born: string,
//     role: string