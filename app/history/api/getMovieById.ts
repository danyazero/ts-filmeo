import {element} from "prop-types";
import {direction, MovieSchema, myDirection} from "@/Models/Models";
import {z} from "zod";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";

export async function getMovieById(_data: {key: string, movies: string[]}){

    const responseSchema = z.object({
        data: z.array(MovieSchema),
        additional: AdditionalSchema
    })

    const params = _data.movies.map((element) => "id="+element)
    const response = await fetch(myDirection + '/movies?' + params.join("&"))

    const data = await responseSchema.parseAsync(await response.json())

    return data.data
}