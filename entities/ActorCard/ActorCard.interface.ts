import {z} from "zod";

export interface IActorCard {
    id: number,
    photo: string,
    name: string,
    born: string,
    role?: string
}

export const ActorSchema = z.object({
    id: z.number(),
    photo: z.string(),
    name: z.string(),
    born: z.string(),
})