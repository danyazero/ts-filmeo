import {z} from "zod";
import {WatchListSchema} from "@/app/[name]/model/User.interface";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {myDirection} from "@/Models/Models";

export async function getAllWatchListsReq(){
    const responseSchema = z.object({
        data: WatchListSchema.array(),
        additional: AdditionalSchema
    })
    const response = await fetch(myDirection + '/users/watchs', {next: {revalidate: 120}})

    const data =  await responseSchema.parseAsync(await response.json())

    return data.data
}