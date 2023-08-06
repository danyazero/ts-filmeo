import {direction, myDirectionApi} from "@/Models/Models";
import {z} from "zod";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {CommentSchema} from "@/entities/Comment/Comment.interface";

export async function getComments(movieId: string){
    const responseSchema = z.object({
        data: CommentSchema.array(),
        additional: AdditionalSchema
    })
    const response = await fetch(myDirectionApi + '/comments/'+ movieId, {
        next: {
            revalidate: 120
        }
    })

    const data = await responseSchema.parseAsync(await response.json())

    return data.data
}