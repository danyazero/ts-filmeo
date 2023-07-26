import {z} from "zod";

export interface IComment{
    id: number,
    text: string,
    name: string,
    likes: number,
    dislikes: number
}

export const CommentSchema = z.object({
    id: z.number(),
    text: z.string(),
    name: z.string(),
    likes: z.number(),
    dislikes: z.number()
})