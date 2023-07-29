import {myDirection} from "@/Models/Models";
import {AdditionalSchema, MovieCardSchema} from "@/entities/MovieCard/MovieCard.interface";
import {z} from "zod";
import {ActorSchema} from "@/entities/ActorCard/ActorCard.interface";

export const getSearchedMovies = async (params: string) => {

    const searchResponseSchema = z.object({
        data: z.object({movies: z.array(MovieCardSchema), actors: z.array(ActorSchema)}),
        additional: AdditionalSchema
    })

    const response = await fetch(myDirection + `/movies?${params}`)

    const data = await searchResponseSchema.parseAsync(await response.json())
    return data
}