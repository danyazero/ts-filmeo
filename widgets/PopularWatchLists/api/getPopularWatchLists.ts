import {MovieSchema, myDirectionApi} from "@/Models/Models";
import {z} from "zod";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {WatchListSchema} from "@/app/[name]/model/User.interface";

export async function getPopularWatchLists(){
    const responseSchema = z.object({
        data: WatchListSchema.array().optional(),
        additional: AdditionalSchema
    })

    const response = await fetch(myDirectionApi + '/watch/popular', {next: {revalidate: 120}})

    return await responseSchema.parseAsync(await response.json())
}