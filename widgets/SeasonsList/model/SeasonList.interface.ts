import {z} from "zod";

export const EpisodeSchema = z.object({
    id: z.number(),
    movie: z.number(),
    season: z.number(),
    name: z.string(),
    rating: z.number(),
    date: z.string().min(4)
})

export interface IEpisode{
    id: number,
    movie: number,
    season: number,
    name: string,
    rating: number,
    date: string
}