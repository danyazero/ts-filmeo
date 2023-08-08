import {z} from "zod";

export const MovieRatingSchema = z.object({
    average: z.number(),
    count: z.number(),
    isRated: z.boolean()
})