import {MovieSchema, myDirectionApi} from "@/Models/Models";
import {z} from "zod";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";

export async function getPopularMovie(){
    const responseSchema = z.object({
        data: MovieSchema,
        additional: AdditionalSchema
    })
    const response = await fetch(myDirectionApi + '/movies/top', {next: {revalidate: 120}})

    const data = await responseSchema.parseAsync(await response.json())

    return data.data
}