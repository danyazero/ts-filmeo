import {z} from "zod";
import {WatchListSchema} from "@/app/[name]/model/User.interface";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {myDirectionApi} from "@/Models/Models";

export async function getWatchList(name: string, key: string){
    const responseSchema = z.object({
        data: WatchListSchema.optional(),
        additional: AdditionalSchema
    })
    const response = await fetch(myDirectionApi + '/watch/' + name + '/' + key, {next: {revalidate: 120}})

    return await responseSchema.parseAsync(await response.json())
}