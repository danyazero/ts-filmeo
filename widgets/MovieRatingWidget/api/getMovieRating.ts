import {myDirectionApi} from "@/Models/Models";
import {z} from "zod";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {MovieRatingSchema} from "@/widgets/MovieRatingWidget/model/MovieRatingWidget.interface";

export async function getMovieRating(data: {movie: number, user: any}){
    const responseSchema = z.object({
        data: MovieRatingSchema.optional(),
        additional: AdditionalSchema
    })
    const response = await fetch(myDirectionApi + '/movies/' + data.movie + '/rating'+ (data.user ? '?user=' + data.user : ""), {next: {revalidate: 120}})
    return await responseSchema.parseAsync(await response.json())
}