import {z} from "zod";

export interface IActorCard {
    id: number,
    photo: string,
    name: string,
    surname: string,
    born: string,
    role?: string
}

export const ActorSchema = z.object({
    id: z.number(),
    photo: z.string(),
    name: z.string(),
    surname: z.string(),
    born: z.string(),
})