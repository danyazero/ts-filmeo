import {z} from "zod";
import {UserSchema, WatchListSchema} from "@/app/[name]/model/User.interface";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {myDirectionApi} from "@/Models/Models";

export async function getSaveWatchLists(name: string){
    const responseSchema = z.object({
        data: z.array(WatchListSchema).optional(),
        additional: AdditionalSchema
    })
    const response = await fetch(myDirectionApi + '/watch/' + name, {next: {revalidate: 120}})

    return await responseSchema.parseAsync(await response.json())
}