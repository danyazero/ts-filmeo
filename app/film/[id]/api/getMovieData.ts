import {z} from "zod";
import {MovieSchema, myDirectionApi} from "@/Models/Models";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";

export async function getMovieData(index: string) {

    const responseSchema = z.object({
        data: MovieSchema,
        additional: AdditionalSchema
    })

    const response = await fetch(myDirectionApi + '/movies/' + index, {
        next: {
            revalidate: 120
        }
    })
    const data = await responseSchema.parseAsync(await response.json())

    return data.data
}