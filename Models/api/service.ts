import {direction, IFilm, MovieSchema, myDirection} from "@/Models/Models";
import {z} from "zod";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";

export async function getMovies(data: { url?: string, page: string }) {

    const response = await fetch(myDirection + `/movies?&_page=${data.page}`, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

export async function getAllMovies() {

    const responseSchema = z.object({
        data: z.array(MovieSchema),
        additional: AdditionalSchema
    })

    const response = await fetch(myDirection + `/movies`, {
        next: {
            revalidate: 120
        }
    })

    const data = await responseSchema.parseAsync(await response.json())

    return data.data
}

export async function getSearchedMovies(params: string) {

    const response = await fetch(myDirection + `/movies?${params}`)

    return response.json()
}