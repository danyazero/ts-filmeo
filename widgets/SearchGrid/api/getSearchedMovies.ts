import {myDirection} from "@/Models/Models";
import {AdditionalSchema, MovieCardSchema} from "@/entities/MovieCard/MovieCard.interface";
import {z} from "zod";

export const getSearchedMovies = async (_data: {key: string, params: string}) => {

    const searchResponseSchema = z.object({
        data: z.array(MovieCardSchema),
        additional: AdditionalSchema
    })

    const response = await fetch(myDirection + `/movies?${_data.params}&_limit=9`)

    const data = await searchResponseSchema.parseAsync(await response.json())

    return data.data
}